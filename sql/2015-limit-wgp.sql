alter table pl_user add ssjws varchar(20);
comment on column PL_USER.ssjws is '所属警务室';
alter table pl_user add xgqx varchar(2);
comment on column PL_USER.xgqx is '是否有修改权限';
create table PL_JWS
(
  ssjwqdm VARCHAR2(20) not null,
  jwqmc   VARCHAR2(200) not null,
  ssfj    VARCHAR2(200),
  sspcs   VARCHAR2(200)
)
-- Add comments to the columns 
comment on column PL_JWS.ssjwqdm
  is '警务室的主键警务区代码id';
comment on column PL_JWS.jwqmc
  is '警务区的名称';
comment on column PL_JWS.ssfj
  is '所属大队';
comment on column PL_JWS.sspcs
  is '所属派出所';
-- Create/Recreate primary, unique and foreign key constraints 
alter table PL_JWS
  add constraint JWS_PK primary key (SSJWQDM);
insert into pl_jws values('41016300Q105','郑州市公安局航空港派出所庙后张警务室');
insert into pl_jws values('41016300Q102','郑州市公安局航空港派出所翟庄警务室');
insert into pl_jws values('41016300Q109','郑州市公安局航空港派出所冯庄警务室');
insert into pl_jws values('41016300Q108','郑州市公安局航空港派出所三官庙警务室');
insert into pl_jws values('41016300Q106','郑州市公安局航空港派出所港区二中警务');
insert into pl_jws values('41016300Q104','郑州市公安局航空港派出所豫康新城北区警务室');
insert into pl_jws values('41016300Q103','郑州市公安局航空港派出所豫康新城南区警务室');
insert into pl_jws values('41016300Q107','郑州市公安局航空港派出所张庄警务室');
insert into pl_jws values('41016300Q101','郑州市公安局航空港派出所富鑫小区警务室');
alter table PL_USER
  add constraint pl_user_Fk2 foreign key (SSJWS)
  references pl_jws (SSJWQDM);
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('pl_user', 'xgqx', '0', '修改权限', '无');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('pl_user', 'xgqx', '1', '修改权限', '仅修改');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('pl_user', 'xgqx', '2', '修改权限', '仅删除');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('pl_user', 'xgqx', '3', '修改权限', '修改+删除');