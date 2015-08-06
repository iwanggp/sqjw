/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P47003 修改警情信息
 *
 * @author zkf
 */
@Service
public class UpdateJqxxZa extends BaseService {

   //校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {
        "jqsj", "警情时间",
        "jd", "经度",
        "wd", "维度"
    };

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-ddHH:mm");
        String str = in.getStringValue("jqsj").replaceAll("T", " ");
        try {
            Date date = sdf.parse(str);
            in.putDateValue("time", date);
        } catch (ParseException ex) {
        }
        out.putIntValue("res", update("update_jqxx_za", in));
    }
    
}
