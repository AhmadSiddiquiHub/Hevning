import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" bg-[#F7F7F7] py-10">
        <div className="container mx-auto w-[90%] md:max-w-[1150px]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-1 text-[18px] md:text-[15px]">
              <img className="w-[50%] md:w-[43%]" src="/images/logo.gif" />
              <p className=" mt-4">
                Technical support
                <br />
                and commercial
              </p>
              <p className="font-black text-[20px] mt-4">+32 2 320 29 40</p>
              <p>contact@hevning.com</p>
            </div>
            <div className="col-2 text-[18px] md:text-[15px] md:pl-14">
              <div className="flex gap-4 ">
                <p className="mt-4 md:mt-0">
                  Copyright © 2024 <span className="font-black">Hevning</span>.
                  All rights reserved.
                </p>
                <div className="icons text-2xl md:text-xl hidden md:flex gap-4">
                  <FaLinkedinIn />
                  <FaInstagram />
                  <FaFacebookF />
                  <FaYoutube />
                </div>
              </div>
              <p className="my-6">by BigStrategy BV</p>
              <div className="flex justify-between">
                <p>
                  Boulevard Industriel 9<br />
                  1070 Brussels, Belgium
                  <br />
                  TVA - BE 0793.256.694
                </p>
              </div>
              <div className="flex md:hidden items-center pt-6">
                <div className="icons text-2xl flex gap-4">
                  <FaLinkedinIn />
                  <FaInstagram />
                  <FaFacebookF />
                  <FaYoutube />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
