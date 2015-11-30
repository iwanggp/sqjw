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
 * P41002 更新商铺信息
 *
 * @author Administrator
 */
@Service
public class UpdateShopZa extends BaseService {

    //校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {
        "mc", "商铺名称",
        "zgbm", "主管部门",
        "jjxz", "经济性质",
        "dz", "单位地址"
    };
    private final Logger log = LoggerFactory.getLogger(UpdateShopZa.class);

    @Resource
    private SqjwUtil sqjwUtil;

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        byte[] file = (byte[]) in.getObjectValue("pic_jyxkz");
        byte[] file1 = (byte[]) in.getObjectValue("pic_ajhgz");
        byte[] file2 = (byte[]) in.getObjectValue("pic_jypmt");
        final String modul_name = "ZASHOP";
        AbstractCommonData acd = getSession(in);
        in.put("cjrxm", acd.get("xm"));
        //in从页面传来过得值
        in.put("cjr", acd.get(SystemUtil.loginRemark));
        try {
            String name = in.getStringValue("pic_jyxkz_name");
            String name1 = in.getStringValue("pic_ajhgz_name");
            String name2 = in.getStringValue("pic_jypmt_name");
            String file_path = null;
            String file1_path = null;
            String file2_path = null;
            if (name != null) {
                file_path = sqjwUtil.upLoad(file, "za0001_file_path1", modul_name, name);
                if (sqjwUtil.deleteFile(sqjwUtil.getRelPath(in.getStringValue("jyxkz")))) {//删除以前的文件
                    in.putStringValue("jyxkz", file_path.toString());//数据库中保存的路径
                }
            }
            if (name1 != null) {
                file1_path = sqjwUtil.upLoad(file1, "za0001_file_path1", modul_name, name1);
                if (sqjwUtil.deleteFile(sqjwUtil.getRelPath(in.getStringValue("ajhgz")))) {//删除以前的文件
                    in.putStringValue("ajhgz", file1_path.toString());
                }
            }
            if (name2 != null) {
                file2_path = sqjwUtil.upLoad(file2, "za0001_file_path1", modul_name, name2);
                if (sqjwUtil.deleteFile(sqjwUtil.getRelPath(in.getStringValue("jypmt")))) {//删除以前的文件
                    in.putStringValue("jypmt", file2_path.toString());
                }
            }
            update("modify_shop_za", in);
        } catch (IOException ex) {
            log.debug("error:", ex);
            throw new GlobalException(140001, ex);      //上传文件出错了
        }

    }
}
