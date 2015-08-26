/*
 * To change this template, choose Tools | Templates
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
 * P42000 添加娱乐场所信息
 *
 * @author zkf
 */
@Service
public class AddYlZa extends BaseService {

    private final String[] KEY = {
        "mc", "娱乐场所名称",
        "dz", "地址",
        "jz_id", "建筑id",
        "sq_id", "社区id",
        "dz", "地址",
        "jd", "经度",
        "wd", "维度"
    };
    private final Logger log = LoggerFactory.getLogger(AddYlZa.class);

    @Override
    public String[] keys() {
        return KEY;
    }
    @Resource
    private SqjwUtil sqjwUtil;

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        byte[] file = (byte[]) in.getObjectValue("jyxkz");
        byte[] file1 = (byte[]) in.getObjectValue("ajhgz");
        byte[] file2 = (byte[]) in.getObjectValue("cspmt");
        byte[] file3 = (byte[]) in.getObjectValue("gsxkz");
        AbstractCommonData acd = getSession(in);
        in.put("cjrxm", acd.get("xm"));
        //in从页面传来过得值
        in.put("cjr", acd.get(SystemUtil.loginRemark));
        try {
            String name = in.getStringValue("jyxkz_name");
            String name1 = in.getStringValue("ajhgz_name");
            String name2 = in.getStringValue("cspmt_name");
            String name3 = in.getStringValue("gsxkz_name");
            String file_path = null;
            String file1_path = null;
            String file2_path = null;
            String file3_path = null;
            if (name != null) {
                file_path = sqjwUtil.upLoad(file, "za0001_file_path1", "za0001_addyl", name);
                in.putStringValue("jyxkz", file_path.toString());//数据库中保存的路径
            }
            if (name1 != null) {
                file1_path = sqjwUtil.upLoad(file1, "za0001_file_path1", "za0001_addyl", name1);
                in.putStringValue("ajhgz", file1_path.toString());
            }
            if (name2 != null) {
                file2_path = sqjwUtil.upLoad(file2, "za0001_file_path1", "za0001_addyl", name2);
                in.putStringValue("cspmt", file2_path.toString());
            }
            if (name3 != null) {
                file3_path = sqjwUtil.upLoad(file3, "za0001_file_path1", "za0001_addyl", name3);
                in.putStringValue("gsxkz", file3_path.toString());
            }
            //in从页面传来过得值
            in.putStringValue("id", SystemUtil.getSerialNum());//数据库的主码
            update("add_yl_za", in);
        } catch (IOException ex) {
            log.debug("error:", ex);
            throw new GlobalException(140001, ex);      //上传文件出错了
        }
    }
}
