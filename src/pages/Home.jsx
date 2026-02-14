import React from "react";
import Hero from "../components/home/Hero";
import { HiOutlineArrowRight } from "react-icons/hi";
import card1 from "../assets/home/card1.png";
import party from "../assets/home/party.png";
import homeChef from "../assets/homeChef.png";
import man from "../assets/home/man.png";
import { NavLink } from "react-router-dom";
import Video from "../components/home/Video";
import Card from "../components/home/Card";
import Filter from "../components/home/FIlter";
import HappyCustomer from "../components/home/HappyCustomer";
import GetInTouch from "../components/home/GetInTouch";

const Home = () => {
  return (
    <main className="overflow-x-hidden">

      <Hero />

      {/* Why Customers Love Us */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={man} alt="customer" className="w-full max-w-md" />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-[#101828]">
              Why Customers <span className="text-[#D95103]">Love Us</span>
            </h1>

            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente repellendus quidem tenetur? Recusandae dolor deserunt
              cumque placeat.
            </p>

            <NavLink to="/services">
              <div className="inline-flex items-center gap-2 bg-teal-600 px-6 py-3 rounded-full text-white hover:bg-teal-900 transition duration-300">
                Explore Our Story
                <HiOutlineArrowRight />
              </div>
            </NavLink>
          </div>

        </div>
      </section>

      <Filter />
      <Video />

      {/* Cards Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <Card
            image={card1}
            head="Quality Food"
            para="Only the best food with top quality products and ingredients"
          />

          <Card
            image={party}
            head="Private Party"
            para="Get the best food for all your parties and gatherings"
          />

          <Card
            image={homeChef}
            head="Catering"
            para="Get the best food for any occasions and gatherings"
          />

        </div>

        <div className="flex justify-center mt-12">
          <NavLink to="/services">
            <div className="inline-flex items-center gap-2 bg-teal-600 px-6 py-3 rounded-full text-white hover:bg-teal-900 transition duration-300">
              Explore Our Story
              <HiOutlineArrowRight />
            </div>
          </NavLink>
        </div>
      </section>

      <HappyCustomer />
      <GetInTouch />

      {/* Google Map */}
      <section className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative">
        <iframe
          title="google-map"
          src="https://www.google.com/maps?q=New%20Baneshwor%20Kathmandu&z=16&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />

        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
          <img
            src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png"
            alt="marker"
            className="w-10 h-10"
          />
        </div>
      </section>

    </main>
  );
};

export default Home;
