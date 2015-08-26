/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.add.fz;

import com.soa.service.busi.add.*;
import com.soa.service.busi.za.*;
import ch.qos.logback.classic.util.ContextInitializer;
import com.lianzt.commondata.AbstractCommonData;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import com.soa.util.SystemUtil;
import com.soa.util.sqjw.SqjwUtil;
import java.io.IOException;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P30005 添加房子的员工信息
 *
 * @author wgp
 */
@Service
public class AddFzYg extends BaseService {

//校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {
        "sfid", "省份证号码",
        "xm", "员工姓名"
    };
    private final Logger log = LoggerFactory.getLogger(AddFzYg.class);

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
        update("add_jz_yg", in);
    }
}
