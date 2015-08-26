/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.add;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * S22001 获得社区内建筑
 *
 * @author wgp
 */
@Service
public class GetSqJz extends BaseService {

    private final Logger log = LoggerFactory.getLogger(GetSqJz.class);

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putStringValue("sql", "select_jz_sqid");
        in.putObjectValue("args", new Object[]{in.getStringValue("sqid")});
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
//        out.putDataValue("jzdata",in.putStringValue("sql", "select_jz_sqid"););
    }
}
