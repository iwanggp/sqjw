/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.add;

import com.soa.service.busi.za.*;
import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;

/**
 * S20004 查询场所信息
 *
 * @author wgp
 */
@Service
public class SearchCsJZ extends BaseService {

    private final String[] KEY = new String[]{"hy", "行业", "page", "页码", "page_size", "每页显示记录数"};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String hy = in.getStringValue("hy");
        if ("za_yl".equals(hy)) {
            in.putStringValue("sql", "za_select_yl");
            cutPage(in, inHead, out, outHead);
        } else if ("za_sp".equals(hy)) {
            in.putStringValue("sql", "jz_select_sp");
//            in.putObjectValue("args", new Object[]{in.getStringValue("rid")});
            cutPage(in, inHead, out, outHead);
        } else if ("za_wl".equals(hy)) {
            in.putStringValue("sql", "za_select_wl");
            cutPage(in, inHead, out, outHead);
        } else if ("za_wb".equals(hy)) {
            in.putStringValue("sql", "za_select_wb");
            cutPage(in, inHead, out, outHead);
        } else if ("za_lg".equals(hy)) {
            in.putStringValue("sql", "za_select_lg");
            cutPage(in, inHead, out, outHead);
        } else if ("xb_xf".equals(hy)) {
            in.putStringValue("sql", "za_select_xf");
            cutPage(in, inHead, out, outHead);
        } else {
            in.putStringValue("sql", "za_select_cs");
            in.putObjectValue("args", new Object[]{in.getStringValue("mc"), hy});
            in.putIntValue("page", in.getIntValue("page"));
            in.putIntValue("page_size", in.getIntValue("page_size"));
            runService("S10001", in, inHead, out, outHead);//调用分页服务
        }
    }

    private void cutPage(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putObjectValue("args", new Object[]{in.getStringValue("rid")});
        in.putIntValue("page", in.getIntValue("page"));
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);//调用分页服务
    }
}
