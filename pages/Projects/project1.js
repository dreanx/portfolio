import Head from "next/head";
import Nav from "../../components/nav";
import Link from "next/link";

export default function Project1() {
  return (
    <div>
      <Head>
        <title>Treep</title>
      </Head>
      <Nav />
      <h1 className="font-bangers text-4xl bg-red-500 text-center py-10">
        Treep
      </h1>
      {/* Project details */}
      <div className="container mx-auto py-8 bg-gray-200">
        <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Name</h2>
          <p>Treep</p>
          <h2 className="text-2xl font-bold mt-6 mb-4">Year</h2>
          <p>2022</p>
          <h2 className="text-2xl font-bold mt-6 mb-4">Type</h2>
          <p>Web Development, Collaborative</p>
          <h2 className="text-2xl font-bold mt-6 mb-4">Website</h2>
          <p>
            <a href="https://wildcodeschool.github.io/2022-09-JS-RemoteEN-Project-1-Team-2-Treep/">
              Click Here
            </a>
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-4">GitHub Repo</h2>
          <p>
            <a href="https://github.com/WildCodeSchool/2022-09-JS-RemoteEN-Project-1-Team-2-Treep">
              Click Here for the GitHub Repo
            </a>
          </p>
          {/* Back button */}
          <div className="text-center mt-8">
            <Link href="/WebProjects">
              <span className="text-blue-500">
                Back to Web Projects
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
