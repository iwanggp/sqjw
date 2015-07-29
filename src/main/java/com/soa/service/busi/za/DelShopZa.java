/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import static com.lianzt.util.StringUtil.fileName;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import java.io.File;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P41003 删除商铺信息 同时删除服务器中对应的相应文件
 *
 * @author wgp exception: 删除文件错误
 */
@Service
public class DelShopZa extends BaseService {

    private final String[] KEY = {
        "id", "主码"
    };

    @Override
    public String[] keys() {
        return KEY;
    }
    private final Logger log = LoggerFactory.getLogger(DelShopZa.class);

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String paths[] = {in.getStringValue("jypmt"), in.getStringValue("ajhgz"), in.getStringValue("jyxkz")};
        for (int i = 0; i < paths.length; i++) {
            if (paths[i] != null) {
                File file = new File(paths[i]);
                // 如果文件路径所对应的文件存在，并且是一个文件，则直接删除  
                if (file.exists() && file.isFile()) {
                    if (file.delete()) {
                        String id = in.getStringValue("id");
                        update("del_shop_za", id);
                    } else {
                        log.debug("error:", "删除文件出错");
                        throw new GlobalException(140002);      //删除文件出错了
                    }
                }
            } else {
                String id = in.getStringValue("id");
                update("del_shop_za", id);
            }
        }

    }
}
