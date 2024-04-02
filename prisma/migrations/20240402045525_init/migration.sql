-- CreateTable
CREATE TABLE `asociada` (
    `id_asociada` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(45) NOT NULL,
    `historia` LONGTEXT NOT NULL,
    `foto` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_asociada`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `evento` (
    `id_evento` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(45) NOT NULL,
    `fecha_fin` DATE NOT NULL,

    PRIMARY KEY (`id_evento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `marca` (
    `id_marca` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(45) NOT NULL,
    `Asociada_id_asociada` INTEGER NOT NULL,
    `tipo` INTEGER NOT NULL,

    UNIQUE INDEX `nombre_UNIQUE`(`nombre`),
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
    `foto` VARCHAR(45) NOT NULL,
    `marca_id_marca` INTEGER NOT NULL,
    `mercadoLibre` MEDIUMTEXT NULL,
    `cantidad` INTEGER NULL,

    INDEX `fk_producto_marca1_idx`(`marca_id_marca`),
    PRIMARY KEY (`id_producto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user` VARCHAR(45) NOT NULL,
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
    `envio` TINYINT NOT NULL,
    `nombre_cliente` VARCHAR(45) NOT NULL,
    `apellidos_cliente` VARCHAR(45) NOT NULL,
    `empresa` VARCHAR(45) NULL,
    `telefono` VARCHAR(10) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `cp` VARCHAR(5) NOT NULL,
    `calle` VARCHAR(45) NOT NULL,
    `num_ext` VARCHAR(10) NOT NULL,
    `num_int` VARCHAR(10) NULL,
    `colonia` VARCHAR(45) NOT NULL,
    `poblacion` VARCHAR(45) NOT NULL,
    `region` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_venta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `galeria_categoria` (
    `id_categoria` INTEGER NOT NULL AUTO_INCREMENT,
    `categoria` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id_categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `galeria_foto` (
    `id_foto` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(45) NOT NULL,
    `descripcion` VARCHAR(45) NOT NULL,
    `fk_id_categoria` INTEGER NOT NULL,

    INDEX `fk_foto_categoria1_idx`(`fk_id_categoria`),
    PRIMARY KEY (`id_foto`, `fk_id_categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pregunta_frecuente` (
    `id_pregunta_frencuente` INTEGER NOT NULL AUTO_INCREMENT,
    `pregunta` TINYTEXT NOT NULL,
    `respuesta` TINYTEXT NOT NULL,

    PRIMARY KEY (`id_pregunta_frencuente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto_informacion` (
    `id_producto_informacion` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_agave` VARCHAR(45) NULL,
    `tipo_cosecha` VARCHAR(45) NULL,
    `tipo_elaboracion` VARCHAR(45) NULL,
    `tipo_horno` VARCHAR(45) NULL,
    `tipo_molienda` VARCHAR(45) NULL,
    `tipo_fermentacion` VARCHAR(45) NULL,
    `tipo_destilador` VARCHAR(45) NULL,
    `riquezaAlcoholica` VARCHAR(45) NULL,

    PRIMARY KEY (`id_producto_informacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `marca` ADD CONSTRAINT `fk_marca_Asociada1` FOREIGN KEY (`Asociada_id_asociada`) REFERENCES `asociada`(`id_asociada`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `producto` ADD CONSTRAINT `fk_producto_marca1` FOREIGN KEY (`marca_id_marca`) REFERENCES `marca`(`id_marca`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `venta_individual` ADD CONSTRAINT `fk_venta_individual_producto1` FOREIGN KEY (`producto_id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `venta_individual` ADD CONSTRAINT `fk_venta_individual_venta_total` FOREIGN KEY (`venta_total_id_venta`) REFERENCES `venta_total`(`id_venta`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `galeria_foto` ADD CONSTRAINT `fk_foto_categoria1` FOREIGN KEY (`fk_id_categoria`) REFERENCES `galeria_categoria`(`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;
