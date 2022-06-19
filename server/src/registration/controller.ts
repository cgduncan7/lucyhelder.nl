import { GoogleAuth } from 'google-auth-library'
import { google } from 'googleapis'

const SPREADSHEET_ID = '1vSKlfedcRSDqmy_z2fwd2OuqZwckLW68xg_JPt-FlYM'

/**
 * Gets Google Auth from local credentials
 */
let googleAuth: GoogleAuth | null
const getGoogleAuth = () => {
  if (googleAuth) return googleAuth

  googleAuth = new google.auth.GoogleAuth({
    keyFile: './private/credentials.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })

  return googleAuth
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param auth The authenticated Google client
 */
const listData = async (auth: GoogleAuth): Promise<string[][] | null> => {
  const sheets = google.sheets({ version: 'v4', auth })
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Emails!B2:B'
  })
    
  const rows = res?.data.values
  if (rows && rows.length) {
    return rows
  } else {
    return null
  }
}

/**
 * Appends a new row to the sheet
 * @param auth The authenticated Google client
 * @param data Name and email to register
 */
const writeData = async (auth: GoogleAuth, data: { name: string, email: string }) => {
  const sheets = google.sheets({ version: 'v4', auth })
  const date = new Date().toDateString()
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Emails!A:C',
    valueInputOption: 'raw',
    requestBody: { values: [[data.name, data.email, date]] }
  })
}

/**
 * Adds a new email to sheet if it doesn't already exist
 * @param data Name and email to register
 */
export const registerPerson = async (data: { name: string, email: string }) => {
  const googleAuth = getGoogleAuth()

  const currentPeople = await listData(googleAuth)
  if (currentPeople?.find(([, email]) => email === data.email) === undefined) {
    await writeData(googleAuth, data);
  }
}
