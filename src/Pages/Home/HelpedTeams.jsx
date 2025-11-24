import React from "react";
import imgOne from "../../assets/brands/amazon.png";
import imgTwo from "../../assets/brands/casio.png";
import imgThree from "../../assets/brands/moonstar.png";
import imgFour from "../../assets/brands/randstad.png";
import imgFive from "../../assets/brands/star.png";
import imgSix from "../../assets/brands/start_people.png";

const HelpedTeams = () => {
    const logos = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix];
  return (
    <div>
      <section className="pb-15 text-center">
        <h1 className="text-[#0b4b4b] font-bold md:text-2xl text-lg">
          We've helped thousands of sales teams
        </h1>
        <div className="flex flex-wrap justify-center items-center pt-10 pb-3 gap-8">
            {
                logos.map(logo => <img key={logo} src={logo} alt="Logo Icon"/>)
            }
        </div>
      </section>
    </div>
  );
};

export default HelpedTeams;
