import MainSection from "../../components/organisms/home/MainSection";
import IntroSection from "../../components/organisms/home/IntroSection";
import WorkSection from "../../components/organisms/home/WorkSection";
import ContactSection from "../../components/organisms/home/ContactSection";

/**
 * Navigation item type definition
 * Ensures type-safe navigation configuration
 */
// type NavItem = {
//   label: string;
//   href: string;
// };

/**
 * HomePage
 * Main landing page composition for the portfolio
 */
const HomePage: React.FC = () => {
  /**
   * Navigation configuration
   * Passed to Navbar as props
   */
  /**
   * Navigation configuration
   * These paths correspond to React Router routes
   */
  //   const navLinks: NavItem[] = [
  //     { label: "Home", href: "/" },
  //     { label: "Works", href: "/works" },
  //     { label: "Gearlist", href: "/gearlist" },
  //     { label: "About", href: "/about" },
  //     { label: "Contact", href: "/contact" },
  //   ];

  /**
   * Scroll-to-top button visibility state
   */
  // const [showButton] = useState(false);

  return (
    <>
      {/* Navigation */}
      {/* <Navbar brand="PK Portfolio" links={navLinks} /> */}

      {/* Main landing canvas */}
      <MainSection />

      {/* Introduction section */}
      <IntroSection />

      {/* Work showcase */}
      <WorkSection />

      {/* Contact section */}
      <ContactSection />

      {/* Scroll to top button */}
      {/* <ScrollToTop showAfter={600} /> */}

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
