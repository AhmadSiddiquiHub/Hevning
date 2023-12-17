import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section className="home text-center ">
        <div className="top-content mt-8 md:mt-12 flex flex-col justify-center items-center">
          <p className="text-[15px] md:text-[1.042vw] ">
            Questions ? - Call us at
            <span className="font-black"> +32 2 320 29 40</span>
          </p>
          <h1 className="text-[26px] md:text-[2.865vw] mt-2 md:mt-0 font-black">
            3D panels <span className="font-light">in Eco Gypsum</span>
          </h1>
          <h2 className="text-[22px] md:text-[1.563vw] md:mt-2 font-black">
            <span className="font-light">Made in Belgium by </span>Hevning
          </h2>
          <img
            className="hidden md:block w-[600px] h-[4px] object-cover my-4"
            src="/images/separator.webp"
          />
        </div>

        <div
          id="products"
          className="products container mx-auto w-full md:max-w-[910px] grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-3 text-center mt-16"
        >
          <Link to="/product">
            <div className="product ">
              <img className="mx-auto" src="/images/products/1.webp" />
              <div className="text mt-4">
                <h2 className="text-[19px] md:text-[1.302vw] font-black">
                  Leafs
                </h2>
                <p className="font-thin">50cmX50cmX2cm</p>
              </div>
            </div>
          </Link>

          <div className="product ">
            <img className="mx-auto" src="/images/products/2.webp" />
            <div className="text mt-4">
              <h2 className="text-[19px] md:text-[1.302vw] font-black">
                Lines
              </h2>
              <p className="font-thin">50cmX50cmX2cm</p>
            </div>
          </div>
          <div className="product ">
            <img className="mx-auto" src="/images/products/3.webp" />
            <div className="text mt-4">
              <h2 className="text-[19px] md:text-[1.302vw] font-black">
                Desert
              </h2>
              <p className="font-thin">50cmX50cmX2cm</p>
            </div>
          </div>
          <div className="product ">
            <img className="mx-auto" src="/images/products/4.webp" />
            <div className="text mt-4">
              <h2 className="text-[19px] md:text-[1.302vw] font-black">
                Waves
              </h2>
              <p className="font-thin">50cmX50cmX2cm</p>
            </div>
          </div>
          <div className="product ">
            <img className="mx-auto" src="/images/products/5.webp" />
            <div className="text mt-4">
              <h2 className="text-[19px] md:text-[1.302vw] font-black">
                Illusion
              </h2>
              <p className="font-thin">50cmX50cmX2cm</p>
            </div>
          </div>
          <div className="product ">
            <img className="mx-auto" src="/images/products/6.webp" />
            <div className="text mt-4">
              <h2 className="text-[19px] md:text-[1.302vw] font-black">
                Cells
              </h2>
              <p className="font-thin">50cmX50cmX2cm</p>
            </div>
          </div>
          <div className="product ">
            <img className="mx-auto" src="/images/products/7.webp" />
            <div className="text mt-4">
              <h2 className="text-[19px] md:text-[1.302vw] font-black">
                Squares
              </h2>
              <p className="font-thin">50cmX50cmX2cm</p>
            </div>
          </div>
          <div className="product ">
            <img className="mx-auto" src="/images/products/8.webp" />
            <div className="text mt-4">
              <h2 className="text-[19px] md:text-[1.302vw] font-black">
                Curves
              </h2>
              <p className="font-thin">50cmX50cmX2cm</p>
            </div>
          </div>
          <div className="product ">
            <img className="mx-auto" src="/images/products/9.webp" />
            <div className="text mt-4">
              <h2 className="text-[19px] md:text-[1.302vw] font-black">
                Water
              </h2>
              <p className="font-thin">50cmX50cmX2cm</p>
            </div>
          </div>
        </div>

        <div className="sheet container mx-auto w-full md:max-w-[910px] grid grid-cols-1 md:grid-cols-2 mt-[100px] md:mt-4">
          <div className="sheet-image mx-auto md:ml-auto">
            <img src="/images/sheet.webp" />
          </div>
          <div className="sheet-text flex flex-col items-center justify-center md:mr-auto px-4">
            <p className="text-[20px] md:text-[1.302vw] font-bold italic">
              Would you like
              <br />
              technical
              <br />
              information ?
            </p>
            <button className="text-[18px] md:text-[0.781vw] font-bold italic border-2 border-black text-white bg-black hover:bg-white hover:text-black py-1 px-8 rounded-full my-6">
              See the technical sheet
            </button>
          </div>
        </div>

        <div className="mid-banner mt-[50px] md:mt-0">
          <div className="mid-banner-text container mx-auto w-[90%] md:max-w-[910px] bg-[#FBFBFB] py-6 md:py-12">
            <p className="text-[20px] md:text-[1.302vw]">
              <span className="font-black">Hevning</span> is a Belgian
              manufacturer of decorative panels in 100% plaster meeting RE 2020
              standards.
            </p>
          </div>
          <div className="mid-banner-image">
            <img src="/images/mid-banner.webp" />
          </div>
        </div>
        <div className="mobile-payment w-[70%] mt-14 mx-auto block md:hidden">
          <img src="/images/payment.gif" />
        </div>
        <div className="mid-banner-2 mt-[50px] container mx-auto w-full md:max-w-[910px] md:mt-0">
          <div className="mid-banner-2-text mb-12 md:mb-4 mt-20">
            <p className="text-[25px] md:text-[2.865vw] leading-[30px] md:leading-[65px]">
              <span className="font-black">Hevning™</span> Coating
              <br />a fast and affordable concept
            </p>
          </div>
          <div className="mid-banner-2-image">
            <img src="/images/mid-banner-2.webp" />
          </div>
        </div>
        <div className="mid-banner-3 mt-[50px] container mx-auto w-full md:max-w-[910px] md:mt-0">
          <div className="mid-banner-3-text md:mb-4 mt-12 md:mt-20">
            <p className="text-[30px] md:text-[2vw] leading-[30px] md:leading-[50px] font-black">
              <span className="font-extralight">New</span> Hevning
              <br />
              <span className="font-bold">Fast filler</span>
            </p>
          </div>
          <div className="mid-banner-3-image mt-[-60px] md:mt-[-120px]">
            <img className=" mx-auto" src="/images/mid-banner-3.webp" />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="contact-form container mx-auto w-[90%] md:max-w-[600px] my-4"
      >
        <h2 className="text-center text-[30px] md:text-[2.865vw] leading-[35px] md:leading-[65px]">
          Fill out the form
          <br /> <span className="font-black">to be called !</span>
        </h2>

        <form className="my-10 md:my-20 italic">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col">
              <label className="text-[16px]" htmlFor="name">
                Name *
              </label>
              <input
                className="outline-none px-2 border-b-2 border-black pb-2 font-bold"
                id="name"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px]" htmlFor="company">
                Company
              </label>
              <input
                className="outline-none px-2 border-b-2 border-black pb-2 font-bold"
                id="company"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px]" htmlFor="email">
                E-mail *
              </label>
              <input
                className="outline-none px-2 border-b-2 border-black pb-2 font-bold"
                id="email"
                type="email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px]" htmlFor="number">
                Phone number *
              </label>
              <input
                className="outline-none px-2 border-b-2 border-black pb-2 font-bold"
                id="number"
                type="text"
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-[16px]" htmlFor="request">
                Describe your request... *
              </label>
              <textarea
                className="outline-none px-2 pb-10 border-b-2 border-black mt-2 font-bold"
                id="request"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px]" htmlFor="area">
                Area desired?
              </label>
              <select
                id="area"
                className="outline-none px-2 border-b-2 border-black mt-2 font-bold pb-2 italic"
              >
                <option value="" disabled selected hidden>
                  Choose an option
                </option>
                <option value="3">3 m2</option>
                <option value="6">6 m2</option>
                <option value="9">9 m2</option>
                <option value="12">12 m2</option>
                <option value="more">more than 12 m2</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-[16px]" htmlFor="date">
                Order date ?
              </label>
              <select
                id="date"
                className="outline-none px-2 border-b-2 border-black mt-2 font-bold pb-2 italic"
              >
                <option value="" disabled selected hidden>
                  Choose an option
                </option>
                <option value="1">In 1 week</option>
                <option value="2">In 2 weeks</option>
                <option value="3">In 3 weeks</option>
                <option value="4">In 1 month</option>
                <option value="inquire">I only inquire</option>
              </select>
            </div>
            <div className="submit-btn md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#f7f7f7] py-2 text-[18px] italic hover:bg-black hover:text-white"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </section>

      <section
        id="benefits"
        className="benefits container mx-auto w-[90%] md:max-w-[1050px] md:mt-[120px] mb-4"
      >
        <div className="posts grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="post relative">
            <img
              src="/images/post1.webp"
              className="w-full h-auto"
              alt="Post Image"
              style={{ filter: "brightness(0.4)" }}
            />
            <p className="absolute bottom-0 left-0 text-white px-8 pb-8 text-[26px] leading-[32px] font-bold">
              Hevning | How to obtain a quality finish?
            </p>
          </div>

          <div className="post relative">
            <img
              src="/images/post2.webp"
              className="w-full h-auto"
              alt="Post Image"
              style={{ filter: "brightness(0.4)" }}
            />
            <p className="absolute bottom-0 left-0 text-white px-8 pb-8 text-[26px] leading-[32px] font-bold">
              Hevning | Affordable wall panels Made in Belgium
            </p>
          </div>
        </div>
        <div className="desktop-payment mt-8 mx-auto">
          <div className="w-[30%] mt-8 mx-auto hidden md:block">
            <img src="/images/payment.gif" />
          </div>
          <p className="text-[24px] md:text-[1.563vw] text-center leading-[35px] mt-4">
            Would you like to become a partner distributor?
            <br />
            <span className="font-black">
              Receive a Free Display for your Showroom
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
