import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

const posts = [
  { slug: "what-is-iq-score", category: "Science", categoryColor: "hsl(var(--primary))", title: "What Is an IQ Score? The Complete Scientific Explanation", excerpt: "IQ scores measure specific cognitive abilities — but what exactly are they measuring, and how accurate are they?", readTime: "8 min read" },
  { slug: "how-to-increase-iq", category: "Brain Training", categoryColor: "#22c55e", title: "Can You Actually Increase Your IQ? What the Research Says", excerpt: "The science is more nuanced than most headlines suggest. Here's what actually works.", readTime: "10 min read" },
  { slug: "iq-vs-success", category: "Research", categoryColor: "#F59E0B", title: "IQ vs. Success: Does a Higher IQ Mean a Better Life?", excerpt: "The correlation between IQ and life outcomes is real — but much weaker than most people assume.", readTime: "7 min read" },
  { slug: "famous-iq-scores", category: "Famous IQs", categoryColor: "#EC4899", title: "The Most Surprising Celebrity IQ Scores Ever Revealed", excerpt: "Some of the smartest (and least expected) IQ scores from entertainers, athletes, and world leaders.", readTime: "6 min read" },
  { slug: "iq-by-country", category: "Research", categoryColor: "#F59E0B", title: "IQ by Country: Why Nations Score Differently", excerpt: "Average IQ varies dramatically by nation. The reasons are more about policy than genetics.", readTime: "9 min read" },
  { slug: "what-is-genius-iq", category: "Science", categoryColor: "hsl(var(--primary))", title: "What Is a Genius IQ? The History, Science & Reality", excerpt: "The word genius gets thrown around constantly — but what does a genius-level IQ actually mean?", readTime: "8 min read" },
  { slug: "iq-tests-accurate", category: "Science", categoryColor: "hsl(var(--primary))", title: "Are IQ Tests Actually Accurate? A Balanced Look", excerpt: "IQ tests have been praised and criticized for decades. Here's what psychologists actually know.", readTime: "11 min read" },
  { slug: "emotional-intelligence-vs-iq", category: "Brain Training", categoryColor: "#22c55e", title: "Emotional Intelligence vs IQ: Which Matters More?", excerpt: "EQ vs IQ is one of psychology's great debates. The answer depends on what you're trying to do.", readTime: "7 min read" },
];

const Blog = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEOHead
      title="IQ Blog: Science, Research & Insights | MyIQScores"
      description="Explore IQ science, research, and insights. Learn about cognitive psychology, brain training, famous IQs, and what intelligence really means."
      canonicalUrl="/blog"
      ogType="website"
    />

    {/* Header */}
    <div className="relative overflow-hidden py-16 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Intelligence. Explained.
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          The <span className="gradient-text">IQ Blog</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Deep dives into cognitive science, IQ research, brain training, and what
          intelligence really means for your life and career.
        </p>
      </motion.div>
    </div>

    {/* Posts Grid */}
    <div className="max-w-5xl mx-auto px-4 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            className="glass-card rounded-2xl p-6 flex flex-col gap-3 hover:border-primary/40 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            {/* Category badge */}
            <span
              className="inline-block self-start text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: `${post.categoryColor}22`, color: post.categoryColor }}
            >
              {post.category}
            </span>

            {/* Title */}
            <Link to={`/blog/${post.slug}`} className="group">
              <h2 className="text-base font-bold leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h2>
            </Link>

            {/* Excerpt */}
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {post.excerpt}
            </p>

            {/* Meta row */}
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
              <span>{post.readTime}</span>
              <span>April 6, 2026</span>
            </div>

            {/* CTA */}
            <Link
              to={`/blog/${post.slug}`}
              className="text-sm font-semibold text-primary hover:underline mt-1"
            >
              Read More →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Blog;
