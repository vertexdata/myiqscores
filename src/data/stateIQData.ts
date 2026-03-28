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
  { name: "Colorado", slug: "colorado", avgIQ: 102.5, rank: 11, region: "West",
    description: "Colorado ranks #11, driven by its highly educated population — the state has one of the highest percentages of college-degree holders in the nation. Boulder and Denver attract tech workers, outdoor enthusiasts, and educated professionals. The state's aerospace, technology, and renewable energy sectors create demand for skilled workers, pulling in talent from across the country.",
    faqItems: [
      { question: "What is the average IQ in Colorado?", answer: "Colorado's estimated average IQ is 102.5, ranking #11 nationally. The state's highly educated, tech-oriented population drives strong cognitive test performance." },
      { question: "Why is Colorado so educated?", answer: "Colorado attracts highly educated workers through its quality of life (outdoor recreation, climate), booming tech and aerospace sectors, and strong university system including CU Boulder and Colorado School of Mines." },
      { question: "How does Colorado compare to California?", answer: "Colorado (102.5) outranks California (101.5), partly because Colorado's smaller population is more uniformly educated, while California's vast size includes wider socioeconomic variation." },
    ],
  },
  { name: "California", slug: "california", avgIQ: 101.5, rank: 14, region: "West",
    description: "California's ranking reflects its extraordinary diversity — the state contains both the world's most innovative tech hub (Silicon Valley) and some of the nation's most impoverished communities. California has more top-100 universities than any other state and leads in patents and innovation, yet also has significant achievement gaps along socioeconomic and geographic lines. The state's average masks enormous internal variation.",
    faqItems: [
      { question: "What is the average IQ in California?", answer: "California's estimated average IQ is 101.5, ranking #14. This average masks enormous variation — Silicon Valley's tech workforce scores well above average, while some rural and low-income communities score below." },
      { question: "Why doesn't California rank higher given Silicon Valley?", answer: "California's vast size and diversity pull its average toward the middle. While the Bay Area and LA have extremely educated populations, the state also has large agricultural regions and communities with limited educational access." },
      { question: "How does California compare to Texas?", answer: "California (101.5) outranks Texas (99.6). California has more top universities and a larger tech sector, while Texas has been closing the gap through economic growth and in-migration of educated workers." },
    ],
  },
  { name: "New York", slug: "new-york", avgIQ: 100.7, rank: 18, region: "Northeast",
    description: "New York's ranking reflects its dual nature: Manhattan and the NYC metro area are among the most educated places in the world, while upstate New York and parts of the outer boroughs have more modest educational profiles. New York City alone has more Ivy League-equivalent universities than most countries, but the state's massive population and wide socioeconomic range moderate the overall average.",
    faqItems: [
      { question: "What is the average IQ in New York?", answer: "New York's estimated average IQ is 100.7, ranking #18. Manhattan and suburban Westchester/Long Island score well above average, while other areas score lower, bringing the state average near the national mean." },
      { question: "Why doesn't New York rank higher?", answer: "Despite having world-class universities and a financial/media hub, New York's massive population of 20 million includes wide socioeconomic diversity. NYC alone has extreme inequality between wealthy neighborhoods and impoverished communities." },
      { question: "How does New York compare to New Jersey?", answer: "New Jersey (102.8) outranks New York (100.7). New Jersey's more uniformly affluent suburbs contribute to a higher average, while New York's larger population includes more variation." },
    ],
  },
  { name: "Illinois", slug: "illinois", avgIQ: 100.1, rank: 22, region: "Midwest",
    description: "Illinois sits right at the national average, reflecting the contrast between Chicago's world-class university system and knowledge economy and the state's rural downstate communities. The University of Chicago, Northwestern, and the University of Illinois are all top research institutions. Chicago's finance, technology, and professional services sectors attract educated workers, but the state also has significant poverty concentrations.",
    faqItems: [
      { question: "What is the average IQ in Illinois?", answer: "Illinois' estimated average IQ is 100.1, essentially the national average, ranking #22. Chicago's educated workforce is balanced by more modest educational outcomes in rural areas." },
      { question: "How does Chicago affect Illinois' ranking?", answer: "Chicago is a double-edged sword — its universities and professional class raise the average, but concentrated poverty in South and West Side neighborhoods pulls it down. Suburban Chicagoland generally scores well above average." },
      { question: "How does Illinois compare to other Midwest states?", answer: "Illinois (100.1) lags behind Minnesota (103.7) and Wisconsin (102.9) but leads Indiana and Ohio. The northern Midwest states generally outperform the lower Midwest." },
    ],
  },
  { name: "Pennsylvania", slug: "pennsylvania", avgIQ: 100.5, rank: 20, region: "Northeast",
    description: "Pennsylvania's IQ ranking reflects its split personality — the highly educated Philadelphia and Pittsburgh metro areas anchored by UPenn, Carnegie Mellon, and numerous other universities, versus the rural and former industrial communities in between. The state has undergone a significant economic transition from manufacturing to healthcare, education, and technology, with educational outcomes tracking these economic changes.",
    faqItems: [
      { question: "What is the average IQ in Pennsylvania?", answer: "Pennsylvania's estimated average IQ is 100.5, ranking #20 nationally. Philadelphia and Pittsburgh drive the average up, while rural and post-industrial communities moderate it." },
      { question: "How do Pittsburgh and Philadelphia compare?", answer: "Both cities have transformed into knowledge economies with strong university systems. Pittsburgh's tech renaissance (Carnegie Mellon, robotics, AI) and Philadelphia's medical/pharma corridor both attract highly educated workers." },
      { question: "How does Pennsylvania compare to New York?", answer: "Pennsylvania (100.5) is close to New York (100.7). Both states have major cities with educated populations balanced by rural areas with lower educational outcomes." },
    ],
  },
  { name: "Ohio", slug: "ohio", avgIQ: 99.8, rank: 24, region: "Midwest",
    description: "Ohio's near-average ranking reflects its position as a transitioning Rust Belt state. Columbus has emerged as a growing tech hub, and the state has strong universities (Ohio State, Case Western), but legacy industrial cities like Cleveland, Dayton, and Youngstown face economic challenges that affect educational outcomes. Ohio's large population and geographic diversity create wide variation in educational quality.",
    faqItems: [
      { question: "What is the average IQ in Ohio?", answer: "Ohio's estimated average IQ is 99.8, ranking #24 — essentially average. Columbus' growing economy lifts the average, while struggling former industrial cities pull it down." },
      { question: "Why has Ohio's ranking declined?", answer: "Manufacturing job losses over decades have depressed economic conditions in many Ohio communities, affecting educational investment and outcomes. However, Columbus, Cincinnati, and Cleveland's knowledge sectors are driving recovery." },
      { question: "How does Ohio compare to Michigan?", answer: "Ohio (99.8) and Michigan (99.4) are close, both reflecting the Rust Belt transition. Michigan has Ann Arbor's strong university presence, while Ohio has Columbus' growing tech economy." },
    ],
  },
  { name: "Texas", slug: "texas", avgIQ: 99.6, rank: 26, region: "South",
    description: "Texas ranks near the national average despite its massive size and diversity. The state's booming economy in technology (Austin), energy (Houston), finance (Dallas), and defense (San Antonio) attracts educated workers from across the country. However, Texas has wide educational disparities, particularly along the border region and in rural communities. The state's rapid population growth through immigration creates demographic complexity.",
    faqItems: [
      { question: "What is the average IQ in Texas?", answer: "Texas' estimated average IQ is 99.6, ranking #26 nationally. The state's booming metro areas attract educated workers, while rural and border communities have lower educational outcomes." },
      { question: "Is Texas' IQ improving?", answer: "Texas' educational metrics have been improving as its tech sector grows (particularly in Austin and Dallas) and in-migration brings educated workers. The state's investment in universities like UT Austin and Texas A&M is also paying dividends." },
      { question: "How does Texas compare to California?", answer: "California (101.5) outranks Texas (99.6), though the gap has been narrowing. Both are large, diverse states with world-class universities and significant internal inequality." },
    ],
  },
  { name: "Florida", slug: "florida", avgIQ: 98.4, rank: 32, region: "South",
    description: "Florida's ranking reflects its unique demographics — a large retiree population, significant immigration from Latin America and the Caribbean, and wide variation between affluent coastal communities and lower-income inland areas. South Florida's international business community and Orlando/Tampa's growing tech sectors attract educated workers, but the state's education system has historically been underfunded relative to its size.",
    faqItems: [
      { question: "What is the average IQ in Florida?", answer: "Florida's estimated average IQ is 98.4, ranking #32. The state's diverse demographics and historically underfunded schools contribute to a below-average ranking despite its large economy." },
      { question: "Why doesn't Florida rank higher?", answer: "Florida has historically spent less per student than most states, has a large immigrant population still building English proficiency, and has significant rural poverty. However, South Florida and Tampa/Orlando's growing knowledge sectors are improving outcomes." },
      { question: "How does Florida compare to other large states?", answer: "Florida (98.4) ranks below California (101.5) and New York (100.7) but near Texas (99.6). All four large states have wide internal variation between affluent and disadvantaged communities." },
    ],
  },
  { name: "Georgia", slug: "georgia", avgIQ: 98.0, rank: 35, region: "South",
    description: "Georgia's ranking is shaped by the contrast between metro Atlanta — a growing tech, media, and finance hub with excellent universities (Georgia Tech, Emory) — and the more rural southern and eastern parts of the state with limited educational resources. Atlanta has become a magnet for educated Black professionals, contributing to the city's reputation as a cultural and economic center. However, rural Georgia faces persistent poverty and educational challenges.",
    faqItems: [
      { question: "What is the average IQ in Georgia?", answer: "Georgia's estimated average IQ is 98.0, ranking #35. Atlanta's booming knowledge economy raises the average, while rural communities with limited educational resources bring it down." },
      { question: "How is Atlanta changing Georgia's profile?", answer: "Atlanta has transformed into one of the South's premier knowledge economy hubs, attracting tech companies, film industry investment, and highly educated professionals. Georgia Tech is a top engineering school drawing talent from worldwide." },
      { question: "How does Georgia compare to other Southern states?", answer: "Georgia (98.0) ranks above Mississippi and Alabama but below Virginia (101.9) and North Carolina. Atlanta's growth trajectory suggests Georgia's ranking may improve over time." },
    ],
  },
  { name: "Alabama", slug: "alabama", avgIQ: 95.7, rank: 43, region: "South",
    description: "Alabama ranks in the lower tier of US states, reflecting longstanding challenges in education funding, rural poverty, and historical underinvestment in public schools. However, Huntsville has emerged as a high-tech hub (NASA's Marshall Space Flight Center, defense contractors) with educational outcomes rivaling many Northern states. Birmingham and Auburn/Tuscaloosa also have educated populations, but rural Alabama continues to face significant educational challenges.",
    faqItems: [
      { question: "What is the average IQ in Alabama?", answer: "Alabama's estimated average IQ is 95.7, ranking #43. The state faces educational funding challenges, though Huntsville's tech sector and the university system provide bright spots." },
      { question: "Why does Alabama rank low?", answer: "Alabama's ranking reflects historical underinvestment in public education, persistent rural poverty, and limited economic diversification outside a few metro areas. However, Huntsville's aerospace sector and university improvements are driving positive change." },
      { question: "Is Alabama's education improving?", answer: "Yes, particularly in metro areas. Huntsville consistently ranks among the most educated small cities in the US. Birmingham's medical and financial sectors are growing. The challenge is extending improvements to rural communities." },
    ],
  },
  { name: "Louisiana", slug: "louisiana", avgIQ: 95.3, rank: 45, region: "South",
    description: "Louisiana faces significant educational challenges rooted in high poverty rates, limited education funding, and the lingering effects of Hurricane Katrina on New Orleans' school system. Interestingly, New Orleans' post-Katrina charter school experiment has produced mixed but sometimes promising results. Baton Rouge benefits from LSU's presence, and the state's oil industry supports some well-funded communities, but overall educational outcomes remain below the national average.",
    faqItems: [
      { question: "What is the average IQ in Louisiana?", answer: "Louisiana's estimated average IQ is 95.3, ranking #45. High poverty rates and education funding challenges contribute to below-average cognitive test performance." },
      { question: "How did Hurricane Katrina affect Louisiana's education?", answer: "Katrina devastated New Orleans' already struggling school system. The post-Katrina rebuild transitioned most schools to charters, creating a natural experiment in education reform with mixed results — some schools dramatically improved while others have not." },
      { question: "How does Louisiana compare to Mississippi?", answer: "Louisiana (95.3) ranks slightly above Mississippi (94.2). Both states face similar challenges with poverty and education funding, though Louisiana's larger urban economies provide somewhat more educational resources." },
    ],
  },
  { name: "Mississippi", slug: "mississippi", avgIQ: 94.2, rank: 50, region: "South",
    description: "Mississippi consistently ranks last or near-last in state IQ estimates, reflecting the nation's highest poverty rate, lowest median income, and historically underfunded education system. However, the state has made significant educational improvements in recent years — Mississippi's NAEP reading scores have risen faster than any other state since 2013, following the adoption of research-based literacy programs. This progress suggests the ranking may improve over time as reforms take effect.",
    faqItems: [
      { question: "What is the average IQ in Mississippi?", answer: "Mississippi's estimated average IQ is 94.2, ranking #50 (last) among US states. This reflects the state's high poverty rate and historically underfunded education system, though recent reforms show promising progress." },
      { question: "Why does Mississippi rank last?", answer: "Mississippi has the nation's highest poverty rate, lowest median income, and a history of educational underinvestment. These socioeconomic factors are the primary drivers of low average test scores — not the innate ability of Mississippi's residents." },
      { question: "Is Mississippi's education improving?", answer: "Yes, significantly. Mississippi's NAEP reading scores have improved faster than any other state since 2013, following adoption of evidence-based literacy programs. The state is often cited as a model for how targeted reforms can improve outcomes even in challenging conditions." },
    ],
  },
  { name: "North Carolina", slug: "north-carolina", avgIQ: 99.2, rank: 28, region: "South",
    description: "North Carolina benefits from the Research Triangle (Raleigh-Durham-Chapel Hill), one of the nation's premier concentrations of universities and research institutions. Duke, UNC, and NC State attract talent from worldwide. Charlotte's financial sector is the second largest in the US. However, the state's rural eastern and mountain communities have significantly lower educational outcomes, creating a two-speed educational landscape.",
    faqItems: [
      { question: "What is the average IQ in North Carolina?", answer: "North Carolina's estimated average IQ is 99.2, ranking #28 — near the national average. The Research Triangle's highly educated population is balanced by rural areas with fewer resources." },
      { question: "How does the Research Triangle affect NC's ranking?", answer: "The Research Triangle is one of America's premier knowledge hubs, with Duke, UNC, NC State, and EPA/NIEHS research facilities. It dramatically raises the region's educational profile but represents only a fraction of the state's 10+ million residents." },
      { question: "How does North Carolina compare to Virginia?", answer: "Virginia (101.9) outranks North Carolina (99.2), largely due to Northern Virginia's DC corridor advantage. However, North Carolina's Research Triangle is increasingly competitive, and the gap may narrow as Charlotte and Raleigh continue growing." },
    ],
  },
  { name: "Michigan", slug: "michigan", avgIQ: 99.4, rank: 25, region: "Midwest",
    description: "Michigan's near-average ranking reflects the contrast between Ann Arbor (home to the University of Michigan, consistently a top-5 public university) and Detroit/Flint's economic struggles. Michigan's auto industry legacy created a strong middle class but also left communities vulnerable when manufacturing declined. The state's university system is excellent, but K-12 education has faced significant funding challenges.",
    faqItems: [
      { question: "What is the average IQ in Michigan?", answer: "Michigan's estimated average IQ is 99.4, ranking #25. The University of Michigan and Ann Arbor's knowledge economy raise the average, while Detroit and Flint's challenges lower it." },
      { question: "How has the auto industry decline affected Michigan's education?", answer: "Manufacturing losses reduced the tax base for many Michigan school districts, leading to education funding cuts. Detroit's school system faced particular challenges. However, Michigan's university system remains excellent and Ann Arbor is a thriving knowledge hub." },
      { question: "How does Michigan compare to Ohio?", answer: "Michigan (99.4) and Ohio (99.8) are very close, both reflecting Rust Belt transitions. Both states have strong universities driving recovery while former industrial communities face ongoing challenges." },
    ],
  },
  { name: "Arizona", slug: "arizona", avgIQ: 97.4, rank: 38, region: "West",
    description: "Arizona's below-average ranking reflects several factors: rapid population growth that has strained educational infrastructure, lower-than-average per-pupil education spending, and a large immigrant population building English proficiency. Phoenix and Scottsdale have well-funded schools and growing tech sectors, but much of the state — particularly Native American reservations and rural border communities — faces severe educational resource limitations.",
    faqItems: [
      { question: "What is the average IQ in Arizona?", answer: "Arizona's estimated average IQ is 97.4, ranking #38. Rapid population growth and below-average education spending contribute to a lower ranking, though Phoenix's tech growth is improving the profile." },
      { question: "Why does Arizona spend less on education?", answer: "Arizona has historically prioritized low taxes over education spending, resulting in per-pupil expenditure well below the national average. The state's rapid population growth has further strained resources, creating overcrowded schools in many districts." },
      { question: "How does Arizona compare to Colorado?", answer: "Colorado (102.5) significantly outranks Arizona (97.4), despite both being Western states with growing tech sectors. Colorado has higher education spending, a more established university system, and a smaller, more uniformly educated population." },
    ],
  },
];

export function getStateBySlug(slug: string): StateIQInfo | undefined {
  return stateIQData.find((s) => s.slug === slug);
}

export const stateSlugs = stateIQData.map((s) => s.slug);
