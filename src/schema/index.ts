import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Please enter valid email',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Please enter valid email',
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 character required',
  }),
  name: z.string().min(1, {
    message: 'Name is Required',
  }),
  isSubscribed: z.boolean().optional().default(false),
})
