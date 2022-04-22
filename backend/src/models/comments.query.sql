USE natilus_zone;

CREATE TABLE comments (
    id INT(11) NOT NULL AUTO_INCREMENT,
    comment MEDIUMTEXT NOT NULL,
    id_users INT(11) NOT NULL,
    id_animal INT(11) NOT NULL,
    create_  timestamp NOT NULL DEFAULT current_timestamp,
    update_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_  timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),
    FOREIGN KEY (id_users) REFERENCES users(id),
    FOREIGN KEY (id_animal) REFERENCES animals(id)
);