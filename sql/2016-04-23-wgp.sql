-- Create table
create table JYPMT_PIC
(
  csid      VARCHAR2(30) not null,
  jypmtpath VARCHAR2(200) not null
);
-- Add comments to the columns 
comment on column JYPMT_PIC.csid
  is '场所的id主键';
comment on column JYPMT_PIC.jypmtpath
  is '图片的路径地址';
-- Create/Recreate primary, unique and foreign key constraints 
alter table JYPMT_PIC
  add constraint JYPMT_PIC_PK primary key (CSID, JYPMTPATH);
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module) values ('P44204', 'addJypmtZa', '添加经营平面图', 'Y', 'za'); 
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module) values ('S44205', 'getJypmtPic', '获得场所的经营平面图', 'Y', 'za'); 
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module) values ('P44206', 'delJypmtPic', '删除经营平面图', 'Y', 'za'); 