import { iqScores } from "../src/data/iqScoreData";
import { countrySlugs } from "../src/data/countryIQData";
import { careerSlugs } from "../src/data/careerIQData";
import { ageGroupSlugs } from "../src/data/ageIQData";
import { famousPersonSlugs } from "../src/data/famousIQData";
import { mythSlugs } from "../src/data/iqMythData";
import { stateSlugs } from "../src/data/stateIQData";

console.log(JSON.stringify({
  scorePages: iqScores.length,
  countryPages: countrySlugs.length,
  careerPages: careerSlugs.length,
  agePages: ageGroupSlugs.length,
  famousPages: famousPersonSlugs.length,
  mythPages: mythSlugs.length,
  statePages: stateSlugs.length,
}, null, 2));
