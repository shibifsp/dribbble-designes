import React from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./page.module.css"

const page = () => {
  return (
    <div className="w-full p-16 bg-[#DEDEDE]">
      <div className="bg-black w-full">
        <header className="bg-black  flex items-center justify-between p-6">
          <h2 className="text-sm cursor-pointer">.MENU</h2>
          <h1 className="text-lg cursor-pointer">H'NESS CB350</h1>
          <h2 className="text-sm cursor-pointer">LET'S TALK</h2>
        </header>
        <div className="w-full bg-black p-6">
          <div className="pt-16 pb-16">
            <h1 className="text-4xl text-center">HONDA</h1>
            <h1 className="text-4xl text-center text-[#cccccc]">BIGWING</h1>
          </div>
          <div className="relative w-full h-[580px]">
            <Image
              src="https://www.hondabigwing.in/Content/images/desk-banner/cb350_web_banner_new_2025.jpg"
              alt="honda banner"
              className="w-full h-full object-cover"
              layout="fill"
            />
          </div>
          <ol className="flex items-center justify-between p-4 mt-9 mb-16 ">
            <li className="text-center ">
              <h3 className="text-6xl">50+</h3>
              <p className="text-[10px]">REGULAR CLIENTS</p>
            </li>
            <li className="text-center ">
              <h3 className="text-5xl"> 6.2%</h3>
              <p className="text-[10px]">YEARLY GROWTH RATE</p>
            </li>
            <li className="text-center ">
              <h3 className="text-5xl">4.5</h3>
              <p className="text-[10px]"> RATED BY CLIENTS</p>
            </li>
            <li className="text-center ">
              <h3 className="text-5xl">21+</h3>
              <p className="text-[10px]">TEAM MEMBERS</p>
            </li>
          </ol>
          <div className="flex  justify-center p-2">
            <h3 className="mt-2 mr-8 text-xs w-[20%]">
              YOUR GOAL, OUR MISSION
            </h3>
            <p className="text-2xl w-[75%]">
              The roar. The might. All over again. Your Highness is all set to
              roar into a greener future with 2025 ready, OBD-2B norms. The
              aggressive stance, the classic look and the bold design, continues
              to reflect royalty in every mile. So, take it easy or take the
              high road, take over the ones that are taken often- command every
              road with your Hʼness CB350.
            </p>
          </div>

          <div className="p-4 mt-9 flex items-center justify-between mb-28">
            <div className=" relative w-24 h-20">
              <Image
                src="https://bikeindia.in/wp-content/uploads/2020/10/Hness-CB350-5-WEB.jpg"
                alt="bike"
                className="w-full h-full"
                width={100}
                height={100}
              />
            </div>
            <div className="flex items-center jrustify-center bg-white rounded-full justify-between  text-black text-[10px] py-1 p-3">
              <button>ABOUT US</button>
              <Link href="" className="relative ml-1">
                <Image
                  src="/images/images-removebg-preview.png"
                  alt="left-side-arrow"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <p className="text-xs w-[35%] text-[#B5B7B9] mr-32">
              The technical specifications and design of the vehicle may vary
              according to the requirements and conditions without any notice.
              H’ness CB350 meets OBD-2B norms • Product shown in the picture may
              vary from actual product available in the market • All features
              and colours may not be part of all variants •
            </p>
          </div>
        </div>

        <div className=" bg-[#131313] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">SIMPLE PROCESS</h2>
            <p className="text-xs text-[#B5B7B9] ">
              Take on the roads with elegance <br /> and class with these
              round-shaped full <br /> lead headlamps.
            </p>
          </div>
          <div className="flex itmes-center justify-center gap-24 mt-10">
            <div className={Styles.processLi}>
              <Image src='/images/research-white-bgrm.png' alt="earth-research" width={25} height={25}/> 
              <h3 className="text-sm font-semibold my-3">RESEARCH</h3>
              <p>NEXT WE CONDUCT MARKET RESEARCH TO ANALYZE YOUR COMPETITORS AND TRENDS.</p>
            </div>
            <div className="flex flex-col justify-center items-left text-[10px] text-[#B5B7B9]">
              <Image src='/images/remove-bg-whiteIdea.png' alt="generate idea" width={50} height={50} /> 
              <h3 className="text-sm font-semibold my-3">GENERATE IDEA</h3>
              <p>BASED ON OUR FINDINGS, WE DEVELOP INTIAL BRANDING CONCEPTS PRESENT.</p>
            </div>
            <div className="flex flex-col justify-center items-left text-[10px] text-[#B5B7B9]">
              <Image src='/images/discover-white-rmBg.png' alt="icon-discover" width={45} height={40} /> 
              <h3 className="text-sm font-semibold my-3">DISCOVER</h3>
              <p>WE CREATE A COPREHENSIVE BRAND GUIDE THAT OUTLINES CONSISTENCY.</p>
            </div>
            <div className="flex flex-col justify-center items-left text-[10px] text-[#B5B7B9]">
              <Image src='/images/idea-wite-rmBg.png' alt="icon-idea" width={45} height={40} /> 
              <h3 className="text-sm font-semibold my-3">TEST PRODUCT</h3>
              <p>WE TEST ALL BRANDING ASSETS, INCLUDING LOGOS, GRAPHICS AND GUIDELINES, READY USE.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
