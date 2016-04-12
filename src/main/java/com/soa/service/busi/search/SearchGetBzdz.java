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
 * S57002 查询和获得标准地址的信息
 *
 * @author wgp
 */
@Service
public class SearchGetBzdz extends BaseService {

    private final Logger log = LoggerFactory.getLogger(SearchGetBzdz.class);

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putStringValue("sql", "search_get_bzdz");
        in.putObjectValue("args", new Object[]{in.getStringValue("ssjwqdm"), in.getStringValue("mlphm"), in.getStringValue("dzjc"), in.getStringValue("jlxmc")});//修改为只查询航空港区的地址
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
    }
}
