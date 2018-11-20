DROP SCHEMA IF EXISTS `aerolinea`;

CREATE SCHEMA IF NOT EXISTS `aerolinea` DEFAULT CHARACTER SET utf8 ;

USE `aerolinea` ;

--------------
/* Pasajero */
/*
Create table usuario(
cod_usuario int primary key AUTO_INCREMENT not null,
nombre varchar(45) not null,
apellido varchar(45) not null,
dni varchar(8) not null,
cargo varchar(45) not null,
tipo varchar(1) not null)
;
*/


Create table tb_pais(
cod_pais int primary key AUTO_INCREMENT not null,
descripcion varchar(45) not null)
;

Insert into tb_pais(descripcion) values('Alemania');
Insert into tb_pais(descripcion) values('Rusia');
Insert into tb_pais(descripcion) values('Argentina');
Insert into tb_pais(descripcion) values('Belgica');
Insert into tb_pais(descripcion) values('Brasil');
Insert into tb_pais(descripcion) values('Barbados');
Insert into tb_pais(descripcion) values('Canada');
Insert into tb_pais(descripcion) values('Colombia');
Insert into tb_pais(descripcion) values('Costa Rica');
Insert into tb_pais(descripcion) values('España');
Insert into tb_pais(descripcion) values('Estados Unidos');
Insert into tb_pais(descripcion) values('Francia');
Insert into tb_pais(descripcion) values('Filipinas');
Insert into tb_pais(descripcion) values('Italia');
Insert into tb_pais(descripcion) values('Jamaica');
Insert into tb_pais(descripcion) values('Guatemala');
Insert into tb_pais(descripcion) values('Japon');
Insert into tb_pais(descripcion) values('Mexico');
Insert into tb_pais(descripcion) values('Nueva Zelanda');
Insert into tb_pais(descripcion) values('Panama');
Insert into tb_pais(descripcion) values('Reino Unido');
Insert into tb_pais(descripcion) values('Suecia');
Insert into tb_pais(descripcion) values('Portugal');
Insert into tb_pais(descripcion) values('Suiza');
Insert into tb_pais(descripcion) values('Uruguay');
Insert into tb_pais(descripcion) values('Ucrania');
Insert into tb_pais(descripcion) values('Zimbabue');
Insert into tb_pais(descripcion) values('Venezuela');
Insert into tb_pais(descripcion) values('Turquia');
Insert into tb_pais(descripcion) values('Singapur');
Insert into tb_pais(descripcion) values('Peru');

/*
Create table destino(
cod_destino varchar(45) primary key not null,
descripcion varchar(45) not null,
cod_pais varchar(45) not null,
valor_pasaje decimal(10,0) not null) //????
;
*/

/* ??? */
/*
Create table tb_aerolinea (
cod_aerolinea varchar(45) primary key not null,
descripcion varchar(45) not null)
;
*/

Create table tb_avion(
cod_avion int primary key AUTO_INCREMENT not null,
fabricante varchar(45) not null,
modelo varchar(45) not null,
año_fabricacion varchar(5) not null,
capacidad int not null)
/*cod_aerolinea varchar(45) references aerolinea(cod_aerolinea) not null,*/
;

Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 747','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 748','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 749','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 741','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 742','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 743','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 744','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 745','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 746','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 740','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 750','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 751','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 752','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 753','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 754','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 755','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 756','2002',289);
Insert into tb_avion(fabricante,modelo,año_fabricacion,capacidad) values('Boeing','Boeing 757','2002',289);


Create table tb_aeropuerto(
cod_aeropuerto int primary key AUTO_INCREMENT not null,
descripcion varchar(45) not null,
direccion varchar(45) not null,
cod_pais varchar(45) references tb_pais(cod_pais))
;

Insert into tb_aeropuerto(descripcion,direccion,cod_pais) values('Aeropuerto Internacional Jorge Chávez','Av. Elmer Faucett s/n, Callao 07031','31');
Insert into tb_aeropuerto(descripcion,direccion,cod_pais) values('Aeropuerto Internacional de Cancún','Av. Elmer Faucett s/n, Callao 07031','18');
Insert into tb_aeropuerto(descripcion,direccion,cod_pais) values('Aeropuerto Internacional de Monterrey ','Av. Elmer Faucett s/n, Callao 07031','18');
Insert into tb_aeropuerto(descripcion,direccion,cod_pais) values('Aeropuerto Internacional de Tijuana','Av. Elmer Faucett s/n, Callao 07031','18');
Insert into tb_aeropuerto(descripcion,direccion,cod_pais) values('Aeropuerto Internacional Lester B. Pearson','Av. Elmer Faucett s/n, Callao 07031','12');
Insert into tb_aeropuerto(descripcion,direccion,cod_pais) values('Aeropuerto Internacional Vancouver','Av. Elmer Faucett s/n, Callao 07031','6');
Insert into tb_aeropuerto(descripcion,direccion,cod_pais) values('Aeropuerto Internacional Calgary','Av. Elmer Faucett s/n, Callao 07031','1');
Insert into tb_aeropuerto(descripcion,direccion,cod_pais) values('Aeropuerto Internacional Edmonton','Av. Elmer Faucett s/n, Callao 07031','11');
Insert into tb_aeropuerto(descripcion,direccion,cod_pais) values('Aeropuerto Internacional Halifax','Av. Elmer Faucett s/n, Callao 07031','20');
Insert into tb_aeropuerto(descripcion,direccion,cod_pais) values('Aeropuerto Internacional Regina','Av. Elmer Faucett s/n, Callao 07031','15');

Create table tb_vuelo(
cod_vuelo int primary key AUTO_INCREMENT not null,
cod_aeropuertoSalida varchar(45) references tb_aeropuerto(cod_aeropuerto),
cod_aeropuertoLlegada varchar(45) references tb_aeropuerto(cod_aeropuerto),
cod_avion varchar(45) references tb_avion(cod_avion),
fecha_salida date not null,
fecha_llegada date not null,
hora_salida varchar(45) not null,
hora_llegada varchar(45) not null,
tarifa_base decimal(10,0) not null)
;

Insert into tb_vuelo(cod_aeropuertoSalida,cod_aeropuertoLlegada,cod_avion,fecha_salida,fecha_llegada,hora_salida,hora_llegada,tarifa_base) values(1,2,1,'2018/11/17','2018/11/18','8:00','20:00',1000);
Insert into tb_vuelo(cod_aeropuertoSalida,cod_aeropuertoLlegada,cod_avion,fecha_salida,fecha_llegada,hora_salida,hora_llegada,tarifa_base) values(1,3,9,'2018/11/18','2018/11/18','8:00','20:00',900);
Insert into tb_vuelo(cod_aeropuertoSalida,cod_aeropuertoLlegada,cod_avion,fecha_salida,fecha_llegada,hora_salida,hora_llegada,tarifa_base) values(1,4,6,'2018/11/19','2018/11/20','8:00','20:00',1000);
Insert into tb_vuelo(cod_aeropuertoSalida,cod_aeropuertoLlegada,cod_avion,fecha_salida,fecha_llegada,hora_salida,hora_llegada,tarifa_base) values(1,5,1,'2018/11/20','2018/11/21','8:00','20:00',1500);
Insert into tb_vuelo(cod_aeropuertoSalida,cod_aeropuertoLlegada,cod_avion,fecha_salida,fecha_llegada,hora_salida,hora_llegada,tarifa_base) values(1,6,5,'2018/11/21','2018/11/22','8:00','20:00',600);
Insert into tb_vuelo(cod_aeropuertoSalida,cod_aeropuertoLlegada,cod_avion,fecha_salida,fecha_llegada,hora_salida,hora_llegada,tarifa_base) values(1,7,13,'2018/11/30','2018/12/01','8:00','20:00',1000);
Insert into tb_vuelo(cod_aeropuertoSalida,cod_aeropuertoLlegada,cod_avion,fecha_salida,fecha_llegada,hora_salida,hora_llegada,tarifa_base) values(1,8,1,'2018/11/15','2018/11/16','8:00','20:00',1200);
Insert into tb_vuelo(cod_aeropuertoSalida,cod_aeropuertoLlegada,cod_avion,fecha_salida,fecha_llegada,hora_salida,hora_llegada,tarifa_base) values(1,9,2,'2018/11/16','2018/11/17','8:00','20:00',1000);
Insert into tb_vuelo(cod_aeropuertoSalida,cod_aeropuertoLlegada,cod_avion,fecha_salida,fecha_llegada,hora_salida,hora_llegada,tarifa_base) values(1,10,1,'2018/11/13','2018/11/14','8:00','20:00',790);
Insert into tb_vuelo(cod_aeropuertoSalida,cod_aeropuertoLlegada,cod_avion,fecha_salida,fecha_llegada,hora_salida,hora_llegada,tarifa_base) values(1,2,11,'2018/11/25','2018/11/26','8:00','20:00',1000);
Insert into tb_vuelo(cod_aeropuertoSalida,cod_aeropuertoLlegada,cod_avion,fecha_salida,fecha_llegada,hora_salida,hora_llegada,tarifa_base) values(1,3,12,'2018/11/26','2018/11/27','8:00','20:00',1100);

/* Esta info se obtiene con aeropuerto salida y llegada*/ 
/*origen varchar(45) not null,
destino varchar(45) not null)
*/

/*pasajero o cliente*/
Create table pasajero(
id int primary key AUTO_INCREMENT,
nombre varchar(45) not null,
apellido varchar(100) not null,
tipo_documento varchar(45) not null,
num_documento varchar(45) not null,
cod_pais varchar(45) references tb_pais(cod_pais),
telefono varchar(45) not null,
email varchar(45) not null,
clave varchar(45) not null)
;


Insert into pasajero(nombre,apellido,tipo_documento,num_documento,cod_pais,telefono,email,clave) 
values
('Yorgina Lecaros ','Cordova','Dni','43456123',20,'928817856','yorgina@gmail.com','reajk'),
('Andy Javier ','Reyes','Dni','73456123',20,'928817856','andyrobersjavierreyes@gmail.com','reaper');


Create table tb_venta(
cod_venta int primary key AUTO_INCREMENT not null,
cod_vuelo varchar(45) references tb_vuelo(cod_vuelo),
cod_pasajero varchar(45) not null,
clase varchar(45) not null,
precio_final decimal(10,0) not null,
fecha_venta date not null,
tipo_comprobante varchar(45) not null,
num_comprobante varchar(45) not null)
;


Insert into tb_venta(cod_vuelo ,cod_pasajero ,clase ,precio_final ,fecha_venta ,tipo_comprobante 
,num_comprobante ) 
values (4,2,'Economica',85.0,'2019/11/27','Recibo de honorarios','1874652314') ,
(3,1,'Vip',25.0,'2018/11/27','Facturas','12314');





