/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import com.soa.util.SystemUtil;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P47000 添加警情信息
 *
 * @author zkf
 */
@Service
public class AddJqxxZa extends BaseService {

    //校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putStringValue("id", SystemUtil.getSerialNum());//数据库的主码
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-ddHH:mm");
        String str = in.getStringValue("date").replaceAll("T", " ");
        try {
            Date date = sdf.parse(str);
            in.putDateValue("time", date);
        } catch (ParseException ex) {
        }
        update("add_jqxx_za", in);
    }
}
