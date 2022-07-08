-- Criar a table de usuarios , o "id" INT quer dizer que o numero e nao vai ser null pq tem q ter alguma coisa
-- o auto_increment informa que nao pode ser igual, ta sempre subindo
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email varchar(100) not null UNIQUE,
    pw_hash VARCHAR(1000) NOT NULL

);

insert into users(email, pw_hash) values (? , ?)

select pw_hash from users where email = ?


create table maid_info (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    maid_name varchar(100) not null,
    userId INT NOT NULL, 
    FOREIGN KEY (userId) REFERENCES users(id)
)
