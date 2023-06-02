import Head from "next/head";

export default function HeadComponent({ title, logo }) {
  return (
    <Head>
      <title>{title || "MediCare"}</title>
    </Head>
  );
}
