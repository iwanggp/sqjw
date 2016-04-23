/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import static com.soa.service.BaseService.getSession;
import com.soa.util.SystemUtil;
import com.soa.util.sqjw.SqjwUtil;
import java.io.IOException;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P44204 添加经营平面图
 *
 * @author wgp
 */
@Service
public class AddJypmtZa extends BaseService {

//校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {
        "csid", "场所的id主键",};
    private final Logger log = LoggerFactory.getLogger(AddJypmtZa.class);

    @Resource
    private SqjwUtil sqjwUtil;

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String csid = in.getStringValue("csid");
        String fileLength = in.getStringValue("file_length");
        int length = Integer.parseInt(fileLength);
        /**
         * 由于js原型的限制第一个文件命名规则不适合放到循环中，故第一个文件采取单独处理的方式
         */
        String name = null;
        String path1 = null;
        byte[] file0 = (byte[]) in.getObjectValue("jypmt");
        final String modul_name = "JYPMT";
        try {
            name = in.getStringValue("jypmt_name");//获取名称
            if (name != null && file0 != null) {
                path1 = sqjwUtil.upLoad(file0, "za0001_file_path1", modul_name, name);
            }
            update("add_jypmt_pic", csid, path1);//添加商铺信息

        } catch (IOException ex) {
            log.debug("error:", ex);
            throw new GlobalException(140001, ex);      //上传文件出错了
        }
        /**
         * 循环的插入余下的图片，方法如第一张图片
         */
        String names = null;
        String paht = null;
        for (int i = 1; i < length; i++) {
            try {
                names = in.getStringValue("jypmt_" + i + "_name");//获取名称
                byte[] file = (byte[]) in.getObjectValue("jypmt_" + i);
                if (file != null) {
                    paht = sqjwUtil.upLoad(file, "za0001_file_path1", modul_name, names);
                }
                update("add_jypmt_pic", csid, paht);//添加商铺信息
            } catch (IOException ex) {
                log.debug("error:", ex);
                throw new GlobalException(140001, ex);      //上传文件出错了
            }
        }
    }
}
