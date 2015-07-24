/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import ch.qos.logback.classic.util.ContextInitializer;
import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P41001 添加商铺信息
 *
 * @author wgp
 */
@Service
public class AddShopZa extends BaseService {
//校验不能为空的值，当key为空时会提示不能为空

    private final String[] KEY = {
        "mc", "商铺名称",
        "zgbm", "主管部门",
        "jjxz", "经济性质",
        "dz", "地址",
        "jd", "经度",
        "wd", "维度"
    };

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        //in从页面传来过得值
        update("add_shop_za", in);
    }

}
