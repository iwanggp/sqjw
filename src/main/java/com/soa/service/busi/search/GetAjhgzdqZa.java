/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.search;

import com.soa.service.busi.jz.*;
import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;

/**
 * S54000 查询安检合格证到期
 *
 * @author wgp
 */
@Service
public class GetAjhgzdqZa extends BaseService {

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String dqrq = in.getStringValue("dqrq");
        in.putStringValue("sql", "search_select_ajdq");
        if (dqrq.equals("0")) {
            in.putStringValue("sql", "search_select_ajdq");
            in.putObjectValue("args", new Object[]{in.getStringValue("zgbm"), in.getStringValue("dz"), in.getStringValue("zgbm"), in.getStringValue("dz"), in.getStringValue("zgbm"), in.getStringValue("dz"), in.getStringValue("zgbm"), in.getStringValue("dz"), in.getStringValue("zgbm"), in.getStringValue("dz"), in.getStringValue("zgbm"), in.getStringValue("dz"), in.getStringValue("zgbm"), in.getStringValue("dz")});
        } else if (dqrq.equals("1")) {
            in.putStringValue("sql", "search_select_ajdq_day");
            in.putObjectValue("args", new Object[]{10, in.getStringValue("zgbm"), in.getStringValue("dz"), 10, in.getStringValue("zgbm"), in.getStringValue("dz"), 10, in.getStringValue("zgbm"), in.getStringValue("dz"), 10, in.getStringValue("zgbm"), in.getStringValue("dz"), 10, in.getStringValue("zgbm"), in.getStringValue("dz"), 10, in.getStringValue("zgbm"), in.getStringValue("dz"), 10, in.getStringValue("zgbm"), in.getStringValue("dz")});
        } else {
            in.putStringValue("sql", "search_select_ajdq_day");
            in.putObjectValue("args", new Object[]{30, in.getStringValue("zgbm"), in.getStringValue("dz"), 30, in.getStringValue("zgbm"), in.getStringValue("dz"), 30, in.getStringValue("zgbm"), in.getStringValue("dz"), 30, in.getStringValue("zgbm"), in.getStringValue("dz"), 30, in.getStringValue("zgbm"), in.getStringValue("dz"), 30, in.getStringValue("zgbm"), in.getStringValue("dz"), 30, in.getStringValue("zgbm"), in.getStringValue("dz")});
        }
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
    }
}
