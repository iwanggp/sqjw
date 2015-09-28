/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.lianzt.commondata.DataConvertFactory;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import java.io.IOException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * S44201 查询医院监督的详细情况
 *
 * @author wgp
 */
@Service
public class SearchYyJdDetail extends BaseService {

    private final Logger log = LoggerFactory.getLogger(SearchYyJdDetail.class);

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        AbstractCommonData acd = queryData("get_za_yyjd", in.getStringValue("id"));//查询数据
        if (acd != null && !acd.isEmpty()) {
            out.putDataValue("csdata", acd);
        }
    }
}
