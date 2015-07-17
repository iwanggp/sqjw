/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.pl;

import com.lianzt.commondata.AbstractCommonData;
import com.lianzt.util.StringUtil;
import com.soa.service.BaseService;
import static com.soa.service.BaseService.getLoginUser;
import java.util.LinkedList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P11014
 * 保存角色业务
 * @author zuotai
 */
@Service
public class SaveRoleBusiPl extends BaseService {

    private final Logger log = LoggerFactory.getLogger(SaveRoleBusiPl.class);
    private final String[] KEY = new String[]{"role_id", "角色编号"};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        update("del_role_busi_pl", in);      //先删除旧数据
        if (StringUtil.isNull(in.getStringValue("busi"))) {
            return;
        }
        String[] busi = in.getStringValue("busi").replace("undefined", "").split(",");     //菜单项
        Object[][] argsArr = new Object[busi.length][4];        //组装参数
        String[] tmp = null;
        String loginUser = getLoginUser(in);
        for (int i = 0; i < argsArr.length; i++) {
            tmp = busi[i].split("-");       //提交的格式是 busi_id + '-' + step_id
            argsArr[i][0] = in.getStringValue("role_id");
            argsArr[i][1] = tmp[0];
            argsArr[i][2] = tmp[1];
            argsArr[i][3] = loginUser;
        }
        batchUpdate("save_role_busi_pl", argsArr);     //插入新的授权
    }
}
