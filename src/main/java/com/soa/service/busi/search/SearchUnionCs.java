/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.search;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * S51000 查询当前场所所有信息
 *
 * @author wgp
 */
@Service
public class SearchUnionCs extends BaseService {

    private final Logger log = LoggerFactory.getLogger(SearchUnionCs.class);

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String hylb = in.getStringValue("hylb");
        if ("za_yl".equals(hylb)) {
            in.putStringValue("sql", "search_select_yl");
            cutPage(in, inHead, out, outHead);
        } else if ("za_sp".equals(hylb)) {
            in.putStringValue("sql", "search_select_sp_asid");
            cutPage(in, inHead, out, outHead);
        } else if ("za_wl".equals(hylb)) {
            in.putStringValue("sql", "search_select_wl");
            cutPage(in, inHead, out, outHead);
        } else if ("za_wb".equals(hylb)) {
            in.putStringValue("sql", "search_select_wb");
            cutPage(in, inHead, out, outHead);
        } else if ("za_lg".equals(hylb)) {
            in.putStringValue("sql", "search_za_lg_all");
            cutPage(in, inHead, out, outHead);
        } else if ("za_zjh".equals(hylb)) {
            in.putStringValue("sql", "search_select_zjh");
            cutPage(in, inHead, out, outHead);
        } else if ("xb_xf".equals(hylb)) {
            in.putStringValue("sql", "search_select_xf");
            cutPage(in, inHead, out, outHead);
        } else {
            in.putStringValue("sql", "search_select_cs");
            in.putObjectValue("args", new Object[]{in.getStringValue("zgbm"), in.getStringValue("mc"), in.getStringValue("hylb"), in.getStringValue("dz")});
//            in.putIntValue("page", in.getIntValue("page"));
            in.putIntValue("page_size", in.getIntValue("page_size"));
            runService("S10001", in, inHead, out, outHead);//调用分页服务
        }
    }

    private void cutPage(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putObjectValue("args", new Object[]{in.getStringValue("zgbm"), in.getStringValue("mc"), in.getStringValue("hylb"), in.getStringValue("dz")});
//        in.putIntValue("page", in.getIntValue("page"));
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);//调用分页服务
    }

}
