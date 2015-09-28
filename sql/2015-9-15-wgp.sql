insert into pl_menu values('nb0003','教育','','教育','1','nb0000','99300000','','');
insert into pl_menu values('nb0301','学校管理','search/school','学校管理','0','nb0003','99310000','','');
insert into ST_SERVICE_BEAN values('S52004','searchZaDwSchool','查询学校的违章信息','Y','search');  
insert into ST_SERVICE_BEAN values('S52005','searchZaDwYy','查询单位医院的所有信息','Y','search');    
insert into ST_SERVICE_BEAN values('S44101','searchSchoolJdDetail','查询学校监督的详细情况','Y','za');  
insert into ST_SERVICE_BEAN values('P44100','addSchoolJdZa','查询学校的监督信息','Y','za');   
insert into ST_SERVICE_BEAN values('S44102','delSchoolJdDetail','删除学校监督管理信息','Y','za');    
insert into ST_SERVICE_BEAN values('P44103','updateSchoolJdDetailZa','更新学校监督信息','Y','za');    
insert into pl_menu values('nb0004','医疗卫生','','医疗卫生','1','nb0000','99400000','','');
insert into pl_menu values('nb0401','医院综合管理','search/zhyy','医院综合管理','0','nb0004','99410000','','');
create table ZA_SCHOOLJD
(
  id   VARCHAR2(30) not null,
  mc   VARCHAR2(200),
  dz   VARCHAR2(200),
  jd1  VARCHAR2(2),
  jd2  VARCHAR2(2),
  jd3  VARCHAR2(2),
  jd4  VARCHAR2(2),
  jd5  VARCHAR2(2),
  jd6  VARCHAR2(2),
  jd7  VARCHAR2(2),
  jd8  VARCHAR2(2),
  jd9  VARCHAR2(2),
  jd10 VARCHAR2(2),
  jd11 VARCHAR2(2),
  jd12 VARCHAR2(2),
  jd13 VARCHAR2(2),
  jd14 VARCHAR2(2),
  fid  VARCHAR2(30)
);
-- Add comments to the columns 
comment on column ZA_SCHOOLJD.id
  is '学校监督表的主码';
comment on column ZA_SCHOOLJD.mc
  is '学校的名称';
comment on column ZA_SCHOOLJD.dz
  is '学校的地址';
comment on column ZA_SCHOOLJD.jd1
  is '监督1';
comment on column ZA_SCHOOLJD.fid
  is '对应学校的主码';
-- Create/Recreate primary, unique and foreign key constraints 
alter table ZA_SCHOOLJD
  add constraint ZA_SCHOOLJD_PK primary key (ID);
alter table ZA_SCHOOLJD
  add constraint ZA_SCHOOL_FK foreign key (FID)
  references ZA_DW (ID);