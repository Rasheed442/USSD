import "@/styles/globals.css";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";
import { ussdlogo } from "@/public/ICON";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>USSD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={ussdlogo} />
      </Head>
      <Toaster />

      <Component {...pageProps} />
    </>
  );
}
