insert into pl_menu values('rk','人口管理','','人口管理','1','','99999997','','');   
insert into pl_menu values('rk0101','实有人口管理','search/fzllcx','实有人口管理','0','fz0000','99310002','',''); 
insert into ST_SERVICE_BEAN values('S31006','getFzZjh','获得这个房子居住人口信息','Y','fz');    
insert into ST_SERVICE_BEAN values('P31005','addFzZjh','添加房子的住家户信息','Y','fz');     
insert into ST_SERVICE_BEAN values('P43115','delDwZaSsrk','删除实有人口的信息','Y','za');   
insert into ST_SERVICE_BEAN values('P31008','updateFzZjh','修改房子住家户的信息','Y','fz');   
alter table ZA_ZJH add fzsfzh varchar(30);
create table ZA_SSRK
(
  id       VARCHAR2(30) not null,
  xm       VARCHAR2(200) not null,
  zym      VARCHAR2(200),
  xb       VARCHAR2(2),
  csrq     DATE,
  whcd     VARCHAR2(8),
  zw       VARCHAR2(200),   
  zzmm     VARCHAR2(200),
  jtdz     VARCHAR2(200),
  lxdh     VARCHAR2(200),
  bz       VARCHAR2(200),
  yg_sq_id VARCHAR2(30) not null,
  yg_fz_id VARCHAR2(30) not null,
  yg_jz_id VARCHAR2(30) not null,
  wd       VARCHAR2(200) not null,
  jd       VARCHAR2(200) not null,
  gzdw     VARCHAR2(200),
  lrsj     DATE,
  cjrxm    VARCHAR2(200),
  cjr      VARCHAR2(200),
  sfzh     VARCHAR2(20) not null,
  mz       VARCHAR2(2),
  hyzk     VARCHAR2(2),
  sg       NUMBER,
  rylb     VARCHAR2(2),
  fzgx     VARCHAR2(50),
  fzid     VARCHAR2(30),
  hylb     VARCHAR2(30) not null,
  zgbm     VARCHAR2(200)
);
-- Add comments to the table 
comment on table ZA_SSRK
  is '治安-实有人口管理';
-- Add comments to the columns 
comment on column ZA_SSRK.id
  is '人员的主码';
comment on column ZA_SSRK.xm
  is '姓名';
comment on column ZA_SSRK.zym
  is '曾用名';
comment on column ZA_SSRK.xb
  is '性别';
comment on column ZA_SSRK.csrq
  is '出生日期';
comment on column ZA_SSRK.whcd
  is '文化程度';
comment on column ZA_SSRK.zw
  is '职务';
comment on column ZA_SSRK.zzmm
  is '政治面貌';
comment on column ZA_SSRK.jtdz
  is '家庭地址';
comment on column ZA_SSRK.lxdh
  is '联系电话';
comment on column ZA_SSRK.bz
  is '备注';
comment on column ZA_SSRK.yg_sq_id
  is '人员所在的社区id';
comment on column ZA_SSRK.yg_fz_id
  is '人员所在房子的id';
comment on column ZA_SSRK.yg_jz_id
  is '人员所在的建筑id';
comment on column ZA_SSRK.wd
  is '人员所在的维度';
comment on column ZA_SSRK.jd
  is '人员所在的经度';
comment on column ZA_SSRK.gzdw
  is '工作单位';
comment on column ZA_SSRK.lrsj
  is '录入时间';
comment on column ZA_SSRK.cjrxm
  is '创建人姓名';
comment on column ZA_SSRK.cjr
  is '创建人';
comment on column ZA_SSRK.sfzh
  is '人员的身份证号码';
comment on column ZA_SSRK.mz
  is '民族';
comment on column ZA_SSRK.hyzk
  is '婚姻状况';
comment on column ZA_SSRK.sg
  is '身高';
comment on column ZA_SSRK.rylb
  is '人员行业';
comment on column ZA_SSRK.fzgx
  is '与房主的关系';
comment on column ZA_SSRK.fzid
  is '房主的id';
comment on column ZA_SSRK.hylb
  is '为人口实有信息';
comment on column ZA_SSRK.zgbm
  is '管辖公安机关';
-- Create/Recreate primary, unique and foreign key constraints 
alter table ZA_SSRK
  add constraint SSRK_ID_PK primary key (ID);
alter table ZA_SSRK
  add constraint SSRK_JZ_ID_FK foreign key (YG_JZ_ID)
  references SQ_JZ (JZID);
alter table ZA_SSRK
  add constraint SSRK_SQ_ID_FK foreign key (YG_SQ_ID)
  references JW_SQ (SQID);
insert into PL_MENU values('rk0000','实有人口管理','','实有人口管理','1','rk','99600001','','');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssrk', 'rylb', '0', '人员类别', '暂住人口');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssrk', 'rylb', '1', '人员类别', '常住人口');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssrk', 'rylb', '3', '人员类别', '其它');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssrk', 'fzgx', '0', '与房主关系', '本人');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssrk', 'fzgx', '1', '与房主关系', '妻子');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssrk', 'fzgx', '2', '与房主关系', '儿子');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssrk', 'fzgx', '3', '与房主关系', '女儿');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssrk', 'fzgx', '4', '与房主关系', '父亲');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssrk', 'fzgx', '5', '与房主关系', '母亲');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssrk', 'fzgx', '6', '与房主关系', '其他');
alter table ZA_YG add hylb varchar(200);