/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.pl;

import com.lianzt.commondata.AbstractCommonData;
import com.lianzt.util.StringUtil;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import static com.soa.service.BaseService.getSession;
import com.soa.util.SystemUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * S11014
 * 检查用户执行服务权限
 * @author zuotai
 */
@Service
public class CheckServiceLimitPl extends BaseService {

    private final String[] KEY = {"_service", "服务码"};
    private final Logger log = LoggerFactory.getLogger(CheckServiceLimitPl.class);

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        if (getSession(in).getStringValue("role_id").equals(SystemUtil.getSysConfig("admin_role"))) {       //管理员权限可以修改所有数据
            return;
        }

        String service = in.getStringValue("_service");
        in.remove("_service");
        AbstractCommonData limitData = LoadServiceLimitPl.serviceLimit.getDataValue(service);       //根据服务码取服务码权限配置
        if (limitData == null || limitData.isEmpty()) {     //如果没有配置，直接跳过
            return;
        }
        log.debug("服务执行权限:{}", limitData);
        String sql = limitData.getStringValue("sql");       //判断时使用的sql
        String id = limitData.getStringValue("id");         //执行sql时需要的参数
        if (StringUtil.isNull(sql) || StringUtil.isNull(id)) {
            throw new GlobalException(300009, service);     //!#!配置格式错误
        }
        String[] sqlArgs = id.split(",");
        Object[] args = new Object[sqlArgs.length];     //从请求报文中获取校验sql的参数
        for (int i = 0; i < sqlArgs.length; i++) {
            args[i] = in.getStringValue(sqlArgs[i]);
        }
        AbstractCommonData acd = queryData(sql, args);      //执行校验sql
        if (acd == null || acd.isEmpty()) {
            throw new GlobalException(300010);      //没有查询到校验数据
        }
        String zgbm = acd.getStringValue(StringUtil.changeNull(limitData.getStringValue("zgbm"), "zgbm"));     //从查询结果中取所属警务室，使用配置文件中的zgbm项，如果配置的zgbm项为空，取默认值：zgbm
        //此处可加入判断上下级部门的功能，上级部门可修改下级部门的数据
        if (StringUtil.notNull(zgbm) && zgbm.equals(getSession(in).getStringValue("ssjws"))) {      //然后跟session中的ssjws进行比较
            log.info("权限验证成功");
        } else {
            throw new GlobalException(300011);        //只能修改自己警务室管理的数据
        }

    }
}
