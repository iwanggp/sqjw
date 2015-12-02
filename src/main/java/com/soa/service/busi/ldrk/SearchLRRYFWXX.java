/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.ldrk;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;

/**
 * S88005 搜索流动人员房屋信息
 *
 * @author wgp
 */
@Service
public class SearchLRRYFWXX extends BaseService {

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        AbstractCommonData acd = queryData("get_lrry_fwbm", new Object[]{in.getStringValue("id")});
        if (acd == null||"0".equals(acd)) {
            throw new GlobalException(100003);
        } else {
            out.putDataValue("csdata", queryData("get_lrry_fwxx", new Object[]{acd.getStringValue("fwbm")}));
        }
    }
}
