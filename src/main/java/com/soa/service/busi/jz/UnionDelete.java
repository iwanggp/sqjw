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
 * P00000 联合的删除多张表
 *
 * @author zkf
 */
@Service
public class UnionDelete extends BaseService {

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String hy = in.getStringValue("hylb");
        Object[] obj = new Object[]{in.getStringValue("id")};
        if ("za_sp".equals(hy)) {
            update("za_delete_sp_id", obj);
        } else if ("za_yl".equals(hy)) {
            update("za_delete_yl_id", obj);
        } else if ("za_wl".equals(hy)) {
            update("za_delete_wl_id", obj);
        } else if ("za_wb".equals(hy)) {
            update("za_delete_wb_id", obj);
        } else if ("za_lg".equals(hy)) {
            update("za_delete_lg_id", obj);
        } else if ("xb_xf".equals(hy)) {
            update("za_delete_xf_id", obj);
        } else if ("za_zjh".equals(hy)) {
            update("za_delete_zjh_id", obj);
        } else {
            update("za_delete_cs_id", obj);
        }

    }
}
