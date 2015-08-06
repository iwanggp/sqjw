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
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P43007 删除旅馆信息
 *
 * @author wgp
 */
@Service
public class DelLgZa extends BaseService {

    private final String[] KEY = {
        "id", "主码"
    };

    @Override
    public String[] keys() {
        return KEY;
    }

    @Resource
    private SqjwUtil sqjwUtil;
    private final Logger log = LoggerFactory.getLogger(DelLgZa.class);

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String paths[] = {sqjwUtil.getRelPath(in.getStringValue("ajhgz")), sqjwUtil.getRelPath(in.getStringValue("jypmt")), sqjwUtil.getRelPath(in.getStringValue("jyxkz"))};
        Object[] obj = new Object[]{in.getStringValue("id")};
        for (int i = 0; i < paths.length; i++) {
            if (paths[i] != null) {
                if (sqjwUtil.deleteFile(paths[i])) {
                    update("del_lg_za", obj);
                } else {
                    throw new GlobalException(140002);      //删除文件出错了
                }
            } else {
                update("del_lg_za", obj);
            }
        }
    }
}
