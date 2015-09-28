insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('nb0000', '内部单位管理', null, '内部单位', '1', 'za', '99200001', null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('gg0000', '公共场所管理', null, '公共场所', '1', 'za', '99300001', null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('fz0000', '辅助力量管理', null, '辅助力量', '1', 'za', null, null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('jc0000', '基础设施管理', null, '基础设施', '1', 'za', null, null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('ly0000', '小区楼院管理', null, '楼院管理', '1', 'za', null, null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('za', '治安管理', null, '治安管理', '1', null, '99100000', null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('cs0001', '特种行业管理', null, '特种行业', '1', 'za', '99100001', null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('cs0000', '一般场所', 'search/unioncs', '场所查询', '0', 'cs0001', '99110002', null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('cslg', '旅馆业', 'search/cslg', '旅馆查询', '0', 'cs0001', '99110001', null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('nb0201', '人民团体', null, '人民团体', '0', 'nb0002', null, null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('nb0001', '党政机关', null, '党政机关', '1', 'nb0000', '99200002', null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('nb0002', '人民团体与民主党派', null, '人民团体与民主党派', '1', 'nb0000', null, null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('nb0202', '民主党派', null, '民主党派', '0', 'nb0002', null, null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('nb0203', '宗教团体', null, '宗教团体', '0', 'nb0002', null, null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('nb0204', '学会、协会、基金会', null, '学会、协会、基金会', '0', 'nb0002', null, null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('nb0101', '党委', null, '党委', '0', 'nb0001', null, null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('nb0102', '人大', null, '人大', '0', 'nb0001', null, null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('nb0103', '政协', null, '政协', '0', 'nb0001', null, null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('nb0104', '人民政府', null, '人民政府', '0', 'nb0001', null, null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('nb0105', '人民解放军、武警部队', null, '人民解放军、武警部队', '0', 'nb0001', null, null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('nb0106', '检查院', null, '检查院', '0', 'nb0001', null, null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('nb0107', '法院', null, '法院', '0', 'nb0001', null, null, null);
insert into PL_MENU (m_id, m_name, m_url, m_title, m_type, m_super, m_order, width, height)
values ('nb0108', '其他机关单位', null, '其他机关单位', '0', 'nb0001', null, null, null);
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_lg', 'hyl', '0', '旅馆类别', '宾馆，酒店，饭店(可住宿)');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('za_lg', 'hyl', '1', '旅馆类别', '商务会馆');
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
-- prompt PL/SQL Developer import file
-- prompt Created on 2015年9月2日 星期三 by Administrator
-- set feedback off
-- set define off
-- prompt Dropping JW_SQ...
-- drop table JW_SQ cascade constraints;
-- prompt Creating JW_SQ...
create table JW_SQ
(
  sqid  VARCHAR2(200) not null,
  sqlb  VARCHAR2(30) not null,
  dz    VARCHAR2(200) not null,
  cjr   VARCHAR2(200) not null,
  cjsj  DATE,
  xgr   VARCHAR2(200),
  xgsj  DATE,
  lxfs  VARCHAR2(200),
  frdb  VARCHAR2(200),
  bz    VARCHAR2(200),
  sqmc  VARCHAR2(200) not null,
  jd    VARCHAR2(200) not null,
  wd    VARCHAR2(200) not null,
  fw    NUMBER,
  cjrxm VARCHAR2(200),
  zgbm  VARCHAR2(200),
  zgrxm VARCHAR2(200),
  zgrdh VARCHAR2(30)
)
;
comment on column JW_SQ.sqid
  is '社区的主码';
comment on column JW_SQ.sqlb
  is '类别：行政村，自然村，居民小区，社区';
comment on column JW_SQ.dz
  is '社区所在的地址';
comment on column JW_SQ.cjr
  is '创建人';
comment on column JW_SQ.cjsj
  is '创建时间';
comment on column JW_SQ.xgr
  is '修改人';
comment on column JW_SQ.xgsj
  is '修改时间';
comment on column JW_SQ.lxfs
  is '联系方式';
comment on column JW_SQ.frdb
  is '法人代表';
comment on column JW_SQ.bz
  is '备注';
comment on column JW_SQ.sqmc
  is '社区名称';
comment on column JW_SQ.jd
  is '经度';
comment on column JW_SQ.wd
  is '维度';
comment on column JW_SQ.fw
  is '社区的范围';
comment on column JW_SQ.cjrxm
  is '创建人姓名';
comment on column JW_SQ.zgbm
  is '所属辖区';
comment on column JW_SQ.zgrxm
  is '主管人姓名';
comment on column JW_SQ.zgrdh
  is '主管人联系电话';
alter table JW_SQ
  add constraint SQ_FK primary key (SQID);

prompt Loading JW_SQ...
insert into JW_SQ (sqid, sqlb, dz, cjr, cjsj, xgr, xgsj, lxfs, frdb, bz, sqmc, jd, wd, fw, cjrxm, zgbm, zgrxm, zgrdh)
values ('A201508261418341001', '0', '郑州市四港联动大道100号', 'lianzt', to_date('02-09-2015 10:32:02', 'dd-mm-yyyy hh24:mi:ss'), null, to_date('02-09-2015 10:32:02', 'dd-mm-yyyy hh24:mi:ss'), '0371-4545544', '张三', '港区最大的社区，有人口近1000人', '大数据社区', '113.81011487404591', '34.55313596938342', 200, '管理员', '0', '卢国光', '1870360');
insert into JW_SQ (sqid, sqlb, dz, cjr, cjsj, xgr, xgsj, lxfs, frdb, bz, sqmc, jd, wd, fw, cjrxm, zgbm, zgrxm, zgrdh)
values ('A201508251319131001', '0', '郑州市正港大道100号', 'lianzt', to_date('25-08-2015 13:21:45', 'dd-mm-yyyy hh24:mi:ss'), null, to_date('25-08-2015 13:21:45', 'dd-mm-yyyy hh24:mi:ss'), '0371-4446545', '习近平', '很好的社区', '向阳村小区', '113.82730783383138', '34.54349503455995', 150, '管理员', '0', null, null);
insert into JW_SQ (sqid, sqlb, dz, cjr, cjsj, xgr, xgsj, lxfs, frdb, bz, sqmc, jd, wd, fw, cjrxm, zgbm, zgrxm, zgrdh)
values ('A201508191143131010', '0', '郑州市四港地区', 'lianzt', to_date('19-08-2015 14:48:30', 'dd-mm-yyyy hh24:mi:ss'), null, to_date('19-08-2015 14:48:30', 'dd-mm-yyyy hh24:mi:ss'), '0371-44556', '陈洋', '很好的社区', '郑州四港社区', '113.81793351332458', '34.536820396830336', 100, '管理员', '2', null, null);
insert into JW_SQ (sqid, sqlb, dz, cjr, cjsj, xgr, xgsj, lxfs, frdb, bz, sqmc, jd, wd, fw, cjrxm, zgbm, zgrxm, zgrdh)
values ('A201508201205341001', '3', '郑州港区政府社区', 'lianzt', to_date('22-08-2015 15:47:24', 'dd-mm-yyyy hh24:mi:ss'), null, to_date('22-08-2015 15:47:24', 'dd-mm-yyyy hh24:mi:ss'), '0371-54456465', '陈洋', 'D大调', '梦想小区', '113.84251059452792', '34.525871594934785', 200, '管理员', '3', null, null);
insert into JW_SQ (sqid, sqlb, dz, cjr, cjsj, xgr, xgsj, lxfs, frdb, bz, sqmc, jd, wd, fw, cjrxm, zgbm, zgrxm, zgrdh)
values ('A201508181452221001', '3', '郑州港区师新庄社区', 'lianzt', to_date('18-08-2015 15:21:06', 'dd-mm-yyyy hh24:mi:ss'), null, to_date('18-08-2015 15:21:06', 'dd-mm-yyyy hh24:mi:ss'), '0371-4456456', '陈洋', '很号的的企业', '师新庄社区1', '113.83180321614043', '34.53658839880447', 150, '管理员', '4', null, null);
insert into JW_SQ (sqid, sqlb, dz, cjr, cjsj, xgr, xgsj, lxfs, frdb, bz, sqmc, jd, wd, fw, cjrxm, zgbm, zgrxm, zgrdh)
values ('A201508181536121001', '0', '郑州四港联动大道', 'lianzt', to_date('27-08-2015 09:19:32', 'dd-mm-yyyy hh24:mi:ss'), null, to_date('27-08-2015 09:19:32', 'dd-mm-yyyy hh24:mi:ss'), '0371-545646', '刘国枢', '很号的的企业', '河南省公安厅高速公路交警社区', '113.81909759203693', '34.53803119508231', 50, '管理员', '3', null, null);
insert into JW_SQ (sqid, sqlb, dz, cjr, cjsj, xgr, xgsj, lxfs, frdb, bz, sqmc, jd, wd, fw, cjrxm, zgbm, zgrxm, zgrdh)
values ('A201508181121311002', '0', '郑州市港区大道100号', 'lianzt', to_date('18-08-2015 15:40:15', 'dd-mm-yyyy hh24:mi:ss'), null, to_date('18-08-2015 15:40:15', 'dd-mm-yyyy hh24:mi:ss'), '0371-45454', '陈洋', '是小豆的公司', '老北京社区', '113.82501722733285', '34.53636302867472', 50, '管理员', '7', null, null);
insert into JW_SQ (sqid, sqlb, dz, cjr, cjsj, xgr, xgsj, lxfs, frdb, bz, sqmc, jd, wd, fw, cjrxm, zgbm, zgrxm, zgrdh)
values ('A201508181124421003', '0', '郑州市港区大道', 'lianzt', to_date('01-09-2015 15:30:55', 'dd-mm-yyyy hh24:mi:ss'), null, to_date('01-09-2015 15:30:55', 'dd-mm-yyyy hh24:mi:ss'), '22323', '连做泰', '2323322323', '圆形建筑', '113.8221070305516', '34.53568249556046', 100, '管理员', '6', null, null);
insert into JW_SQ (sqid, sqlb, dz, cjr, cjsj, xgr, xgsj, lxfs, frdb, bz, sqmc, jd, wd, fw, cjrxm, zgbm, zgrxm, zgrdh)
values ('A201508181141391006', '0', '郑州港区大道50号', 'lianzt', to_date('20-08-2015 09:06:10', 'dd-mm-yyyy hh24:mi:ss'), null, to_date('20-08-2015 09:06:10', 'dd-mm-yyyy hh24:mi:ss'), '0371-45464564', '陈洋', '很好的社区', '瓦缸小区港区', '113.82438690821425', '34.538519486474726', 50, '管理员', '6', null, null);
insert into JW_SQ (sqid, sqlb, dz, cjr, cjsj, xgr, xgsj, lxfs, frdb, bz, sqmc, jd, wd, fw, cjrxm, zgbm, zgrxm, zgrdh)
values ('A201508181432331001', '0', '郑州市港区23号', 'lianzt', to_date('25-08-2015 16:38:12', 'dd-mm-yyyy hh24:mi:ss'), null, to_date('25-08-2015 16:38:12', 'dd-mm-yyyy hh24:mi:ss'), '111', '刘国胜', '11111', '梦幻小区', '113.82704765955702', '34.537971539376535', 100, '管理员', '9', null, null);
insert into JW_SQ (sqid, sqlb, dz, cjr, cjsj, xgr, xgsj, lxfs, frdb, bz, sqmc, jd, wd, fw, cjrxm, zgbm, zgrxm, zgrdh)
values ('A201508181435201002', '0', '四港联动大道', 'lianzt', to_date('25-08-2015 17:39:13', 'dd-mm-yyyy hh24:mi:ss'), null, to_date('25-08-2015 17:39:13', 'dd-mm-yyyy hh24:mi:ss'), '0371-45645646', '陈洋小豆', 'ewfwf', '沙县小吃小社区', '113.81866575638544', '34.53440537619489', 50, '管理员', '8', null, null);
insert into JW_SQ (sqid, sqlb, dz, cjr, cjsj, xgr, xgsj, lxfs, frdb, bz, sqmc, jd, wd, fw, cjrxm, zgbm, zgrxm, zgrdh)
values ('A201508191212251003', '3', '郑州市四港联动小区', 'lianzt', to_date('25-08-2015 12:18:36', 'dd-mm-yyyy hh24:mi:ss'), null, to_date('25-08-2015 12:18:36', 'dd-mm-yyyy hh24:mi:ss'), '0371-46456', '刘炯天', '很好的小区', '高港小区', '113.82702083746693', '34.535788553035076', 150, '管理员', '3', null, null);
insert into JW_SQ (sqid, sqlb, dz, cjr, cjsj, xgr, xgsj, lxfs, frdb, bz, sqmc, jd, wd, fw, cjrxm, zgbm, zgrxm, zgrdh)
values ('A201508251214431004', '0', '郑州四港联动大道', 'lianzt', to_date('25-08-2015 12:17:04', 'dd-mm-yyyy hh24:mi:ss'), null, to_date('25-08-2015 12:17:04', 'dd-mm-yyyy hh24:mi:ss'), '0371-454554', '习近平', '很大的社区', '汽车美容社区', '113.82297874848145', '34.53652653255515', 50, '管理员', '2', null, null);
-- commit;
-- prompt 13 records loaded
-- set feedback on
-- set define on
-- prompt Done.
create table ZA_YG
(
  id       VARCHAR2(20) not null,
  xm       VARCHAR2(200) not null,
  zym      VARCHAR2(200),
  xb       VARCHAR2(4),
  csrq     DATE,
  whcd     VARCHAR2(200),
  zw       VARCHAR2(200),
  zzmm     VARCHAR2(200),
  jtdz     VARCHAR2(200),
  lxdh     VARCHAR2(200),
  bz       VARCHAR2(200),
  yg_sq_id VARCHAR2(30) not null,
  yg_fz_id VARCHAR2(30) not null,
  yg_jz_id VARCHAR2(30) not null,
  wd       VARCHAR2(200) not null,
  jd       VARCHAR2(200) not null,
  gzdw     VARCHAR2(200),
  lrsj     DATE,
  cjrxm    VARCHAR2(200),
  cjr      VARCHAR2(200),
  sfzh     VARCHAR2(20) not null,
  mz       VARCHAR2(30),
  hyzk     VARCHAR2(2),
  sg       NUMBER,
  yghy     VARCHAR2(2)
)
;
comment on table ZA_YG
  is '治安-员工';
comment on column ZA_YG.id
  is '员工的主码';
comment on column ZA_YG.xm
  is '姓名';
comment on column ZA_YG.zym
  is '曾用名';
comment on column ZA_YG.xb
  is '性别';
comment on column ZA_YG.csrq
  is '出生日期';
comment on column ZA_YG.whcd
  is '文化程度';
comment on column ZA_YG.zw
  is '职务';
comment on column ZA_YG.zzmm
  is '政治面貌';
comment on column ZA_YG.jtdz
  is '家庭地址';
comment on column ZA_YG.lxdh
  is '联系电话';
comment on column ZA_YG.bz
  is '备注';
comment on column ZA_YG.yg_sq_id
  is '员工所在的社区id';
comment on column ZA_YG.yg_fz_id
  is '员工所在房子的id';
comment on column ZA_YG.yg_jz_id
  is '员工所在的建筑id';
comment on column ZA_YG.wd
  is '员工所在的维度';
comment on column ZA_YG.jd
  is '员工所在的经度';
comment on column ZA_YG.gzdw
  is '工作单位';
comment on column ZA_YG.lrsj
  is '录入时间';
comment on column ZA_YG.cjrxm
  is '创建人姓名';
comment on column ZA_YG.cjr
  is '创建人';
comment on column ZA_YG.sfzh
  is '员工的身份证号码';
comment on column ZA_YG.mz
  is '民族';
comment on column ZA_YG.hyzk
  is '婚姻状况';
comment on column ZA_YG.sg
  is '身高';
comment on column ZA_YG.yghy
  is '员工行业';
alter table ZA_YG
  add constraint YG_ID_PK primary key (ID);
alter table ZA_YG
  add constraint YG_JZ_ID_FK foreign key (YG_JZ_ID)
  references SQ_JZ (JZID);
alter table ZA_YG
  add constraint YG_SQ_ID_FK foreign key (YG_SQ_ID)
  references JW_SQ (SQID);

insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P43007', 'delLgZa', '删除旅馆信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P45001', 'addXfXb', '消防登记', 'Y', 'xb');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S22002', 'getJzSp', '获得建筑内商铺', 'Y', 'jz');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P11014', 'saveRoleBusiPl', '保存角色业务', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P11015', 'saveUserBusiPl', '保存用户业务', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S30004', 'getJzZaBiao', '获得建筑内所有治安表的信息', 'Y', 'jz');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P00000', 'unionDelete', '联合删除多张表的内容', 'Y', 'jz');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S51000', 'searchUnionCs', '查询通用的场所信息', 'Y', 'search');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S11012', 'getUserBusiPl', '获取用户负责业务', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S11011', 'getRoleBusiPl', '获取角色业务', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P11013', 'updatePswPl', '修改密码', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P11000', 'addUserPl', '添加用户', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P11001', 'userLoginPl', '用户登录', 'N', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P11002', 'modUserPl', '修改用户', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P11004', 'delUserPl', '删除用户', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P10001', 'translationServiceImpl', '控制器中的事务管理', 'N', 'st');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S10001', 'cutPageOracle', '分页查询服务', 'N', 'st');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S10002', 'getTableParamet', '获取系统参数', 'N', 'st');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P11005', 'delRolePl', '删除角色', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P11006', 'addRolePl', '添加角色', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P11007', 'modRolePl', '修改角色', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P11009', 'saveRoleLimitPl', '保存角色权限', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P10002', 'clearErrLogTask', '清理异常日志', 'N', 'st');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P11010', 'saveUseLimitPl', '保存用户特有权限', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S11001', 'userLogoutPl', '注销', 'N', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S11002', 'getUserAllLimitPl', '获取用户权限', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S11003', 'getUserPl', '获取用户', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S11006', 'getRolePl', '获取角色', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S11008', 'cutRolePl', '角色分页', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S11009', 'getUserLimitPl', '获取用户特有权限', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S11010', 'getRoleLimit', '获取角色权限', 'Y', 'pl');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P42000', 'addYlZa', '添加娱乐场所信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P41001', 'addShopZa', '添加商铺信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P41004', 'delYlZa', '删除娱乐场所信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P41005', 'updateYlZa', '更新娱乐场所信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S47000', 'searchJqxxZa', '查询警情信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P45002', 'delXfXb', '删除消防登记', 'Y', 'xb');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S50000', 'searchAll', '查询一个场所的全部信息', 'Y', 'search');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S20000', 'searchJZ', '查询建筑信息', 'Y', 'add');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S20001', 'searchJzDetail', '查询建筑的信息', 'Y', 'add');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P30001', 'addSqJz', '添加社区内建筑', 'Y', 'add');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P30010', 'getAjdqZa', '查询安检合格证到期日期', 'Y', 'jz');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S50001', 'searchZaLg', '按条件搜索旅馆信息', 'Y', 'search');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S50002', 'searchLgYg', '查询旅馆内员工信息', 'Y', 'search');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P41002', 'updateShopZa', '更新商铺信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S40002', 'searchCsDetail', '查询单个场所信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P43002', 'updateWlZa', '修改物流公司信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P43006', 'addLgZa', '添加旅馆信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P43004', 'delWbZa', '删除网吧', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P43005', 'updateWbZa', '修改网吧信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P47000', 'addJqxxZa', '添加警情信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P43008', 'updateLgZa', '修改旅馆信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S20002', 'getJZ', '按条件首饰建筑信息', 'Y', 'add');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S20004', 'searchCsJZ', '查询建筑内商铺信息', 'y', 'add');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P21001', 'addSq', '增加社区信息', 'y', 'add');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P21006', 'updateSq', '修改社区信息', 'Y', 'add');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S22001', 'getSqJz', '获得社区内建筑信息', 'Y', 'add');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P30005', 'addFzYg', '增加房间内员工的信息', 'Y', 'fz');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P30007', 'delFzYg', '删除房子内的员工信息', 'Y', 'fz');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P30008', 'updateFzYg', '更新房子内员工的信息', 'Y', 'fz');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S20012', 'getZjh', '获得住家户的信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P41003', 'delShopZa', '删除商铺信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S44006', 'searchJfssDetail', '查询单个场所信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P44007', 'updateJfssZa', '修改技防设施', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P44008', 'delJfssZa', '删除技防设施', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P43009', 'addCsZa', '添加通用商铺信息', 'Y', 'za');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P45003', 'updateXfXb', '更新消防登记信息', 'Y', 'xb');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S21003', 'searchSq', '查询所有的社区', 'Y', 'add');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P21005', 'delSq', '删除社区信息', 'y', 'add');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P30002', 'updateSqJz', '修改社区建筑信息', 'Y', 'jz');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P30003', 'delSqJz', '删除社区建筑信息', 'Y', 'jz');
insert into ST_SERVICE_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P43013', 'delZjhZa', '删除住家户信息', 'Y', 'za');
<<<<<<< HEAD
create table ZA_LG
(
  id     VARCHAR2(20) not null,
  mc     VARCHAR2(200) not null,
  zgbm   VARCHAR2(200),
  hyl    VARCHAR2(200),
  jjxz   VARCHAR2(200),
  dz     VARCHAR2(200),
  lxfs   VARCHAR2(200),
  zy     VARCHAR2(200),
  jy     VARCHAR2(200),
  fj     NUMBER,
  cw     NUMBER,
  ygrs   NUMBER,
  jzmj   NUMBER,
  jfss   VARCHAR2(200),
  frdb   VARCHAR2(200),
  jyfzr  VARCHAR2(200),
  bafzr  VARCHAR2(200),
  bars   NUMBER,
  jyxkz  VARCHAR2(200),
  jypmt  NVARCHAR2(200),
  ajhgz  VARCHAR2(200),
  fwzl   VARCHAR2(2),
  xtyzqk VARCHAR2(200),
  ajjl   VARCHAR2(200),
  jd     VARCHAR2(200) not null,
  wd     VARCHAR2(200) not null,
  bz     VARCHAR2(200),
  pid    VARCHAR2(20) not null,
  jz_id  VARCHAR2(200) not null,
  sq_id  VARCHAR2(200) not null,
  dqrq   DATE,
  cjrxm  VARCHAR2(200),
  cjr    VARCHAR2(200),
  lrsj   DATE,
  hylb   VARCHAR2(30),
  lgxj   VARCHAR2(10)
)
;
comment on table ZA_LG
  is '治安-旅馆';
comment on column ZA_LG.id
  is '主码';
comment on column ZA_LG.mc
  is '单位名称';
comment on column ZA_LG.zgbm
  is '主管部门';
comment on column ZA_LG.hyl
  is '行业类别';
comment on column ZA_LG.jjxz
  is '经济性质';
comment on column ZA_LG.dz
  is '单位地址';
comment on column ZA_LG.lxfs
  is '前台电话';
comment on column ZA_LG.zy
  is '主营';
comment on column ZA_LG.jy
  is '兼营';
comment on column ZA_LG.fj
  is '房间';
comment on column ZA_LG.cw
  is '床位';
comment on column ZA_LG.ygrs
  is '员工人数';
comment on column ZA_LG.jzmj
  is '建筑面积';
comment on column ZA_LG.jfss
  is '技防设施';
comment on column ZA_LG.frdb
  is '法人代表';
comment on column ZA_LG.jyfzr
  is '经营负责人';
comment on column ZA_LG.bafzr
  is '保安负责人';
comment on column ZA_LG.bars
  is '保安人数';
comment on column ZA_LG.jyxkz
  is '经营许可证';
comment on column ZA_LG.jypmt
  is '经营平面图';
comment on column ZA_LG.ajhgz
  is '消防安检合格证';
comment on column ZA_LG.fwzl
  is '房屋是否租赁（是/否）';
comment on column ZA_LG.xtyzqk
  is '旅业系统运转情况';
comment on column ZA_LG.ajjl
  is '安检记录';
comment on column ZA_LG.jd
  is '经度';
comment on column ZA_LG.wd
  is '纬度';
comment on column ZA_LG.bz
  is '备注';
comment on column ZA_LG.pid
  is '单位编号';
comment on column ZA_LG.jz_id
  is '旅馆的外键建筑的主键';
comment on column ZA_LG.sq_id
  is '旅馆的外键建筑的主键';
comment on column ZA_LG.dqrq
  is '安检合格证到期日期';
comment on column ZA_LG.cjrxm
  is '创建人姓名';
comment on column ZA_LG.cjr
  is '创建人';
comment on column ZA_LG.lrsj
  is '录入时间';
comment on column ZA_LG.hylb
  is '行业类别';
comment on column ZA_LG.lgxj
  is '旅馆星级';
alter table ZA_LG
  add constraint LG_ID_PK primary key (ID);
alter table ZA_LG
  add constraint LG_ID_FK1 foreign key (JZ_ID)
  references SQ_JZ (JZID);
alter table ZA_LG
  add constraint LG_ID_FK2 foreign key (SQ_ID)
  references JW_SQ (SQID);
