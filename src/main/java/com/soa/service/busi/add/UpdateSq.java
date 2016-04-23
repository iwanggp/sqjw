/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.add;

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
 * P21006 修改社区的信息
 *
 * @author wgp
 */
@Service
public class UpdateSq extends BaseService {

    //校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {
        "sqmc", "社区名称",
        "sqlb", "社区类别",
        "dz", "社区地址",
        "jd", "经度",
        "wd", "维度"
    };
    private final Logger log = LoggerFactory.getLogger(UpdateSq.class);

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
        update("update_sq_id", in);//修改社区的相应信息
        update("update_jz_jws", in);//将建筑的警务室和社区的保持一致
        update("update_fw_jws", in);//将房屋的警务室和社区的一致
    }
}
