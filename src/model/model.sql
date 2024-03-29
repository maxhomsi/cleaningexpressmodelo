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


create table cust_info (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cust_name varchar(100) not null,
    userId INT NOT NULL, 
    FOREIGN KEY (userId) REFERENCES users(id)
)

create table services (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    type_job varchar(100) not null
    

)

create table maid_services (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    servicesId INT NOT NULL,
    FOREIGN KEY (servicesId) REFERENCES services(id),
    maidId INT NOT NULL,
    FOREIGN KEY (maidId) REFERENCES maid_info(id),
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id)

)

create table profileMatch (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cust_id INT NOT NULL,
    FOREIGN KEY (cust_id) REFERENCES cust_info(id),
    maid_id INT NOT NULL,
    FOREIGN KEY (maid_id) REFERENCES maid_info(id)
)