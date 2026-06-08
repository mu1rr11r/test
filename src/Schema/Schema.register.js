import { z } from 'zod'
export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty('الاسم مطلوب')
      .min(3, 'الاسم يجب أن يكون 3 أحرف على الأقل')
      .max(20, 'الاسم يجب ألا يزيد عن 20 حرف'),

  
    email: z
      .string()
      .nonempty('البريد الإلكتروني مطلوب')
      .email('أدخل بريد إلكتروني صحيح'),

    phone: z.string().nonempty('رقم الهاتف مطلوب'),


    password: z
      .string()
      .nonempty('كلمة المرور مطلوبة')
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'يجب أن تحتوي كلمة المرور على حرف كبير وصغير ورقم ورمز خاص و8 أحرف على الأقل'
      ),

    rePassword: z
      .string()
      .nonempty('تأكيد كلمة المرور مطلوب'),
  })
  .refine((data) => data.password === data.rePassword, {
    path: ['rePassword'],
    message: 'كلمتا المرور غير متطابقتين',
  })