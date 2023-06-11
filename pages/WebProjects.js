import Head from "next/head";
import Nav from "../components/nav";
import WebProject from "../components/WebProjects";

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
      <div className="flex flex-wrap justify-center py-10 bg-gray-200">
        <WebProject
          imageSrc="/Treep.png"
          projectLink="/Projects/project1"
        />
        <WebProject
          imageSrc="/Suni.png"
          projectLink="/Projects/project2"
        />
        <WebProject
          imageSrc="/Treep.png"
          projectLink="/Projects/project3"
        />
        <WebProject
          imageSrc="/Treep.png"
          projectLink="/Projects/project4"
        />
        {/* Add more WebProject components for each project */}
      </div>
      {/* Add your web projects content here */}
    </div>
  );
}
