import { iqScores } from "../src/data/iqScoreData.ts";
import { countrySlugs } from "../src/data/countryIQData.ts";
import { careerSlugs } from "../src/data/careerIQData.ts";
import { ageGroupSlugs } from "../src/data/ageIQData.ts";
import { famousPersonSlugs } from "../src/data/famousIQData.ts";
import { mythSlugs } from "../src/data/iqMythData.ts";
import { stateSlugs } from "../src/data/stateIQData.ts";

console.log(JSON.stringify({
  scorePages: iqScores.length,
  countryPages: countrySlugs.length,
  careerPages: careerSlugs.length,
  agePages: ageGroupSlugs.length,
  famousPages: famousPersonSlugs.length,
  mythPages: mythSlugs.length,
  statePages: stateSlugs.length,
}, null, 2));
