/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.pl;

import com.lianzt.commondata.AbstractCommonData;
import com.lianzt.factory.AESFactory;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 修改密码
 * P11013
 * @author lianzt
 */
@Service
public class UpdatePswPl extends BaseService {

    private final String[] KEY = new String[]{"old_password", "原密码",
                                              "new_password", "新密码"};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String username = getLoginUser(in);
        String oldPassword = in.getStringValue("old_password");
        String newPassword = in.getStringValue("new_password");
        AbstractCommonData user = queryData("get_user_username_pl", username);

        if (user == null || user.isEmpty()) {
            throw new GlobalException(302001);      //用户不存在！
        }

        try {
            oldPassword = AESFactory.encryptString(oldPassword);
            newPassword = AESFactory.encryptString(newPassword);
        } catch (Exception e) {
            throw new GlobalException(100002, e);       //加密算法异常
        }

        if (!oldPassword.equals(user.getStringValue("password"))) {
            throw new GlobalException(302002);      //原密码错误
        }
        update("update_psw_pl", newPassword, username);
    }
}
