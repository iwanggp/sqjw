/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.pl;

import com.lianzt.commondata.AbstractCommonData;
import com.lianzt.factory.AESFactory;
import com.lianzt.util.StringUtil;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 用户登录
 * P11001
 * @author lianzt
 */
@Service
public class UserLoginPl extends BaseService {

    private final String[] KEY = new String[]{"username", "用户名", "password", "密码"};
    private final Logger log = LoggerFactory.getLogger(UserLoginPl.class);

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String username = in.getStringValue("username");
        String password = in.getStringValue("password");
        AbstractCommonData user = queryData("get_user_username_pl", username);

        if (user == null || user.isEmpty()) {
            throw new GlobalException(300000);      //用户名或密码错误
        }

        try {
            password = AESFactory.encryptString(password);
            log.debug("password:{}", password);
        } catch (Exception e) {
            throw new GlobalException(100002, e);       //加密算法异常
        }

        if (!password.equals(user.getStringValue("password"))) {
            throw new GlobalException(300000);      //用户名或密码错误
        }

        update("user_last_login_pl", inHead.getStringValue("_ip"), username);       //最后登录IP地址
        getSession(in).putAll(user);
        user.remove("password");
        out.putDataValue("user", user);
    }
}
