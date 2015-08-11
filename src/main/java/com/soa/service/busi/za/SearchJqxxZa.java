/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import java.text.SimpleDateFormat;
import org.springframework.stereotype.Service;

/**
 * S47000 查询警情信息
 *
 * @author zkf
 */
@Service
public class SearchJqxxZa extends BaseService {

    private final String[] KEY = new String[]{};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String ks = in.getStringValue("kssj");
        String jz = in.getStringValue("jzsj");
        String dl = in.getStringValue("dl");
        String jg = in.getStringValue("jg");
        String jzw = in.getStringValue("jzw");
        if (ks != null && !ks.isEmpty() && jz != null && !jz.isEmpty()) {
            if (dl != null || jg != null || jzw != null) {
                in.putStringValue("sql", "search_jqxx_za");
                in.putObjectValue("args", new Object[]{in.getStringValue("ajfl"), ks.replaceAll("T", " "), jz.replaceAll("T", " "), dl, jg, jzw});
            } else {
                in.putStringValue("sql", "search_jqxx_za2");
                in.putObjectValue("args", new Object[]{in.getStringValue("ajfl"), ks.replaceAll("T", " "), jz.replaceAll("T", " ")});
            }
        } else {
            if (dl != null || jg != null || jzw != null) {
                in.putStringValue("sql", "search_jqxx_za3");
                in.putObjectValue("args", new Object[]{in.getStringValue("ajfl"), dl, jg, jzw});
            } else {
                in.putStringValue("sql", "search_jqxx_za1");
                in.putObjectValue("args", new Object[]{in.getStringValue("ajfl")});
            }
        }
        in.putIntValue("page", in.getIntValue("page"));
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);//调用分页服务
    }
}
