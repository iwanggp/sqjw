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
//        String[] str = in.getStringValue("sx").split(",");
//        StringBuffer sub = new StringBuffer();
//        for (String s : str) {
//            sub.append("'" + s + "',");
//        }
//        String data = sub.toString();
//        in.putStringValue("data", data.substring(0, data.lastIndexOf(",")));
//        out.putArrayValue("jfss", queryList("search_jfss_za",in));

        String sx = in.getStringValue("sx");

        List<AbstractCommonData> list = new ArrayList<AbstractCommonData>();
        if (sx != null && !sx.isEmpty()) {
            String[] str = sx.split(",");
            for (String s : str) {
                List<AbstractCommonData> li = new ArrayList<AbstractCommonData>();
                if (in.getStringValue("sblx") != null && !in.getStringValue("sblx").isEmpty()) {
                    li = queryList("search_jfss_za", new Object[]{in.getStringValue("sblx"), s});
                } else {
                    li = queryList("search_jfss1_za", new Object[]{s});
                }
                for (AbstractCommonData ab : li) {
                    list.add(ab);
                }
            }
        } else {
            if (in.getStringValue("sblx") != null && !in.getStringValue("sblx").isEmpty()) {
                list = queryList("search_jfss2_za", new Object[]{in.getStringValue("sblx")});
            } else {
                list = queryList("search_jfss3_za");
            }
        }
        out.putArrayValue("jfss", list);
    }
}
