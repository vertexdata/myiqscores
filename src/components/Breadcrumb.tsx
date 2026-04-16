import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
}

const Breadcrumb = ({ crumbs }: BreadcrumbProps) => (
  <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-muted-foreground mb-4 flex-wrap">
    {crumbs.map((crumb, i) => (
      <span key={i} className="flex items-center gap-1">
        {i > 0 && <ChevronRight className="w-3 h-3 opacity-50" />}
        {crumb.href ? (
          <Link to={crumb.href} className="hover:text-foreground transition-colors">{crumb.label}</Link>
        ) : (
          <span className="text-foreground">{crumb.label}</span>
        )}
      </span>
    ))}
  </nav>
);

export default Breadcrumb;
