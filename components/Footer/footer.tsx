import Image from "next/image";
import logo from "@/assets/icons/logo.png";
import SocialMediaLinks from "./social-media";
import FooterNavLinks from "./footer-links";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src={logo}
              alt="Bike Bliss Logo"
              className="object-contain"
            />
          </Link>
          <Link href="/">
            <span className="text-lg font-semibold text-white">Bike Bliss</span>
          </Link>
        </div>

        <FooterNavLinks />

        <SocialMediaLinks />
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6">
        <div className="flex justify-center space-x-8 text-sm">
          <a href="#privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#terms-of-service" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#cookies-settings" className="hover:text-white">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
