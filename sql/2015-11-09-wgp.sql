ALTER TABLE SQ_JZ MODIFY SQ_ID NULL;
alter table SQ_JZ add jzdzbm varchar(30);
comment on column SQ_JZ.jzdzbm is '标准地址编码';
ALTER TABLE SQ_JZ MODIFY SQ_ID NULL;
alter table ZA_ZJH add jzdzbm varchar(30);
comment on column ZA_ZJH.jzdzbm is '标准地址编码';
alter table ZA_ZJH add dyh varchar(30);
comment on column ZA_ZJH.dyh is '单元号';
alter table ZA_ZJH add dyhbm varchar(2);
comment on column ZA_ZJH.dyhbm is '单元号编码';
alter table ZA_ZJH add sh varchar(2);
comment on column ZA_ZJH.sh is '室号';
alter table ZA_ZJH add dyhbm varchar(2);
comment on column ZA_ZJH.dyhbm is '单元号编码';
alter table ZA_ZJH add hzlb varchar(2) ;
comment on column ZA_ZJH.hzlb is '户主类别';
ALTER TABLE ZA_CS MODIFY SQ_ID NULL;
ALTER TABLE ZA_CS MODIFY JZ_ID NULL;
alter table ZA_CS add FW_ID varchar(30) ;
comment on column ZA_CS.fw_id is '所属房屋的id';
ALTER TABLE ZA_DW MODIFY SQ_ID NULL;
ALTER TABLE ZA_DW MODIFY JZ_ID NULL;
alter table ZA_DW add FW_ID varchar(30) ;
comment on column ZA_DW.fw_id is '所属房屋的id';
ALTER TABLE ZA_LG MODIFY SQ_ID NULL;
ALTER TABLE ZA_LG MODIFY JZ_ID NULL;
alter table ZA_LG add FW_ID varchar(30) ;
comment on column ZA_LG.fw_id is '所属房屋的id';
ALTER TABLE ZA_SP MODIFY SQ_ID NULL;
ALTER TABLE ZA_SP MODIFY JZ_ID NULL;
alter table ZA_SP add FW_ID varchar(30) ;
comment on column ZA_SP.fw_id is '所属房屋的id';
ALTER TABLE ZA_WB MODIFY SQ_ID NULL;
ALTER TABLE ZA_WB MODIFY JZ_ID NULL;
alter table ZA_WB add FW_ID varchar(30) ;
comment on column ZA_WB.fw_id is '所属房屋的id';
ALTER TABLE ZA_WL MODIFY SQ_ID NULL;
ALTER TABLE ZA_WL MODIFY JZ_ID NULL;
alter table ZA_WL add FW_ID varchar(30) ;
comment on column ZA_WL.fw_id is '所属房屋的id';
ALTER TABLE ZA_YL MODIFY SQ_ID NULL;
ALTER TABLE ZA_YL MODIFY JZ_ID NULL;
alter table ZA_YL add FW_ID varchar(30) ;
comment on column ZA_YL.fw_id is '所属房屋的id';
ALTER TABLE ZA_TT MODIFY SQ_ID NULL;
ALTER TABLE ZA_TT MODIFY JZ_ID NULL;
alter table ZA_TT add FW_ID varchar(30) ;
comment on column ZA_TT.fw_id is '所属房屋的id';
alter table JW_SQ add jzdzbm varchar(30);
comment on column JW_SQ.jzdzbm is '标准地址编码';
ALTER TABLE SQ_JZ MODIFY lxfs NULL;
alter table SQ_JZ add hs varchar(10) ;
comment on column SQ_JZ.hs is '户数';
insert into ST_SERVICE_BEAN values('S70001','getFwInfo','搜索建筑内房屋信息','Y','fw');
alter table ZA_ZJH add hs varchar(10) ;
comment on column ZA_ZJH.hs is '户数';
alter table ZA_ZJH add syrdw varchar(200) ;
comment on column ZA_ZJH.syrdw is '所有人或单位联系人';
alter table ZA_ZJH add syrzjhm varchar(18) ;
comment on column ZA_ZJH.syrzjhm is '所有人的证件号码';
alter table ZA_ZJH add syrdwlxdh varchar(18) ;
comment on column ZA_ZJH.syrdwlxdh is '所有人的联系电话';
insert into ST_SERVICE_BEAN values('P70002','updataFwInfo','更新房屋信息','Y','fw');
alter table ZA_FZLL add FW_ID varchar(30) ;
comment on column ZA_FZLL.fw_id is '所属房屋的id';
insert into ST_SERVICE_BEAN values('S70003','getFwRk','查询房屋内的人员信息','Y','fw');
alter table SQ_JZ modify(MPBM varchar(50))
alter table ZA_SCHOOLJD add zgbm varchar(30);
comment on column ZA_SCHOOLJD.zgbm is '所属警务室';
alter table ZA_YYJD add zgbm varchar(30);
comment on column ZA_YYJD.zgbm is '所属警务室';
alter table ZA_JCDJ add zgbm varchar(30);
comment on column ZA_JCDJ.zgbm is '所属警务室';
alter table ZA_WZXX add zgbm varchar(30);
comment on column ZA_WZXX.zgbm is '所属警务室';
alter table ZA_YG add zgbm varchar(30);
comment on column ZA_YG.zgbm is '所属警务室';