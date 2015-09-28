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
 * S99999 查询个人信息信息
 *
 * @author wgp
 */
@Service
public class SearchPeople extends BaseService {

    private final Logger log = LoggerFactory.getLogger(SearchPeople.class);

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
//        in.putStringValue("sql", "search_select_people");
        out.putDataValue("csdata", queryData("search_select_people"));
//        in.putObjectValue("args", new Object[]{in.getStringValue("zgbm"), in.getStringValue("xm"), in.getStringValue("rylb"), in.getStringValue("sfid"), in.getStringValue("xb"), in.getStringValue("csks"), in.getStringValue("csjs"), in.getStringValue("ks"), in.getStringValue("js")});
//        in.putIntValue("page_size", in.getIntValue("page_size"));
//        runService("S10001", in, inHead, out, outHead);
    }
}
