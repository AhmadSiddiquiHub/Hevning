import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const WelcomePage = () => {
  return (
    <>
      <section className="welcome my-20 text-center">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="icons text-2xl md:text-3xl flex gap-4">
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
            <FaTiktok />
          </div>
          <div className="logo my-20">
            <img
              className="w-[530px] h-auto px-6"
              src="/images/logo.gif"
              alt="logo"
            />
          </div>
          <div className="languages ">
            <ul className="flex gap-12">
              <li>English</li>
              <li>English</li>
              <li>English</li>
            </ul>
          </div>
          <div className="contact-info my-14 text-[22px] text-[#000]">
            <p>contact@hevning.com</p>
            <p>+32 2 320 29 40</p>
            <p>+32 486 94 44 20</p>

            <div className="whatsapp-logo text-6xl gap-4 mt-10">
              <a
                className="flex items-center justify-center"
                href="https://wa.me/+32486944420"
                target="_blank"
              >
                <FaWhatsapp color="#0DC143" />
                <p className="text-2xl text-[#0DC143]"> WhatsApp</p>
              </a>
            </div>
          </div>
          <div className="footer-text ">
            <p className="text-[#c7c7c7] text-[22px] ">
              Boulevard Industriel 9,
              <br /> 1070 Brussels, Belgium
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomePage;
