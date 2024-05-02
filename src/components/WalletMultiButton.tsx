"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";

export default function WalletMButton() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        alt="smoleup"
        className="rounded-full w-36"
        src="https://solanaexplore.com/claim/logo.jpeg"
        width={100}
        height={100}
      />

      <WalletMultiButton style={{}} />
    </div>
  );
}
