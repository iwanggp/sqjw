insert into ST_SERVICE_BEAN values('S55552','searchRkJz','查询某个建筑内的全部的人口信息','Y','search'); 
insert into ST_SERVICE_BEAN values('S55553','searchRkSsry','查询随从人员的人口信息','Y','search');    
insert into ST_SERVICE_BEAN values('P31105','addFzSsry','添加跟随人员的信息','Y','fz');    
insert into ST_SERVICE_BEAN values('P31107','delFzSsry','删除随行人员的信息','Y','fz');   
insert into ST_SERVICE_BEAN values('P43114','updateSsryZa','更新随行人员的信息','Y','za');    
insert into ST_SERVICE_BEAN values('S99999','searchPeople','查询个人信息信息','Y','search');    
create table ZA_SSRY
(
  id     VARCHAR2(30) not null,
  sfzh   VARCHAR2(18),
  xm     VARCHAR2(30) not null,
  gx     VARCHAR2(4),
  xb     VARCHAR2(2),
  csrq   DATE,
  gssfzh VARCHAR2(18),
  cjr    VARCHAR2(50),
  cjrxm  VARCHAR2(50),
  lrsj   DATE
);
-- Add comments to the columns 
comment on column ZA_SSRY.id
  is '随行人员的id主键';
comment on column ZA_SSRY.sfzh
  is '身份证号';
comment on column ZA_SSRY.xm
  is '姓名';
comment on column ZA_SSRY.gx
  is '家庭关系';
comment on column ZA_SSRY.xb
  is '性别';
comment on column ZA_SSRY.csrq
  is '出生日期';
comment on column ZA_SSRY.gssfzh
  is '跟随人员主码';
comment on column ZA_SSRY.cjr
  is '创建人';
comment on column ZA_SSRY.cjrxm
  is '创建人姓名';
comment on column ZA_SSRY.lrsj
  is '录入时间';
-- Create/Recreate primary, unique and foreign key constraints 
alter table ZA_SSRY
  add constraint ZA_SSRY_PK primary key (ID)
  disable;
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '0', '关系', '夫');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '1', '关系', '妻');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '2', '关系', '独生子');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '3', '关系', '长子');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '4', '关系', '次子');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '5', '关系', '三子');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '6', '关系', '四子');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '7', '关系', '五子');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '8', '关系', '女婿');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '9', '关系', '其他子');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '10', '关系', '独生女');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '11', '关系', '长女');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '12', '关系', '二女');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '13', '关系', '三女');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '14', '关系', '四女');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '15', '关系', '五女');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '16', '关系', '儿媳');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '17', '关系', '其他女儿');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '18', '关系', '孙子');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '19', '关系', '孙女');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '20', '关系', '外孙子');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '21', '关系', '外孙女');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '22', '关系', '其他孙子、孙女或外孙子、外孙女');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '23', '关系', '父亲');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '24', '关系', '母亲');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '25', '关系', '公公');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '26', '关系', '婆婆');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '27', '关系', '岳父');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '28', '关系', '岳母');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '29', '关系', '祖父');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '30', '关系', '祖母');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '31', '关系', '外祖父');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '32', '关系', '外祖母');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '33', '关系', '曾祖父');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '34', '关系', '曾祖母');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '34.', '关系', '兄');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '36', '关系', '嫂');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '37', '关系', '弟');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '38', '关系', '弟媳');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '39', '关系', '姐姐');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '40', '关系', '姐夫');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '41', '关系', '妹妹');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '42', '关系', '妹夫');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '43', '关系', '伯父');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '44', '关系', '伯母');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '45', '关系', '叔父');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '46', '关系', '婶母');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '47', '关系', '舅父');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '48', '关系', '舅母');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '49', '关系', '姨父');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '50', '关系', '姨母');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '51', '关系', '姑父');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '52', '关系', '姑母');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '53', '关系', '侄子');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '54', '关系', '侄女');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '55', '关系', '外甥');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '56', '关系', '外甥女');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '57', '关系', '其他亲属');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '58', '关系', '保姆');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_ssry', 'gx', '59', '关系', '非亲属');
create table ZA_PEOPLE
(
  ID       VARCHAR2(30) not null,
  SFZH    VARCHAR2(18),
  XM    VARCHAR2(60)   not null,
  XMPY    VARCHAR2(50),
  CYM    VARCHAR2(60),
  XB    VARCHAR2(2),
  CSRQ    DATE,
  CZHKDZ    VARCHAR2(180)  ,
  SG    NUMBER(5,1),
  WHCD    VARCHAR2(2),
  FBYQK    VARCHAR2(60),
  yg_sq_id VARCHAR2(30) not null,
  yg_fz_id VARCHAR2(30) not null,
  yg_jz_id VARCHAR2(30) not null,
    wd       VARCHAR2(200) not null,
  jd       VARCHAR2(200) not null,
  ZZMM    VARCHAR2(2),
  DH    VARCHAR2(13),
  SJ    VARCHAR2(11),
  HKSZDLX_DM  VARCHAR2(2),
  HYZK_DM    VARCHAR2(2),
  MZ    VARCHAR2(2)  ,
  XZQH_HJ    VARCHAR2(8),
  HKLB_DM    VARCHAR2(2)  ,
  RYXZ    VARCHAR2(2),
  TZ    VARCHAR2(3),
  TX    VARCHAR2(4),
  LX    VARCHAR2(4),
  ZC    VARCHAR2(8),
  XH    VARCHAR2(8),
  KY    VARCHAR2(8)  ,
  GRZC       VARCHAR2(8),
  SFZYXQ    VARCHAR2(12),
  PCS_MC_HJ  VARCHAR2(128),
  SFZ_YXQ_Z  DATE,
  jzfw       VARCHAR2(2) ,
  jzsy       VARCHAR2(200) ,
  jzrq       DATE ,
njzqx       DATE ,
jzcs_dm    VARCHAR2(200) ,
yfzgx  VARCHAR2(20),
xxdzmc  VARCHAR2(200) ,
xgy     VARCHAR2(200),
gdgzdwbz VARCHAR2(2),
ygdwmc   VARCHAR2(200),
fwdw_xzqh   VARCHAR2(200),
fwdw_jws   VARCHAR2(200),
xcszy   VARCHAR2(200),
rzrq       DATE ,
bm   VARCHAR2(200),
zw   VARCHAR2(200),
hyzmh   VARCHAR2(200),
etsfyfjz VARCHAR2(2),
xyznsl NUMBER,
jnkssj DATE,
jnjssj DATE,
ylbx_0 VARCHAR2(2),
ylbx_1 VARCHAR2(2),
sybx_0 VARCHAR2(2),
gsbx VARCHAR2(2),
sybx_1 VARCHAR2(2),
lrsj DATE,
ZP BLOB
); 
-- Add comments to the table
comment on table ZA_PEOPLE
  is '治安-实有人口管理';
-- Add comments to the columns
comment on column ZA_PEOPLE.id
  is '人员的主码';
comment on column ZA_PEOPLE.SFZH
  is '身份证号';
comment on column ZA_PEOPLE.XM
  is '姓名';
comment on column ZA_PEOPLE.XMPY
  is '姓名拼音';
comment on column ZA_PEOPLE.CYM
  is '曾用名';
comment on column ZA_PEOPLE.XB
  is '性别';
comment on column ZA_PEOPLE.CSRQ
  is '出生日期';
comment on column ZA_PEOPLE.CZHKDZ
  is '常住户口地';
comment on column ZA_PEOPLE.SG
  is '身高';
comment on column ZA_PEOPLE.WHCD
  is '文化程度';
comment on column ZA_PEOPLE.FBYQK
  is '服兵役情况';
comment on column ZA_PEOPLE.yg_sq_id
  is '人员所在的社区id';
comment on column ZA_PEOPLE.yg_fz_id
  is '人员所在房子的id';
comment on column ZA_PEOPLE.yg_jz_id
  is '人员所在的建筑id';
comment on column ZA_PEOPLE.wd
  is '人员所在的维度';
comment on column ZA_PEOPLE.jd
  is '人员所在的经度';
comment on column ZA_PEOPLE.ZZMM
  is '政治面貌';
comment on column ZA_PEOPLE.DH
  is '固定电话';
comment on column ZA_PEOPLE.SJ
  is '手机';
comment on column ZA_PEOPLE.HKSZDLX_DM
  is '户口所在地类型';
comment on column ZA_PEOPLE.HYZK_DM
  is '婚姻状况';
comment on column ZA_PEOPLE.MZ
  is '民族';
comment on column ZA_PEOPLE.XZQH_HJ
  is '户籍所在地行政区划';
comment on column ZA_PEOPLE.HKLB_DM
  is '户口类别';
comment on column ZA_PEOPLE.RYXZ
  is '人员性质';
comment on column ZA_PEOPLE.TZ
  is '体重';
comment on column ZA_PEOPLE.TX
  is '体型';
comment on column ZA_PEOPLE.LX
  is '脸型';
comment on column ZA_PEOPLE.ZC
  is '足长';
  comment on column ZA_PEOPLE.XH
  is '鞋号';
comment on column ZA_PEOPLE.KY
  is '口音';
comment on column ZA_PEOPLE.GRZC
  is '个人专长';
comment on column ZA_PEOPLE.SFZYXQ
  is '身份证有效期（8位）';
comment on column ZA_PEOPLE.PCS_MC_HJ
  is '户籍地派出所名称';
comment on column ZA_PEOPLE.SFZ_YXQ_Z
  is '身份证有效期止';
comment on column ZA_PEOPLE.jzfw
  is '是否有居住房屋';
  comment on column ZA_PEOPLE.jzsy
  is '居住事由';
  comment on column ZA_PEOPLE.jzrq
  is '居住日期';
  comment on column ZA_PEOPLE.njzqx
  is '拟居住期限';
  comment on column ZA_PEOPLE.jzcs_dm
  is '居住场所代码';
  comment on column ZA_PEOPLE.yfzgx
  is '与房主关系';
  comment on column ZA_PEOPLE.xxdzmc
  is '详细地址';
  comment on column ZA_PEOPLE.xgy
  is '协管员';
comment on column ZA_PEOPLE.gdgzdwbz
  is '是否有固定工作单位';
  comment on column ZA_PEOPLE.ygdwmc
  is '现在服务处所名称';
  comment on column ZA_PEOPLE.fwdw_xzqh
  is '服务单位行政区划';
  comment on column ZA_PEOPLE.fwdw_jws
  is '服务单位警务室';
  comment on column ZA_PEOPLE.xcszy
  is '现从事职业';
  comment on column ZA_PEOPLE.rzrq
  is '入职日期';
  comment on column ZA_PEOPLE.bm
  is '部门';
  comment on column ZA_PEOPLE.zw
  is '职务';
  comment on column ZA_PEOPLE.hyzmh
  is '婚育证明号';
  comment on column ZA_PEOPLE.etsfyfjz
  is '儿童是否预防接种';
  comment on column ZA_PEOPLE.xyznsl
  is '现有子女数量';
  comment on column ZA_PEOPLE.jnkssj
  is '缴纳开始时间';
  comment on column ZA_PEOPLE.jnjssj
  is '缴纳结束时间';
  comment on column ZA_PEOPLE.ylbx_0
  is '部门';
    comment on column ZA_PEOPLE.ylbx_1
  is '参加医疗保险';
  comment on column ZA_PEOPLE.sybx_0
  is '参加失业保险';
  comment on column ZA_PEOPLE.gsbx
  is '参加工伤保险';
      comment on column ZA_PEOPLE.sybx_1
  is '参加生育保险';
  comment on column ZA_PEOPLE.lrsj
  is '录入时间';
  comment on column ZA_PEOPLE.zp
  is '照片转的base64，注意图片小于50KB';
-- Create/Recreate primary, unique and foreign key constraints
alter table ZA_PEOPLE
  add constraint PEOPLE_PK primary key (ID);
alter table ZA_PEOPLE
  add constraint PEOPLE_JZ_ID_FK foreign key (YG_JZ_ID)
  references SQ_JZ (JZID);
alter table ZA_PEOPLE
  add constraint PEOPLE_SQ_ID_FK foreign key (YG_SQ_ID)
  references JW_SQ (SQID);