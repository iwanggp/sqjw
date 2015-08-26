/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;

/**
 * S40002 查询单个场所信息
 *
 * @author zkf
 */
@Service
public class SearchCsDetail extends BaseService {

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String hy = in.getStringValue("hylb");
        Object[] obj = new Object[]{in.getStringValue("id")};
        if ("za_sp".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_sp_id", obj));
        } else if ("za_yl".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_yl_id", obj));
        } else if ("za_wl".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_wl_id", obj));
        } else if ("za_wb".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_wb_id", obj));
        } else if ("za_lg".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_lg_id", obj));
        } else if ("xb_xf".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_xf_id", obj));
        } else if ("za_zjh".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_zjh_id", obj));
        } else {
            out.putDataValue("csdata", queryData("za_select_cs_id", obj));
        }

    }
}
