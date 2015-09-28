alter table JW_SQ add xzqh varchar(200);
alter table JW_SQ add jcrq date;
alter table JW_SQ add lds number;
alter table JW_SQ add dys number;
alter table JW_SQ add dms number;
alter table JW_SQ add zhs number;
alter table JW_SQ add lzhs number;
alter table JW_SQ add rks number;
alter table JW_SQ add kfs varchar(200);
alter table JW_SQ add wygs varchar(200);
alter table JW_SQ add abfzr varchar(200);
alter table JW_SQ add ablxdh varchar(200);
alter table JW_SQ add bars number;
create table ZA_DW
(
  id     VARCHAR2(30) not null,
  pid    VARCHAR2(200),
  mc     VARCHAR2(200) not null,
  dz     VARCHAR2(200) not null,
  frdb   VARCHAR2(200),
  frsfz  VARCHAR2(20),
  lb     VARCHAR2(20),
  lxfs   VARCHAR2(20),
  abfzr  VARCHAR2(200),
  absfzh VARCHAR2(20),
  dh     VARCHAR2(200),
  bars   NUMBER,
  zzzg   NUMBER,
  zrmj   VARCHAR2(200),
  zgbm   VARCHAR2(200),
  jd     VARCHAR2(200),
  wd     VARCHAR2(200),
  jz_id  VARCHAR2(200),
  sq_id  VARCHAR2(200),
  cjr    VARCHAR2(200),
  cjrxm  VARCHAR2(200),
  lrsj   DATE,
  bz     VARCHAR2(200),
  hylb   VARCHAR2(30)
);
-- Add comments to the columns 
comment on column ZA_DW.id
  is '单位的主键';
comment on column ZA_DW.pid
  is '序号';
comment on column ZA_DW.mc
  is '单位的名称';
comment on column ZA_DW.dz
  is '单位地址';
comment on column ZA_DW.frdb
  is '主要负责人';
comment on column ZA_DW.frsfz
  is '负责人身份证号';
comment on column ZA_DW.lb
  is '类别';
comment on column ZA_DW.lxfs
  is '联系方式';
comment on column ZA_DW.abfzr
  is '安保负责人';
comment on column ZA_DW.absfzh
  is '安保负责人身份证号';
comment on column ZA_DW.dh
  is '安保负责人联系电话';
comment on column ZA_DW.bars
  is '报案人数';
comment on column ZA_DW.zzzg
  is '在职职工';
comment on column ZA_DW.zrmj
  is '责任民警';
comment on column ZA_DW.zgbm
  is '管辖区域';
comment on column ZA_DW.jd
  is '单位的经度';
comment on column ZA_DW.wd
  is '单位的维度';
comment on column ZA_DW.jz_id
  is '单位的外键建筑的主键';
comment on column ZA_DW.sq_id
  is '单位的外键社区的主键';
comment on column ZA_DW.cjr
  is '创建人';
comment on column ZA_DW.cjrxm
  is '创建人姓名';
comment on column ZA_DW.lrsj
  is '录入时间';
comment on column ZA_DW.bz
  is '备注';
comment on column ZA_DW.hylb
  is '为内部单位';
-- Create/Recreate primary, unique and foreign key constraints 
alter table ZA_DW
  add constraint DW_PK primary key (ID)
  using index ;
--   tablespace IPT_DATA
--   pctfree 10
--   initrans 2
--   maxtrans 255
--   storage
--   (
--     initial 64K
--     minextents 1
--     maxextents unlimited
--   );
alter table ZA_DW
  add constraint DW_FK1 foreign key (JZ_ID)
  references SQ_JZ (JZID);
alter table ZA_DW
  add constraint DW_FK2 foreign key (SQ_ID)
  references JW_SQ (SQID);
delete from PL_ROLE_LIMIT where m_id='nb0107';
delete from PL_MENU where m_id='nb0107';
delete from PL_ROLE_LIMIT where m_id='nb0105';
delete from PL_MENU where m_id='nb0105';
delete from PL_ROLE_LIMIT where m_id='nb0101';
delete from PL_MENU where m_id='nb0101';
delete from PL_ROLE_LIMIT where m_id='nb0102';
delete from PL_MENU where m_id='nb0102';
delete from PL_ROLE_LIMIT where m_id='nb0103';
delete from PL_MENU where m_id='nb0103';
delete from PL_ROLE_LIMIT where m_id='nb0106';
delete from PL_MENU where m_id='nb0106';
delete from PL_ROLE_LIMIT where m_id='nb0108';
delete from PL_MENU where m_id='nb0108';
insert into st_service_bean(service_code,bean_name,service_desc,is_login,module) values('P30011','addDwZa','增加单位','Y','za') ;
insert into ST_SERVICE_BEAN values('P43015','delDwZa','删除治安下单位信息','Y','za');
insert into ST_SERVICE_BEAN values('P43016','updateDwZa','更新治安下单位信息','Y','za');
insert into ST_SERVICE_BEAN values('S52001','searchZaDw','查询单位的所有信息','Y','search') ;
insert into ST_SERVICE_BEAN values('P44001','addDzZa','添加治安地址信息','Y','za');
insert into ST_SERVICE_BEAN values('P44002','searchDzZa','查询地址信息','Y','za');
insert into ST_SERVICE_BEAN values('S53001','searchZaDz','搜索地址信息','Y','search');
insert into ST_SERVICE_BEAN values('P44002','delDzZa','删除地址详细信息','Y','za');
insert into ST_SERVICE_BEAN values('P44003','updateDzZa','修改地址详细信息','Y','za');
insert into pl_menu values('dz','标准地址管理','','标准地址管理','1','','9930000','','');
insert into pl_menu values('dz0001','标准地址管理','','标准地址管理','1','dz','9930001','','');

create table JW_DZ
(
  id     VARCHAR2(30) not null,
  dz     VARCHAR2(200) not null,
  xzq    VARCHAR2(200),
  xzmc   VARCHAR2(200),
  jlxmc  VARCHAR2(200),
  mph    VARCHAR2(200),
  xqz    VARCHAR2(200),
  lh     VARCHAR2(30),
  dzjc   VARCHAR2(200),
  dws    NUMBER,
  mchs   NUMBER,
  lcs    NUMBER,
  dxcs   NUMBER,
  dzyt   VARCHAR2(200),
  jzjg   VARCHAR2(200),
  kfs    VARCHAR2(200),
  wygldw VARCHAR2(200),
  xfdj   VARCHAR2(30),
  zbdw   VARCHAR2(200),
  cjr    VARCHAR2(200),
  cjrxm  VARCHAR2(200),
  lrsj   DATE,
  hylb   VARCHAR2(30)
);
-- Add comments to the columns 
comment on column JW_DZ.id
  is '标准地址的主码';
comment on column JW_DZ.dz
  is '标准地址详细地址';
comment on column JW_DZ.xzq
  is '行政区';
comment on column JW_DZ.xzmc
  is '乡镇名称';
comment on column JW_DZ.jlxmc
  is '街路巷名称';
comment on column JW_DZ.mph
  is '门牌号';
comment on column JW_DZ.xqz
  is '小区组';
comment on column JW_DZ.lh
  is '楼号';
comment on column JW_DZ.dzjc
  is '地址简称';
comment on column JW_DZ.dws
  is '单元数';
comment on column JW_DZ.mchs
  is '每单元每层户数';
comment on column JW_DZ.lcs
  is '楼层数';
comment on column JW_DZ.dxcs
  is '地下层数';
comment on column JW_DZ.dzyt
  is '地址用途';
comment on column JW_DZ.jzjg
  is '建筑结构';
comment on column JW_DZ.kfs
  is '开发商';
comment on column JW_DZ.wygldw
  is '物业管理单位';
comment on column JW_DZ.xfdj
  is '消防等级';
comment on column JW_DZ.zbdw
  is '治保单位';
comment on column JW_DZ.cjr
  is '创建人';
comment on column JW_DZ.cjrxm
  is '创建人姓名';
comment on column JW_DZ.lrsj
  is '录入时间';
comment on column JW_DZ.hylb
  is '行业类别';
-- Create/Recreate primary, unique and foreign key constraints 
alter table JW_DZ
  add constraint JW_DZ_PK primary key (ID)
  using index ;
--   tablespace IPT_DATA
--   pctfree 10
--   initrans 2
--   maxtrans 255
--   storage
--   (
--     initial 64K
--     minextents 1
--     maxextents unlimited
--   );
insert into pl_menu values('dz0002','地址管理','search/bzdz','地址管理','0','dz0001','9930002','','');