USE natilus_zone;

CREATE TABLE ctlg_type_specie (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    create_  timestamp NOT NULL DEFAULT current_timestamp,
    update_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_  timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id)
);