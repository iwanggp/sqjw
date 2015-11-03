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
 * P11002
 *
 * @author yanggh
 */
@Service
public class ModUserPl extends BaseService {

    private final String[] KEY = {"username", "用户名",
                                  "xm", "姓名",
                                  "sfzmhm", "身份证号",
                                  "xb", "性别",
                                  "role_id", "角色"};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        update("modify_user_pl", in);
    }
}
