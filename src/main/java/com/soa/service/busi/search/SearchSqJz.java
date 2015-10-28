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
 * S58002 按条件查询建筑信息
 *
 * @author wgp
 */
@Service
public class SearchSqJz extends BaseService {

    private final Logger log = LoggerFactory.getLogger(SearchSqJz.class);

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putStringValue("sql", "search_jw_sq_jz");
        in.putObjectValue("args", new Object[]{in.getStringValue("mlphm"), in.getStringValue("jzmc"), in.getStringValue("jlxmc"), in.getStringValue("ks"), in.getStringValue("js"),in.getStringValue("sqid")});
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
    }
}
