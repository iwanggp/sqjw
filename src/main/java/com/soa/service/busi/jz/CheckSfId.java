/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.jz;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * service code:S30009 查询是否已经有该身份证
 *
 * @author wgp
 */
@Service
public class CheckSfId extends BaseService {

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String sfid = in.getStringValue("sfid");
        AbstractCommonData _acd = queryData("check_sf_id", sfid);
        out.putStringValue("flag", _acd == null ? "0" : "1");//out用于将处理的数据返回

    }
}
