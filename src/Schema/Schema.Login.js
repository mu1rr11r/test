import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty('البريد الإلكتروني مطلوب')
    .email('أدخل بريد إلكتروني صحيح'),

  password: z
    .string()
    .nonempty('كلمة المرور مطلوبة'),
})