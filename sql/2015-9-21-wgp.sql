insert into pl_menu values('fz0101','辅助管理管理','search/fzllcx','辅助管理管理','0','fz0000','99310002','','');  
insert into pl_menu values('rk','人口管理','','人口管理','1','','99999997','','');  
create table ZA_FZLL
(
  id    VARCHAR2(30) not null,
  mc    VARCHAR2(200) not null,
  fzlx   VARCHAR2(80) not null,
  zgbm  VARCHAR2(200),
  frdb  VARCHAR2(200),
  lxfs   VARCHAR2(30),
  dz    VARCHAR2(200),
  jd   VARCHAR2(200),
   wd  VARCHAR2(200),
bz VARCHAR2(200),
  cjr   VARCHAR2(200),
  cjrxm VARCHAR2(200),
hylb VARCHAR2(200),
  lrsj  DATE,
jz_id  VARCHAR2(30) not null,
  sq_id  VARCHAR2(200) not null,
rs NUMBER
);
-- Add comments to the columns 
comment on column ZA_FZLL.id
  is '辅助力量主码';
comment on column ZA_FZLL.mc
  is '辅助力量单位的名称';
comment on column ZA_FZLL.fzlx
  is '辅助类型';
comment on column ZA_FZLL.zgbm
  is '主管公安机关';
comment on column ZA_FZLL.frdb
  is '负责人';
comment on column ZA_FZLL.lxfs
  is '联系电话';
comment on column ZA_FZLL.dz
  is '地址';
comment on column ZA_FZLL.jd
  is '经度';
comment on column ZA_FZLL.wd
  is '维度';
comment on column ZA_FZLL.bz
  is '备注';
comment on column ZA_FZLL.cjr
  is '创建人';
comment on column ZA_FZLL.cjrxm
  is '创建人姓名';
comment on column ZA_FZLL.hylb
  is '行业类别';
comment on column ZA_FZLL.lrsj
  is '录入时间';
comment on column ZA_FZLL.jz_id
  is '辅助力量外键建筑的主键';
comment on column ZA_FZLL.sq_id
  is '辅助力量的外键社区的主键';
comment on column ZA_FZLL.rs
  is '辅助力量的人员总数';
-- Create/Recreate primary, unique and foreign key constraints 
alter table ZA_FZLL
  add constraint ZA_FZLL_PK primary key (ID);
alter table ZA_FZLL
  add constraint ZA_FZLL_FK1 foreign key (JZ_ID)
  references SQ_JZ (JZID);
alter table ZA_FZLL
  add constraint ZA_FZLL_FK2 foreign key (SQ_ID)
  references JW_SQ (SQID);
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_fzll', 'fzlx', '0', '辅助力量类型', '治保会');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_fzll', 'fzlx', '1', '辅助力量类型', '社区保安队');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_fzll', 'fzlx', '2', '辅助力量类型', '社区联防队');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_fzll', 'fzlx', '3', '辅助力量类型', '联防单位');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_fzll', 'fzlx', '4', '辅助力量类型', '(暂住)流动人口管理站');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_fzll', 'fzlx', '5', '辅助力量类型', '(其他辅助管理力量');
insert into ST_SERVICE_BEAN values('P30014','addFzllZa','添加辅助力量','Y','za');   
insert into ST_SERVICE_BEAN values('P30015','delFzllZa','删除辅助力量信息','Y','za');     
insert into ST_SERVICE_BEAN values('P30016','updateDwZaFzll','更新辅助力量信息','Y','za'); 
insert into ST_SERVICE_BEAN values('S53101','searchZaFzll','查询辅助力量的所有信息','Y','za'); 
alter table za_dw add  dqrq date;
update  PL_MENU set m_name='消防安检合格证到期查看',m_url='search/ajhgz',m_title='消防安检合格证到期管理' where m_id='ly0000';
insert into pl_menu values('ly0101','消防安检合格证管理','search/ajhgz','消防安检合格证管理','0','ly0000','99610002','','');  
insert into ST_SERVICE_BEAN values('S54000','getAjhgzdqZa','查询安检合格证到期','Y','search');    