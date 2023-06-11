import Head from 'next/head';
import Nav from '../components/nav';

export default function WebProjects() {
  return (
    <div>
      <Head>
        <title>My Portfolio - Web Projects</title>
      </Head>
      <Nav />
      <h1 className="bg-red-500 text-white text-center py-8 text-4xl font-bold">Web Projects Page</h1>
      {/* Add your web projects content here */}
    </div>
  );
}
