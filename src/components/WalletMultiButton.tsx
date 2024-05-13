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
      <h1 className="m-8 text-6xl ">$NLG REFUND</h1>
      <h2 className="m-2 text-2xl ">
        CA: NLGrKAqeLj8BRrUopmgEaScrzEFnE8KkbHsqgNmk5xS
      </h2>
      <WalletMultiButton style={{ background: "#60B8AF", color: "black" }} />
    </div>
  );
}
