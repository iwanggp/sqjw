/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
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
 * P43012 添加住家户
 *
 * @author wgp
 */
@Service
public class AddZjhZa1 extends BaseService {

    //校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {
        "mph", "门牌号",
        "dz", "地址",
        "jz_id", "建筑id",
        "sq_id", "社区id",
        "fzxm", "房主姓名",
        "jd", "经度",
        "wd", "维度"
    };
    private final Logger log = LoggerFactory.getLogger(AddZjhZa1.class);

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
        //in从页面传来过得值
        in.putStringValue("id", SystemUtil.getSerialNum());//数据库的主码
        update("add_za_zjh", in);
    }
}
