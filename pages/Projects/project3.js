import Head from "next/head";
import Nav from "../../components/nav";

export default function Project3() {
  return (
    <div>
      <Head>
        <title>My Portfolio - About</title>
      </Head>
      <Nav />
      <h1 className="font-bangers text-4xl bg-red-500 text-center py-10">
        Projet 3
      </h1>
      {/* Add your about content here */}
    </div>
  );
}
