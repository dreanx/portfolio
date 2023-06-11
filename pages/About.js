import Head from 'next/head';
import Nav from "../components/nav"

export default function About() {
  return (
    <div>
      <Head>
        <title >My Portfolio - About</title>
      </Head>
      <Nav />
      <h1 className="bg-red-500 text-white text-center py-8 text-4xl font-bold">About Page</h1>
      {/* Add your about content here */}
    </div>
  );
}
