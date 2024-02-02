import {z} from "zod"

export const registerSchema = z.object({
    username: z.string({
        required_error: "Usuario requerido"
    }),
    email: z.string({
        required_error: "Email es requerido"
    }).email({
        message: "Email invalido"
    }),
    password: z.string({
        required_error: "Contraseña requerida",
    })
    .min(6, {
        message: "La contraseña debe de tener 6 caracteres como minimo",
    }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email es requerido"
    }).email({
        message: "Email invalido"
    }),
    password: z.string({
        required_error: "Contraseña requerida",
    })
    .min(6, {
        message: "La contraseña debe de tener 6 caracteres como minimo",
    }),
});