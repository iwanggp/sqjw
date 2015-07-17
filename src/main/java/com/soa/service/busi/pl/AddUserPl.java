/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.pl;

import com.lianzt.commondata.AbstractCommonData;
import com.lianzt.factory.AESFactory;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import static com.soa.service.BaseService.getSession;
import com.soa.util.SystemUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P11000
 *
 * @author yanggh
 */
@Service
public class AddUserPl extends BaseService {

    private final String[] KEY = {"username", "用户名",
                                  "password", "密码",
                                  "repassword", "确认密码",
                                  "xm", "姓名",
                                  "sfzmhm", "身份证号",
                                  "xb", "性别",
                                  "tstj", "是否推送业务报表",
                                  "role_id", "角色"};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        //检校密码并加密
        handlePwd(in);
        AbstractCommonData ses = getSession(in);
        in.put("cjr", ses.get(SystemUtil.loginRemark));
        in.put("cjrxm", ses.get("xm"));
        update("add_user_pl", in);
    }

    private void handlePwd(AbstractCommonData in) {
        if (!in.getStringValue("password").equals(in.getStringValue("repassword"))) {
            throw new GlobalException(100041, "密码和确认密码");//!#!不相符！
        }
        String pwd;
        try {
            pwd = AESFactory.encryptString(in.getStringValue("password"));
        } catch (Exception e) {
            throw new GlobalException(100002, e);       //加密算法异常
        }
        in.putStringValue("password", pwd);
    }
}
