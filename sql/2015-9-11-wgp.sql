delete from pl_role_limit where m_id='nb0201';
delete from pl_menu where m_id='nb0201';
delete from pl_role_limit where m_id='nb0202';
delete from pl_menu where m_id='nb0202';
delete from pl_role_limit where m_id='nb0203';
delete from pl_menu where m_id='nb0203';
delete from pl_role_limit where m_id='nb0204';
delete from pl_menu where m_id='nb0204';
insert into pl_menu values('nb0201','团体党派','search/ttdp','团体党派','nb0002','99200004','','');
update pl_menu set m_order='99999999' where m_id='pl';
update pl_menu set m_order='99200002' where m_id='nb0002';
create table ZA_TT
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
comment on column ZA_TT.id
  is '单位的主键';
comment on column ZA_TT.pid
  is '序号';
comment on column ZA_TT.mc
  is '单位的名称';
comment on column ZA_TT.dz
  is '单位地址';
comment on column ZA_TT.frdb
  is '主要负责人';
comment on column ZA_TT.frsfz
  is '负责人身份证号';
comment on column ZA_TT.lb
  is '类别';
comment on column ZA_TT.lxfs
  is '联系方式';
comment on column ZA_TT.abfzr
  is '安保负责人';
comment on column ZA_TT.absfzh
  is '安保负责人身份证号';
comment on column ZA_TT.dh
  is '安保负责人联系电话';
comment on column ZA_TT.bars
  is '报案人数';
comment on column ZA_TT.zzzg
  is '在职职工';
comment on column ZA_TT.zrmj
  is '责任民警';
comment on column ZA_TT.zgbm
  is '管辖区域';
comment on column ZA_TT.jd
  is '单位的经度';
comment on column ZA_TT.wd
  is '单位的维度';
comment on column ZA_TT.jz_id
  is '单位的外键建筑的主键';
comment on column ZA_TT.sq_id
  is '单位的外键社区的主键';
comment on column ZA_TT.cjr
  is '创建人';
comment on column ZA_TT.cjrxm
  is '创建人姓名';
comment on column ZA_TT.lrsj
  is '录入时间';
comment on column ZA_TT.bz
  is '备注';
comment on column ZA_TT.hylb
  is '为内部单位';
-- Create/Recreate primary, unique and foreign key constraints 
alter table ZA_TT
  add constraint TT_PK primary key (ID)
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
alter table ZA_TT
  add constraint TT_FK1 foreign key (JZ_ID)
  references SQ_JZ (JZID);
alter table ZA_TT
  add constraint TT_FK2 foreign key (SQ_ID)
  references JW_SQ (SQID);
insert into ST_SERVICE_BEAN values('P30012','addTtdpZa','添加团体党派','Y','za');
insert into ST_SERVICE_BEAN values('P43017','delTtdpZa','删除团体党派','Y','za');
insert into ST_SERVICE_BEAN values('S52002','searchZaTtdp','删除团体党派','Y','search');
insert into ST_SERVICE_BEAN values('P43018','updateTtdpZa','更新团体党派信息','Y','za'); 
update ST_SERVICE_BEAN set bean_name='searchYg' where service_code='S50002';                       