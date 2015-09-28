insert into pl_menu values('gg0007','居民服务场所','search/jmfwcs','居民服务场所','0','gg0000','99510007','',''); 
insert into pl_menu values('gg0008','宗教场所','search/zjcs','宗教场所','0','gg0000','99510008','',''); 
insert into pl_menu values('gg0009','餐饮服务场所','search/cyfw','餐饮服务场所','0','gg0000','99510009','',''); 
insert into pl_menu values('gg0010','其他场所','search/qtggcs','其他场所','0','gg0000','99510010','',''); 
insert into pl_menu values('nb0010','加油站安全管理','','加油站安全管理','1','nb0000','99300002','','');
insert into pl_menu values('nb1001','加油站安全管理','search/jyz','加油站安全管理','0','nb0010','99510002','','');
insert into ST_SERVICE_BEAN values('S52012','searchZaDwJyz','查询加油站的所有信息','Y','search');  
insert into ST_SERVICE_BEAN values('P23001','addJcss','添加基础设施','Y','add');  
insert into ST_SERVICE_BEAN values('P23002','getJcss','搜索基础设施的信息','Y','add');    
insert into ST_SERVICE_BEAN values('P23000','getJcssAll','搜索全部的基础设施的信息','Y','add');    
insert into ST_SERVICE_BEAN values('P23003','delJcss','删除基础设施信息','Y','add');      
insert into ST_SERVICE_BEAN values('P23004','updateJcss','修改基础设施的信息','Y','add');      
insert into pl_menu values('jc0101','基础设施管理','search/jcss','基础设施管理','0','jc0000','99510002','','');  
create table ZA_JCSS
(
  id    VARCHAR2(30) not null,
 pid VARCHAR2(200),
  mc    VARCHAR2(200) not null,
  sslx   VARCHAR2(2) not null,
  xzqh  VARCHAR2(200),
  zgbm  VARCHAR2(200),
  fzr  VARCHAR2(200),
  dh   VARCHAR2(30),
  dz    VARCHAR2(200),
  jd   VARCHAR2(200),
   wd  VARCHAR2(200),
bz VARCHAR2(200),
  cjr   VARCHAR2(200),
  cjrxm VARCHAR2(200),
hylb VARCHAR2(200),
  lrsj  DATE
);
-- Add comments to the columns 
comment on column ZA_JCSS.id
  is '公共设施主码';
comment on column ZA_JCSS.pid
  is '公共设施编码';
comment on column ZA_JCSS.mc
  is '公共设施的名称';
comment on column ZA_JCSS.sslx
  is '设施类型';
comment on column ZA_JCSS.xzqh
  is '所属行政区划';
comment on column ZA_JCSS.zgbm
  is '管辖单位名称';
comment on column ZA_JCSS.fzr
  is '负责人';
comment on column ZA_JCSS.dh
  is '联系电话';
comment on column ZA_JCSS.dz
  is '地址';
comment on column ZA_JCSS.jd
  is '经度';
comment on column ZA_JCSS.wd
  is '维度';
comment on column ZA_JCSS.bz
  is '备注';
comment on column ZA_JCSS.cjr
  is '创建人';
comment on column ZA_JCSS.cjrxm
  is '创建人姓名';
comment on column ZA_JCSS.hylb
  is '行业类别';
comment on column ZA_JCSS.lrsj
  is '录入时间';
-- Create/Recreate primary, unique and foreign key constraints 
alter table ZA_JCSS
  add constraint ZA_JCSS_PK primary key (ID);
create table ST_TABLE_PARAMET
(
  table_name VARCHAR2(100) not null,
  col_name   VARCHAR2(100) not null,
  col_value  VARCHAR2(50) not null,
  col_desc   VARCHAR2(100),
  value_desc VARCHAR2(100)
);
comment on column ST_TABLE_PARAMET.table_name
  is '表名';
comment on column ST_TABLE_PARAMET.col_name
  is '列名';
comment on column ST_TABLE_PARAMET.col_value
  is '列值';
comment on column ST_TABLE_PARAMET.col_desc
  is '列的描述';
comment on column ST_TABLE_PARAMET.value_desc
  is '值的描述';
alter table ST_TABLE_PARAMET
  add constraint ST_TABLE_PARAMET_PK primary key (TABLE_NAME, COL_NAME, COL_VALUE);

prompt Loading ST_TABLE_PARAMET...
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_lg', 'hyl', '0', '旅馆类别', '宾馆，酒店，饭店(可住宿)');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_lg', 'hyl', '1', '旅馆类别', '商务会馆');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jcss', 'sslx', '0', '基础设施类别', '自动取款机');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jcss', 'sslx', '1', '基础设施类别', '公共电话亭');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jcss', 'sslx', '2', '基础设施类别', '固定报警点');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jcss', 'sslx', '3', '基础设施类别', '路灯');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jcss', 'sslx', '4', '基础设施类别', '电杆');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jcss', 'sslx', '5', '基础设施类别', '巡逻岗亭');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jcss', 'sslx', '6', '基础设施类别', '保安岗亭');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('jw_sq', 'zgbm', '1', '所属辖区', '郑港派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('jw_sq', 'zgbm', '2', '所属辖区', '新港派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('pl_user', 'zt', '0', '用户状态', '冻结');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('jw_sq', 'zgbm', '3', '所属辖区', '滨河派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('jw_sq', 'zgbm', '4', '所属辖区', '张庄派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('jw_sq', 'zgbm', '5', '所属辖区', '银河派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('jw_sq', 'zgbm', '6', '所属辖区', '三官庙派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('jw_sq', 'zgbm', '7', '所属辖区', '八岗派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('jw_sq', 'zgbm', '8', '所属辖区', '龙王派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('jw_sq', 'zgbm', '9', '所属辖区', '八千派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('pl_user', 'zt', '1', '用户状态', '正常');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_yg', 'xb', '0', '员工性别', '女');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_yg', 'xb', '1', '员工性别', '男');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('jw_sq', 'zgbm', '0', '所属辖区', '富士康派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jfss', 'yxzt', '0', '运行状态', '故障');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jfss', 'yxzt', '1', '运行状态', '正常');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_yg', 'hyzk', '0', '婚姻状况', '未婚');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_yg', 'hyzk', '1', '婚姻状况', '已婚');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_lg', 'lgxj', '0', '旅馆星级', '其他');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_lg', 'lgxj', '1', '旅馆星级', '一星级');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_lg', 'lgxj', '2', '旅馆星级', '二星级');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_lg', 'lgxj', '3', '旅馆星级', '三星级');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_lg', 'lgxj', '4', '旅馆星级', '四星级');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_lg', 'lgxj', '5', '旅馆星级', '五星级');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('jw_sq', 'lb', '0', '社区类型', '一般社区');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('jw_sq', 'lb', '1', '社区类型', '自然村');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('jw_sq', 'lb', '2', '社区类型', '行政村');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('jw_sq', 'lb', '3', '社区类型', '居民社区');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jfss', 'sblb', '0', '设备类别', '视频');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jfss', 'sblb', '1', '设备类别', '卡口');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jfss', 'sblb', '2', '设备类别', '电警');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jfss', 'sblx', '0', '设备类型', '枪机');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jfss', 'sblx', '1', '设备类型', '球机');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jfss', 'sx', '0', '属性', '道路');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jfss', 'sx', '1', '属性', '机构');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jfss', 'sx', '2', '属性', '建筑物');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ssxq', '0', '所属辖区', '富士康派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ssxq', '1', '所属辖区', '郑港派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ssxq', '2', '所属辖区', '新港派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ssxq', '3', '所属辖区', '滨河派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ssxq', '4', '所属辖区', '张庄派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ssxq', '5', '所属辖区', '银河派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ssxq', '6', '所属辖区', '三官庙派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ssxq', '7', '所属辖区', '八岗派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ssxq', '8', '所属辖区', '龙王派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ssxq', '9', '所属辖区', '八千派出所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ajfl', '0', '案件分类', '盗窃');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ajfl', '1', '案件分类', '抢劫');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ajfl', '2', '案件分类', '抢夺');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ajfl', '3', '案件分类', '伤害');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ajfl', '4', '案件分类', '黄赌');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ajfl', '5', '案件分类', '诈骗');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ajfl', '6', '案件分类', '强奸');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ajfl', '7', '案件分类', '命案');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ajfl', '8', '案件分类', '交通事故');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ajxz', '0', '案件性质', '治安');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'ajxz', '1', '案件性质', '刑事');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'sx', '0', '属性', '道路');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'sx', '1', '属性', '机构');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_jqxx', 'sx', '2', '属性', '建筑物');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_lg', 'hyl', '2', '旅馆类别', '度假村');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_lg', 'hyl', '3', '旅馆类别', '农家院');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_lg', 'hyl', '4', '旅馆类别', '其他住宿场所');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_yg', 'yghy', '0', '工作人员类别', '管理人员');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_yg', 'yghy', '1', '工作人员类别', '从业人员');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_yg', 'yghy', '2', '工作人员类别', '保安人员');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_yg', 'yghy', '3', '其它', '其它');