alter table ZA_YG add hylb varchar(200);
update ZA_YG set hylb='za_yg'
update PL_MENU set m_name='实有人口查询',m_title='实有人口查询' where m_id='rk0000';
insert into pl_menu values('rk0101','实有人口查询','search/ssrkcx','实有人口查询','0','rk0000','99110002','','');  
insert into ST_SERVICE_BEAN values('S55550','searchRk','查询全部的人口信息','Y','search');   
insert into ST_SERVICE_BEAN values('P31007','delFzRk','删除房子内人口的信息','Y','fz');     
insert into ST_SERVICE_BEAN values('S55551','searchRkTw','查询同屋的人口信息','Y','search');  
insert into PL_MENU values('rk0001','实有房屋管理','','实有房屋管理','1','rk','99600002','','');
insert into pl_menu values('fw0101','房屋管理','search/fwgl','房屋管理','0','rk0001','99310003','','');     
alter table za_zjh add zgbm varchar(200);
insert into ST_SERVICE_BEAN values('S56001','searchFw','查询房屋住家户的信息','Y','search');