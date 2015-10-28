/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.bzdz;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import com.soa.util.SystemUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P57003 添加标准地址信息
 *
 * @author wgp
 */
@Service
public class AddBzdz extends BaseService {

//校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {
        "dzjc", "地址简称",
        "dzxz","地址详细地址"
    };
    private final Logger log = LoggerFactory.getLogger(AddBzdz.class);

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        AbstractCommonData acd = getSession(in);
//        in.put("cjrxm", acd.get("xm"));
        //in从页面传来过得值
        in.put("cjry", acd.get(SystemUtil.loginRemark));
        in.putStringValue("jzdzbm", SystemUtil.getSerialNum());//数据库的主码
        update("search_add_bzdz", in);
    }
}
