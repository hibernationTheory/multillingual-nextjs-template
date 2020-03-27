const Airtable = require("airtable");
const fs = require("fs");
const path = require("path");

require("dotenv").config();

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

async function getTranslationsFromAirtableData(records) {
  const translations = {};
  const translationKeyFieldName = "field";

  records.forEach(record => {
    const recordCopy = { ...record };
    const fieldValue = recordCopy[translationKeyFieldName];
    delete recordCopy[translationKeyFieldName];

    Object.entries(recordCopy).forEach(entry => {
      const [lang, translationInLang] = entry;
      if (!translations[lang]) {
        translations[lang] = {};
      }

      translations[lang][fieldValue] = translationInLang;
    });
  });

  return translations;
}

async function downloadTranslations() {
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

  return getTranslationsFromAirtableData(data);
}

async function main() {
  const translations = await downloadTranslations();
  const content = JSON.stringify(translations, null, 2);
  const filePath = path.join(__dirname, "translations.json");
  fs.writeFileSync(filePath, content);
}

main();
