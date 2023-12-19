import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import useScrollSection from "../utils/scrollSection";

const Product = () => {
  const { handleNavigation } = useScrollSection();

  return (
    <>
      <div className="product-page container mx-auto w-[90%] md:max-w-[1000px] my-16">
        <h1 className="text-[25px] md:text-[2.604vw] text-center">
          Sign <span className="font-black">Leafs</span> (0.25m2 - interior)
        </h1>

        <section className="product grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
          <div className="pro-img md:ml-auto">
            <img src="/images/products/1A.webp" />
          </div>
          <div className="pro-cont flex flex-col items-center justify-center md:px-4">
            <p className="text-[16px] italic">
              Our "Leafs" 3D design panel has been developed for interior spaces
              wishing to bring out all the beauty of nature while maintaining a
              discreet and prestigious appearance. We supply our raw panels in
              white and black, it is up to you to paint it in any color that
              suits you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-4 mt-2">
              <div className="colors flex gap-2 mt-6">
                <div className="input-1">
                  <input
                    type="radio"
                    name="color"
                    value="white"
                    className="form-radio text-black hidden"
                  />
                  <div
                    className={`white w-[4.5rem] h-[4.5rem] border-2 border-black  bg-[#fff] cursor-pointer`}
                  ></div>
                </div>
                <div className="input-2">
                  <input
                    type="radio"
                    name="color"
                    value="black"
                    className="form-radio text-black hidden"
                  />
                  <div
                    className={`black w-[4.5rem] h-[4.5rem] border-1 border-black bg-[#000] cursor-pointer`}
                  ></div>
                </div>
              </div>
              <div className="buttons col-span-2">
                <button className="text-[18px] md:text-[0.781vw] font-bold italic border-2 border-[#C7C7C7] text-white bg-[#C7C7C7] hover:bg-white hover:text-black py-1 px-8 rounded-full mt-6">
                  <a
                    href="https://www.hevning.com/_files/ugd/324bf6_b70506fce2754924ab755d5e1c91db44.pdf"
                    target="_blank"
                  >
                    See the technical sheet
                  </a>
                </button>
                <button className="text-[18px] md:text-[0.781vw] font-bold italic border-2 border-[#ED5829] text-white bg-[#ED5829] hover:bg-white hover:text-black py-1 px-14 rounded-full my-2">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    onClick={() => handleNavigation("contact")}
                    offset={-90} // Adjust this value to fine-tune the scroll position
                    className="cursor-pointer"
                  >
                    Ask for a quote
                  </ScrollLink>
                </button>
              </div>
              <div className="cart-btn w-full col-span-full flex items-center justify-center my-4">
                <Link to="/checkout" className="w-full ">
                  <button className="w-full text-[18px] md:text-[0.781vw] italic border-2 border-[#000] text-white bg-[#000] hover:bg-white hover:text-black py-3 px-14 my-2 font-black">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits-section text-center my-20">
          <h2 className="text-[30px] md:text-[1.979vw] font-black mb-14">
            Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
            <div className="benefit-1">
              <h3 className="text-[19px] md:text-[1.042vw] font-black">
                Environmentally friendly
              </h3>
              <p className="md:text-[0.729vw] my-4">
                Its production requires less energy, water and exhaustible
                natural materials. Simplified and biodegradable recycling.
              </p>
            </div>
            <div className="benefit-2">
              <h3 className="text-[19px] md:text-[1.042vw] font-black">
                Customizable
              </h3>
              <p className="md:text-[0.729vw] my-4">
                Its gypsum-based design allows, unlike wood, plastic and
                polystyrene panels, to be repaired with a simple plaster coating
                and therefore allows exceptional resistance over time.
              </p>
            </div>
            <div className="benefit-3">
              <h3 className="text-[19px] md:text-[1.042vw] font-black">
                High finish
              </h3>
              <p className="md:text-[0.729vw] my-4">
                Made from gypsum, the finish is of a high quality so that no
                junction can be seen after installation and finishing on the
                edges.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Product;
