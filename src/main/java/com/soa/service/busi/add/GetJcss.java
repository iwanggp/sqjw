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
 * P23002 搜索基础设施的信息
 *
 * @author wgp
 */
@Service
public class GetJcss extends BaseService {

    private final String[] KEY = new String[]{"page", "页码", "page_size", "每页显示记录数"};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putStringValue("sql", "add_get_jcss");
        in.putObjectValue("args", new Object[]{in.getStringValue("sslx")});
        in.putIntValue("page", in.getIntValue("page"));
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);//调用分页服务 
    }
}
