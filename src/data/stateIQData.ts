export interface StateIQInfo {
  name: string;
  slug: string;
  avgIQ: number;
  rank: number;
  region: string;
  description: string;
  faqItems: { question: string; answer: string }[];
}

export const stateIQData: StateIQInfo[] = [
  { name: "Massachusetts", slug: "massachusetts", avgIQ: 104.3, rank: 1, region: "Northeast",
    description: "Massachusetts consistently ranks #1 in US state IQ estimates, driven by its concentration of elite universities (Harvard, MIT, Boston University), high education spending per pupil, and one of the most educated populations in the country. Over 42% of adults hold a bachelor's degree or higher. The state's knowledge economy in biotech, finance, and technology attracts highly educated workers from across the globe.",
    faqItems: [
      { question: "What is the average IQ in Massachusetts?", answer: "Massachusetts has the highest estimated average IQ of any US state at 104.3, ranking #1 nationally. This reflects the state's exceptional education system, concentration of elite universities, and highly educated workforce." },
      { question: "Why does Massachusetts have the highest IQ?", answer: "Massachusetts benefits from the nation's highest education spending per pupil, world-class universities that attract talent, a knowledge-based economy, and a culture that strongly values education. Over 42% of adults hold college degrees." },
      { question: "How does Massachusetts compare to other states?", answer: "Massachusetts leads all states with an average IQ of 104.3, followed closely by New Hampshire, Vermont, and Connecticut. The Northeast region generally scores highest due to higher education investment and urbanization." },
    ],
  },
  { name: "New Hampshire", slug: "new-hampshire", avgIQ: 104.2, rank: 2, region: "Northeast",
    description: "New Hampshire ranks #2 in average IQ, benefiting from a well-funded education system, low poverty rates, and proximity to Boston's knowledge economy. The state has excellent public schools, high graduation rates, and a population that values self-reliance and education. New Hampshire's relatively homogeneous population and high median income contribute to consistently strong educational outcomes.",
    faqItems: [
      { question: "What is the average IQ in New Hampshire?", answer: "New Hampshire's estimated average IQ is 104.2, ranking #2 nationally. The state benefits from well-funded schools, low poverty, and a highly educated population." },
      { question: "Why does New Hampshire rank so high?", answer: "New Hampshire combines high education spending, low poverty rates, strong public schools, and proximity to New England's academic ecosystem. The state's high median income supports educational achievement." },
      { question: "How does New Hampshire compare to Massachusetts?", answer: "New Hampshire (104.2) is virtually tied with Massachusetts (104.3). Both benefit from the Northeast's strong education culture, though Massachusetts has more elite universities." },
    ],
  },
  { name: "Vermont", slug: "vermont", avgIQ: 103.8, rank: 3, region: "Northeast",
    description: "Vermont's #3 ranking reflects its small, well-educated population and strong commitment to public education. The state has some of the smallest class sizes in the nation and high per-pupil spending. Vermont's rural character means fewer large urban school districts with concentrated poverty, contributing to more equitable educational outcomes across the state.",
    faqItems: [
      { question: "What is the average IQ in Vermont?", answer: "Vermont's estimated average IQ is 103.8, ranking #3 in the US. The state benefits from small class sizes, high per-pupil education spending, and a well-educated population." },
      { question: "Why does Vermont score so high despite being rural?", answer: "Vermont's rural character actually benefits its IQ scores — smaller schools mean lower student-teacher ratios, and the state lacks the concentrated urban poverty that depresses scores in other states. High education funding and a culture that values learning also help." },
      { question: "How does Vermont compare to nearby states?", answer: "Vermont (103.8) ranks just behind Massachusetts (104.3) and New Hampshire (104.2). The entire New England region performs well due to shared educational values and strong public school systems." },
    ],
  },
  { name: "Connecticut", slug: "connecticut", avgIQ: 103.1, rank: 4, region: "Northeast",
    description: "Connecticut ranks #4, reflecting its position as one of the wealthiest states with excellent suburban school districts and proximity to New York and Boston's knowledge economies. However, Connecticut also has one of the widest achievement gaps between wealthy and low-income districts in the country, with cities like Hartford and Bridgeport performing far below affluent suburbs like Greenwich and Westport.",
    faqItems: [
      { question: "What is the average IQ in Connecticut?", answer: "Connecticut's estimated average IQ is 103.1, ranking #4. The state's wealthy suburbs drive high averages, though significant achievement gaps exist between affluent and low-income districts." },
      { question: "Why does Connecticut have a large achievement gap?", answer: "Connecticut's extreme wealth inequality creates two parallel education systems — excellent, well-funded suburban schools alongside underfunded urban districts. This gap is among the largest of any US state." },
      { question: "How does Connecticut compare to New York?", answer: "Connecticut (103.1) outranks New York (100.7) despite being smaller. Connecticut's suburban wealth and lack of large-scale urban poverty concentrations contribute to its higher average." },
    ],
  },
  { name: "Minnesota", slug: "minnesota", avgIQ: 103.7, rank: 5, region: "Midwest",
    description: "Minnesota is the Midwest's top performer, with a strong public education tradition rooted in Scandinavian immigrant values of egalitarianism and community investment. The state consistently ranks among the top 5 nationally in education outcomes. Minnesota's economy balances healthcare, technology, agriculture, and manufacturing, creating diverse opportunities for educated workers.",
    faqItems: [
      { question: "What is the average IQ in Minnesota?", answer: "Minnesota's estimated average IQ is 103.7, ranking #5 nationally and #1 in the Midwest. The state's strong education tradition and investment in public schools drive consistently high cognitive outcomes." },
      { question: "Why does Minnesota perform so well educationally?", answer: "Minnesota benefits from a culture that strongly values public education, well-funded school districts, strong teacher unions that maintain teaching quality, and Scandinavian-heritage values of community investment and egalitarianism." },
      { question: "How does Minnesota compare to other Midwest states?", answer: "Minnesota (103.7) leads the Midwest, followed by Wisconsin and Iowa. The upper Midwest generally outperforms the lower Midwest due to stronger education traditions and lower poverty rates." },
    ],
  },
  { name: "Oregon", slug: "oregon", avgIQ: 103.4, rank: 6, region: "West",
    description: "Oregon ranks #6, benefiting from a well-educated population concentrated in the Portland metro area's technology and creative sectors. The state has a strong progressive education tradition and attracts educated workers from across the country. However, rural Oregon has significantly lower educational outcomes, creating an urban-rural divide similar to many western states.",
    faqItems: [
      { question: "What is the average IQ in Oregon?", answer: "Oregon's estimated average IQ is 103.4, ranking #6 nationally. Portland's tech-educated population drives the high average, though rural areas score lower." },
      { question: "Why does Oregon rank so high?", answer: "Portland's booming tech sector (Intel, Nike, numerous startups) attracts highly educated workers. The state also has a strong progressive education tradition and relatively high college graduation rates." },
      { question: "How does Oregon compare to Washington?", answer: "Oregon (103.4) and Washington (102.9) are close, both benefiting from Pacific Northwest tech economies. Washington has Seattle's stronger tech hub but also larger rural disparities." },
    ],
  },
  { name: "Washington", slug: "washington", avgIQ: 102.9, rank: 7, region: "West",
    description: "Washington state benefits enormously from Seattle's technology sector — Microsoft, Amazon, Boeing, and thousands of startups attract some of the world's most educated workers. The state ranks among the highest in STEM employment per capita. However, eastern Washington has significantly lower educational outcomes, and the state struggles with educational equity across its diverse population.",
    faqItems: [
      { question: "What is the average IQ in Washington state?", answer: "Washington's estimated average IQ is 102.9, ranking #7. Seattle's massive tech sector drives the high average, though significant east-west educational disparities exist." },
      { question: "Does Amazon's presence affect Washington's IQ average?", answer: "Indirectly, yes. Amazon, Microsoft, and Boeing attract highly educated workers to the Seattle metro area, raising the state's overall educational profile and average cognitive test scores." },
      { question: "How does Washington compare to California?", answer: "Washington (102.9) ranks higher than California (101.5) despite being smaller. Washington's tech sector is more concentrated relative to its population, and California's vast size includes more low-income rural areas." },
    ],
  },
  { name: "New Jersey", slug: "new-jersey", avgIQ: 102.8, rank: 8, region: "Northeast",
    description: "New Jersey ranks #8, driven by its position in the New York-Philadelphia corridor with access to both metro areas' knowledge economies. The state has some of the nation's best public schools in its suburban communities, though urban districts like Newark and Camden face significant challenges. New Jersey's pharmaceutical, finance, and technology sectors attract educated professionals.",
    faqItems: [
      { question: "What is the average IQ in New Jersey?", answer: "New Jersey's estimated average IQ is 102.8, ranking #8 nationally. The state's suburban school districts are among the nation's best, though urban areas face challenges." },
      { question: "Why does New Jersey have good schools?", answer: "New Jersey benefits from high property values that fund well-resourced suburban schools, proximity to New York and Philadelphia's universities, and a knowledge-economy workforce in pharmaceuticals, finance, and technology." },
      { question: "How does New Jersey compare to New York?", answer: "New Jersey (102.8) outperforms New York (100.7) on average, primarily because New Jersey's suburban school quality is more uniformly high, while New York City's massive population includes wider socioeconomic variation." },
    ],
  },
  { name: "Virginia", slug: "virginia", avgIQ: 101.9, rank: 9, region: "South",
    description: "Virginia is the South's top performer, driven by Northern Virginia's proximity to Washington DC and its concentration of government contractors, tech companies, and military installations. Fairfax County consistently ranks among the nation's best school districts. However, rural Virginia and Appalachian communities have significantly lower educational outcomes, creating one of the country's sharpest urban-rural divides.",
    faqItems: [
      { question: "What is the average IQ in Virginia?", answer: "Virginia's estimated average IQ is 101.9, ranking #9 nationally and #1 in the South. Northern Virginia's proximity to DC and its tech corridor drive the high average." },
      { question: "Why does Virginia outperform other Southern states?", answer: "Northern Virginia (NoVA) functions as an extension of the DC metropolitan area, with a highly educated population working in government, defense, and technology. Fairfax County is among the nation's wealthiest and best-educated counties." },
      { question: "How does Virginia compare to other Southern states?", answer: "Virginia (101.9) significantly outperforms most Southern states. The next highest Southern states are typically North Carolina and Georgia, both around 98-99, reflecting Virginia's unique DC corridor advantage." },
    ],
  },
  { name: "Wisconsin", slug: "wisconsin", avgIQ: 102.9, rank: 10, region: "Midwest",
    description: "Wisconsin ranks in the top 10 thanks to its strong public education tradition, well-regarded university system (UW-Madison is a top research university), and German/Scandinavian cultural heritage that emphasizes education and community investment. The state has traditionally had strong teacher unions and above-average education spending.",
    faqItems: [
      { question: "What is the average IQ in Wisconsin?", answer: "Wisconsin's estimated average IQ is 102.9, ranking #10 nationally. The state's strong public education tradition and University of Wisconsin system contribute to consistently high educational outcomes." },
      { question: "Why does Wisconsin perform well educationally?", answer: "Wisconsin benefits from a strong public education tradition, well-funded schools, the flagship UW-Madison research university, and cultural values rooted in German and Scandinavian immigrant heritage that emphasize education and community." },
      { question: "How does Wisconsin compare to Minnesota?", answer: "Wisconsin (102.9) is close to but slightly below Minnesota (103.7). Both upper Midwest states share similar educational values and traditions, with Minnesota's slightly stronger performance possibly reflecting higher education spending." },
    ],
  },
];

export function getStateBySlug(slug: string): StateIQInfo | undefined {
  return stateIQData.find((s) => s.slug === slug);
}

export const stateSlugs = stateIQData.map((s) => s.slug);
