import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);

    if (element) {
      scroll.scrollTo(element.offsetTop - 90, {
        duration: 500,
        smooth: true,
      });

      setOpen(false);
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
  return (
    <>
      <header className="bg-[#F7F7F7] py-4 sticky top-0 z-50">
        <div className="container mx-auto w-[90%] md:max-w-[1180px]">
          <div className="md:flex justify-between items-center">
            <Link to="/">
              <img src="/images/logo.gif" className="w-[145px] md:w-[176px]" />
            </Link>

            <div
              className="text-xl text-black absolute flex top-5 right-8 cursor-pointer md:hidden"
              onClick={() => setOpen(!open)}
            >
              <div className="icons text-xl flex gap-2 md:hidden">
                <FaLinkedinIn />
                <FaInstagram />
                <FaFacebookF />
                <FaYoutube />
              </div>
              <div className="mr-[-15px] ml-4">
                {!open ? <RiMenu3Fill /> : <RxCross2 />}
              </div>
            </div>
            <ul
              className={`md:flex md:gap-10 font-bold space-y-4 md:space-y-0 my-4 md:my-0 absolute md:static bg-white md:bg-[#F7F7F7] md:z-auto z-[-1] w-[95%] md:w-auto transition-all duration-500 ease-in ${
                !open && "top-[-490px] left-0"
              }`}
            >
              <li>
                <ScrollLink
                  to="products"
                  smooth={true}
                  duration={500}
                  onClick={() => handleNavigation("products")}
                  offset={-90} // Adjust this value to fine-tune the scroll position
                  className="cursor-pointer"
                >
                  Products
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="benefits"
                  smooth={true}
                  duration={500}
                  onClick={() => handleNavigation("benefits")}
                  offset={-90} // Adjust this value to fine-tune the scroll position
                  className="cursor-pointer"
                >
                  Benefits
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={() => handleNavigation("contact")}
                  offset={-90} // Adjust this value to fine-tune the scroll position
                  className="cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
              <li>
                <div className="icons text-2xl md:text-xl hidden md:flex gap-2">
                  <FaLinkedinIn />
                  <FaInstagram />
                  <FaFacebookF />
                  <FaYoutube />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
