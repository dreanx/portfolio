import Head from 'next/head';
import Nav from "../components/nav"

export default function About() {
  return (
    <div>
      <Head>
        <title >My Portfolio - About</title>
      </Head>
      <Nav />
      <h1 className="font-bangers text-2xl bg-red-500 text-center">
        About Me & Contact
      </h1>
      {/* Add your about content here */}
    </div>
  );
}
