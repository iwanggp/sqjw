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
import java.util.ArrayList;
import java.util.List;
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
        String sqmc = in.getStringValue("sqmc");
        in.putStringValue("sqid", sqid);//数据库的主码
        update("sq_add_sq", in);
        List<AbstractCommonData> acdList = queryList("get_info_sqjz", sqmc);
        /**
         * 开始添加建筑信息的同时添加房屋信息
         */
        List<Object[]> jzArgsList = new ArrayList<Object[]>();
        List<Object[]> fwArgsList = new ArrayList<Object[]>();
        String dzbm = "";
        String mlphm = "";
        String jd = "";
        String wd = "";
        AbstractCommonData mph = null;
        String mphm = "";
        String dzxz = "";
        for (AbstractCommonData _acd : acdList) {
            if (!_acd.isEmpty()) {
                dzbm = _acd.getStringValue("jzdzbm");
                dzxz = _acd.getStringValue("dzxz");
                mlphm = _acd.getStringValue("mlphm");
                jd = _acd.getStringValue("zbwzx");
                wd = _acd.getStringValue("zbwzy");
                mph = queryData("get_mph_jz", mlphm);
                mphm = mph.getStringValue("mpmc");
                jzArgsList.add(new Object[]{sqid, dzbm, _acd.getStringValue("dzxz"), _acd.getStringValue("dzxz"), _acd.getStringValue("jlxmc"), jd, wd, _acd.getStringValue("ssjwqdm"), _acd.getStringValue("dys"), _acd.getStringValue("hs"), _acd.getStringValue("lcs"), dzbm, mphm, _acd.getDateValue("cjrq"), _acd.getStringValue("cjry"), _acd.getStringValue("jlxdm"), _acd.getStringValue("mlphm")});//自动添加该社区内的所有建筑信息#servic_code:P24001
                fwArgsList.add(new Object[]{mphm, dzxz, acd.get(SystemUtil.loginRemark).getValue(), in.getStringValue("cjrxm"), jd, wd, dzbm, sqid, dzbm});
            }
        }
        batchUpdate("autoadd_sq_jz", jzArgsList);
        batchUpdate("autoadd_sq_jz_zjh", fwArgsList);
//        update("autoadd_sq_jz_zjh", mphm, jd, wd, dzbm, sqid, dzbm);//自动添加该社区内的所有建筑信息#servic_code:P24002

    }
}
