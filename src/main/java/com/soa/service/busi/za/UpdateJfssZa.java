/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;

/**
 * P44007 修改技防设施
 *
 * @author zkf
 */
@Service
public class UpdateJfssZa  extends BaseService{

    //校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {
        "azdm", "安装点名",
        "jd", "经度",
        "wd", "维度"
    };

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        out.putIntValue("res", update("update_jfss_za", in));
    }
    
}
