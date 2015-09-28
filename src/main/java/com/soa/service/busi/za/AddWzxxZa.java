/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import com.soa.util.SystemUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P49002 添加特业的违章信息
 *
 * @author wgp
 */
@Service
public class AddWzxxZa extends BaseService {

    private final String[] KEY = {
        "fid", "特业的地址",
        "mc", "特业名称"};
    private final Logger log = LoggerFactory.getLogger(AddWzxxZa.class);

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
        update("add_za_wzxx", in);
    }
}
