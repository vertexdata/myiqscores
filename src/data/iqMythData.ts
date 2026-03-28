export interface IQMythInfo {
  title: string;
  slug: string;
  myth: string;
  reality: string;
  explanation: string;
  faqItems: { question: string; answer: string }[];
}

export const iqMythData: IQMythInfo[] = [
  {
    title: "Do Video Games Make You Smarter?",
    slug: "do-video-games-make-you-smarter",
    myth: "Playing video games increases your IQ and makes you more intelligent.",
    reality: "Some games improve specific cognitive skills (reaction time, spatial reasoning) but don't reliably increase overall IQ.",
    explanation: "Research on video games and cognition is nuanced. Action video games have been shown to improve visual attention, spatial reasoning, and reaction time. Strategy games may enhance planning and multitasking ability. However, these improvements tend to be task-specific — getting better at a game makes you better at that game and closely related tasks, but doesn't reliably transfer to broader cognitive ability or IQ scores. A 2019 meta-analysis in Psychological Bulletin found small positive effects on specific cognitive domains but no evidence of general intelligence improvement. The key distinction is between training a specific skill versus genuinely becoming 'smarter' in a general sense. That said, cognitively demanding games are better for your brain than passive entertainment, and strategic games that require planning and adaptation offer more cognitive benefit than simple reflex-based games.",
    faqItems: [
      { question: "Do video games increase IQ?", answer: "Research shows video games can improve specific cognitive skills like reaction time and spatial reasoning, but they don't reliably increase overall IQ scores. The improvements tend to be narrow and task-specific rather than reflecting general intelligence gains." },
      { question: "Which video games are best for your brain?", answer: "Strategy games (chess, Civilization, StarCraft), puzzle games (Portal, Tetris), and action games with complex decision-making offer the most cognitive benefit. Simple mobile games with repetitive mechanics offer minimal cognitive stimulation." },
      { question: "Are gamers smarter than non-gamers?", answer: "Studies show gamers tend to score slightly higher on visual-spatial tasks and reaction time tests, but this likely reflects both self-selection (people with good spatial skills enjoy games) and practice effects. There's no evidence that gaming causes higher general intelligence." },
    ],
  },
  {
    title: "Does Listening to Mozart Make You Smarter?",
    slug: "mozart-effect-iq",
    myth: "Listening to classical music, especially Mozart, permanently increases intelligence — the 'Mozart Effect.'",
    reality: "The original Mozart Effect study showed only a temporary, small improvement on one specific spatial task. It does not increase IQ.",
    explanation: "The Mozart Effect is one of the most misrepresented findings in psychology. The original 1993 study by Rauscher, Shaw, and Ky found that college students who listened to Mozart's Sonata for Two Pianos in D Major performed slightly better on a spatial reasoning task — but only for about 10-15 minutes afterward. The effect was small, temporary, and specific to one task. It was never about increasing IQ. Subsequent research found that any enjoyable, arousing stimulus (upbeat music, a funny story, caffeine) produces similar short-term effects by improving mood and alertness. The popular interpretation — that playing Mozart for babies makes them smarter — has no scientific support whatsoever. Despite this, the myth spawned a multi-million dollar industry of 'Baby Einstein' products. Learning to play music, however, does show real cognitive benefits.",
    faqItems: [
      { question: "Does the Mozart Effect really work?", answer: "The original finding was real but extremely limited: a small, temporary boost in one spatial task lasting about 15 minutes. It was never about permanently increasing IQ. Any enjoyable, stimulating activity produces similar short-term arousal effects." },
      { question: "Does classical music make babies smarter?", answer: "No. There is no scientific evidence that playing classical music for babies increases their intelligence. This myth, popularized in the late 1990s, led to products like 'Baby Einstein' but has been thoroughly debunked by subsequent research." },
      { question: "Does playing music increase IQ?", answer: "Yes — unlike merely listening to music, learning to play a musical instrument has genuine cognitive benefits. Studies show 2-3 IQ point gains in children who receive music lessons, with improvements in verbal memory, spatial reasoning, and executive function." },
    ],
  },
  {
    title: "Are First-Born Children Smarter?",
    slug: "birth-order-and-iq",
    myth: "First-born children have significantly higher IQs than their younger siblings.",
    reality: "First-borns score about 1-3 IQ points higher on average, but the effect is small and driven by family dynamics, not biology.",
    explanation: "Research does show a small but consistent IQ advantage for first-born children — typically 1-3 points compared to second-borns. A large Norwegian study of 250,000 men found the effect was about 2.3 points. However, this difference is driven by social dynamics within the family rather than biological birth order. First-borns receive undivided parental attention during their early years and often serve as tutors to younger siblings, reinforcing their own learning. When a second-born child is raised as effectively a first-born (due to a large age gap or the older sibling's absence), they show the same 'first-born' IQ advantage. The practical significance of 1-3 IQ points is negligible — it's detectable in large population studies but invisible in individual comparisons.",
    faqItems: [
      { question: "Are first-born children smarter?", answer: "First-borns score about 1-3 IQ points higher on average in large studies. However, this tiny difference is driven by family dynamics (more parental attention, tutoring siblings) rather than biology, and is too small to matter in practice." },
      { question: "Does birth order affect intelligence?", answer: "Slightly. First-borns average 1-3 IQ points higher than second-borns, with each subsequent child averaging slightly lower. But the effect is so small that it's undetectable at the individual level and irrelevant for predicting any person's actual intelligence." },
      { question: "Why do first-borns score slightly higher?", answer: "The leading theory is the 'confluence model': first-borns receive undivided parental attention during critical developmental years and later reinforce their own learning by teaching younger siblings. It's a social/environmental effect, not a biological one." },
    ],
  },
  {
    title: "Does IQ Determine Success?",
    slug: "does-iq-determine-success",
    myth: "Your IQ score determines how successful you'll be in life — high IQ means success, low IQ means failure.",
    reality: "IQ correlates with some outcomes but is far from deterministic. Personality, opportunity, and effort matter as much or more.",
    explanation: "IQ is the single best psychometric predictor of academic performance (correlation ~0.5) and job performance (correlation ~0.3-0.5), but these correlations leave enormous room for other factors. Above an IQ of approximately 115-120, the relationship between IQ and success weakens significantly — a phenomenon researchers call the 'threshold effect.' Beyond that point, personality traits (especially conscientiousness), social skills, emotional intelligence, creativity, and opportunity become stronger predictors. The Terman Study followed 1,500 gifted children (IQ 135+) throughout their lives and found wide variation in outcomes — some became leaders in their fields while others led unremarkable lives. Meanwhile, many spectacularly successful people have average or modestly above-average IQs. Richard Feynman, a Nobel Prize-winning physicist, reportedly had an IQ of 125 — gifted but not exceptionally so by physics standards.",
    faqItems: [
      { question: "Does IQ determine success in life?", answer: "IQ correlates with success but doesn't determine it. Above average IQ (~115+), personality traits like conscientiousness, social skills, and opportunity become much stronger predictors. Many highly successful people have average IQs, and many high-IQ individuals achieve modest outcomes." },
      { question: "What matters more than IQ for success?", answer: "Research identifies conscientiousness (discipline, reliability), emotional intelligence, grit (perseverance), social capital (networks and relationships), and opportunity as factors that often matter more than IQ for real-world success, especially above the average IQ range." },
      { question: "What is the IQ threshold for success?", answer: "Research suggests a threshold around IQ 115-120 — above this level, additional IQ points add diminishing returns for career and life success. Below this threshold, higher IQ provides meaningful advantages. This is sometimes called the 'threshold theory' of intelligence." },
    ],
  },
  {
    title: "Are Men Smarter Than Women?",
    slug: "iq-gender-differences",
    myth: "Men are smarter than women, or women are smarter than men.",
    reality: "Average IQ is identical between men and women. Men show slightly more variance (more at both extremes), but average ability is equal.",
    explanation: "Decades of research consistently show that average IQ scores are essentially identical between men and women. The difference in means is less than 1 point — statistically and practically zero. Where gender differences do appear is in the distribution: men show slightly higher variance, meaning there are somewhat more men at both the very high and very low extremes of the IQ distribution. Men tend to score slightly higher on spatial rotation tasks, while women tend to score slightly higher on verbal fluency and processing speed. These differences are small (typically 0.1-0.3 standard deviations), overlapping enormously between genders, and may be partially explained by socialization rather than biology. The claim that either gender is 'smarter' is not supported by evidence. Any observed differences in representation at the extremes reflect a combination of variance differences, socialization, and systemic factors.",
    faqItems: [
      { question: "Are men smarter than women?", answer: "No. Average IQ is essentially identical between men and women (less than 1 point difference). Men show slightly more score variance (more at both extremes), and small differences exist in specific subtests, but overall intelligence is equal between genders." },
      { question: "Why are there more male geniuses?", answer: "Men show slightly higher IQ variance, meaning more men at both the highest and lowest extremes. This statistical difference, combined with historical barriers to women's education and professional participation, explains most of the observed gender gap at the highest levels. The gap is closing as barriers diminish." },
      { question: "Do men and women have different types of intelligence?", answer: "Small average differences exist in specific cognitive domains: men slightly favor spatial rotation, women slightly favor verbal fluency and processing speed. But these differences are tiny compared to individual variation — the smartest women outscore the vast majority of men on spatial tasks and vice versa." },
    ],
  },
  {
    title: "Does Brain Size Determine IQ?",
    slug: "brain-size-and-iq",
    myth: "Bigger brains mean higher IQ — intelligence is simply a matter of brain size.",
    reality: "Brain size correlates weakly with IQ (~0.3), but neural efficiency, connectivity, and organization matter much more than raw volume.",
    explanation: "There is a real but modest correlation between brain size and IQ — approximately 0.24-0.33 in modern MRI studies. However, this means brain size accounts for only about 6-10% of the variation in IQ, leaving 90%+ unexplained. What matters far more than brain size is neural efficiency (how effectively neurons communicate), white matter integrity (the quality of connections between brain regions), cortical thickness in key areas, and the organization of neural networks. Einstein's brain was actually slightly smaller than average, but had an unusually large parietal lobe and more glial cells (support cells that aid neural communication). Women have smaller average brain sizes than men but identical average IQs, further demonstrating that efficiency matters more than volume. Among species, brain-to-body-size ratio predicts cognitive ability better than absolute brain size.",
    faqItems: [
      { question: "Does brain size affect IQ?", answer: "Weakly. Brain size correlates with IQ at about 0.3, meaning it accounts for roughly 6-10% of IQ variation. Neural efficiency, connectivity, and organization matter far more than raw brain volume. Einstein's brain was slightly smaller than average." },
      { question: "Did Einstein have a big brain?", answer: "No — Einstein's brain was slightly smaller than average (1,230 grams vs the male average of ~1,400 grams). However, his parietal lobe (involved in mathematical and spatial reasoning) was 15% wider than normal, and he had an unusually high density of glial cells supporting neural communication." },
      { question: "If brain size doesn't matter much, what does?", answer: "Neural efficiency (processing speed per neuron), white matter integrity (quality of connections), cortical thickness in frontal and parietal regions, and the overall organization of neural networks are stronger predictors of cognitive ability than brain volume." },
    ],
  },
];

export function getMythBySlug(slug: string): IQMythInfo | undefined {
  return iqMythData.find((m) => m.slug === slug);
}

export const mythSlugs = iqMythData.map((m) => m.slug);
