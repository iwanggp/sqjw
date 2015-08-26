/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.add;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;

/**
 * S21004 获得建筑的详细信息
 *
 * @author wgp
 */
@Service
public class GetSqDetail extends BaseService {

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {

        Object[] obj = new Object[]{in.getStringValue("sqid")};
        out.putDataValue("sqdata", queryData("select_sq_id", obj));
//        out.putDataValue("spsm", queryData("select_sp_zs", obj));
    }
}
