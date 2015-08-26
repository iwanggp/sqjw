/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import com.soa.util.sqjw.SqjwUtil;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P43013 删除建筑内的住家户信息
 *
 * @author wgp
 */
@Service
public class DelZjhZa extends BaseService {

    private final String[] KEY = {
        "id", "主码"
    };

    @Override
    public String[] keys() {
        return KEY;
    }

    @Resource
    private SqjwUtil sqjwUtil;
    private final Logger log = LoggerFactory.getLogger(DelZjhZa.class);

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        Object[] obj = new Object[]{in.getStringValue("id")};
        update("del_za_zjh", obj);
    }
}
