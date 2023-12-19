import React from "react";

const CheckoutPage = () => {
  return (
    <>
      <section className="checkout container mx-auto w-[90%] md:max-w-[1200px] my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
          <div className="left-side col-span-2 md:pr-16">
            <div className="left-cont">
              <div className="pro-img flex items-center justify-center">
                <img src="/images/products/1A.webp" />
              </div>
              <div className="pro-form">
                <h2 className="text-[25px] md:text-[2vw] leading-[35px] md:leading-[65px] md:mt-10 mt-12">
                  Fill out the form
                  <span className="font-black"> to be called!</span>
                </h2>

                <form className="mt-4 md:my-10 mb-20 italic">
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
              </div>
            </div>
          </div>
          <div className="right-side ">
            <div className="order border-8 p-6 ">
              <h2 className="font-black text-[20px] md:text-[1.3vw]">
                Your Order
              </h2>
              <div className="total my-4 px-6">
                <div className="headings w-full flex items-center">
                  <h3 className="font-black">Product</h3>
                  <h3 className="ml-auto font-black">Subtotal</h3>
                </div>
                <hr className="h-2 my-4" />
                <div className="product w-full flex items-center">
                  <p className="">Sign Leafs</p>
                  <h3 className="ml-auto font-black">$30</h3>
                </div>
                <hr className="h-2 my-4" />
                <div className="sub-total w-full flex items-center">
                  <p className="font-black">Subtotal</p>
                  <h3 className="ml-auto font-black">$30</h3>
                </div>
                <hr className="h-2 my-4" />
                <div className="sub-total w-full flex items-center">
                  <p className="font-black">Shipping</p>
                  <h3 className="ml-auto font-black">$5</h3>
                </div>
                <hr className="h-2 my-4" />
                <div className="total w-full flex items-center">
                  <p className="font-black">Total</p>
                  <h3 className="ml-auto font-black text-[#ED5829]">$35</h3>
                </div>
              </div>

              <div className="payment-method mt-8">
                <h3 className="text-[16px] md:text-[1vw] font-black">
                  Cash on delivery
                </h3>
                <p className="text-[13px] md:text-[0.8vw]">
                  Pay with cash upon delivery.
                </p>
              </div>
              <hr className="h-2 my-4" />

              <div className="checkout-btn w-full col-span-full flex items-center justify-center my-4">
                <button className="w-full text-[18px] md:text-[0.781vw] border-2 border-[#000] text-white bg-[#000] hover:bg-white hover:text-black py-3 px-14 my-2 font-black">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
