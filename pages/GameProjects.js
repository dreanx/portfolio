import Head from "next/head";
import Nav from "../components/nav";

export default function GameProjects() {
  return (
    <div>
      <Head>
        <title>My Portfolio - Game Development</title>
      </Head>
      <Nav />
      <h1 className="font-bangers text-4xl bg-red-500 text-center py-10">
        Game Development
      </h1>
      {/* Add your game projects content here */}
    </div>
  );
}
