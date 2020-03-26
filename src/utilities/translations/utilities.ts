export const getTranslationsFromAirtableData = records => {
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
};
