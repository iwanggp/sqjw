/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.search;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * S50001 查询旅馆的所有信息
 *
 * @author wgp
 */
@Service
public class SearchZaLg extends BaseService {

    private final Logger log = LoggerFactory.getLogger(SearchZaLg.class);

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putStringValue("sql", "search_za_lg");
        log.debug(in.getStringValue("mc") + in.getStringValue("dz") + in.getStringValue("zgbm") + in.getStringValue("hyl") + in.getStringValue("lgxj") + "wwwwwwwwww");
        in.putObjectValue("args", new Object[]{in.getStringValue("zgbm"), in.getStringValue("mc"), in.getStringValue("hyl"), in.getStringValue("dz"), in.getStringValue("lgxj")});
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
    }
}
