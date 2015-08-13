/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.util.sqjw;

import com.soa.exception.GlobalException;
import com.soa.util.SystemUtil;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
/**
 *
 * 一个工具类
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

        String serverRoot = SystemUtil.getSysConfig("za0001_server_root");//服务器的根目录
        BufferedOutputStream bos = null;
        String extension = getFileExtension(fileName);
        String line = File.separator;//通用文件分割符
        String _Path = line + serverRoot + line + module_name;
        String rel_path = filepath + _Path;//得到绝对路径
        File newPath = null;
        newPath = new File(rel_path);
        if (!newPath.exists() && !newPath.isDirectory()) {//创建文件夹，如果不存在则创建
            newPath.mkdirs();
        }
        try {
            String dbFileName = SystemUtil.getSerialNum() + "." + extension;
            String dbFilePath = _Path + line + dbFileName;//数据库中要保存的相对路径及文件名
//            dbFilePath = dbFilePath.replaceAll("\\\\", "/");
            String filePath = rel_path + line + dbFileName;//绝对路径，就是要写文件的名字
            bos = new BufferedOutputStream(new FileOutputStream(filePath));     //最终的文件带文件名和扩展名
            bos.write(file);
            bos.flush();
            return dbFilePath;
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
     * 将数据中的相对路径转换成绝对路径
     *
     * @param dbPath
     * @return
     */
    public String getRelPath(String dbPath) {
        String _path = SystemUtil.getSysConfig("za0001_file_path1");
        return _path + dbPath;
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

    public boolean deleteFile(String path) {
        File file = new File(path);
        // 如果文件路径所对应的文件存在，并且是一个文件，则直接删除  
        if (path != null) {
            if (file.exists() && file.isFile()) {
                if (file.delete()) {
                    return true;
                } else {
                    log.debug("error:", "删除文件出错");
                    return false;
                }
            } else {
                return true;//文件不存在
            }
        } else {
            return true;
        }
    }
}
