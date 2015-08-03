/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.lianzt.commondata.DataConvertFactory;
import com.soa.service.BaseService;
import java.util.ArrayList;
import java.util.List;
import org.apache.tomcat.util.digester.ObjectParamRule;
import org.springframework.stereotype.Service;
import sun.org.mozilla.javascript.internal.regexp.SubString;

/**
 * S44000 查询技防设施
 *
 * @author zkf
 */
@Service
public class SearchJfssZa extends BaseService {

    private final String[] KEY = new String[]{};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String sblx = in.getStringValue("sblx");
        String dl = in.getStringValue("dl");
        String jg = in.getStringValue("jg");
        String jzw = in.getStringValue("jzw");
        if (sblx != null && !sblx.isEmpty()) {
            if (dl == null && jg == null && jzw == null) {
                in.putStringValue("sql", "search_jfss2_za");
                in.putObjectValue("args", new Object[]{sblx});
            } else {
                in.putStringValue("sql", "search_jfss_za");
                in.putObjectValue("args", new Object[]{sblx, dl, jg, jzw});
            }
        } else {
            if (dl == null && jg == null && jzw == null) {
                in.putStringValue("sql", "search_jfss3_za");
                out.putArrayValue("jfss", queryList("search_jfss3_za"));
            } else {
                in.putStringValue("sql", "search_jfss1_za");
                in.putObjectValue("args", new Object[]{dl, jg, jzw});
            }
        }
        in.putIntValue("page", in.getIntValue("page"));
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);//调用分页服务
    }
}
