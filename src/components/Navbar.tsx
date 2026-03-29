import { Brain, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { to: "/what-is-iq", label: "What Is IQ?" },
  { to: "/iq-score-ranges", label: "Score Ranges" },
  { to: "/iq-percentile", label: "Percentile" },
  { to: "/famous-iq", label: "Famous IQs" },
  { to: "/career-iq", label: "Careers & IQ" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Brain className="w-7 h-7 text-primary" />
          <div>
            <span className="font-heading font-bold text-lg tracking-tight text-foreground">
              My<span className="text-primary">IQ</span>Scores<sup className="text-[8px] text-muted-foreground/50 ml-0.5">™</sup>
            </span>
            <span className="hidden sm:block text-[10px] text-muted-foreground/70 -mt-0.5 tracking-wide">
              The Most Accurate Free IQ Test Online
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/" className="glow-button text-sm px-4 py-2">
            Take the Test
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[rgba(255,255,255,0.06)] bg-background/95 backdrop-blur-lg">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/"
              className="block glow-button text-sm px-4 py-2 text-center"
              onClick={() => setMobileOpen(false)}
            >
              Take the Test
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
