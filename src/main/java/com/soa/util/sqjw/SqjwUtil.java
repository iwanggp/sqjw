/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.util.sqjw;

import com.soa.util.SystemUtil;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.UUID;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/**
 *
 *
 */
@Component
public class SqjwUtil {

    private final Logger log = LoggerFactory.getLogger(SqjwUtil.class);

    /**
     * Note:Spring 牵扯到多线程调用一个服务的现象，故类中变量不能为成员变量，只能为局部变量
     *
     * @param file 上传得到的字节数组文件
     * @param sys_path 保存文件模块的地址
     * @param module_name 你要上传文件所在模块的名字
     * @param fileName 文件的名字
     * @return 返回路径的相对路径
     * @throws IOException 文件不能关闭的异常
     * @author wgp
     */
    public String upLoad(byte[] file, String sys_path, String module_name, String fileName) throws IOException {
        String filepath = SystemUtil.getSysConfig(sys_path);
        FileOutputStream fos = null;
        BufferedOutputStream bos = null;
        String extension = getFileExtension(fileName);
        String line = File.separator;//通用文件分割符
        String rel_path = filepath + line + module_name;//得到绝对路径
        File newPath = null;
        newPath = new File(rel_path);
        if (!newPath.exists() && !newPath.isDirectory()) {//创建文件夹，如果不存在则创建
            newPath.mkdirs();
        }
        try {
            fos = new FileOutputStream(rel_path + line + SystemUtil.getSerialNum() + "." + extension);//最终的文件带文件名和扩展名
            bos = new BufferedOutputStream(fos);
            bos.write(file);
            return rel_path;
        } finally {
            if (bos != null) {//用套节流进行操作时只用关闭外层的流即可
                try {
                    bos.close();
                } catch (IOException e) {
                    log.warn("close file error:", e);
                }
            }
        }
    }

    /**
     * 获得文件的扩展名
     *
     * @param fileName 文件的名字
     * @return 返回文件的扩展名
     */
    private String getFileExtension(String fileName) {
        if (fileName.lastIndexOf(".") != -1 && fileName.lastIndexOf(".") != 0) {
            return fileName.substring(fileName.lastIndexOf(".") + 1);
        } else {
            return "";
        }
    }

}
