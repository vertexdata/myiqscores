import fs from "node:fs";
import { iqScores } from "../src/data/iqScoreData.ts";
import { countrySlugs } from "../src/data/countryIQData.ts";
import { careerSlugs } from "../src/data/careerIQData.ts";
import { ageGroupSlugs } from "../src/data/ageIQData.ts";
import { famousPersonSlugs } from "../src/data/famousIQData.ts";
import { mythSlugs } from "../src/data/iqMythData.ts";
import { stateSlugs } from "../src/data/stateIQData.ts";

type Row = [source: string, destination: string, reason: string];

const rows: Row[] = [
  ...iqScores.map((score): Row => [`/is-${score}-iq-good`, `/iq-score-interpreter?score=${score}`, "Templated score page consolidated into the interactive interpreter"]),
  ...countrySlugs.map((slug): Row => [`/average-iq/${slug}`, "/average-iq-by-country", "Mixed-source country estimate consolidated into methodology-focused hub"]),
  ...careerSlugs.map((slug): Row => [`/iq-needed-for/${slug}`, "/iq-by-career", "Unsupported job IQ cutoff consolidated into job-skill guidance"]),
  ...ageGroupSlugs.map((slug): Row => [`/iq-by-age/${slug}`, "/what-is-iq", "Unsupported age estimate consolidated into standardized-score explainer"]),
  ...famousPersonSlugs.map((slug): Row => [`/famous-iq/${slug}`, "/famous-iq", "Unauthenticated individual estimate consolidated into evidence-checking guide"]),
  ...mythSlugs.map((slug): Row => [`/iq-myths/${slug}`, "/iq-myths", "Near-duplicate myth page consolidated into one maintained fact-check hub"]),
  ...stateSlugs.map((slug): Row => [`/average-iq-by-state/${slug}`, "/average-iq-by-state", "Inferred state IQ value consolidated into official-data methodology guide"]),
];

const escape = (value: string) => `"${value.replaceAll('"', '""')}"`;
const csv = ["source,destination,reason", ...rows.map((row) => row.map(escape).join(","))].join("\n") + "\n";
fs.writeFileSync("REDIRECT_INVENTORY.csv", csv);
console.log(`Wrote ${rows.length} documented redirects to REDIRECT_INVENTORY.csv`);
