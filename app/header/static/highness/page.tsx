import React from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./page.module.css";

const page = () => {
  return (
    <div className="w-full p-4 bg-[#dddcdc]">
      <div className="bg-black w-full rounded-sm">
        <header className="bg-black rounded-sm flex items-center justify-between p-6">
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

        <div className=" bg-[#131313] px-10 py-20">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl">SIMPLE PROCESS</h2>
            <p className="text-sm  text-[#B5B7B9] ">
              Take on the roads with elegance <br /> and class with these
              round-shaped full <br /> lead headlamps.
            </p>
          </div>
          <div className="flex itmes-center justify-center gap-24 mt-16">
            <div className={Styles.processLi}>
              <Image
                src="/images/research-white-bgrm.png"
                alt="earth-research"
                width={25}
                height={25}
                className="mb-5"
              />
              <h3>RESEARCH</h3>
              <p>
                NEXT WE CONDUCT MARKET RESEARCH TO ANALYZE YOUR COMPETITORS AND
                TRENDS.
              </p>
            </div>
            <div className={Styles.processLi}>
              <Image
                src="/images/idea-wite-rmBg.png"
                alt="generate idea"
                width={45}
                height={40}
                className="-ml-2"
              />
              <h3>GENERATE IDEA</h3>
              <p>
                BASED ON OUR FINDINGS, WE DEVELOP INTIAL BRANDING CONCEPTS
                PRESENT.
              </p>
            </div>
            <div className={Styles.processLi}>
              <Image
                src="/images/discover-white-rmBg.png"
                alt="icon-discover"
                width={45}
                height={40}
                className="-ml-2"
              />
              <h3>DISCOVER</h3>
              <p>
                WE CREATE A COPREHENSIVE BRAND GUIDE THAT OUTLINES CONSISTENCY.
              </p>
            </div>
            <div className={Styles.processLi}>
              <Image
                src="/images/remove-bg-whiteIdea.png"
                alt="icon-idea"
                width={55}
                height={50}
                className="mb-4 -ml-2"
              />
              <h3>TEST PRODUCT</h3>
              <p>
                WE TEST ALL BRANDING ASSETS, INCLUDING LOGOS, GRAPHICS AND
                GUIDELINES, READY USE.
              </p>
            </div>
          </div>
        </div>

        <div className="py-24 w-full">
          <h1 className="text-4xl mb-6 text-center font-semibold">HONDA H'NESS</h1>
          <p className="text-center text-xs mb-7">
            THIS HONDA H'NESS CREATE BASICALLY FOUR MODELS FOR DEMONSTRATE OUR
            ABILITY TO RIDE WITH BRAND
          </p>
          <div className=" w-full flex items-center justify-between px-10 py-10 gap-8">
            <div className="w-6/12">
              <div className="w-full h-[400px]">
                <Image
                  src="/images/highnessModels/highness-cb-350-dlx.webp"
                  alt="highness-dlx"
                  className="w-full h-full object-cover rounded-lg"
                  width={660}
                  height={370}
                />
              </div>
              <h2 className="mt-4 mb-1 text-[#dddddd] font-bold">HONDA HIGHNESS CB350 DLX</h2>
              <p className="text-xs text-[#B5B7B9]">SEO MARKETING . SOCIAL MEDIA MARKETING</p>
            </div>
            <div className="w-6/12">
              <div className="w-full h-[400px] border border-[#1f1f1f77] rounded-lg">
                <Image
                  src="/images/highnessModels/honda-highness-dlx-pro-2.jpeg"
                  alt="highness-dlx"
                  className="w-full h-full object-cover rounded-lg"
                  width={400}
                  height={300}
                />
              </div>
              <h2 className="mt-4 mb-1 text-[#dddddd] font-bold">HONDA HIGHNESS CB350 DLX PRO</h2>
              <p className="text-xs text-[#B5B7B9]">SEO MARKETING . SOCIAL MEDIA MARKETING</p>
            </div>
          </div>
          <div className=" w-full flex items-center justify-between px-10 pb-14 gap-8">
            <div className="w-6/12">
              <div className="w-full h-[400px]">
                <Image
                  src="/images/highnessModels/honda-cruiser640f0a5e35798.avif"
                  alt="highness-dlx"
                  className="w-full h-full object-fill rounded-lg"
                  width={400}
                  height={300}
                />
              </div>
              <h2 className="mt-4 mb-1 text-[#dddddd] font-bold">HONDA HIGHNESS CB350 DLX PRO CHROME</h2>
              <p className="text-xs text-[#B5B7B9]">SEO MARKETING . SOCIAL MEDIA MARKETING</p>
            </div>
            <div className="w-6/12">
              <div className="w-full h-[400px]">
                <Image
                  src="/images/highnessModels/honda-highness-customization.webp"
                  alt="highness-dlx"
                  className="w-full h-full object-cover rounded-lg"
                  width={1200}
                  height={780}
                />
              </div>
              <h2 className="mt-4 mb-1 text-[#dddddd] font-bold">HONDA HIGHNESS CB350 CUSTAMIZATION</h2>
              <p className="text-xs text-[#b5b7b9]">SEO MARKETING . SOCIAL MEDIA MARKETING</p>
            </div>
          </div>
          <button className="flex items-center justify-center text-sm py-3 px-3 mx-auto bg-[#c5c3c3ee] rounded-full gap-3 text-[#141414] font-bold">
            <span className="ml-2">VIEW ALL ITEMS</span> 
            <Image src="/images/right-arrow-svgrepo-com (1).svg" alt="right-arrow" className="w-[10px] invert" width={300} height={300} />
          </button>
        </div>

        <div className="w-full p-10">
          <div className=" text-white text-center py-12">
            <h2 className="text-6xl mb-6">LET'S BUY</h2>
            <p className="flex items-center gap-2 justify-center cursor-pointer">
              CONTACT US  
              <svg  fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-30.72 -30.72 573.44 573.44"  transform="matrix(1, 0, 0, -1, 0, 0)" stroke="#ffffff" stroke-width="6.144"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M256,5.333C114.88,5.333,0,117.76,0,256s114.88,250.667,256,250.667S512,394.24,512,256S397.12,5.333,256,5.333z M256,485.333C126.613,485.333,21.333,382.4,21.333,256S126.613,26.667,256,26.667S490.667,129.493,490.667,256 S385.387,485.333,256,485.333z"></path> <path d="M369.28,247.467l-181.653-133.44c-4.693-3.627-11.307-2.773-14.933,1.92c-3.627,4.693-2.773,11.307,1.92,14.933 c0.107,0.107,0.32,0.213,0.427,0.32L344.96,256L175.04,380.693c-4.8,3.52-5.76,10.133-2.24,14.933 c3.52,4.8,10.133,5.76,14.933,2.24L369.387,264.64c4.8-3.52,5.76-10.133,2.24-14.933 C370.88,248.853,370.133,248.107,369.28,247.467z"></path> </g> </g> </g> </g>
              </svg> 
            </p>
          </div>

          <div className="flex items-center w-full border-y border-[#bdbfc02d] py-10">
            <div className="flex flex-col w-6/12">
              <h1 className="text-3xl font-bold mb-7 "> <span className="text-[#c2c0c0]">HONDA</span> H'NESS</h1>
              <h4 className="text-sm font-bold mb-3 text-[#dad7d7f3]">SUBSCRIBE TO OUR HONDA BIGWING</h4>
              <p className="text-[11px] mb-6 text-[#a7a7a7b9]">CREATIVE THINKERS WORK COLLABORATIVELY TO BRING</p>
              <form action="#" className=" py-2 px-4 border border-[#bdbfc02d] rounded-full w-4/6 flex items-center justify-between">
                <input type="email" className="w-full bg-black text-[#a7a7a7cc] text-xs focus:outline-none" />
                <Image src="/images/right-side-white-arrow-bgrm.png" alt="white-right-arrow" width={20} height={20}/>
              </form>
            </div>
            <div className="flex justify-between w-6/12 ">
              <div className={Styles.items}>
                <h2>COMPANY</h2>
                <h3>ABOUT</h3>
                <h3>CASE STUDIES</h3>
                <h3>PRICING</h3>
                <h3>BLOG</h3>
                <h3>CONTACT US</h3>
              </div>
              <div className={Styles.items}>
                <h2>SUPPORT</h2>
                <h3>404</h3>
                <h3>LICENCE</h3>
                <h3>CATALOG</h3>
                <h3>STYLEGUIDE</h3>
                <h3>PASSWORD</h3>
              </div>
              <div className={Styles.items}>
                <h2>LEGAL INFO</h2>
                <h3>PRIVACY POLICY</h3>
                <h3>TERMS OF CONDITION</h3>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#808080a4] text-center -mb-5 mt-6">COPYRIGHT @2025. ALL RIGTHS PRESERVED.</p>
        </div>
        

      </div>
    </div>
  );
};

export default page;
