import NavBar from "../../../components/molecule/Navbar";
import Footer from "../../../components/molecule/Footer";
import CineMain from "../../../components/organisms/projects/cinema/VideoMain";
import ScrollToTop from "../../../components/molecule/ScrollTop";

type NavItem = {
  label: string;
  href: string;
};

const Project = () => {
  const navLinks: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Body of Work", href: "/works" },
    { label: "Gearlist", href: "/gearlist" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <NavBar brand="Prakashit Kujur" links={navLinks} />
      <CineMain />
      <Footer />
      <ScrollToTop showAfter={500} />
    </>
  );
};

export default Project;
