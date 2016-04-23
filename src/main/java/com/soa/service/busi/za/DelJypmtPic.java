/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.za;
import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import static com.soa.service.BaseService.getSession;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P44206删除经营平面图
 *
 * @author wgp
 */
@Service
public class DelJypmtPic extends BaseService {

    public final String[] KEY = {"jypmtpath", "图片路径",};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        update("del_jypmt_pic", in.getStringValue("jypmtpath"));
    }

}
