/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.add.fz;

import com.soa.service.busi.jz.*;
import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import com.soa.util.SystemUtil;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P30008 修改房子内员工的信息
 *
 * @author wgp
 */
@Service
public class UpdateFzYg extends BaseService {

    //校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {
        "sfid", "身份证号码"};
    private final Logger log = LoggerFactory.getLogger(UpdateFzYg.class);

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
        update("update_fz_yg", in);
        if (in.getStringValue("xb").equals("0")) {
            out.putStringValue("xb_desc", "女");
        } else {
            out.putStringValue("xb_desc", "男");
        }

    }
}
