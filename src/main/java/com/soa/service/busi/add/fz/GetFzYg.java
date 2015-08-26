/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.add.fz;

import com.soa.service.busi.jz.*;
import com.soa.service.busi.add.*;
import com.lianzt.commondata.AbstractCommonData;
import com.lianzt.factory.AESFactory;
import com.lianzt.util.DateUtil;
import com.lianzt.util.StringUtil;
import com.soa.service.BaseService;
import java.util.Date;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * S30006 获得这个房子内所有的员工信息
 *
 * @author wgp
 */
@Service
public class GetFzYg extends BaseService {

    private final Logger log = LoggerFactory.getLogger(GetFzYg.class);

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putStringValue("sql", "get_fz_yg");
        in.putObjectValue("args", new Object[]{in.getStringValue("yg_fz_id")});
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
        List<AbstractCommonData> list = out.getArrayValue("result");
        for (AbstractCommonData acd : list) {
            String gender = acd.getStringValue("xb");
            if (gender.equals("0")) {
                acd.putStringValue("xb_desc", "女");
            } else {
                acd.putStringValue("xb_desc", "男");
            }
            String mariage = acd.getStringValue("hyzk");
            if (mariage.equals("0")) {
                acd.putStringValue("hyzk_desc", "未婚");
            } else {
                acd.putStringValue("hyzk_desc", "已婚");
            }
        }
    }
}
