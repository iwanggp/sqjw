-- Create table
create table JWSQ_BZDZXX
(
  jzdzbm    VARCHAR2(30) not null,
  dzjc      VARCHAR2(200),
  dzxz      VARCHAR2(300) not null,
  dzbm      VARCHAR2(30),
  dzsx      VARCHAR2(1),
  zbwzx     VARCHAR2(20),
  zbwzy     VARCHAR2(20),
  xzqhdm    VARCHAR2(6),
  xzqmc     VARCHAR2(60),
  xzjddm    VARCHAR2(9),
  xzjdmc    VARCHAR2(60),
  jlxmc     VARCHAR2(60),
  jlxdm     VARCHAR2(20),
  mlphm     VARCHAR2(50),
  xqz       VARCHAR2(50),
  lphxz     VARCHAR2(50),
  lcs       VARCHAR2(6),
  dmcs      VARCHAR2(10),
  dxcs      VARCHAR2(10),
  sspcsdm   VARCHAR2(12),
  pcsmc     VARCHAR2(60),
  ssgajdm   VARCHAR2(12),
  gajmc     VARCHAR2(60),
  ssjwqdm   VARCHAR2(14),
  jwqmc     VARCHAR2(60),
  jwzrqdm   VARCHAR2(10),
  jwzrqmc   VARCHAR2(50),
  cjry      VARCHAR2(40),
  cjrq      VARCHAR2(14),
  gxsj      VARCHAR2(14),
  gathstate VARCHAR2(1),
  imagepath VARCHAR2(800),
  jzjg      VARCHAR2(10),
  kfs       VARCHAR2(100),
  wygldw    VARCHAR2(100),
  zbdw      VARCHAR2(100),
  xfdj      VARCHAR2(1),
  dqzt      VARCHAR2(1) default '1',
  sbbs      VARCHAR2(1) default '0',
  sblx      VARCHAR2(1) default '1',
  rksj      VARCHAR2(14) default to_char(sysdate,'yyyymmddhh24miss'),
  fszt      VARCHAR2(1) default '0',
  dys       VARCHAR2(6),
  hs        VARCHAR2(20),
  shr       VARCHAR2(32),
  shyj      VARCHAR2(400),
  shjg      VARCHAR2(1),
  shsj      VARCHAR2(14),
  objectid  VARCHAR2(64),
  sjly      VARCHAR2(2),
  sjzgr     VARCHAR2(32),
  sjzgsj    VARCHAR2(14),
  sjzgzt    VARCHAR2(1),
  gxry      VARCHAR2(40),
  by2       VARCHAR2(500),
  hylb      VARCHAR2(20)
);
-- Add comments to the columns 
comment on column JWSQ_BZDZXX.jzdzbm
  is '标准地址编码，主键';
comment on column JWSQ_BZDZXX.dzjc
  is '地址简称';
comment on column JWSQ_BZDZXX.dzxz
  is '地址详址（自动拼接生成）';
comment on column JWSQ_BZDZXX.dzbm
  is '地址编码（PGIS方生成）';
comment on column JWSQ_BZDZXX.dzsx
  is '住址用途';
comment on column JWSQ_BZDZXX.zbwzx
  is '坐标位置X';
comment on column JWSQ_BZDZXX.zbwzy
  is '坐标位置Y';
comment on column JWSQ_BZDZXX.xzqhdm
  is '行政区代码';
comment on column JWSQ_BZDZXX.xzqmc
  is '行政区名称';
comment on column JWSQ_BZDZXX.xzjddm
  is '乡镇（街道办）代码';
comment on column JWSQ_BZDZXX.xzjdmc
  is '乡镇（街道办）名称';
comment on column JWSQ_BZDZXX.jlxmc
  is '街路巷名称';
comment on column JWSQ_BZDZXX.jlxdm
  is '街路巷代码';
comment on column JWSQ_BZDZXX.mlphm
  is '门牌号码';
comment on column JWSQ_BZDZXX.xqz
  is '小区（组）';
comment on column JWSQ_BZDZXX.lphxz
  is '楼（排）号详址';
comment on column JWSQ_BZDZXX.lcs
  is '楼层数';
comment on column JWSQ_BZDZXX.dmcs
  is '地面层数';
comment on column JWSQ_BZDZXX.dxcs
  is '地下层数';
comment on column JWSQ_BZDZXX.sspcsdm
  is '所属派出所代码';
comment on column JWSQ_BZDZXX.pcsmc
  is '派出所名称';
comment on column JWSQ_BZDZXX.ssgajdm
  is '所属公安局代码';
comment on column JWSQ_BZDZXX.gajmc
  is '公安局名称';
comment on column JWSQ_BZDZXX.ssjwqdm
  is '所属警务区代码';
comment on column JWSQ_BZDZXX.jwqmc
  is '警务区名称';
comment on column JWSQ_BZDZXX.jwzrqdm
  is '警务责任区代码';
comment on column JWSQ_BZDZXX.jwzrqmc
  is '警务责任区名称';
comment on column JWSQ_BZDZXX.cjry
  is '采集人员';
comment on column JWSQ_BZDZXX.cjrq
  is '采集日期';
comment on column JWSQ_BZDZXX.gxsj
  is '更新时间';
comment on column JWSQ_BZDZXX.gathstate
  is '标注状态';
comment on column JWSQ_BZDZXX.imagepath
  is '多媒体信息';
comment on column JWSQ_BZDZXX.jzjg
  is '建筑结构';
comment on column JWSQ_BZDZXX.kfs
  is '开发商';
comment on column JWSQ_BZDZXX.wygldw
  is '物业管理单位';
comment on column JWSQ_BZDZXX.zbdw
  is '质保单位';
comment on column JWSQ_BZDZXX.xfdj
  is '消防等级';
comment on column JWSQ_BZDZXX.dqzt
  is '当前状态';
comment on column JWSQ_BZDZXX.sbbs
  is '上报标识';
comment on column JWSQ_BZDZXX.sblx
  is '上报类型';
comment on column JWSQ_BZDZXX.rksj
  is '入库时间';
comment on column JWSQ_BZDZXX.fszt
  is '发送状态';
comment on column JWSQ_BZDZXX.dys
  is '单元数';
comment on column JWSQ_BZDZXX.hs
  is '每层户数';
comment on column JWSQ_BZDZXX.shr
  is '审核人';
comment on column JWSQ_BZDZXX.shyj
  is '审核意见';
comment on column JWSQ_BZDZXX.shjg
  is '审核结果';
comment on column JWSQ_BZDZXX.shsj
  is '审核时间';
comment on column JWSQ_BZDZXX.objectid
  is 'pgisID';
comment on column JWSQ_BZDZXX.sjly
  is '数据来源';
-- Create/Recreate primary, unique and foreign key constraints 
alter table JWSQ_BZDZXX
  add constraint T_PGIS_BZDZXX_PK primary key (JZDZBM);