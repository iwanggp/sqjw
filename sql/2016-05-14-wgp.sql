--给内部单位添加面积
alter table za_dw add mj number; 
comment on column za_dw.mj is '面积';
alter table za_dw add xss number; 
comment on column za_dw.xss is '如果为学校（学生数）';
alter table za_tt add mj number; 
comment on column za_tt.mj is '面积';