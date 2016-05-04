/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.search;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import com.soa.util.SystemUtil;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import static javax.swing.text.StyleConstants.Alignment;
import jxl.CellFormat;
import jxl.Workbook;
import jxl.format.Border;
import jxl.format.BorderLineStyle;
import jxl.format.Colour;
import jxl.format.UnderlineStyle;
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

    private Logger log = LoggerFactory.getLogger(ExportExcel.class);

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String[] jwsmc = new String[]{"富鑫警务室", "张庄警务室", "三官庙警务室", "八千警务室", "邢庄警务室", "豫康新城南警务室", "豫康新城北警务室", "港区二中警务室", "赵郭李警务室", "翟庄警务室", "庙后张警务室", "冯庄警务室"};//警务区名称数组
        String[] jwsdm = new String[]{"41016300Q101", "41016300Q107", "41016300Q108", "41016300Q111", "41016300Q112", "41016300Q103", "41016300Q104", "41016300Q106", "41016300Q110", "41016300Q102", "41016300Q105", "41016300Q109"};//对应的警务区名称代码
        String[] heads = new String[]{"旅馆", "物流公司", "娱乐场所", "沿街商铺", "机动车维修", "印刷业", "报废车回收", "寄卖业", "开锁", "汽车租赁", "金银首饰加工", "废金属回收", "公章刻制", "典当"};//表头
        String[] jwsSql = new String[]{"tj_cslg", "tj_wl", "tj_yl", "tj_sp","tj_jdcwx","tj_ysy","tj_bfc","tj_jm","tj_ks","tj_qczl","tj_jyss","tj_fjshs","tj_gzkz","tj_ddxx"};
        String[] sumSql = new String[]{"tj_cslg_sum", "tj_wl_sum", "tj_yl_sum", "tj_sp_sum","tj_jdcwx_sum","tj_ys_sum","tj_bfchs_sum","tj_jm_sum","tj_ks_sum","tj_qczl_sum","tj_jyss_sum","tj_fjshs_sum","tj_gzkz_sum","tj_ddxx_sum"};
        String excelName = "D://table.xls";
        String ks = in.getStringValue("ks");
        String js = in.getStringValue("js");
        try {
            File excelFile = new File(excelName);
            // 如果文件存在就删除它
            if (excelFile.exists()) {
                excelFile.delete();
            }
            // 打开文件
            WritableWorkbook wwb = Workbook.createWorkbook(excelFile);
            WritableSheet wSheet = wwb.createSheet("特种行业", 0);
            wSheet.mergeCells(0, 0, 14, 1);//合并单元格
            WritableFont bold = new WritableFont(WritableFont.ARIAL, 20, WritableFont.BOLD); //设置字体种类和格式
            WritableCellFormat wcfFormat = new WritableCellFormat(bold);
            WritableCellFormat headFormat = new WritableCellFormat();
            headFormat.setAlignment(jxl.format.Alignment.CENTRE);
            wcfFormat.setAlignment(jxl.format.Alignment.CENTRE);//单元格中的内容水平方向居中
            WritableFont bold1 = new WritableFont(WritableFont.ARIAL, 12, WritableFont.BOLD);
            WritableCellFormat lmFormat = new WritableCellFormat(bold1);
            lmFormat.setAlignment(jxl.format.Alignment.LEFT);
            WritableCellFormat lmFormat2 = new WritableCellFormat(bold1);
            lmFormat2.setAlignment(jxl.format.Alignment.CENTRE);
            WritableCellFormat jzFormat = new WritableCellFormat();
            jzFormat.setAlignment(jxl.format.Alignment.CENTRE);
            Label title = new Label(0, 0, ks + "~" + js + "特种行业录入数据统计", wcfFormat);//设置标题名
            wSheet.addCell(title);
            for (int i = 0; i < jwsmc.length; i++) {
                wSheet.mergeCells(0, 0, 1, 3);//合并单元格
                wSheet.setColumnView(0, 40);
                Label jwsLabe = new Label(0, 3 + i, jwsmc[i], lmFormat);
                wSheet.addCell(jwsLabe);

            }
            for (int i = 0; i < heads.length; i++) {
                Label headLabe = new Label(1 + i, 2, heads[i], headFormat);
                wSheet.addCell(headLabe);
                wSheet.setColumnView(0, 20);
            }
            tjJws(wSheet, jwsSql, jwsdm, ks, js, headFormat);
            Label sum = new Label(0, 15, "总和", lmFormat);
            sumHz(wSheet, sumSql, ks, js, lmFormat2);
            wSheet.addCell(sum);
            // 写入数据并关闭文件
            wwb.write();
            wwb.close();
            System.out.println("Excel创建成功");
        } catch (Exception e) {
            System.out.println(e);
        }
        FileInputStream fis = null;
        try {
            fis = new FileInputStream(excelName);
            byte[] buff = new byte[1024 * 1024];
            byte[] result = null;
            int len = 0;
            while ((fis.read(buff) != -1)) {
                out.putObjectValue("xls_bytes", buff);
            }
        } catch (IOException ex) {
            java.util.logging.Logger.getLogger(ExportExcel.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            try {
                fis.close();
            } catch (IOException ex) {
                java.util.logging.Logger.getLogger(ExportExcel.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    /**
     * 统计各个行业的总和数目
     */
    private void sumHz(WritableSheet wSheet, String[] sqls, String ks, String js, WritableCellFormat lmFormat2) throws WriteException {
        for (int i = 0; i < sqls.length; i++) {
            AbstractCommonData sumResult = queryData(sqls[i], new Object[]{ks, js});
            Label sumLg = new Label(i + 1, 15, sumResult.getStringValue("count(*)"), lmFormat2);
            wSheet.addCell(sumLg);
        }
    }

    /**
     * 统计各个警务室录入的信息
     */
    private void tjJws(WritableSheet wSheet, String[] sqls, String[] jwsdm, String ks, String js, WritableCellFormat headFormat) throws WriteException {
        for (int j = 0; j < sqls.length; j++) {
            for (int i = 0; i < jwsdm.length; i++) {
                List<AbstractCommonData> acd = queryList(sqls[j], new Object[]{jwsdm[i], ks, js});//统计各个部门录入旅馆的数目
                for (AbstractCommonData _acd : acd) {
                    String result = _acd.getStringValue("count(*)");
                    Label headLabe = new Label(1 + j, 3 + i, result, headFormat);
                    wSheet.addCell(headLabe);
                    wSheet.setColumnView(0, 20);
                }
            }
        }
    }

}
