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
 * @author wgp
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
        } else if ("za_jcss".equals(hy)) {
            out.putDataValue("csdata", queryData("add_get_jcss_id", obj));
        } else if ("dw_jyz".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_dw_id", obj));
        }else if ("za_yg".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_za_yg", obj));
        } else if ("za_ssrk".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_za_ssrk_id", obj));
        } else if ("xb_xf".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_xf_id", obj));
        } else if ("za_zjh".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_zjh_id", obj));
        } else if ("za_fzll".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_fzll_id", obj));
        } else if ("za_dw".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_dw_id", obj));
        } else if ("za_ggcs".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_dw_id", obj));
        } else if ("za_jrhy".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_dw_id", obj));
        } else if ("sc_sc".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_dw_id", obj));
        } else if ("qtdw".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_dw_id", obj));
        } else if ("ydtx".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_dw_id", obj));
        } else if ("dw_shfl".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_dw_id", obj));
        } else if ("za_school".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_dw_id", obj));
        } else if ("za_yy".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_dw_id", obj));
        } else if ("za_dz".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_dz_id", obj));
        } else if ("za_ttdp".equals(hy)) {
            out.putDataValue("csdata", queryData("za_select_ttdp_id", obj));
        } else {
            out.putDataValue("csdata", queryData("za_select_cs_id", obj));
        }

    }
}
