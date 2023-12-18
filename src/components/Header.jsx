import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import useScrollSection from "../utils/scrollSection";

const Header = () => {
  const { handleNavigation } = useScrollSection();
  const [open, setOpen] = useState(false);

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
