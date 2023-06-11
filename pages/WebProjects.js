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
      <div className="project-list flex justify-around py-10">
        <WebProject
          imageSrc="/hamburger.svg"
          projectLink="/Projects/project1"
        />
        <WebProject
          imageSrc="/hamburger.svg"
          projectLink="/Projects/project2"
        />
        <WebProject
          imageSrc="/hamburger.svg"
          projectLink="/Projects/project3"
        />
        <WebProject
          imageSrc="/hamburger.svg"
          projectLink="/Projects/project4"
        />
        {/* Add more WebProject components for each project */}
      </div>
      {/* Add your web projects content here */}
    </div>
  );
}
