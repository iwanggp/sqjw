/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.pl;

import com.lianzt.commondata.AbstractCommonData;
import com.lianzt.commondata.DataConvertFactory;
import com.soa.service.BaseService;
import java.io.File;
import java.util.Iterator;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * 加载服务执行权限配置文件
 * S11013
 * @author zuotai
 */
@Service
public class LoadServiceLimitPl extends BaseService {

    private final Logger log = LoggerFactory.getLogger(LoadServiceLimitPl.class);
    public static AbstractCommonData serviceLimit = DataConvertFactory.getInstanceEmpty();      //保存service-limit.xml配置文件信息

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        String webInf = inHead.getStringValue("_web_inf");
        log.debug("web-inf path : {}", webInf);
        File limitFile = new File(webInf + "service-limit.xml");
        if (limitFile.isFile()) {
            SAXReader reader = new SAXReader();
            log.info("打开配置文件：service-limit.xml");
            try {
                Document document = reader.read(limitFile);
                Element root = document.getRootElement();
                Iterator<Element> rootIterable = root.elementIterator("item");
                if (!rootIterable.hasNext()) {
                    log.info("配置文件为空");
                    return;
                }
                Element itemElement, element;
                AbstractCommonData itemData;
                Iterator<Element> itemIterable;
                while (rootIterable.hasNext()) {
                    itemElement = rootIterable.next();
                    itemData = DataConvertFactory.getInstanceEmpty();
                    serviceLimit.putDataValue(itemElement.attributeValue("service"), itemData);
                    itemIterable = itemElement.elementIterator();
                    while (itemIterable.hasNext()) {
                        element = itemIterable.next();
                        itemData.putStringValue(element.getName(), element.getTextTrim());
                    }
                }
                log.debug("配置文件加载完成：{}", serviceLimit);
            } catch (DocumentException e) {
                log.error("读取配置文件格式错误：", e);
            } catch (Exception e) {
                log.error("加载配置文件时出现异常：", e);
            }

            //如果需要，还可以加载警务室管理部门，用于判断上级部门可修改下级部门的数据
        } else {
            log.error("/WEB-INF/service-limit.xml 文件不存在！");
        }
    }
}
