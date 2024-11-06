import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  onClick,
  className,
}) => {
  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
};

export default NavLink;
