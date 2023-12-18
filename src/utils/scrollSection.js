import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const scrollSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);

    if (element) {
      scroll.scrollTo(element.offsetTop - 90, {
        duration: 500,
        smooth: true,
      });
    }
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    scroll.scrollToTop({
      duration: 0, // Instant scroll on mount
      smooth: false,
    });
  }, []);

  useEffect(() => {
    const { state } = location;

    if (state && state.scrollTo) {
      // If there is a scrollTo state, scroll to the specified section
      scrollTo(state.scrollTo);
    }
  }, [location.state]);

  const handleNavigation = (sectionId) => {
    const isHomePage = location.pathname === "/";

    if (isHomePage) {
      // If on the homepage, scroll to the section
      scrollTo(sectionId);
    } else {
      // If on another page, navigate to the homepage with a query parameter
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return { handleNavigation };
};

export default scrollSection;
