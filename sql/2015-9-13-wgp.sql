create table ZA_JCDJ
(
  id    VARCHAR2(30) not null,
  mc    VARCHAR2(200) not null,
  jcr   VARCHAR2(200) not null,
  jcsj  DATE,
  jcnr  VARCHAR2(200),
  czwt  VARCHAR2(200),
  fid   VARCHAR2(30),
  dz    VARCHAR2(200),
  cjr   VARCHAR2(200),
  cjrxm VARCHAR2(200),
  lrsj  DATE
);
-- Add comments to the columns 
comment on column ZA_JCDJ.id
  is '检查登记的主码';
comment on column ZA_JCDJ.mc
  is '被检查单位的名称';
comment on column ZA_JCDJ.jcr
  is '检查人';
comment on column ZA_JCDJ.jcsj
  is '检查时间';
comment on column ZA_JCDJ.jcnr
  is '检查内容';
comment on column ZA_JCDJ.czwt
  is '存在问题';
comment on column ZA_JCDJ.fid
  is '检查单位的主码，该表的外码';
comment on column ZA_JCDJ.dz
  is '检查单位的地址';
comment on column ZA_JCDJ.cjr
  is '创建人';
comment on column ZA_JCDJ.cjrxm
  is '创建人姓名';
comment on column ZA_JCDJ.lrsj
  is '录入时间';
-- Create/Recreate primary, unique and foreign key constraints 
alter table ZA_JCDJ
  add constraint ZA_JCDJ_PK primary key (ID);
insert into ST_SERVICE_BEAN values('S53001','searchZaJcdj','查询特业的检查登记','Y','search'); 
insert into ST_SERVICE_BEAN values('P48002','addJcdjZa','增加特业的检查登记','Y','za'); 
insert into ST_SERVICE_BEAN values('P49002','addWzxxZa','增加特业的违章信息','Y','za'); 
insert into ST_SERVICE_BEAN values('P48003','delJcdjZa','删除特业的检查登记','Y','za');  
insert into ST_SERVICE_BEAN values('P49003','delWzxxZa','删除特业的违章信息','Y','za');  
insert into ST_SERVICE_BEAN values('P48004','updateJcdjZa','修改检查登记信息','Y','za');  
insert into ST_SERVICE_BEAN values('P49004','updateWzxxZa','修改检查登记信息','Y','za');  
insert into ST_SERVICE_BEAN values('S54002','searchZaJcdjinfo','按条件搜索检查登记的详细信息','Y','search');   
insert into ST_SERVICE_BEAN values('S55001','searchZaWzxx','查询特业的违章信息','Y','search'); 
insert into ST_SERVICE_BEAN values('S55002','searchWzxxinfo','查询特业的详细违章信息','Y','search'); 
create table ZA_WZXX
(
  id    VARCHAR2(30) not null,
  mc    VARCHAR2(200) not null,
  clr   VARCHAR2(200) not null,
  wzsj  DATE,
  zgcs  VARCHAR2(200),
  cljg  VARCHAR2(200),
  czwt  VARCHAR2(200),
  fid   VARCHAR2(30),
  dz    VARCHAR2(200),
  cjr   VARCHAR2(200),
  cjrxm VARCHAR2(200),
  lrsj  DATE
);
-- Add comments to the columns 
comment on column ZA_WZXX.id
  is '检查登记的主码';
comment on column ZA_WZXX.mc
  is '被检查单位的名称';
comment on column ZA_WZXX.clr
  is '处理人';
comment on column ZA_WZXX.wzsj
  is '违章时间';
comment on column ZA_WZXX.zgcs
  is '整改措施';
comment on column ZA_WZXX.cljg
  is '处理结果';
comment on column ZA_WZXX.czwt
  is '存在问题';
comment on column ZA_WZXX.fid
  is '检查单位的主码，该表的外码';
comment on column ZA_WZXX.dz
  is '检查单位的地址';
comment on column ZA_WZXX.cjr
  is '创建人';
comment on column ZA_WZXX.cjrxm
  is '创建人姓名';
comment on column ZA_WZXX.lrsj
  is '录入时间';
-- Create/Recreate primary, unique and foreign key constraints 
alter table ZA_WZXX
  add constraint ZA_WZXX_PK primary key (ID);