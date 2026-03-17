import NavBar from "../../components/molecule/Navbar";
import Footer from "../../components/molecule/Footer";
import AboutMain from "../../components/organisms/about/AboutMain";

type NavItem = {
  label: string;
  href: string;
};

const About = () => {
  const navLinks: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Works", href: "/works" },
    { label: "Gearlist", href: "/gearlist" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <NavBar brand="Prakashit Kujur" links={navLinks} />
      <AboutMain />
      <Footer />
    </>
  );
};

export default About;
