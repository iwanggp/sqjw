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
import java.io.File;
import java.io.IOException;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P43002 更新物流公司的信息
 *
 * @author wgp
 */
@Service
public class UpdateWlZa extends BaseService {

    //校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {
        "id", "主码",
        "pid", "企业编号",
        "mc", "企业名称",
        "dz", "地址",};
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

        byte[] file = (byte[]) in.getObjectValue("pic_gsxkz");
        byte[] file1 = (byte[]) in.getObjectValue("pic_ysxkz");
        byte[] file2 = (byte[]) in.getObjectValue("pic_ajhgz");
        byte[] file3 = (byte[]) in.getObjectValue("pic_jypmt");
        byte[] file4 = (byte[]) in.getObjectValue("pic_yzxkz");
        final String modul_name = "ZAWL";
        AbstractCommonData acd = getSession(in);
        in.put("cjrxm", acd.get("xm"));
        //in从页面传来过得值
        in.put("cjr", acd.get(SystemUtil.loginRemark));
        try {
            String name = in.getStringValue("pic_gsxkz_name");
            String name1 = in.getStringValue("pic_ysxkz_name");
            String name2 = in.getStringValue("pic_ajhgz_name");
            String name3 = in.getStringValue("pic_jypmt_name");
            String name4 = in.getStringValue("pic_yzxkz_name");
            String file_path = null;
            String file1_path = null;
            String file2_path = null;
            String file3_path = null;
            String file4_path = null;
            String line = File.separator;//通用文件分割符
            if (name != null && file != null) {
                file_path = sqjwUtil.upLoad(file, "za0001_file_path1", modul_name, name);
                if (sqjwUtil.deleteFile(sqjwUtil.getRelPath(in.getStringValue("gsxkz")))) {//删除以前的文件
                    in.putStringValue("gsxkz", file_path.toString());//数据库中保存的路径
                }
            } else {
                in.putStringValue("gsxkz", in.getStringValue("gsxkz").replace(SystemUtil.getSysConfig("za0001_server_root") , ""));//当不修改图片时默认加上根目录，还没找到具体原因，暂时这样暴力解决
            }
            if (name1 != null && file1 != null) {
                file1_path = sqjwUtil.upLoad(file1, "za0001_file_path1", modul_name, name1);
                if (sqjwUtil.deleteFile(sqjwUtil.getRelPath(in.getStringValue("ysxkz")))) {//删除以前的文件
                    in.putStringValue("ysxkz", file1_path.toString());
                }
            } else {
                in.putStringValue("ysxkz", in.getStringValue("ysxkz").replace(SystemUtil.getSysConfig("za0001_server_root") , ""));
            }
            if (name2 != null && file2 != null) {
                file2_path = sqjwUtil.upLoad(file2, "za0001_file_path1", modul_name, name2);
                if (sqjwUtil.deleteFile(sqjwUtil.getRelPath(in.getStringValue("ajhgz")))) {//删除以前的文件
                    in.putStringValue("ajhgz", file2_path.toString());
                }
            } else {
                in.putStringValue("ajhgz", in.getStringValue("ajhgz").replace(SystemUtil.getSysConfig("za0001_server_root") , ""));
            }
            if (name3 != null && file3 != null) {
                file3_path = sqjwUtil.upLoad(file3, "za0001_file_path1", modul_name, name3);
                if (sqjwUtil.deleteFile(sqjwUtil.getRelPath(in.getStringValue("jypmt")))) {//删除以前的文件
                    in.putStringValue("jypmt", file3_path.toString());
                }
            } else {
                in.putStringValue("jypmt", in.getStringValue("jypmt").replace(SystemUtil.getSysConfig("za0001_server_root") , ""));
            }
            if (name4 != null && file4 != null) {
                file4_path = sqjwUtil.upLoad(file4, "za0001_file_path1", modul_name, name4);
                if (sqjwUtil.deleteFile(sqjwUtil.getRelPath(in.getStringValue("yzxkz")))) {//删除以前的文件
                    in.putStringValue("yzxkz", file4_path.toString());
                }
            } else {
                in.putStringValue("yzxkz", in.getStringValue("yzxkz").replace(SystemUtil.getSysConfig("za0001_server_root") , ""));
            }
            update("modify_wl_za", in);
        } catch (IOException ex) {
            log.debug("error:", ex);
            throw new GlobalException(140001, ex);      //上传文件出错了
        }

    }
}
