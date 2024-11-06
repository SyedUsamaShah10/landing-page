import Image from "next/image";
import FacebookIcon from "@/assets/icons/facebook.png";
import InstagramIcon from "@/assets/icons/Instagram.png";
import LinkedinIcon from "@/assets/icons/linkedin.png";
import TwitterIcon from "@/assets/icons/twitter.png";

const socialMediaLinks = [
  {
    href: "https://facebook.com",
    alt: "Facebook",
    src: FacebookIcon,
  },
  {
    href: "https://instagram.com",
    alt: "Instagram",
    src: InstagramIcon,
  },
  {
    href: "https://twitter.com",
    alt: "Twitter",
    src: TwitterIcon,
  },
  {
    href: "https://linkedin.com",
    alt: "LinkedIn",
    src: LinkedinIcon,
  },
];

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {socialMediaLinks.map(({ href, alt, src }) => (
        <a
          key={alt}
          href={href}
          aria-label={alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={src} alt={alt} className="w-5 h-5 hover:opacity-75" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
