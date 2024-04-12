export {default} from "next-auth/middleware"

export const config = {
    matcher: ["/administrador/:path*"],

    //:path* -> para proteger todo despues de esto 
};