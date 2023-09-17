import CommonLayout from "@/components/dashboard/CommonLayout";
import DashboardBody from "@/components/dashboard/DashboardBody";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Blockstak</title>
        <meta name="description" content="Blockstak app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${inter.className}`}>
        <DashboardBody />
      </main>
    </>
  );
}
