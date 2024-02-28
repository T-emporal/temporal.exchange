import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';

interface ErrorResponse {
  message: string;
}

interface SuccessResponse {
  rowCount: number;
}

interface GoogleCredentials {
  type?: string;
  project_id?: string;
  private_key_id?: string;
  private_key?: string;
  client_email?: string;
  client_id?: string;
  auth_uri?: string;
  token_uri?: string;
  auth_provider_x509_cert_url?: string;
  client_x509_cert_url?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  if (req.method === 'GET') {
    try {
      const decodedKey = Buffer.from(process.env.GOOGLE_SERVICE_KEY || '', 'base64').toString();
      const credentials = JSON.parse(decodedKey) as GoogleCredentials;

      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: credentials.client_email,
          client_id: credentials.client_id,
          private_key: credentials.private_key,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
      });

      const sheets = google.sheets({ auth, version: 'v4' });
      const spreadsheetId = process.env.DATABASE_ID || '';
      // const range = 'A:A';
      const range = 'Unique Users!A:B';

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });

      const numRows = response.data.values ? response.data.values.length : 0;
      res.status(200).json({ rowCount: numRows });
    } catch (error) {
      console.error('Error fetching row count:', error);
      res.status(500).json({ message: 'Failed to fetch row count' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${(req.method ?? "UNKNOWN")} Not Allowed` });
  }
}
