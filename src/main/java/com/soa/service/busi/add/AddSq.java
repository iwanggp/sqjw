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
import static com.soa.service.BaseService.getSession;
import com.soa.util.SystemUtil;
import com.soa.util.sqjw.SqjwUtil;
import java.io.IOException;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P21001 添加社区信息
 *
 * @author wgp
 */
@Service
public class AddSq extends BaseService {

//校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {
        "sqmc", "社区名称",
        "sqlb", "社区类别",
        "dz", "社区地址",
        "jd", "经度",
        "wd", "维度"
    };
    private final Logger log = LoggerFactory.getLogger(AddSq.class);
    
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
        String sqid = SystemUtil.getSerialNum();
        in.putStringValue("sqid", sqid);//数据库的主码
        update("sq_add_sq", in);
        update("autoadd_sq_jz", sqid, in.getStringValue("sqmc"));//自动添加该社区内的所有建筑信息
        update("autoadd_sq_jz_zjh", sqid, in.getStringValue("sqmc"));//向建筑内添加相应的服务信息

    }
}
