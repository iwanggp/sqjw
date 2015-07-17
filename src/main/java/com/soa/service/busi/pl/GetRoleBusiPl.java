/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.pl;

import com.lianzt.commondata.AbstractCommonData;
import com.lianzt.commondata.DataConvertFactory;
import com.soa.service.BaseService;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * S11011
 * 获取角色业务
 * @author zuotai
 */
@Service
public class GetRoleBusiPl extends BaseService {

    private final String[] KEY = {"role_id", "角色ID"};
    private static final Logger log = LoggerFactory.getLogger(GetRoleBusiPl.class);

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        List<AbstractCommonData> allBusi = queryList("get_all_busi_pl");
        out.putArrayValue("busis", margeBusi(allBusi));       //整理树结构
        out.putArrayValue("role_busi", queryList("get_role_busi_pl", in));
    }

    /**
     * 把线型的业务详细合并为树型，树的第一层为业务信息，树的第二层为流程信息
     * @param list
     * @return 合并后的数据，可用于生成授权树
     */
    public static List<AbstractCommonData> margeBusi(List<AbstractCommonData> list) {
        Map<String, AbstractCommonData> map = new HashMap<String, AbstractCommonData>();
        AbstractCommonData busi = null;     //树的第一层，业务信息
        AbstractCommonData step = null;     //树的第二层，流程信息
        List<AbstractCommonData> stepList = null;
        for (AbstractCommonData acd : list) {
            busi = map.get(acd.getStringValue("busi_id"));
            if (busi == null) {
                //树的第一层
                busi = DataConvertFactory.getInstanceEmpty();
                map.put(acd.getStringValue("busi_id"), busi);
                busi.put("busi_id", acd.get("busi_id"));
                busi.put("title", acd.get("title"));
                busi.put("intro", acd.get("intro"));
                busi.put("datum", acd.get("datum"));
                busi.put("fee", acd.get("fee"));
                busi.put("hy_level", acd.get("hy_level"));
                busi.putArrayValue("steps", new ArrayList<AbstractCommonData>());
            }
            //树的第二层
            stepList = busi.getArrayValue("steps");     //树的第二层
            step = DataConvertFactory.getInstanceEmpty();
            stepList.add(step);
            step.put("busi_id", acd.get("busi_id"));
            step.put("step_id", acd.get("step_id"));
            step.put("step_title", acd.get("step_title"));
            step.put("step_intro", acd.get("step_intro"));
            step.put("step_datum", acd.get("step_datum"));
        }
        List<AbstractCommonData> busiList = new ArrayList<AbstractCommonData>(map.values());
        log.debug("树结构：{}", busiList);
        return busiList;
    }
}
