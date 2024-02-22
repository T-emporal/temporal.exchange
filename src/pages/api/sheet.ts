import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";
import type { sheets_v4 } from "googleapis";

interface SuccessResponse {
  message: string;
}

interface ErrorResponse {
  message: string;
}

interface RequestBody {
  discordHandle: string;
  telegramHandle: string;
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

async function appendToSheet(
  discordHandle: string,
  telegramHandle: string
): Promise<sheets_v4.Schema$AppendValuesResponse> {
  if (!process.env.GOOGLE_SERVICE_KEY) {
    throw new Error("GOOGLE_SERVICE_KEY environment variable is not set.");
  }

  const decodedKey = Buffer.from(
    process.env.GOOGLE_SERVICE_KEY,
    "base64"
  ).toString();
  const credentials = JSON.parse(decodedKey) as GoogleCredentials;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: credentials.client_email,
      client_id: credentials.client_id,
      private_key: credentials.private_key,
    },
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });

  const sheets = google.sheets({ auth, version: "v4" });

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.DATABASE_ID,
    range: "Sheet1!A2:B",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[discordHandle, telegramHandle]],
    },
  });

  return response.data;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) => {
  if (req.method === "POST") {
    const { discordHandle, telegramHandle } = req.body as RequestBody;

    if (
      typeof discordHandle !== "string" ||
      typeof telegramHandle !== "string"
    ) {
      res.status(400).json({ message: "Invalid request body" });
      return;
    }

    try {
      await appendToSheet(discordHandle, telegramHandle);
      res.status(200).json({ message: "Data added successfully" });
    } catch (error) {
      console.error("Error appending to the sheet:", error);
      res.status(500).json({ message: "Failed to add data to the sheet" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${(req.method ?? "UNKNOWN")} Not Allowed` });
  }
};

export default handler;
