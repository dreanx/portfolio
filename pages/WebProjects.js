import Head from "next/head";
import Nav from "../components/nav";

export default function WebProjects() {
  return (
    <div>
      <Head>
        <title>My Portfolio - Web Projects</title>
      </Head>
      <Nav />
      <h1 className="font-bangers text-4xl bg-red-500 text-center py-10">
        Web Projects
      </h1>
      {/* Add your web projects content here */}
    </div>
  );
}
