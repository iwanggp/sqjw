/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.xb;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import com.soa.service.busi.za.AddShopZa;
import com.soa.util.SystemUtil;
import com.soa.util.sqjw.SqjwUtil;
import java.io.IOException;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P45001 增加消防检查记录
 *
 * @author wgp
 */
@Service
public class AddXfXb extends BaseService {

    //校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {
        "mc", "商铺名称",
        "lxfs", "联系方式",
        "dz", "地址",
        "jd", "经度",
        "wd", "维度"
    };
    private final Logger log = LoggerFactory.getLogger(AddXfXb.class);

    @Resource
    private SqjwUtil sqjwUtil;

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        byte[] file = (byte[]) in.getObjectValue("zdbwnbt");
        byte[] file1 = (byte[]) in.getObjectValue("zdbwwbt");
        final String modul_name = "XBXF";
        AbstractCommonData acd = getSession(in);
        try {
            String name = in.getStringValue("zdbwnbt_name");
            String name1 = in.getStringValue("zdbwwbt_name");
            String file_path = null;
            String file1_path = null;
            if (name != null) {
                file_path = sqjwUtil.upLoad(file, "za0001_file_path1", modul_name, name);
                in.putStringValue("zdbwnbt", file_path.toString());//数据库中保存的路径
            }
            if (name1 != null) {
                file1_path = sqjwUtil.upLoad(file1, "za0001_file_path1", modul_name, name1);
                in.putStringValue("zdbwwbt", file1_path.toString());
            }

            //in从页面传来过得值
            in.put("cjr", acd.get(SystemUtil.loginRemark));
            in.putStringValue("id", SystemUtil.getSerialNum());//数据库的主码
            update("add_xf_xb", in);
        } catch (IOException ex) {
            log.debug("error:", ex);
            throw new GlobalException(140001, ex);      //上传文件出错了
        }
    }
}
