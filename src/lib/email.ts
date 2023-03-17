import nodemailer from "nodemailer"

type EmailPayload = {
  to: string
  subject: string
  html: string
}

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.NEXT_SMTP_HOST,
  port: parseInt(process.env.NEXT_SMTP_PORT!),
  secure: true,

  auth: {
    user: process.env.NEXT_SMTP_USER,
    pass: process.env.NEXT_SMTP_PASSWORD,
  },
}

export const sendEmail = async (data: EmailPayload) => {
  // console.log(process.env)
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  return await transporter.sendMail({
    from: process.env.NEXT_SMTP_FROM_EMAIL,
    ...data,
  })
}