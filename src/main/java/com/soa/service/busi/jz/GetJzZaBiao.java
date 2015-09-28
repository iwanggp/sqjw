/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.jz;

import com.soa.service.busi.add.*;
import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import static com.soa.service.BaseService.getSession;
import com.soa.util.SystemUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * S30004 获得建筑内所有的治安场所的信息
 *
 * @author wgp
 */
@Service
public class GetJzZaBiao extends BaseService {

    private final Logger log = LoggerFactory.getLogger(GetJzZaBiao.class);

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        AbstractCommonData acd = getSession(in);
        in.put("cjrxm", acd.get("xm"));
        //in从页面传来过得值
        in.put("cjr", acd.get(SystemUtil.loginRemark));
        in.putStringValue("sql", "select_jz_zabiao");
        in.putObjectValue("args", new Object[]{in.getStringValue("jz_id"), in.getStringValue("jz_id"),in.getStringValue("jz_id"),in.getStringValue("jz_id"), in.getStringValue("jz_id"), in.getStringValue("jz_id"), in.getStringValue("jz_id"), in.getStringValue("jz_id"), in.getStringValue("jz_id"),in.getStringValue("jz_id")});
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
    }
}
