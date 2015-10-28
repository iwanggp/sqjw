/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.jz;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * S31004 获得楼房建筑的详细信息
 *
 * @author wgp
 */
@Service
public class GetJzDetail extends BaseService {

    private final String[] KEY = {
        "jzid", "主码"
    };

    @Override
    public String[] keys() {
        return KEY;
    }

    private final Logger log = LoggerFactory.getLogger(GetJzDetail.class);

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {

        Object[] obj = new Object[]{in.getStringValue("jzid")};
        out.putDataValue("jzdata", queryData("get_sq_jz", obj));

    }
}
