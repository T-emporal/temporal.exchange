import { z } from 'zod';
import { endpoint, asHandler } from 'next-better-api';
import { sendEmail } from '~/lib/email';


const sendEmailEndpoint = endpoint(
    {
        method: 'get',
        querySchema: z.object({
            name: z.string(),
            message: z.string()
        }),
    },
    async ({ query }) => {
        var mailOptions = {
            from: 'dankguy6146@gmail.com',
            to: 'admin.cairorasa@proton.me',
            subject: `Message from ${query.name} @ temporal.exchange contact site`,
            text: query.message
        };
 
        const email_res = await sendEmail({
            to: "admin.cairorasa@proton.me",
            subject: `Message from ${query.name} @ temporal.exchange contact site`,
            html: query.message + "render(WelcomeTemplate())",
          });

        return {
            status: 200,
            body: email_res
        };
    }
);

export default asHandler([sendEmailEndpoint]);