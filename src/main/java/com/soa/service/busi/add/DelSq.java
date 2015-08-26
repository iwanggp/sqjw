/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.add;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import com.soa.util.sqjw.SqjwUtil;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P21005 删除社区信息
 *
 * @author wgp
 */
@Service
public class DelSq extends BaseService {

    private final String[] KEY = {
        "sqid", "主码"
    };

    @Override
    public String[] keys() {
        return KEY;
    }
    private final Logger log = LoggerFactory.getLogger(DelSq.class);

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        Object[] obj = new Object[]{in.getStringValue("sqid")};
        update("delete_sq_id", obj);
    }
}
