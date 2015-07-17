/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.pl;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;

/**
 * S11008
 * @author yanggh
 */
@Service
public class CutRolePl extends BaseService {

    private final String[] KEY = new String[]{};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putStringValue("sql", "get_role_pl");
        Object[] args = new Object[]{in.getStringValue("role_name"), in.getStringValue("role_id")};
        in.putObjectValue("args", args);
        runService("S10001", in, inHead, out, outHead);
    }
}
