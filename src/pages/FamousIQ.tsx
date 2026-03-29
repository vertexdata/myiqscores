import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import IQMeter from "@/components/IQMeter";
import ComparisonChart from "@/components/ComparisonChart";
import WikiImage from "@/components/WikiImage";
import { getFamousPersonBySlug, famousIQData } from "@/data/famousIQData";

// Public domain / CC images from Wikimedia Commons for historical figures
const wikiImages: Record<string, { src: string; alt: string; caption: string }> = {
  "albert-einstein": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/440px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    alt: "Albert Einstein portrait photograph, 1921",
    caption: "Albert Einstein in 1921. Photo by Ferdinand Schmutzer. Public domain.",
  },
  "isaac-newton": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg/440px-Portrait_of_Sir_Isaac_Newton%2C_1689.jpg",
    alt: "Portrait of Sir Isaac Newton, 1689, by Godfrey Kneller",
    caption: "Isaac Newton, 1689. Portrait by Godfrey Kneller. Public domain.",
  },
  "leonardo-da-vinci": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self.jpg/440px-Leonardo_self.jpg",
    alt: "Leonardo da Vinci self-portrait drawing",
    caption: "Leonardo da Vinci, self-portrait c. 1512. Public domain.",
  },
  "marie-curie": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/440px-Marie_Curie_c._1920s.jpg",
    alt: "Marie Curie photograph, circa 1920s",
    caption: "Marie Curie, c. 1920s. Public domain.",
  },
  "nikola-tesla": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/440px-Tesla_circa_1890.jpeg",
    alt: "Nikola Tesla photograph, circa 1890",
    caption: "Nikola Tesla, c. 1890. Photo by Napoleon Sarony. Public domain.",
  },
  "benjamin-franklin": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg/440px-Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg",
    alt: "Benjamin Franklin portrait by Joseph Duplessis",
    caption: "Benjamin Franklin. Portrait by Joseph Duplessis, c. 1785. Public domain.",
  },
  "wolfgang-mozart": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wolfgang-amadeus-mozart_1.jpg/440px-Wolfgang-amadeus-mozart_1.jpg",
    alt: "Wolfgang Amadeus Mozart portrait, 1819 copy",
    caption: "Wolfgang Amadeus Mozart. Posthumous portrait by Barbara Krafft, 1819. Public domain.",
  },
  "pablo-picasso": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/440px-Pablo_picasso_1.jpg",
    alt: "Pablo Picasso photograph, 1908",
    caption: "Pablo Picasso, 1908. Anonymous photographer. Public domain.",
  },
  "marilyn-monroe": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Monroecirca1953.jpg/440px-Monroecirca1953.jpg",
    alt: "Marilyn Monroe publicity photograph, 1953",
    caption: "Marilyn Monroe, c. 1953. Public domain.",
  },
  "ruth-bader-ginsburg": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ruth_Bader_Ginsburg_official_SCOTUS_portrait_%28cropped%29.jpg/440px-Ruth_Bader_Ginsburg_official_SCOTUS_portrait_%28cropped%29.jpg",
    alt: "Ruth Bader Ginsburg official Supreme Court portrait",
    caption: "Ruth Bader Ginsburg, official SCOTUS portrait. Public domain (US Government work).",
  },
  "barack-obama": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/440px-President_Barack_Obama.jpg",
    alt: "Barack Obama official presidential portrait",
    caption: "Barack Obama, official presidential portrait by Pete Souza. Public domain (US Government work).",
  },
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
        title={`${person.name}'s IQ: ${person.estimatedIQ} — What It Means | MyIQScores`}
        description={`${person.name}'s IQ is estimated at ${person.estimatedIQ}. Learn what this means, how it compares, and what made ${person.name} a genius.`}
        canonicalUrl={`/famous-iq/${person.slug}`}
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1>
        <span className="gradient-text">{person.name}'s IQ</span>: {person.estimatedIQ}
      </h1>

      {/* Wiki image for historical figures */}
      {wikiImages[person.slug] && (
        <WikiImage
          src={wikiImages[person.slug].src}
          alt={wikiImages[person.slug].alt}
          caption={wikiImages[person.slug].caption}
        />
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
