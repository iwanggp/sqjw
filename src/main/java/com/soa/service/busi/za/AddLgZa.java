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
 * P43006 添加旅馆信息
 *
 * @author wgp
 */
@Service
public class AddLgZa extends BaseService {

    //校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {
        "pid", "企业编号",
        "mc", "企业名称",
        "dz", "企业地址",
        "jd", "经度",
        "wd", "维度"
    };
    private final Logger log = LoggerFactory.getLogger(AddLgZa.class);

    @Resource
    private SqjwUtil sqjwUtil;

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        byte[] file = (byte[]) in.getObjectValue("jyxkz");
        byte[] file1 = (byte[]) in.getObjectValue("ajhgz");
        byte[] file2 = (byte[]) in.getObjectValue("jypmt");
        final String modul_name = "ZALG";
        try {
            String name = in.getStringValue("jyxkz_name");
            String name1 = in.getStringValue("ajhgz_name");
            String name2 = in.getStringValue("jypmt_name");
            String file_path = null;
            String file1_path = null;
            String file2_path = null;
            if (name != null) {
                file_path = sqjwUtil.upLoad(file, "za0001_file_path1", modul_name, name);
                in.putStringValue("jyxkz", file_path.toString());//数据库中保存的路径
            }
            if (name1 != null) {
                file1_path = sqjwUtil.upLoad(file1, "za0001_file_path1", modul_name, name1);
                in.putStringValue("ajhgz", file1_path.toString());
            }
            if (name2 != null) {
                file2_path = sqjwUtil.upLoad(file2, "za0001_file_path1", modul_name, name2);
                in.putStringValue("jypmt", file2_path.toString());
            }
            //in从页面传来过得值
            in.putStringValue("id", SystemUtil.getSerialNum());//数据库的主码
            update("add_lg_za", in);
        } catch (IOException ex) {
            log.debug("error:", ex);
            throw new GlobalException(140001, ex);      //上传文件出错了
        }
    }
}
