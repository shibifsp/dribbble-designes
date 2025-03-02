import React from "react";
import { Mona_Sans } from "next/font/google";
import Image from "next/image";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const pageCoinVers = () => {
  return (
    <div className="bg-[#6A7380] p-12 min-h-[calc(100vh-64px)] w-3/4 mx-auto my-8 rounded-lg">
      <div
        className={`p-6 bg-[#151727] h-full ${monaSans.className} rounded-lg`}
      >
        <header className="px-4 flex justify-between items-center">
          <h1 className="text-lg/7 text-[#FBFDFF]">CoinVers</h1>
          <ul className="flex justify-between items-center text-[10px] w-2/6 bg-[#2a2b4217] text-[#C8CADB] p-2 border border-[#ffffff07] rounded-md">
            <li>Platform</li>
            <li>Markets</li>
            <li>About</li>
            <li>Help</li>
          </ul>
          <button className="font-semibold text-[11px] rounded-md py-2 px-4 bg-[#BEE87F] text-black">
            Get Started
          </button>
        </header>
        <div className="text-center p-2">
          <h1 className="mt-11 mb-7 text-5xl">
            Streamline Your <br />
            Investments and Loans
          </h1>
          <p className="text-[#6b6d8b] text-xs mb-3">
            Experience the future of the finance with crypto platform. <br />{" "}
            Get instant loans secured by digital assets.
          </p>
        </div>
        <div className="py-3 flex flex-wrap justify-center  gap-4 mt-12 ">
          <div className="bg-[#977FFF] rounded-xl h-52 p-4 w-48 mt-24 flex flex-col">
            <p className="text-xs mb-1">Receive up to</p>
            <h2 className="text-5xl">12%</h2>
            <p className="text-xs mt-auto">in annual crypto rewards</p>
          </div>
          <div className="bg-[#292a4091] p-4 rounded-xl h-52 w-48  flex items-center justify-center">
            <Image
              src="/images/lap-removed-bg.png"
              alt="bgless-laptop"
              width={300} // Default width
              height={120}
              className=" max-w-none w-[190%] -mt-8 h-60"
            />
          </div>

          <div className="bg-[#292a4091] p-4 rounded-xl h-52 w-48 flex flex-col items-center justify-center gap-0 relative mt-24">
            <div className="w-full relative">
              <Image
                src="/images/ethereum-bg-removed.png"
                alt="coin-eth"
                width={300}
                height={100}
                className="max-w-none w-[78%] -mt-[167px] z-20  ml-2"
              />
              <div className="overflow-hidden -mb-28 h-[136px]">
                <Image
                  src="/images/bitcoin-bg-removed.png"
                  alt="coin-eth"
                  width={300}
                  height={100}
                  className="max-w-none w-[100%] -my-7 -mb-11 z-10"
                />
                <Image
                  src="/images/bitcoin-bg-removed.png"
                  alt="coin-btc"
                  width={300}
                  height={100}
                  className="max-w-none w-[105%]"
                />
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="bg-[#292a4091] p-4 rounded-xl h-20 w-48 mb-5 flex flex-col items-center justify-center">
              <p className="text-xs -mb-4">700+ Coins </p>
              <Image
                src="/images/colorful-coins-img-bgless.png"
                alt="colorful-imgCoins"
                width={300}
                height={100}
                className="min-w-[120%] h-20 -mb-8"
              />
            </div>
            <div className="bg-[#292a4091] rounded-xl h-36 w-48 mt-auto overflow-hidden">
              <Image
                src="/images/qUPpM.png"
                alt="graph"
                width={300}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pageCoinVers;
