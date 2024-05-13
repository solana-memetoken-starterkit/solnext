import WalletMButton from "@/components/WalletMultiButton";
import Airdrop from "@/components/airdrop";
import Image from "next/image";

export default function Home() {
  return (
    <main className="items-center justify-center w-full h-screen flex bg-[url('/bg1.webp')] bg-no-repeat bg-cover bg-center opacity-80">
      <div className="mt-4 flex flex-col items-center">
        <WalletMButton />
        <Airdrop />
      </div>
    </main>
  );
}
