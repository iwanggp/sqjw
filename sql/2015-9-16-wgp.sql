create table ZA_YYJD
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
);
-- Add comments to the columns 
comment on column ZA_YYJD.id
  is '学校监督表的主码';
comment on column ZA_YYJD.mc
  is '学校的名称';
comment on column ZA_YYJD.dz
  is '学校的地址';
comment on column ZA_YYJD.jd1
  is '监督1';
-- Create/Recreate primary, unique and foreign key constraints 
alter table ZA_YYJD
  add constraint ZA_YYJD_PK primary key (ID);
alter table ZA_YYJD
  add constraint ZA_SCHOOL_FK foreign key (FID)
  references ZA_DW (ID);
insert into ST_SERVICE_BEAN values('S44201','searchYyJdDetail','查询医院监督的详细情况','Y','za');  
insert into ST_SERVICE_BEAN values('P44200','addYyJdZa','添加医院的监督信息','Y','za');    
insert into ST_SERVICE_BEAN values('P44202','delYyJdDetail','删除医院监督管理信息','Y','za');    
insert into ST_SERVICE_BEAN values('P44203','updateYyJdDetailZa','更新医院监督信息','Y','za');    
insert into pl_menu values('nb0005','金融证券','','金融证券','1','nb0000','99500000','','');
insert into pl_menu values('nb0501','金融行业管理','search/jrhy','金融行业管理','0','nb0005','99510000','','');
insert into pl_menu values('nb0502','金银珠宝店管理','search/jyzb','金银珠宝店管理','0','nb0005','99510001','','');
insert into ST_SERVICE_BEAN values('S52006','searchZaDwJrhy','查询金融行业的所有信息','Y','search'); 
insert into ST_SERVICE_BEAN values('S52007','searchZaDwJyzb','查询金银珠宝行业的所有信息','Y','search');   