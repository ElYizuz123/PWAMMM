-- CreateTable
CREATE TABLE `marca` (
    `idMarca` INTEGER NOT NULL,
    `Nombre` VARCHAR(45) NOT NULL,
    `idMezcalera` VARCHAR(45) NULL,
    `Tipo` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `Nombre_UNIQUE`(`Nombre`),
    PRIMARY KEY (`idMarca`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto` (
    `idProducto` INTEGER NOT NULL,
    `nombre` VARCHAR(45) NOT NULL,
    `idMarca` INTEGER NOT NULL,
    `foto` BLOB NOT NULL,
    `precio` DECIMAL(10, 0) NOT NULL,
    `mercadoLibre` LONGTEXT NULL,
    `cantidad` INTEGER NOT NULL,

    UNIQUE INDEX `nombre_UNIQUE`(`nombre`),
    INDEX `idMarca`(`idMarca`),
    PRIMARY KEY (`idProducto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto_informacion` (
    `idproducto_informacion` INTEGER NOT NULL,
    `idProducto` INTEGER NOT NULL,
    `tipo_agave` VARCHAR(45) NULL,
    `tipo_cosecha` VARCHAR(45) NULL,
    `tipo_elaboracion` VARCHAR(45) NULL,
    `tipo_horno` VARCHAR(45) NULL,
    `tipo_molienda` VARCHAR(45) NULL,
    `tipo_fermentacion` VARCHAR(45) NULL,
    `tipo_destilador` VARCHAR(45) NULL,
    `riquezaAlcoholica` VARCHAR(45) NULL,
    `contenido` INTEGER NULL,

    UNIQUE INDEX `idproducto_informacion_UNIQUE`(`idproducto_informacion`),
    UNIQUE INDEX `idProducto_UNIQUE`(`idProducto`),
    PRIMARY KEY (`idproducto_informacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `venta` (
    `idventa` INTEGER NOT NULL,
    `fechaVenta` DATE NOT NULL,
    `total` DECIMAL(10, 0) NOT NULL,
    `status` TINYINT NOT NULL DEFAULT 0,
    `carrito` JSON NOT NULL,
    `envio` TINYINT NOT NULL,

    UNIQUE INDEX `idventa_UNIQUE`(`idventa`),
    PRIMARY KEY (`idventa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `venta_detalle` (
    `idventa_detalle` INTEGER NOT NULL,
    `idVenta` INTEGER NOT NULL,
    `cliente_nombre` VARCHAR(45) NOT NULL,
    `cliente_apellidos` VARCHAR(60) NOT NULL,
    `empresa_nombre` VARCHAR(45) NULL,
    `cliente_telefono` VARCHAR(10) NOT NULL,
    `cliente_email` VARCHAR(45) NOT NULL,
    `cliente_cp` VARCHAR(5) NOT NULL,
    `cliente_calle` VARCHAR(45) NOT NULL,
    `cliente_numExt` INTEGER NOT NULL,
    `cliente_numInt` INTEGER NULL,
    `cliente_colonia` VARCHAR(45) NOT NULL,
    `cliente_poblacion` VARCHAR(45) NOT NULL,
    `cliente_region` VARCHAR(45) NOT NULL,
    `cliente_pais` VARCHAR(45) NOT NULL DEFAULT 'MEXICO',

    INDEX `idVenta`(`idVenta`),
    PRIMARY KEY (`idventa_detalle`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `producto` ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`idMarca`) REFERENCES `marca`(`idMarca`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `producto_informacion` ADD CONSTRAINT `producto_informacion_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `producto`(`idProducto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `venta_detalle` ADD CONSTRAINT `venta_detalle_ibfk_1` FOREIGN KEY (`idVenta`) REFERENCES `venta`(`idventa`) ON DELETE NO ACTION ON UPDATE NO ACTION;
