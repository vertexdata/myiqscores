import type { AnchorHTMLAttributes, ReactNode } from "react";

interface StaticLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
  children: ReactNode;
}

// Core assessment links intentionally use normal navigation. That keeps the
// large editorial router out of the homepage's critical JavaScript path.
const StaticLink = ({ to, children, ...props }: StaticLinkProps) => (
  <a href={to} {...props}>{children}</a>
);

export { StaticLink as Link };
