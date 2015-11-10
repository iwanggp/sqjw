/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.ldrk;

import com.lianzt.commondata.AbstractCommonData;
import com.lianzt.util.Base64;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import static com.soa.service.BaseService.getSession;
import com.soa.service.busi.za.AddShopZa;
import com.soa.util.SystemUtil;
import com.soa.util.sqjw.SqjwUtil;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;
import java.util.logging.Level;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P88001 上传流动人口信息
 *
 * @author wgp
 */
@Service
public class UpdataLdrkZa extends BaseService {

    //校验不能为空的值，当key为空时会提示不能为空
    private final String[] KEY = {};
    private final Logger log = LoggerFactory.getLogger(AddShopZa.class);

    @Override
    public String[] keys() {
        return KEY;
    }
    @Resource
    private SqjwUtil sqjwUtil;

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        byte[] file = (byte[]) in.getObjectValue("ldrkdata");
        String name = in.getStringValue("ldrkdata_name");
        final String modul_name = "LDRKDATA";
        String file_path = "";
        FileOutputStream fos;
        try {
            file_path = sqjwUtil.upLoad(file, "zaldrk", modul_name, name);
        } catch (IOException ex) {
            java.util.logging.Logger.getLogger(UpdataLdrkZa.class.getName()).log(Level.SEVERE, null, ex);
        }
        /**
         * 添加一个定时器的作用让写数据库写延迟两分钟执行
         */
        new Timer().schedule(new TimerTask() {
            
            @Override
            public void run() {
                try {
                    insertDb("D:\\test.txt");
                } catch (IOException ex) {
                    java.util.logging.Logger.getLogger(UpdataLdrkZa.class.getName()).log(Level.SEVERE, null, ex);
                }
                throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
            }
        }, 20000);
    }

    public void insertDb(String file_Path) throws IOException {
        FileReader fr = new FileReader(file_Path);
        final String ldrkpic = "LDRKZP";
        String pic_path = "";
        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(file_Path), "utf-8"));
        String[] data = null;
        String line = "";
        while ((line = br.readLine()) != null) {
            data = line.split(",");
            byte[] bs = Base64.decode(data[57]);
            pic_path = sqjwUtil.upLoadIDPicture(bs, "zaldrk", ldrkpic, data[0]);
            update("add_ldrk_za", SystemUtil.getSerialNum(), data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13], data[14], data[15], data[16], data[17], data[18], data[19], data[20], data[21], data[22], data[23], data[24], data[25], data[26], data[27], data[28], data[29], data[30], data[31], data[32], data[33], data[34], data[35], data[36], data[37], data[38], data[39], data[40], data[41], data[42], data[43], data[44], data[45], data[46], data[47], data[48], data[49], data[50], data[51], data[52], data[53], data[54], data[55], data[56], pic_path);
        }
    }

}
