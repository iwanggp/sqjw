/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.controller.sqjw;

import com.lianzt.commondata.AbstractCommonData;
import com.lianzt.commondata.DataConvertFactory;
import com.lianzt.util.StringUtil;
import com.soa.controller.SystemController;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import com.soa.util.AjaxUtil;
import com.soa.util.SystemUtil;
import java.io.PrintWriter;
import java.util.Date;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author wgp
 */
@Controller
public class SqjwController {

    @Resource
    private SystemController systemController;
    private final Logger log = LoggerFactory.getLogger(SqjwController.class);

    /**
     * ajax请求的分发器，处理所有的ajax请求
     *
     * @param request
     * @param out
     * @param serviceCode
     */
    @RequestMapping(value = "/ajax-sqjw", method = RequestMethod.POST)
    public void ajaxServicePost(HttpServletRequest request, PrintWriter out) {
        AbstractCommonData req = null;
        AbstractCommonData reqHead = null;
        AbstractCommonData res = null;
        req = (AbstractCommonData) request.getAttribute("page_data");
        reqHead = req.getDataValue("head");
        try {
            String serviceCode = reqHead.getStringValue("service_code");
            if (StringUtil.notNull(serviceCode) && serviceCode.startsWith("P")) {
                req.putStringValue("_service", serviceCode);        //原service_code做为参数
                BaseService.runService(req, "S11014");
                reqHead.putStringValue("service_code", serviceCode);        //放回原service_code
            }
            systemController.ajaxServicePost(request, out);
        } catch (GlobalException ge) {
            if (ge.getErrorCode() > 900000) {
                log.warn("系统异常：" + ge);
                log.debug("系统异常: ", ge);
            } else {
                log.warn("error warn:" + ge);
            }
            res = SystemUtil.creatErrorCommonData(ge);
        } catch (Exception e) {
            log.warn("系统未知异常：" + e);
            log.debug("系统未知异常: ", e);
            res = SystemUtil.creatErrorCommonData(new GlobalException(999999));
        } finally {
            if (res != null) {
                AjaxUtil.sendJsonData(out, res);
            } else {
                log.error("响应报文为空！");
            }
        }

    }
}
