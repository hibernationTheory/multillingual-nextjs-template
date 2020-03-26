import { translations } from "src/utilities/translations";
import Airtable from "airtable";

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

export default (req, res) => {
  console.log(base("test"));
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(translations));
};
