/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.add;

import com.soa.service.busi.za.*;
import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;

/**
 * S20001 获得建筑的详细信息
 *
 * @author zkf
 */
@Service
public class SearchJzDetail extends BaseService {

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {

        Object[] obj = new Object[]{in.getStringValue("id")};
        out.putDataValue("jzdata", queryData("select_jz_id", obj));
    }
}
