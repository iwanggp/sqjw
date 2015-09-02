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
 * S50002 查询旅馆的员工信息
 *
 * @author wgp
 */
@Service
public class SearchLgYg extends BaseService {

    private final Logger log = LoggerFactory.getLogger(SearchLgYg.class);

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putStringValue("sql", "search_select_lg_yg");
        in.putObjectValue("args", new Object[]{in.getStringValue("yg_fz_id"), in.getStringValue("sfid"), in.getStringValue("xm"), in.getStringValue("jtdz"), in.getStringValue("xb")});
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
    }
}
