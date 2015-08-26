/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.add;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import com.soa.util.SystemUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P30001 添加建筑信息
 *
 * @author wgp
 */
@Service
public class AddSqJz extends BaseService {

//校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {
        "mc", "建筑名称",
        "mph", "建筑的楼号号",
        "dz", "建筑地址",
        "lxfs", "建筑联系方式",
        "jd", "经度",
        "wd", "维度",
        "sq_id", "所在建筑"
    };
    private final Logger log = LoggerFactory.getLogger(AddSqJz.class);

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        AbstractCommonData acd = getSession(in);
        in.put("cjrxm", acd.get("xm"));
        //in从页面传来过得值
        in.put("cjr", acd.get(SystemUtil.loginRemark));
        in.putStringValue("jzid", SystemUtil.getSerialNum());//数据库的主码
        update("add_sq_jz", in);
    }
}
