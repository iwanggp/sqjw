/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import static com.soa.service.BaseService.getSession;
import com.soa.util.SystemUtil;
import com.soa.util.sqjw.SqjwUtil;
import java.io.IOException;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P30016 更新辅助力量信息
 *
 * @author wgp
 */
@Service
public class UpdateDwZaFzll extends BaseService {

    private final String[] KEY = {
        "id", "主码"};
    private final Logger log = LoggerFactory.getLogger(UpdateDwZaFzll.class);

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        update("update_za_fzll", in);

    }
}
