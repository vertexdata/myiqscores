export interface AgeIQInfo {
  ageGroup: string;
  slug: string;
  avgIQRange: string;
  description: string;
  keyFactors: string;
  faqItems: { question: string; answer: string }[];
}

export const ageIQData: AgeIQInfo[] = [
  {
    ageGroup: "Children (Ages 6–12)",
    slug: "children",
    avgIQRange: "90–110",
    description: "IQ testing in children measures developing cognitive abilities relative to same-age peers. Children's IQ scores can be more variable than adult scores because the brain is still rapidly developing. A child's score at age 7 may differ significantly from their score at age 12 as different cognitive abilities mature at different rates. The WISC (Wechsler Intelligence Scale for Children) is the most commonly used test for this age group, assessing verbal comprehension, perceptual reasoning, working memory, and processing speed.",
    keyFactors: "Environmental factors have an outsized impact on children's IQ scores. Nutrition, stimulation, reading exposure, parental engagement, sleep quality, and access to education all significantly influence cognitive development during these critical years. Children from enriched environments consistently score higher, and early interventions like quality preschool programs have been shown to boost IQ by 4–7 points. The Flynn Effect — rising IQ scores over generations — is strongest in children, suggesting environmental improvements disproportionately benefit developing brains.",
    faqItems: [
      { question: "What is a normal IQ for a child?", answer: "A normal IQ for a child is the same as for an adult: 90–110 is considered average. Children's IQ tests are age-normed, meaning a child's score reflects their performance relative to other children of the same age. About 68% of children score between 85 and 115." },
      { question: "Can a child's IQ change over time?", answer: "Yes, significantly. Children's IQ scores can shift by 10–20 points between ages 6 and 18 as different cognitive abilities develop at different rates. Early testing is less predictive of adult IQ than testing in adolescence. Environmental changes like improved nutrition or education can also raise scores." },
      { question: "Should I get my child's IQ tested?", answer: "IQ testing is most useful when there's a specific concern — identifying giftedness for enrichment programs, or diagnosing learning disabilities for support services. Routine IQ testing of all children is not recommended, as scores at young ages are less stable and can create unnecessary labeling." },
    ],
  },
  {
    ageGroup: "Teenagers (Ages 13–17)",
    slug: "teenagers",
    avgIQRange: "90–110",
    description: "The teenage years represent a critical period for cognitive development as the prefrontal cortex — responsible for planning, decision-making, and impulse control — undergoes massive restructuring. IQ scores begin to stabilize during adolescence, with scores at age 15–17 being much more predictive of adult IQ than childhood scores. Teenagers show rapid development in abstract reasoning and fluid intelligence, which typically peaks in the early-to-mid 20s. The WISC is used until age 16, after which the WAIS (adult version) becomes appropriate.",
    keyFactors: "Teenage brains are uniquely sensitive to environmental influences, both positive and negative. Sleep deprivation (extremely common in teens due to early school start times and screen use) can reduce effective cognitive performance by 5–10 IQ points. Substance use, particularly cannabis and alcohol, can impair cognitive development during this critical period. Conversely, challenging academic work, physical exercise, and learning new skills can enhance cognitive development. Social media and digital multitasking may negatively impact sustained attention and deep thinking.",
    faqItems: [
      { question: "What is the average IQ for a teenager?", answer: "The average IQ for a teenager is 100, the same as any age group, since IQ tests are normed by age. About 68% of teenagers score between 85 and 115. Teenage IQ scores are more stable than childhood scores and begin to predict adult cognitive ability more reliably." },
      { question: "Does IQ change during puberty?", answer: "Yes, IQ can shift during adolescence. Research from University College London found that some teenagers' IQ scores changed by up to 20 points over a 4-year period, with corresponding changes visible in brain structure on MRI scans. Both increases and decreases were observed." },
      { question: "How does sleep affect teenage IQ?", answer: "Profoundly. Teenagers need 8–10 hours of sleep but average only 6–7. Research shows sleep-deprived teens perform as if their IQ were 5–10 points lower. Chronic sleep deprivation during adolescence may have lasting effects on cognitive development." },
    ],
  },
  {
    ageGroup: "Young Adults (Ages 18–25)",
    slug: "young-adults",
    avgIQRange: "90–110",
    description: "Young adulthood is when fluid intelligence — the ability to reason with novel information — reaches its peak, typically between ages 20 and 25. This is the age when raw cognitive processing speed and working memory are at their highest. IQ scores become quite stable during this period, and scores obtained in the early 20s are highly predictive of lifelong cognitive ability. The brain's prefrontal cortex finishes developing around age 25, completing the maturation of executive function, impulse control, and long-term planning ability.",
    keyFactors: "This age range offers the last major window for cognitive development before scores largely stabilize. Higher education, learning complex skills, and intellectually demanding work during this period can have lasting positive effects on crystallized intelligence. Conversely, substance abuse, chronic stress, head injuries, and sedentary lifestyles can permanently impair cognitive potential. Physical fitness during young adulthood is strongly correlated with cognitive performance both now and decades later.",
    faqItems: [
      { question: "What is the average IQ for a 20-year-old?", answer: "The average IQ for a 20-year-old is 100, by definition. However, fluid intelligence (raw reasoning speed) is at or near its peak at this age. Young adults typically perform best on timed, novel problem-solving tasks compared to any other age group." },
      { question: "Does IQ peak in your 20s?", answer: "Fluid intelligence (processing speed, working memory, novel reasoning) peaks in the early-to-mid 20s. However, crystallized intelligence (accumulated knowledge and skills) continues growing well into the 60s. Overall IQ as measured by most tests remains relatively stable from the mid-20s onward." },
      { question: "Can college increase your IQ?", answer: "Research suggests each year of education adds approximately 1–3 IQ points. College develops analytical thinking, vocabulary, and problem-solving skills that directly improve performance on IQ tests. The effect is strongest for crystallized intelligence but may also modestly improve fluid intelligence." },
    ],
  },
  {
    ageGroup: "Adults (Ages 26–50)",
    slug: "adults",
    avgIQRange: "90–110",
    description: "During the prime adult years, IQ scores are at their most stable. Fluid intelligence begins a very gradual decline starting in the late 20s, but crystallized intelligence — the accumulation of knowledge, vocabulary, and learned skills — continues to grow, often offsetting any decline in raw processing speed. Most adults in this age range will score within 3–5 points of the same result on repeated IQ tests. This is the period where career expertise deepens and practical wisdom develops, though these forms of intelligence are poorly captured by standard IQ tests.",
    keyFactors: "Lifestyle factors become increasingly important for maintaining cognitive function. Regular exercise, intellectual engagement, social connection, stress management, and quality sleep all help preserve cognitive ability. Conversely, chronic stress, depression, sedentary behavior, poor sleep, and heavy alcohol use can accelerate cognitive decline. Career demands that involve continuous learning and problem-solving help maintain cognitive sharpness, while routine work may allow cognitive skills to atrophy.",
    faqItems: [
      { question: "Does IQ decline after 30?", answer: "Fluid intelligence (processing speed, working memory) begins a very gradual decline in the late 20s to early 30s, but the decline is slow — about 1–2 points per decade. Crystallized intelligence (knowledge, vocabulary) continues increasing through middle age, often more than compensating. Most people don't notice any cognitive decline until their 50s or 60s." },
      { question: "What is the average IQ for a 40-year-old?", answer: "The average IQ for a 40-year-old is 100, since IQ tests are age-normed. A 40-year-old is compared to other 40-year-olds, not to 20-year-olds. While raw processing speed may be slightly slower than at 25, accumulated knowledge and expertise make middle-aged adults highly effective problem-solvers." },
      { question: "How can adults maintain their IQ?", answer: "Regular aerobic exercise is the single most evidence-backed strategy. Additionally: continue learning new skills, read challenging material, stay socially engaged, manage stress, get 7–9 hours of sleep, maintain a Mediterranean-style diet, and limit alcohol. These habits can slow or prevent age-related cognitive decline." },
    ],
  },
  {
    ageGroup: "Older Adults (Ages 50–65)",
    slug: "older-adults",
    avgIQRange: "90–110",
    description: "In the 50–65 age range, the divergence between fluid and crystallized intelligence becomes more apparent. Processing speed and working memory continue their gradual decline, but vocabulary, general knowledge, and expertise often reach their lifetime peak during this period. Many professionals do their most impactful work in their 50s and 60s, leveraging decades of accumulated wisdom. IQ tests that emphasize speed may underestimate the cognitive capabilities of this age group, while knowledge-heavy tests may overestimate them relative to younger adults.",
    keyFactors: "Cognitive reserve — built through a lifetime of education, intellectual engagement, and healthy habits — becomes critically important during this period. People with higher cognitive reserve show less functional decline even when age-related brain changes are present. Hormonal changes (menopause, declining testosterone) can affect mood and energy, indirectly impacting cognitive performance. Chronic conditions like hypertension, diabetes, and sleep apnea become more common and can impair cognition if unmanaged. This is also the age when early signs of neurodegenerative diseases may first appear.",
    faqItems: [
      { question: "What is the average IQ for someone in their 50s?", answer: "The average IQ at any age is 100, because tests are normed by age group. However, a 55-year-old's raw performance on speed-based tasks may be lower than a 25-year-old's, while their vocabulary and knowledge scores may be higher. The age-norming adjusts for these natural developmental patterns." },
      { question: "Is cognitive decline inevitable after 50?", answer: "Some decline in processing speed is normal, but significant cognitive decline is not inevitable. Many people maintain excellent cognitive function well into their 70s and 80s. Regular exercise, continuous learning, social engagement, and managing health conditions are the strongest protective factors." },
      { question: "What's the difference between normal aging and dementia?", answer: "Normal aging involves slightly slower processing and occasional difficulty recalling names, but does not significantly impair daily functioning. Dementia involves progressive, significant cognitive decline that interferes with daily life — forgetting recent conversations, getting lost in familiar places, or difficulty with routine tasks. If you're concerned, consult a neurologist." },
    ],
  },
  {
    ageGroup: "Seniors (Ages 65+)",
    slug: "seniors",
    avgIQRange: "85–105",
    description: "After age 65, cognitive changes become more noticeable for most people, though the range of individual variation is enormous. Some 80-year-olds perform as well as the average 50-year-old, while others show significant decline. Fluid intelligence continues its gradual decrease, but crystallized intelligence often remains strong well into the 70s and even 80s. Wisdom — the integration of knowledge, experience, and sound judgment — may actually peak in the late 60s and 70s, though this is not captured by standard IQ tests.",
    keyFactors: "The \"use it or lose it\" principle is strongly supported by research on aging and cognition. Seniors who remain intellectually active, physically fit, and socially connected maintain significantly higher cognitive function than those who are sedentary and isolated. Bilingualism delays dementia onset by approximately 4–5 years. Education level is the strongest single predictor of cognitive function in old age. Medical management of conditions like hypertension, diabetes, and depression is crucial, as these conditions accelerate cognitive decline when untreated.",
    faqItems: [
      { question: "What is the average IQ for a 70-year-old?", answer: "Age-normed IQ for a 70-year-old averages 100 (compared to other 70-year-olds). However, if compared to the general population using young-adult norms, the average would be lower for fluid intelligence tasks. Crystallized intelligence (vocabulary, knowledge) often remains strong." },
      { question: "How much does IQ decline with age?", answer: "Fluid intelligence typically declines about 1–2 points per decade from the late 20s, accelerating somewhat after 65. By age 75, raw processing speed may be 15–20 points below its peak. However, crystallized intelligence can remain stable or even increase, and real-world problem-solving ability may not decline as much as timed test scores suggest." },
      { question: "Can seniors improve their cognitive function?", answer: "Yes. Research shows physical exercise, learning new skills, social engagement, and brain-healthy nutrition can improve cognitive function even after 65. The brain retains neuroplasticity throughout life. Starting a new hobby, learning an instrument, or taking classes can build new neural pathways at any age." },
    ],
  },
];

export function getAgeGroupBySlug(slug: string): AgeIQInfo | undefined {
  return ageIQData.find((a) => a.slug === slug);
}

export const ageGroupSlugs = ageIQData.map((a) => a.slug);
