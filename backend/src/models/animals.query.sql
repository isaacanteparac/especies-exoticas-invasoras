USE natilus_zone;

CREATE TABLE animals (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    photo LONGBLOB NOT NULL,
    sound LONGBLOB NULL,
    id_ctlg_type_specie INT(11) NULL,
    id_users INT(11) NOT NULL,
    id_ctlg_ctlg_scientific_name INT(11) NOT NULL,
    id_ctlg_danger_level INT(11) NOT NULL,
    create_  timestamp NOT NULL DEFAULT current_timestamp,
    update_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_  timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),
    FOREIGN KEY (id_ctlg_type_specie) REFERENCES ctlg_type_specie(id),
    FOREIGN KEY (id_users) REFERENCES users(id),
    FOREIGN KEY (id_ctlg_ctlg_scientific_name) REFERENCES ctlg_scientific_name_animal(id),
    FOREIGN KEY (id_ctlg_danger_level) REFERENCES ctlg_danger_level(id)

);