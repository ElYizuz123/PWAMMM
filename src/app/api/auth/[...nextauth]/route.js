import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import db from '@/libs/db'


const authOptions ={

    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                user: {label: "User", type:"text", placeholder:"Usuario"},
                password:{ label:"Password", type:"password"}
            },
            async authorize(credentials){

                const userFound = await db.user.findUnique({
                    where:{
                        user: credentials.user
                    }
                })

                if(!userFound) throw new Error('Usuario o contraseña inválidos')
                    
                const bcrypt = require("bcrypt")
                const matchPassword = await bcrypt.compare(credentials.password, userFound.password)

                if(!matchPassword) throw new Error('Usuario o contraseña inválidos')
                
                return {
                    id: userFound.id_usuario,
                    name: userFound.user
                }
            }
        })
    ],
    pages: {
        signIn: "/login"
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}