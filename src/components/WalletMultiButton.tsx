"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";

export default function WalletMButton() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/*  <Image
        alt="smoleup"
        className="rounded-full w-36"
        src="/djinnicoin.png"
        width={100}
        height={100}
      />*/}
      <h1 className="m-8 text-6xl ">CLAIM YOUR SOL</h1>
      <h2 className="m-2 text-2xl text-center">
        Solana Blockchain keeps your SOL! <br /> You can get it back! <br />
      </h2>{" "}
      <p className="m-2 text-md text-center">
        WTF is this? <br />
        Solana Network: ~4626 TPS
      </p>
      <WalletMultiButton style={{ background: "#60B8AF", color: "black" }} />
    </div>
  );
}
