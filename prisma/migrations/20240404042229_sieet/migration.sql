-- CreateTable
CREATE TABLE "asociada" (
    "id_asociada" SERIAL NOT NULL,
    "nombre" VARCHAR(45) NOT NULL,
    "historia" TEXT NOT NULL,
    "foto" VARCHAR(45) NOT NULL,

    CONSTRAINT "asociada_pkey" PRIMARY KEY ("id_asociada")
);

-- CreateTable
CREATE TABLE "evento" (
    "id_evento" SERIAL NOT NULL,
    "foto" VARCHAR(45) NOT NULL,
    "fecha_fin" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "evento_pkey" PRIMARY KEY ("id_evento")
);

-- CreateTable
CREATE TABLE "marca" (
    "id_marca" SERIAL NOT NULL,
    "nombre" VARCHAR(45) NOT NULL,
    "Asociada_id_asociada" INTEGER NOT NULL,
    "tipo" INTEGER NOT NULL,

    CONSTRAINT "marca_pkey" PRIMARY KEY ("id_marca")
);

-- CreateTable
CREATE TABLE "producto" (
    "id_producto" SERIAL NOT NULL,
    "nombre" VARCHAR(45) NOT NULL,
    "tipo_agave" TEXT NOT NULL,
    "cantidad_alcohol" INTEGER NOT NULL,
    "ml" INTEGER NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "foto" VARCHAR(45) NOT NULL,
    "marca_id_marca" INTEGER NOT NULL,
    "mercadoLibre" TEXT,
    "cantidad" INTEGER,

    CONSTRAINT "producto_pkey" PRIMARY KEY ("id_producto")
);

-- CreateTable
CREATE TABLE "acompanamiento" (
    "id_acompanamiento" SERIAL NOT NULL,
    "nombre" VARCHAR(45) NOT NULL,
    "gr" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "foto" VARCHAR(45) NOT NULL,
    "marca_id_marca" INTEGER NOT NULL,
    "cantidad" INTEGER,

    CONSTRAINT "acompanamiento_pkey" PRIMARY KEY ("id_acompanamiento")
);

-- CreateTable
CREATE TABLE "user" (
    "user" VARCHAR(45) NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user")
);

-- CreateTable
CREATE TABLE "venta_individual" (
    "id_venta_individual" SERIAL NOT NULL,
    "cantidad_producto" INTEGER NOT NULL,
    "subtotal" DECIMAL(10,2) NOT NULL,
    "venta_total_id_venta" INTEGER NOT NULL,
    "producto_id_producto" INTEGER,
    "acompanamiento_id_acompanamiento" INTEGER,

    CONSTRAINT "venta_individual_pkey" PRIMARY KEY ("id_venta_individual")
);

-- CreateTable
CREATE TABLE "venta_total" (
    "id_venta" INTEGER NOT NULL,
    "fecha_venta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" DECIMAL(10,2) NOT NULL,
    "status" VARCHAR(45) NOT NULL DEFAULT 'Pendiente',
    "envio" INTEGER NOT NULL,
    "nombre_cliente" VARCHAR(45) NOT NULL,
    "apellidos_cliente" VARCHAR(45) NOT NULL,
    "empresa" VARCHAR(45),
    "telefono" VARCHAR(10) NOT NULL,
    "email" VARCHAR(45) NOT NULL,
    "cp" VARCHAR(5) NOT NULL,
    "calle" VARCHAR(45) NOT NULL,
    "num_ext" VARCHAR(10) NOT NULL,
    "num_int" VARCHAR(10),
    "colonia" VARCHAR(45) NOT NULL,
    "poblacion" VARCHAR(45) NOT NULL,
    "region" VARCHAR(45) NOT NULL,

    CONSTRAINT "venta_total_pkey" PRIMARY KEY ("id_venta")
);

-- CreateTable
CREATE TABLE "galeria_categoria" (
    "id_categoria" SERIAL NOT NULL,
    "categoria" VARCHAR(30) NOT NULL,

    CONSTRAINT "galeria_categoria_pkey" PRIMARY KEY ("id_categoria")
);

-- CreateTable
CREATE TABLE "galeria_foto" (
    "id_foto" SERIAL NOT NULL,
    "foto" VARCHAR(45) NOT NULL,
    "descripcion" VARCHAR(45) NOT NULL,
    "fk_id_categoria" INTEGER NOT NULL,

    CONSTRAINT "galeria_foto_pk" PRIMARY KEY ("id_foto")
);

-- CreateTable
CREATE TABLE "pregunta_frecuente" (
    "id_pregunta_frencuente" SERIAL NOT NULL,
    "pregunta" TEXT NOT NULL,
    "respuesta" TEXT NOT NULL,

    CONSTRAINT "pregunta_frecuente_pkey" PRIMARY KEY ("id_pregunta_frencuente")
);

-- CreateTable
CREATE TABLE "producto_informacion" (
    "id_producto_informacion" SERIAL NOT NULL,
    "tipo_agave" VARCHAR(45),
    "tipo_cosecha" VARCHAR(45),
    "tipo_elaboracion" VARCHAR(45),
    "tipo_horno" VARCHAR(45),
    "tipo_molienda" VARCHAR(45),
    "tipo_fermentacion" VARCHAR(45),
    "tipo_destilador" VARCHAR(45),
    "riquezaAlcoholica" VARCHAR(45),

    CONSTRAINT "producto_informacion_pkey" PRIMARY KEY ("id_producto_informacion")
);

-- CreateIndex
CREATE UNIQUE INDEX "nombre_UNIQUE" ON "marca"("nombre");

-- CreateIndex
CREATE INDEX "fk_marca_Asociada1_idx" ON "marca"("Asociada_id_asociada");

-- CreateIndex
CREATE INDEX "fk_producto_marca1_idx" ON "producto"("marca_id_marca");

-- CreateIndex
CREATE INDEX "fk_acompanamiento_marca1_idx" ON "acompanamiento"("marca_id_marca");

-- CreateIndex
CREATE INDEX "fk_venta_individual_producto1_idx" ON "venta_individual"("producto_id_producto");

-- CreateIndex
CREATE INDEX "fk_venta_individual_venta_total_idx" ON "venta_individual"("venta_total_id_venta");

-- CreateIndex
CREATE INDEX "fk_venta_individual_acompanamiento_idx" ON "venta_individual"("acompanamiento_id_acompanamiento");

-- CreateIndex
CREATE INDEX "fk_foto_categoria1_idx" ON "galeria_foto"("fk_id_categoria");

-- AddForeignKey
ALTER TABLE "marca" ADD CONSTRAINT "fk_marca_Asociada1" FOREIGN KEY ("Asociada_id_asociada") REFERENCES "asociada"("id_asociada") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "producto" ADD CONSTRAINT "fk_producto_marca1" FOREIGN KEY ("marca_id_marca") REFERENCES "marca"("id_marca") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "acompanamiento" ADD CONSTRAINT "fk_acompanamiento_marca1" FOREIGN KEY ("marca_id_marca") REFERENCES "marca"("id_marca") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "venta_individual" ADD CONSTRAINT "fk_venta_individual_producto1" FOREIGN KEY ("producto_id_producto") REFERENCES "producto"("id_producto") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "venta_individual" ADD CONSTRAINT "fk_venta_individual_venta_total" FOREIGN KEY ("venta_total_id_venta") REFERENCES "venta_total"("id_venta") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "venta_individual" ADD CONSTRAINT "venta_individual_acompanamiento_id_acompanamiento_fkey" FOREIGN KEY ("acompanamiento_id_acompanamiento") REFERENCES "acompanamiento"("id_acompanamiento") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "galeria_foto" ADD CONSTRAINT "fk_foto_categoria1" FOREIGN KEY ("fk_id_categoria") REFERENCES "galeria_categoria"("id_categoria") ON DELETE NO ACTION ON UPDATE NO ACTION;
