import Airtable from "airtable";
import {
  getTranslationsFromAirtableData,
  translations as translationsFromLocal,
} from "src/utilities/translations";

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);
let remoteTranslations;

export default async (_req, res) => {
  let translations = remoteTranslations;

  if (!translations) {
    try {
      let data = [];
      const query = await base("test").select();

      await query.eachPage((records, fetchNextPage) => {
        records.forEach(record => {
          const recordIsAvailable = Object.keys(record.fields).length > 0;
          if (recordIsAvailable) {
            data.push(record.fields);
          }
        });

        fetchNextPage();
      });

      remoteTranslations = getTranslationsFromAirtableData(data);
      translations = remoteTranslations;
    } catch (e) {
      translations = translationsFromLocal;
    }
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(translations));
};
