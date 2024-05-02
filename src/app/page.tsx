import WalletMButton from "@/components/WalletMultiButton";
import Airdrop from "@/components/airdrop";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="items-center justify-center w-full h-screen flex bg-gradient-to-b from-black to-transparent bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url(https://solanaexplore.com/claim/bg.jpeg)",
      }}
    >
      <div className="mt-4 flex flex-col items-center">
        <WalletMButton />
        <Airdrop />
      </div>
    </main>
  );
}
