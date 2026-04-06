import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import IQMeter from "@/components/IQMeter";
import ComparisonChart from "@/components/ComparisonChart";
import WikiImage from "@/components/WikiImage";
import FamousPersonIcon from "@/components/FamousPersonIcon";
import { getFamousPersonBySlug, famousIQData } from "@/data/famousIQData";

// Public domain / CC images from Wikimedia Commons for historical figures
// Note: Wikimedia images may not load due to hotlinking restrictions.
// For production, download these images and serve them from /public/images/famous/
const wikiImages: Record<string, { src: string; alt: string; caption: string }> = {};

const seoTitles: Record<string, string> = {
  "cristiano-ronaldo": "Cristiano Ronaldo's IQ: How Smart Is the GOAT? | MyIQScores",
  "elon-musk": "Elon Musk's IQ: Estimated at 150-155 | MyIQScores",
  "albert-einstein": "Albert Einstein's IQ: Estimated at 160 | MyIQScores",
  "stephen-hawking": "Stephen Hawking's IQ: Estimated at 160 | MyIQScores",
  "taylor-swift": "Taylor Swift's IQ: How Smart Is She Really? | MyIQScores",
  "lebron-james": "LeBron James' IQ: Basketball Genius Breakdown | MyIQScores",
  "donald-trump": "Donald Trump's IQ: Claims, Estimates & Analysis | MyIQScores",
  "mark-zuckerberg": "Mark Zuckerberg's IQ: Estimated at 140-152 | MyIQScores",
  "kim-kardashian": "Kim Kardashian's IQ: Smarter Than You Think? | MyIQScores",
  "bill-gates": "Bill Gates' IQ: Estimated at 150-160 | MyIQScores",
  "kanye-west": "Kanye West's IQ: Creative Genius or Overrated? | MyIQScores",
  "lionel-messi": "Lionel Messi's IQ: Football Genius Analyzed | MyIQScores",
  "jeff-bezos": "Jeff Bezos' IQ: Estimated at 145-155 | MyIQScores",
  "joe-rogan": "Joe Rogan's IQ: What We Know | MyIQScores",
  "beyonce": "Beyoncé's IQ: How Smart Is Queen Bey? | MyIQScores",
  "nikola-tesla": "Nikola Tesla's IQ: Estimated at 160-200+ | MyIQScores",
  "jeffrey-epstein": "Jeffrey Epstein's IQ: How Smart Was He Really? | MyIQScores",
  "andrew-tate": "Andrew Tate's IQ: Estimated at 120-132 | MyIQScores",
  "michael-jordan": "Michael Jordan's IQ: Basketball Genius Breakdown | MyIQScores",
  "drake": "Drake's IQ: The Mind Behind Music's Biggest Brand | MyIQScores",
  "rihanna": "Rihanna's IQ: Business Genius Behind Fenty Beauty | MyIQScores",
  "michael-jackson": "Michael Jackson's IQ: The King of Pop's Genius | MyIQScores",
  "sam-altman": "Sam Altman's IQ: OpenAI's Visionary CEO Analyzed | MyIQScores",
  "jensen-huang": "Jensen Huang's IQ: The Mind That Built the AI Era | MyIQScores",
  "tiger-woods": "Tiger Woods' IQ: Golf Genius on and off the Course | MyIQScores",
  "vladimir-putin": "Vladimir Putin's IQ: KGB Agent to World Leader | MyIQScores",
};

const seoDescs: Record<string, string> = {
  "cristiano-ronaldo": "What is Cristiano Ronaldo's IQ? Explore estimates of CR7's intelligence, how it compares to other athletes, and what makes him a genius on the pitch.",
  "elon-musk": "Elon Musk's IQ is estimated at 150-155. See how his physics background, first-principles thinking, and multi-company leadership reflect exceptional cognitive ability.",
  "albert-einstein": "Einstein's IQ is estimated at 160 — never officially tested. Learn about his thought experiments, the late-bloomer myth, and what made him history's most iconic genius.",
  "stephen-hawking": "Hawking's IQ is estimated at 160. He famously said IQ-boosters are losers. See what his physics work actually reveals about his extraordinary intellectual ability.",
  "taylor-swift": "Taylor Swift's IQ is estimated at 120-130. Her re-recording strategy, lyrical complexity, and billion-dollar brand show intelligence far beyond what most people expect.",
  "lebron-james": "LeBron's IQ is estimated at 110-120. His legendary basketball IQ, photographic memory claims, and business empire reveal a uniquely gifted mind beyond the court.",
  "donald-trump": "Donald Trump's IQ: what Wharton, his business career, and his own bold claims suggest. A factual, politically neutral analysis of his estimated cognitive ability.",
  "mark-zuckerberg": "Zuckerberg's IQ is estimated at 140-152. His 1590 SAT score, Harvard dorm-room coding, and Meta/AI pivot reveal the mind behind the world's largest social network.",
  "kim-kardashian": "Kim Kardashian passed the baby bar — a 20% pass-rate exam. Her IQ is estimated at 110-120. Discover the real business intelligence behind her billion-dollar empire.",
  "bill-gates": "Bill Gates scored 1590/1600 on the SAT. His IQ is estimated at 150-160. See what Microsoft, his legendary reading habits, and philanthropy reveal about his exceptional mind.",
  "kanye-west": "Kanye West's IQ is estimated at 115-125. Musical innovator, fashion mogul, controversial genius — a balanced look at the cognitive profile behind one of music's biggest names.",
  "lionel-messi": "Messi's IQ is estimated at 110-120. His spatial intelligence and split-second decisions on the pitch are analyzed and compared to his long-time rival Cristiano Ronaldo.",
  "jeff-bezos": "Bezos graduated Princeton summa cum laude. IQ estimated at 145-155. See how his long-term thinking and data-driven strategy reveal one of the sharpest minds in business.",
  "joe-rogan": "Joe Rogan's IQ is estimated at 110-120. He calls himself average, but his curiosity-driven learning and podcast depth tell a more interesting story. What the data shows.",
  "beyonce": "Beyoncé's IQ is estimated at 120-130. Behind the performances is a business strategist, visual album pioneer, and empire-builder who is far more than a pop star.",
  "nikola-tesla": "Tesla's IQ is estimated at 160-200+. His eidetic memory, AC electricity mastery, rivalry with Edison, and ability to mentally simulate machines set him apart from every peer.",
  "jeffrey-epstein": "What was Jeffrey Epstein's IQ? Examining the financial genius, MIT connections, and dark intelligence behind one of history's most controversial figures.",
  "andrew-tate": "What is Andrew Tate's IQ? Estimated at 120-132, the 4x kickboxing champion and entrepreneur breaks down his chess background and business intelligence.",
  "michael-jordan": "What is Michael Jordan's IQ? His basketball genius, psychological dominance, and billion-dollar business empire reveal a mind far beyond the court.",
  "drake": "What is Drake's IQ? Estimated at 112-125, the most charted artist in Billboard history reveals a remarkably consistent commercial and creative intelligence.",
  "rihanna": "What is Rihanna's IQ? The Fenty Beauty billionaire's business genius disrupted the beauty industry and made her the world's wealthiest female musician.",
  "michael-jackson": "What was Michael Jackson's IQ? The King of Pop's musical genius, Beatles catalog purchase, and studio perfectionism reveal a remarkably high IQ.",
  "sam-altman": "What is Sam Altman's IQ? The OpenAI CEO who launched ChatGPT — the fastest-growing app in history — shows signs of an exceptional IQ of 145-160.",
  "jensen-huang": "What is Jensen Huang's IQ? Nvidia's CEO built a $3 trillion company by betting on GPU computing before anyone else — suggesting an IQ of 145-155.",
  "tiger-woods": "What is Tiger Woods' IQ? His 15 majors, Stanford education, and course management intelligence suggest an IQ well above average for athletes.",
  "vladimir-putin": "What is Vladimir Putin's IQ? The former KGB officer and Russian president has been estimated at 127-135 by intelligence analysts.",
};

const FamousIQ = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/famous-iq/", "");
  const person = slug ? getFamousPersonBySlug(slug) : undefined;

  if (!person) return <Navigate to="/what-is-iq" replace />;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: person.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const otherPeople = famousIQData.filter((p) => p.slug !== person.slug);

  const relatedPages = [
    { title: "Famous People IQ Scores (Full List)", href: "/famous-iq" },
    { title: "Highest IQ Ever Recorded", href: "/highest-iq-ever" },
    { title: "Genius IQ Guide", href: "/genius-iq" },
    ...otherPeople.slice(0, 3).map((p) => ({ title: `${p.name}'s IQ (${p.estimatedIQ})`, href: `/famous-iq/${p.slug}` })),
    { title: "What Is a Good IQ Score?", href: "/good-iq-score" },
  ];

  return (
    <ContentPage ctaText="How does your IQ compare? Take the free test" relatedPages={relatedPages}>
      <SEOHead
        title={seoTitles[person.slug] ?? `${person.name}'s IQ: ${person.estimatedIQ} — What It Means | MyIQScores`}
        description={seoDescs[person.slug] ?? `${person.name}'s IQ is estimated at ${person.estimatedIQ}. Learn what this means, how it compares, and what made ${person.name} a genius.`}
        canonicalUrl={`/famous-iq/${person.slug}`}
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1>
        <span className="gradient-text">{person.name}'s IQ</span>: {person.estimatedIQ}
      </h1>

      {/* Person visual */}
      {wikiImages[person.slug] ? (
        <WikiImage
          src={wikiImages[person.slug].src}
          alt={wikiImages[person.slug].alt}
          caption={wikiImages[person.slug].caption}
        />
      ) : (
        <FamousPersonIcon name={person.name} />
      )}

      {/* IQ Meter */}
      <IQMeter score={parseInt(person.estimatedIQ)} label={person.name} />

      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="glass-card p-5 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Estimated IQ</p>
          <p className="font-heading font-bold text-3xl gradient-text">{person.estimatedIQ}</p>
        </div>
        <div className="glass-card p-5 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Known For</p>
          <p className="font-heading font-medium text-sm text-foreground">{person.knownFor}</p>
        </div>
      </div>

      <h2>About {person.name}</h2>
      <p>{person.description}</p>

      <h2>What an IQ of {person.estimatedIQ} Means</h2>
      <p>{person.iqContext}</p>

      {/* Visual comparison with other famous people */}
      <ComparisonChart
        title={`How ${person.name} Compares`}
        items={[
          { label: person.name, value: parseInt(person.estimatedIQ), highlight: true },
          ...otherPeople.slice(0, 5).map((p) => ({
            label: p.name,
            value: parseInt(p.estimatedIQ),
            href: `/famous-iq/${p.slug}`,
          })),
        ]}
        maxValue={210}
      />

      <p>
        To understand where this falls on the IQ scale, see our{" "}
        <Link to="/iq-score-ranges">complete IQ score ranges guide</Link>, or learn{" "}
        <Link to="/what-is-iq">what IQ actually measures</Link>.
      </p>

      <h2>Famous IQ Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Person</th>
            <th>Estimated IQ</th>
            <th>Known For</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[rgba(0,229,255,0.05)]">
            <td><strong>{person.name}</strong></td>
            <td><strong>{person.estimatedIQ}</strong></td>
            <td>{person.knownFor}</td>
          </tr>
          {otherPeople.map((p) => (
            <tr key={p.slug}>
              <td><Link to={`/famous-iq/${p.slug}`}>{p.name}</Link></td>
              <td>{p.estimatedIQ}</td>
              <td>{p.knownFor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Frequently Asked Questions</h2>
      {person.faqItems.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      <h2>Explore More Famous IQs</h2>
      <div className="flex flex-wrap gap-3 my-4">
        {otherPeople.slice(0, 5).map((p) => (
          <Link
            key={p.slug}
            to={`/famous-iq/${p.slug}`}
            className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline"
          >
            {p.name} ({p.estimatedIQ})
          </Link>
        ))}
      </div>

      <p className="mt-6">
        <Link to="/test">Take our free IQ test</Link> to discover your own score, or explore{" "}
        <Link to="/is-130-iq-good">what a gifted IQ means</Link>.
      </p>
    </ContentPage>
  );
};

export default FamousIQ;
