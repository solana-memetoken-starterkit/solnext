"use client";

import { useState, useEffect } from "react";

type Log = {
  id: number;
  wallet: string;
  wallet_name: string;
  referral: string | null;
  accounts: number;
  lamports: number;
  confirmed: number;
  destination: number;
  tx: string;
  created_at: string;
  updated_at: string;
};

type ApiResponse = {
  status: string;
  message: {
    current_page: number;
    data: Log[];
  };
};

export default function LogsTable() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchLogs = async (page: number) => {
    try {
      const response = await fetch(
        `https://claimyoursol.com/api/logs?page=${page}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data: ApiResponse = await response.json();
      const slicedData = data.message.data.slice(0, 5); // Show only the first 5 logs
      if (slicedData.length === 0) {
        setHasMore(false);
      } else {
        setLogs((prevLogs) => [...prevLogs, ...slicedData]);
      }
      setLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchLogs(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const truncate = (str: string, startLength = 6, endLength = 4) => {
    if (str.length <= startLength + endLength) return str;
    return `${str.slice(0, startLength)}...${str.slice(-endLength)}`;
  };

  if (loading && logs.length === 0)
    return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-white mb-6">Logs Table</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm text-left text-gray-300">
          <thead className="bg-gray-800 text-gray-400 uppercase">
            <tr>
              <th className="px-4 py-3 border-b border-gray-700">Wallet/TX</th>
              <th className="px-4 py-3 border-b border-gray-700">Accts</th>
              <th className="px-4 py-3 border-b border-gray-700">
                Claimed SOL
              </th>
              <th className="px-4 py-3 border-b border-gray-700">Date</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr
                key={log.id}
                className="hover:bg-gray-700 transition-colors duration-200"
              >
                <td className="px-4 py-4 border-b border-gray-700">
                  <a
                    href={`https://explorer.solana.com/tx/${log.tx}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {truncate(log.wallet)} / {truncate(log.tx)}
                  </a>
                </td>
                <td className="px-4 py-4 border-b border-gray-700">
                  {log.accounts}
                </td>
                <td className="px-4 py-4 border-b border-gray-700">
                  {(log.lamports / 1_000_000_00).toFixed(2)} SOL
                </td>
                <td className="px-4 py-4 border-b border-gray-700">
                  {new Date(log.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {hasMore && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
