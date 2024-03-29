-- CreateTable
CREATE TABLE `galeria_categoria` (
    `id_categoria` INTEGER NOT NULL AUTO_INCREMENT,
    `categoria` VARCHAR(30) NOT NULL DEFAULT '*Categoría*',

    UNIQUE INDEX `idcategoria_UNIQUE`(`id_categoria`),
    UNIQUE INDEX `categoria_UNIQUE`(`categoria`),
    PRIMARY KEY (`id_categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `galeria_fotos` (
    `id_foto` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(45) NOT NULL DEFAULT '/fotoDefault.jpg',
    `descripcion` VARCHAR(45) NULL DEFAULT '*sin descripción*',
    `fk_id_categoria` INTEGER NOT NULL,

    UNIQUE INDEX `id_foto_UNIQUE`(`id_foto`),
    INDEX `fk_galeria_fotos_galeria_categoria_idx`(`fk_id_categoria`),
    PRIMARY KEY (`id_foto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `galeria_fotos` ADD CONSTRAINT `fk_galeria_fotos_galeria_categoria` FOREIGN KEY (`fk_id_categoria`) REFERENCES `galeria_categoria`(`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;
