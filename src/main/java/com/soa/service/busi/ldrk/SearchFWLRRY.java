/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.ldrk;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 * S88006 查询房屋对应的人口信息
 *
 * @author wgp
 */
@Service
public class SearchFWLRRY extends BaseService {

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putStringValue("sql", "get_lrry_lrryid");
        in.putObjectValue("args", new Object[]{in.getStringValue("fwbm")});
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
//        queryList(SUCCESS, out)
//         out.putDataValue("mydata", resultData);

//        if (acd == null || "0".equals(acd)) {
//            throw new GlobalException(100003);
//        } else {
//            out.putDataValue("csdata", queryData("get_lrry_fwxx", new Object[]{acd.getStringValue("fwbm")}));
//        }
    }
}
