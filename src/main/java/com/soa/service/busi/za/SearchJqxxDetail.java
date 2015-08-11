/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;

/**
 * S47002 查询单个警情信息
 *
 * @author zkf
 */
@Service
public class SearchJqxxDetail extends BaseService {

    private final String[] KEY = {
        "id", "ID"
    };

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        out.putDataValue("jqxx", queryData("za_select_jqxx_id", in));
    }
}
