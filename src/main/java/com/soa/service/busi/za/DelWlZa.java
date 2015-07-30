/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import java.io.File;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P43001 删除物流场所信息
 *
 * @author Administrator
 */
@Service
public class DelWlZa extends BaseService {

    private final String[] KEY = {
        "id", "主码"
    };

    @Override
    public String[] keys() {
        return KEY;
    }
    private final Logger log = LoggerFactory.getLogger(DelWlZa.class);

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String paths[] = {in.getStringValue("gsxkz"), in.getStringValue("ysxkz"), in.getStringValue("ajhgz"), in.getStringValue("jypmt"), in.getStringValue("yzxkz")};
        Object[] obj = new Object[]{in.getStringValue("id")};
        log.debug(paths.length + "[][][][][][][][][][");

        for (int i = 0; i < paths.length; i++) {
            if (paths[i] != null) {
                File file = new File(paths[i]);
                // 如果文件路径所对应的文件存在，并且是一个文件，则直接删除  
                if (file.exists() && file.isFile()) {
                    if (file.delete()) {
                        update("del_wl_za", obj);
                    } else {
                        log.debug("error:", "删除文件出错");
                        throw new GlobalException(140002);      //删除文件出错了
                    }
                }
            } else {
                update("del_wl_za", obj);
            }
        }

    }
}
