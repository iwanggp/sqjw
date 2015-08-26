/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.jz;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;

/**
 * P30010 查询安检合格证到期
 *
 * @author wgp
 */
@Service
public class GetAjdqZa extends BaseService {

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String dqrq = in.getStringValue("dqsj");
        in.putStringValue("sql", "za_select_ajdq");
        Object[] obj = null;
        if (dqrq.equals("0")) {
            in.putStringValue("sql", "za_select_ajdq");
        } else if (dqrq.equals("1")) {
            obj = new Object[]{10, 10, 10, 10, 10, 10};
            in.putStringValue("sql", "za_select_ajdq_day");
            in.putObjectValue("args", obj);
        } else {
            obj = new Object[]{30, 30, 30, 30, 30, 30};
            in.putStringValue("sql", "za_select_ajdq_day");
            in.putObjectValue("args", obj);
        }

        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
    }
}
