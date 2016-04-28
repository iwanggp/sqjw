/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.search;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import static javax.swing.text.StyleConstants.Alignment;
import jxl.CellFormat;
import jxl.Workbook;
import jxl.format.Border;
import jxl.format.BorderLineStyle;
import jxl.format.Colour;
import jxl.write.Label;
import jxl.write.WritableCellFormat;
import jxl.write.WritableFont;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * S88888 导出Excel统计数据
 *
 * @author wgp
 */
@Service
public class ExportExcel extends BaseService {

    private final Logger log = LoggerFactory.getLogger(ExportExcel.class);

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
////        byte[] result = null;
//        AbstractCommonData acd = queryData("get_result");
////        WritableWorkbook wwb=null;
////        wwb=Workbook.createWorkbook(acd.getStringValue("count(*)"));
////        WritableSheet sheet = wwb.createSheet("特业场所", 0); 
//        String _acd = acd.toString();
//        log.debug(acd.getStringValue("count(*)") + "----<><><");
//        String[] reslut;
//        byte[] byts;
//        out.putObjectValue("xls_bytes",acd.getStringValue("count(*)").getBytes());
//        out.putObjectValue("xls_bytes","ddd".getBytes());
        String[] title = {"编号", "产品名称", "产品价格", "产品数量", "生产日期", "产地", "是否出口"};
        try {
            // 获得开始时间   
            long start = System.currentTimeMillis();
            // 输出的excel的路径   
            String filePath = "d:\\testJXL.xls";
            // 创建Excel工作薄   
            WritableWorkbook wwb;
            // 新建立一个jxl文件,即在d盘下生成testJXL.xls   
            OutputStream os = new FileOutputStream(filePath);
            wwb = Workbook.createWorkbook(os);
            // 添加第一个工作表并设置第一个Sheet的名字   
            WritableSheet sheet = wwb.createSheet("产品清单", 0);
            Label label;
            for (int i = 0; i < title.length; i++) {
                // Label(x,y,z) 代表单元格的第x+1列，第y+1行, 内容z   
                // 在Label对象的子对象中指明单元格的位置和内容   
                label = new Label(i, 0, title[i]);
                label = new Label(i, 0, title[i], getHeader());
                // 将定义好的单元格添加到工作表中   
                sheet.addCell(label);
            }
             // 下面是填充数据   
              /*   
             * 保存数字到单元格，需要使用jxl.write.Number 
             * 必须使用其完整路径，否则会出现错误 
             * */
            // 填充产品编号   
            jxl.write.Number number = new jxl.write.Number(0, 1, 20071001);
            sheet.addCell(number);
            // 填充产品名称   
            label = new Label(1, 1, "金鸽瓜子");
            sheet.addCell(label);
            /* 
             * 定义对于显示金额的公共格式 
             * jxl会自动实现四舍五入 
             * 例如 2.456会被格式化为2.46,2.454会被格式化为2.45 
             * */
            jxl.write.NumberFormat nf = new jxl.write.NumberFormat("#,###.00");
            jxl.write.WritableCellFormat wcf = new jxl.write.WritableCellFormat(nf);
            // 填充产品价格   
            jxl.write.Number nb = new jxl.write.Number(2, 1, 200000.45, wcf);
            sheet.addCell(nb);
            // 填充产品数量   
            jxl.write.Number numb = new jxl.write.Number(3, 1, 200);
            sheet.addCell(numb);
            /* 
             * 定义显示日期的公共格式 
             * 如:yyyy-MM-dd hh:mm 
             * */
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            String newdate = sdf.format(new Date());
            // 填充出产日期   
            label = new Label(4, 1, newdate);
            sheet.addCell(label);
            // 填充产地   
            label = new Label(5, 1, "陕西西安");
            sheet.addCell(label);
            /* 
             * 显示布尔值 
             * */
            jxl.write.Boolean bool = new jxl.write.Boolean(6, 1, true);
            sheet.addCell(bool);
            /* 
             * 合并单元格 
             * 通过writablesheet.mergeCells(int x,int y,int m,int n);来实现的 
             * 表示将从第x+1列，y+1行到m+1列，n+1行合并 
             *   
             * */
            sheet.mergeCells(0, 3, 2, 3);
            label = new Label(0, 3, "合并了三个单元格");
            sheet.addCell(label);
            /* 
             *   
             * 定义公共字体格式 
             * 通过获取一个字体的样式来作为模板 
             * 首先通过web.getSheet(0)获得第一个sheet 
             * 然后取得第一个sheet的第二列，第一行也就是"产品名称"的字体   
             * */
            CellFormat cf = (CellFormat) wwb.getSheet(0).getCell(1, 0).getCellFormat();
            WritableCellFormat wc = new WritableCellFormat();
            // 设置居中   
//            wc.setAlignment(Alignment.CENTRE);
            // 设置边框线   
            wc.setBorder(Border.ALL, BorderLineStyle.THIN);
            // 设置单元格的背景颜色   
            wc.setBackground(jxl.format.Colour.RED);
            label = new Label(1, 5, "字体", wc);
            sheet.addCell(label);

            // 设置字体   
            jxl.write.WritableFont wfont = new jxl.write.WritableFont(WritableFont.createFont("隶书"), 20);
            WritableCellFormat font = new WritableCellFormat(wfont);
            label = new Label(2, 6, "隶书", font);
            sheet.addCell(label);

            // 写入数据   
            wwb.write();
            // 关闭文件   
            wwb.close();
            long end = System.currentTimeMillis();
            out.putObjectValue("xls_bytes", os.toString().getBytes());
            System.out.println("----完成该操作共用的时间是:" + (end - start) / 1000);
        } catch (Exception e) {
            System.out.println("---出现异常---");
            e.printStackTrace();
        }
    }

    public static WritableCellFormat getHeader() {
        WritableFont font = new WritableFont(WritableFont.TIMES, 10, WritableFont.BOLD);//定义字体
        try {
            font.setColour(Colour.BLUE);//蓝色字体
        } catch (WriteException e1) {
            // TODO 自动生成 catch 块
            e1.printStackTrace();
        }
        WritableCellFormat format = new WritableCellFormat(font);
        try {
            format.setAlignment(jxl.format.Alignment.CENTRE);//左右居中
            format.setVerticalAlignment(jxl.format.VerticalAlignment.CENTRE);//上下居中
            format.setBorder(Border.ALL, BorderLineStyle.THIN, Colour.BLACK);//黑色边框
            format.setBackground(Colour.YELLOW);//黄色背景
        } catch (WriteException e) {
            // TODO 自动生成 catch 块
            e.printStackTrace();
        }
        return format;
    }

}
