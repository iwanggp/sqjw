/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;

/**
 * S40001 查询场所信息
 *
 * @author zkf
 */
@Service
public class SearchCsZa extends BaseService {

    private final String[] KEY = new String[]{"hy", "行业",
        "mc", "场所名称", "page", "页码", "page_size", "每页显示记录数"};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String hy = in.getStringValue("hy");
        if ("za_yl".equals(hy)) {
            in.putStringValue("sql", "za_select_yl");
        } else if ("za_sp".equals(hy)) {
            in.putStringValue("sql", "za_select_sp");
        }
        in.putObjectValue("args", new Object[]{in.getStringValue("mc")});
        in.putIntValue("page", in.getIntValue("page"));
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
    }
}
