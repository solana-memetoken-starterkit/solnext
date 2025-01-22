import WalletMButton from "@/components/WalletMultiButton";
import Airdrop from "@/components/airdrop";
import LogsTable from "@/components/logs";
import Faq from "@/components/faq";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-black bg-no-repeat bg-cover bg-center opacity-80">
      <div className="flex items-center justify-center w-full">
        <Image
          className="mt-6"
          alt="banner"
          src="/banner.png"
          width={350}
          height={350}
        />
      </div>
      <div className="items-center justify-center w-full flex">
        <div className="mt-5 flex flex-col items-center">
          <WalletMButton />
          <Airdrop />
          <LogsTable />
          <Faq />
        </div>
      </div>
    </main>
  );
}
