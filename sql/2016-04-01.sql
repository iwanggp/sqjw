-- Add/modify columns 
alter table T_PGIS_BZDZXX_HKG add gxry varchar2(40);
alter table T_PGIS_BZDZXX_HKG add by2 varchar2(500);
alter table T_PGIS_BZDZXX_HKG add hylb varchar2(20);

update T_PGIS_BZDZXX_HKG set hylb = 'bzdz';