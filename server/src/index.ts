import { GoogleAuth } from 'google-auth-library'
import { google } from 'googleapis'

const SPREADSHEET_ID = '1vSKlfedcRSDqmy_z2fwd2OuqZwckLW68xg_JPt-FlYM';

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
const listData = async (auth: GoogleAuth) => {
  const sheets = google.sheets({ version: 'v4', auth })
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Emails!A:B'
  })
    
  const rows = res?.data.values
  if (rows && rows.length) {
    rows.map((row) => {
      console.log(`${row[0]}, ${row[1]}`)
    })
  } else {
    console.log('No data found.')
  }
}

const writeData = async (auth: GoogleAuth, data: { name: string, email: string }) => {
  const sheets = google.sheets({ version: 'v4', auth })
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Emails!A:B',
    valueInputOption: 'raw',
    requestBody: { values: [[data.name, data.email]] }
  })
}

(async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: './private/credentials.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  await listData(auth)
  await writeData(auth, { name: 'collin', email: 'test' })
})()