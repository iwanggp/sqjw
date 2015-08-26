/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.jz;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import com.soa.service.busi.za.DelLgZa;
import com.soa.util.sqjw.SqjwUtil;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P30003 删除社区内建筑信息，谨慎操作
 *
 * @author wgp
 */
@Service
public class DelSqJz extends BaseService {

    private final String[] KEY = {
        "jzid", "主码"
    };

    @Override
    public String[] keys() {
        return KEY;
    }

    private final Logger log = LoggerFactory.getLogger(DelSqJz.class);

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {

        Object[] obj = new Object[]{in.getStringValue("jzid")};
        out.putIntValue("res", update("del_sq_jz", obj));

    }
}
