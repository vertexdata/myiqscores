import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const myths = [
  ["An online quiz produces an official IQ", "No. This site maps 30 raw answers to a familiar-looking display range. It has not been normed or validated as a professional IQ test."],
  ["A percentile and an IQ score are interchangeable", "No. A percentile depends on a defined reference population. This quiz can show hypothetical normal-curve context, but it has no empirical norm sample of its own."],
  ["Completion speed changes the MyIQScores result", "No. Time is displayed for personal context only. The score uses the number of correct answers."],
  ["A category bar is a clinical subscore", "No. Each bar is simply correct answers out of six items in that category."],
  ["A celebrity’s education proves a precise IQ", "No. Accomplishments cannot reconstruct a named, standardized assessment result."],
  ["A state, country, or profession has one fixed IQ", "No. These rankings often transform unlike education or survey datasets into a more precise claim than the evidence supports."],
] as const;

const IQMythsHub = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead title="IQ Myths Checked Against the Evidence | MyIQScores" description="Six common IQ claims checked against this quiz’s published scoring method and official assessment sources." canonicalUrl="/iq-myths" ogType="article" />
    <h1>IQ Myths: <span className="gradient-text">Claims, Evidence, and Limits</span></h1>
    <p>This guide replaces dozens of near-duplicate myth pages with one maintained reference. Each answer separates what this quiz actually does from what a standardized professional assessment can establish.</p>
    {myths.map(([claim, answer]) => <section key={claim} className="glass-card my-5 rounded-xl p-5"><h2 className="!mt-0 text-xl">{claim}</h2><p className="!mb-0">{answer}</p></section>)}
    <h2>Check the Method, Not the Headline</h2>
    <p>When a claim cites a score, ask which instrument produced it, who formed the reference sample, what uncertainty applies, and whether the source actually measured the stated construct. Start with our <Link to="/methodology">exact scoring formula</Link>, <Link to="/types-of-iq-tests">assessment comparison</Link>, and <Link to="/research-sources">research source library</Link>.</p>
  </ContentPage>
);

export default IQMythsHub;
