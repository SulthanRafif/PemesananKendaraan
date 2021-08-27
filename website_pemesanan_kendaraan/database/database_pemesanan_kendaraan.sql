/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     27/08/2021 09:42:52                          */
/*==============================================================*/


alter table PEMESANAN 
   drop foreign key FK_PEMESANA_KENDARAAN_KENDARAA;

alter table PEMESANAN 
   drop foreign key FK_PEMESANA_USER_MEME_USER;

drop table if exists KENDARAAN;


alter table PEMESANAN 
   drop foreign key FK_PEMESANA_USER_MEME_USER;

alter table PEMESANAN 
   drop foreign key FK_PEMESANA_KENDARAAN_KENDARAA;

drop table if exists PEMESANAN;

drop table if exists USER;

/*==============================================================*/
/* Table: KENDARAAN                                             */
/*==============================================================*/
create table KENDARAAN
(
   ID_KENDARAAN         int not null  comment '',
   NAMA_KENDARAAN       varchar(255) not null  comment '',
   TANGGAL_BUAT_KENDARAAN timestamp not null  comment '',
   primary key (ID_KENDARAAN)
);

/*==============================================================*/
/* Table: PEMESANAN                                             */
/*==============================================================*/
create table PEMESANAN
(
   ID_PEMESANAN         int not null  comment '',
   ID_KENDARAAN         int  comment '',
   ID_USER              int  comment '',
   TANGGAL_BUAT_PEMESANAN timestamp  comment '',
   primary key (ID_PEMESANAN)
);

/*==============================================================*/
/* Table: USER                                                  */
/*==============================================================*/
create table USER
(
   ID_USER              int not null  comment '',
   LEVEL_USER           int not null  comment '',
   NAMA_USER            varchar(255) not null  comment '',
   PASSWORD_USER        varchar(255) not null  comment '',
   TANGGAL_BUAT_USER    timestamp not null  comment '',
   primary key (ID_USER)
);

alter table PEMESANAN add constraint FK_PEMESANA_KENDARAAN_KENDARAA foreign key (ID_KENDARAAN)
      references KENDARAAN (ID_KENDARAAN) on delete restrict on update restrict;

alter table PEMESANAN add constraint FK_PEMESANA_USER_MEME_USER foreign key (ID_USER)
      references USER (ID_USER) on delete restrict on update restrict;

