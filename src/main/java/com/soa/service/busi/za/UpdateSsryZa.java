/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import static com.soa.service.BaseService.getSession;
import com.soa.util.SystemUtil;
import com.soa.util.sqjw.SqjwUtil;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P43114 更新随行人员的信息
 *
 * @author wgp
 */
@Service
public class UpdateSsryZa extends BaseService {

    private final String[] KEY = {
        "sfzh", "身份证号码",
        "xm", "姓名"
    };
    private final Logger log = LoggerFactory.getLogger(UpdateSsryZa.class);

    @Resource
    private SqjwUtil sqjwUtil;

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
        update("update_za_ssry", in);

    }
}
