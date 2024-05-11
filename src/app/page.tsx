import WalletMButton from "@/components/WalletMultiButton";
import Airdrop from "@/components/airdrop";
import Image from "next/image";

export default function Home() {
  return (
    <main className="items-center justify-center w-full h-screen flex bg-[url('/bg.jpeg')] bg-no-repeat bg-cover bg-center">
      <div className="mt-4 flex flex-col items-center">
        <WalletMButton />
        <div className="p-4"></div>
        <Airdrop />
      </div>
    </main>
  );
}
