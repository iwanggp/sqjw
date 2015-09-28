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
 * S52006 查询金融行业的所有信息
 *
 * @author wgp
 */
@Service
public class SearchZaDwJrhy extends BaseService {
    private final Logger log = LoggerFactory.getLogger(SearchZaDwJrhy.class);

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String lb = in.getStringValue("lb");
        if (lb.equals("jr_all")) {
            in.putStringValue("sql", "search_za_dw_jr");
            in.putObjectValue("args", new Object[]{in.getStringValue("zgbm"), in.getStringValue("mc"), in.getStringValue("dz"), in.getStringValue("ks"), in.getStringValue("js")});
        } else {
            in.putStringValue("sql", "search_za_dw_jr_hy");
            in.putObjectValue("args", new Object[]{in.getStringValue("zgbm"), in.getStringValue("mc"), in.getStringValue("lb"), in.getStringValue("dz"), in.getStringValue("ks"), in.getStringValue("js")});
        }
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
    }
}
