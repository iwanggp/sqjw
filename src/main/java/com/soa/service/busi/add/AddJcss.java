/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.add;

import com.soa.service.busi.za.*;
import ch.qos.logback.classic.util.ContextInitializer;
import com.lianzt.commondata.AbstractCommonData;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import com.soa.util.SystemUtil;
import com.soa.util.sqjw.SqjwUtil;
import java.io.IOException;
import java.sql.PreparedStatement;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P23001 添加基础设施
 *
 * @author wgp
 */
@Service
public class AddJcss extends BaseService {

//校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {
        "mc", "基础设施名称",
        "sslx", "设施类别",
        "dz", "设施地址",
        "jd", "经度",
        "wd", "维度"
    };
    private final Logger log = LoggerFactory.getLogger(AddJcss.class);

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
        in.putStringValue("id", SystemUtil.getSerialNum());//数据库的主码
        update("add_add_jcss", in);
    }
}
