"use client";

export default function Faq() {
  return (
    <div className="flex flex-col items-center justify-center mt-2 mb-8">
      <p className="text-center">
        <h2 className="text-2xl">WTF is this?</h2>
        <br />
        Closing SPL Token Accounts
        <br /> Everytime you receive a Memecoin, Token or NFT in your wallet a
        specific token account is created for it.
        <br />
        When you send or sell that Memecoin, Token or NFT to someone else, the
        token account has 0 units of that specific asset but still lingers in
        your wallet with no utility.
        <br />
        To create each and single one of those accounts someone paid ~0.002 SOL
        for rent that is withheld by Solana Network forever.
        <br />
        With our tool you can easily and securely close this accounts and claim
        your SOL.
        <br />
        <br />
        Claim Your SOL <br />
        All the token accounts that show up for selection already have 0 assets
        assigned and have no use, feel secure in selecting as many as you want
        and let us do the work.
        <br />
        The selected tokens accounts are closed and the released rent deposits
        are sent to you, we take a small donation from profits to keep this Site
        + RPC running and developing more tools.
        <br />
        <br />
        What is this rent?
        <br /> Solana currently charges users 2 years worth of rent for every
        account created to storage, maintain the data and process transactions
        with those accounts.
        <br />
        You can find more information in the official Solana Documentation, link{" "}
        <a
          className="text-blue-500"
          href="https://docs.solana.com/developing/programming-model/accounts#rent"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}
