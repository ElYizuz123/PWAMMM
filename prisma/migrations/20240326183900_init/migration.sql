-- CreateTable
CREATE TABLE `asociada` (
    `id_asociada` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(45) NOT NULL,
    `historia` LONGTEXT NOT NULL,
    `foto` LONGBLOB NOT NULL,

    PRIMARY KEY (`id_asociada`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria` (
    `id_categoria` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `evento` (
    `id_evento` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` LONGBLOB NOT NULL,
    `fecha_inicio` DATE NOT NULL,
    `fecha_fin` DATE NOT NULL,

    PRIMARY KEY (`id_evento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `foto` (
    `id_foto` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` LONGBLOB NOT NULL,
    `titulo` VARCHAR(45) NOT NULL,
    `categoria_id_categoria` INTEGER NOT NULL,

    INDEX `fk_foto_categoria1_idx`(`categoria_id_categoria`),
    PRIMARY KEY (`id_foto`, `categoria_id_categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `marca` (
    `id_marca` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(45) NOT NULL,
    `Asociada_id_asociada` INTEGER NOT NULL,

    INDEX `fk_marca_Asociada1_idx`(`Asociada_id_asociada`),
    PRIMARY KEY (`id_marca`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto` (
    `id_producto` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(45) NOT NULL,
    `ml` INTEGER NOT NULL,
    `precio` DECIMAL(10, 2) NOT NULL,
    `descripcion` LONGTEXT NOT NULL,
    `foto` LONGBLOB NOT NULL,
    `marca_id_marca` INTEGER NOT NULL,

    INDEX `fk_producto_marca1_idx`(`marca_id_marca`),
    PRIMARY KEY (`id_producto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user` INTEGER NOT NULL AUTO_INCREMENT,
    `password` MEDIUMTEXT NOT NULL,

    PRIMARY KEY (`user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `venta_individual` (
    `id_venta_individual` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidad_producto` INTEGER NOT NULL,
    `subtotal` DECIMAL(10, 2) NOT NULL,
    `venta_total_id_venta` INTEGER NOT NULL,
    `producto_id_producto` INTEGER NOT NULL,

    INDEX `fk_venta_individual_producto1_idx`(`producto_id_producto`),
    INDEX `fk_venta_individual_venta_total_idx`(`venta_total_id_venta`),
    PRIMARY KEY (`id_venta_individual`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `venta_total` (
    `id_venta` INTEGER NOT NULL,
    `fecha_venta` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `total` DECIMAL(10, 2) NOT NULL,
    `status` VARCHAR(45) NOT NULL DEFAULT 'Pendiente',

    PRIMARY KEY (`id_venta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `foto` ADD CONSTRAINT `fk_foto_categoria1` FOREIGN KEY (`categoria_id_categoria`) REFERENCES `categoria`(`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `marca` ADD CONSTRAINT `fk_marca_Asociada1` FOREIGN KEY (`Asociada_id_asociada`) REFERENCES `asociada`(`id_asociada`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `producto` ADD CONSTRAINT `fk_producto_marca1` FOREIGN KEY (`marca_id_marca`) REFERENCES `marca`(`id_marca`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `venta_individual` ADD CONSTRAINT `fk_venta_individual_producto1` FOREIGN KEY (`producto_id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `venta_individual` ADD CONSTRAINT `fk_venta_individual_venta_total` FOREIGN KEY (`venta_total_id_venta`) REFERENCES `venta_total`(`id_venta`) ON DELETE NO ACTION ON UPDATE NO ACTION;
