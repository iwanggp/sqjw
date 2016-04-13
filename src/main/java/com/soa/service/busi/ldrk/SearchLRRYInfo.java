/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.ldrk;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import java.awt.PageAttributes;
import org.springframework.stereotype.Service;

/**
 * S88007 查询人员的居住和工作社保信息
 *
 * @author wgp
 */
@Service
public class SearchLRRYInfo extends BaseService {

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        AbstractCommonData acd = queryData("get_lrry_jzxx_wang", new Object[]{in.getStringValue("lrryid")});
        if (acd != null) {
            out.putDataValue("jzdata", acd);
        } else {
            out.putDataValue("jzdata", queryData("get_lrry_jzxx_wang_0", new Object[]{in.getStringValue("lrryid")}));
        }
        AbstractCommonData acd2 = queryData("get_lrry_gzxx_wang", new Object[]{in.getStringValue("lrryid")});
        if (acd2 != null) {
            out.putDataValue("gzdata", acd2);
        } else {
            out.putDataValue("gzdata", queryData("get_lrry_gzxx_wang_0", new Object[]{in.getStringValue("lrryid")}));
        }
        AbstractCommonData acd3 = queryData("get_lrry_jhxyxx_wang", new Object[]{in.getStringValue("lrryid")});
        if (acd3 != null) {
            out.putDataValue("jhxxdata", acd3);
        } else {
            out.putDataValue("jhxxdata", queryData("get_lrry_jhxyxx_wang_0", new Object[]{in.getStringValue("lrryid")}));
        }
        AbstractCommonData acd4 = queryData("get_lrry_sbxx_wang", new Object[]{in.getStringValue("lrryid")});
        if (acd4 != null) {
            out.putDataValue("sbdata", acd4);
        } else {
            out.putDataValue("sbdata", queryData("get_lrry_sbxx_wang_0", new Object[]{in.getStringValue("lrryid")}));
        }
    }
}
