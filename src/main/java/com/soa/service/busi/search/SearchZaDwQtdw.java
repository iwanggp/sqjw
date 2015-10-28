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
 * S52011 查询其他单位的所有信息
 *
 * @author wgp
 */
@Service
public class SearchZaDwQtdw extends BaseService {

    private final Logger log = LoggerFactory.getLogger(SearchZaDwQtdw.class);

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putStringValue("sql", "search_za_dw_qtdw");
        in.putObjectValue("args", new Object[]{in.getStringValue("zgbm"), in.getStringValue("mc"), in.getStringValue("dz"), in.getStringValue("ks"), in.getStringValue("js")});
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
    }
}