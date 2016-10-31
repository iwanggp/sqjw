alter table za_yl add bafzrlxfs varchar2(50); 
comment on column za_yl.bafzrlxfs is '保安负责人联系方式';
alter table za_wb add jyfzrlxfs varchar2(50); 
comment on column za_wb.jyfzrlxfs is '经营负责人联系方式';
alter table za_wb add jqts number(7); 
comment on column za_wb.jqts is '机器台数';
alter table za_wb add zjip varchar2(200); 
comment on column za_wb.zjip is '主机ip';
alter table za_lg add bafzrlxfs varchar2(50); 
comment on column za_lg.bafzrlxfs is '保安负责人联系方式';
alter table za_lg add jyfzrlxfs varchar2(50); 
comment on column za_lg.jyfzrlxfs is '经营负责人联系方式';
alter table za_cs add bafzrlxfs varchar2(50); 
comment on column za_cs.bafzrlxfs is '保安负责人联系方式';
alter table za_cs add zyfzrlxfs varchar2(50); 
comment on column za_cs.zyfzrlxfs is '主要负责人联系方式';
alter table za_sp add bc30 varchar2(4); 
comment on column za_sp.bc30 is '是否保存30天';
alter table za_sp add sqmj varchar2(200); 
comment on column za_sp.sqmj is '社区民警';
alter table za_cs add bc30 varchar2(4); 
comment on column za_cs.bc30 is '是否保存30天';
alter table za_cs add ttsl number(4); 
comment on column za_cs.ttsl is '监控数量';
alter table za_yl add sqmj varchar2(200); 
comment on column za_yl.sqmj is '社区民警';
alter table za_yl add bc30 varchar2(4); 
comment on column za_yl.bc30 is '是否保存30天';
alter table za_wb add ttsl number(4); 
comment on column za_wb.ttsl is '监控数量';
alter table za_wb add sqmj varchar2(200); 
comment on column za_wb.sqmj is '社区民警';
alter table za_wb add bc30 varchar2(4); 
comment on column za_wb.bc30 is '是否保存30天';
alter table za_dw add ttsl number(4); 
comment on column za_dw.ttsl is '监控数量';
alter table za_dw add sqmj varchar2(200); 
comment on column za_dw.sqmj is '社区民警';
alter table za_dw add bc30 varchar2(4); 
comment on column za_dw.bc30 is '是否保存30天';
alter table za_lg add ttsl number(4); 
comment on column za_lg.ttsl is '监控数量';
alter table za_lg add sqmj varchar2(200); 
comment on column za_lg.sqmj is '社区民警';
alter table za_lg add bc30 varchar2(4); 
comment on column za_lg.bc30 is '是否保存30天';
alter table za_tt add ttsl number(4); 
comment on column za_tt.ttsl is '监控数量';
alter table za_tt add sqmj varchar2(200); 
comment on column za_tt.sqmj is '社区民警';
alter table za_tt add bc30 varchar2(4); 
comment on column za_tt.bc30 is '是否保存30天';
alter table za_wl add ttsl number(4); 
comment on column za_wl.ttsl is '监控数量';
alter table za_wl add sqmj varchar2(200); 
comment on column za_wl.sqmj is '社区民警';
alter table za_wl add bc30 varchar2(4); 
comment on column za_wl.bc30 is '是否保存30天';