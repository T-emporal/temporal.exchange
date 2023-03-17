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
        const email_res = await sendEmail({
            to: "hello@temporal.exchange",
            subject: `Message from ${query.name} @ temporal.exchange contact site`,
            html: query.message,
        });

        return {
            status: 200,
            body: email_res
        };
    }
);

export default asHandler([sendEmailEndpoint]);