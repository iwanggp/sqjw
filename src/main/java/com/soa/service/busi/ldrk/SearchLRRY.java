/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.ldrk;

import com.soa.service.busi.search.*;
import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * S88004 查询全部的流动人口信息
 *
 * @author wgp
 */
@Service
public class SearchLRRY extends BaseService {

    private final Logger log = LoggerFactory.getLogger(SearchLRRY.class);

    @Override
    public String[] keys() {
        return null;
    }
    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putStringValue("sql", "search_select_lrry");
        in.putObjectValue("args", new Object[]{in.getStringValue("tbdw_dm"), in.getStringValue("xm"), in.getStringValue("ryxz_s"), in.getStringValue("sfzh"), in.getStringValue("xb_s"), in.getStringValue("csks"), in.getStringValue("csjs"), in.getStringValue("ks"), in.getStringValue("js"),in.getStringValue("tbr")});
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
    }
}
