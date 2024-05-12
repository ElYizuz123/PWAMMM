"use server"
import { cloudinary } from "@/lib/cloudinary"

//  Funciona con File, lado del servidor
export const uploadImageFile = async (image, publicId) => {
  const fileBuffer = await image.arrayBuffer()
  const mime = image.type
  const encoding = "base64"
  const base64Data = Buffer.from(fileBuffer).toString("base64")
  const fileUri = "data:" + mime + ";" + encoding + "," + base64Data
  try {
    const uploadToCloudinary = async () => {
      return await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload(fileUri, {
            folder: publicId === undefined ? "/mezcaleras/" : undefined,
            public_id: publicId,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }

    const result = await uploadToCloudinary()

    return { picUri: result.secure_url, picId: result.public_id }
  } catch (error) {
    console.log(error)
    throw new Error("Error en cloudinary")
  }
}

export const deleteImageFile = async (publicId) => {
  try {
    const res = await cloudinary.api.delete_resources([publicId])
    console.log(res)
  } catch (error) {
    console.log(error)
    throw new Error("Error en cloudinary")
  }
}
