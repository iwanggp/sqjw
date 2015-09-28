/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import com.soa.util.SystemUtil;
import com.soa.util.sqjw.SqjwUtil;
import java.io.IOException;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P48002 添加特业的检查登记
 *
 * @author wgp
 */
@Service
public class AddJcdjZa extends BaseService {

    private final String[] KEY = {
        "fid", "特业的地址",
        "mc", "特业名称"};
    private final Logger log = LoggerFactory.getLogger(AddJcdjZa.class);

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        AbstractCommonData acd = getSession(in);
        in.put("cjrxm", acd.get("xm"));
        //in从页面传来过得值
        in.put("cjr", acd.get(SystemUtil.loginRemark));
        //in从页面传来过得值
        in.putStringValue("id", SystemUtil.getSerialNum());//数据库的主码
        update("add_za_jcdj", in);
    }
}
