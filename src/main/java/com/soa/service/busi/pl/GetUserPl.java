/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.pl;

import com.lianzt.commondata.AbstractCommonData;
import com.lianzt.util.StringUtil;
import com.soa.service.BaseService;
import com.soa.util.SystemUtil;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 * S11003
 * @author yanggh
 */
@Service
public class GetUserPl extends BaseService {

    private final String[] KEY = new String[]{};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        List<AbstractCommonData> users = null;
        users = queryList("get_user_pl", in);
        out.putArrayValue("users", users);
    }
}
