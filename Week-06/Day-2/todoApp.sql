create database toDOApp;

use toDOApp;

create table toDos (
  id int not null auto_incremet primary key;
  toDoName varchar(30) not null;
  finished boolean default false not null;
  addedDate timestamp; 
);

insert into toDos(toDoName)("clean kitchen");
insert into toDos(toDoName)("go shopping");
insert into toDos(toDoName)("walk dog");
insert into toDos(toDoName)("cook dinner");

select * from toDos;