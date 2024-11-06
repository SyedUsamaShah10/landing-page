import NavLink from "../Nav/nav-links";

const footerLinks = [
  { href: "#features", label: "Features" },
  { href: "#testimonial", label: "Testimonials" },
  { href: "#faq", label: "Faqs" },
];

const FooterNavLinks: React.FC = () => {
  return (
    <div className="flex space-x-8">
      {footerLinks.map(({ href, label }) => (
        <NavLink key={label} href={href} className="">
          {label}
        </NavLink>
      ))}
    </div>
  );
};

export default FooterNavLinks;
