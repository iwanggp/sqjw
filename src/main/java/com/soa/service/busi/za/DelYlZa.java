/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import com.soa.util.sqjw.SqjwUtil;
import java.io.File;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P41004 删除娱乐场所信息 同时删除数据库中对应的相应文件
 *
 * @author zkf
 */
@Service
public class DelYlZa extends BaseService {

    private final String[] KEY = {
        "id", "主码"
    };

    @Override
    public String[] keys() {
        return KEY;
    }
    private final Logger log = LoggerFactory.getLogger(DelYlZa.class);
    @Resource
    private SqjwUtil sqjwUtil;

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String paths[] = {in.getStringValue("cspmt"), in.getStringValue("ajhgz"), in.getStringValue("jyxkz"), in.getStringValue("gsxkz")};
        Object[] obj = new Object[]{in.getStringValue("id")};
        for (int i = 0; i < paths.length; i++) {
            if (paths[i] != null) {
                File file = new File(paths[i]);
                // 如果文件路径所对应的文件存在，并且是一个文件，则直接删除  
                if (file.exists() && file.isFile()) {
                    if (sqjwUtil.deleteFile(paths[i])) {
                        update("del_yl_za", obj);
                    } else {
                        throw new GlobalException(140002);      //删除文件出错了
                    }
                } else {
                    update("del_yl_za", obj);
                }
            }
        }
    }
}
