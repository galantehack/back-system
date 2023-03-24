CREATE SCHEMA IF NOT EXISTS `quests` DEFAULT CHARACTER SET utf8;

USE `quests`;

-- -----------------------------------------------------
-- Table `quests`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `quests`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(150) NOT NULL,
  `last_name` VARCHAR(150) NOT NULL,
  `user` VARCHAR(150) NOT NULL,
  `password` VARCHAR(250) NULL,
  `status` TINYINT NULL DEFAULT 1,
  `is_admin` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `quests`.`cuestionarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `quests`.`cuestionarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `answer` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cuestionarios_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_cuestionarios_users` FOREIGN KEY (`users_id`) REFERENCES `quests`.`users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;