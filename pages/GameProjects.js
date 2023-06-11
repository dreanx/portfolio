import Head from 'next/head';
import Nav from '../components/nav';

export default function GameProjects() {
  return (
    <div>
      <Head>
        <title >My Portfolio - Game Development</title>
      </Head>
      <Nav />
      <h1 className="bg-red-500 text-white text-center py-8 text-4xl font-bold">Game Development Page</h1>
      {/* Add your game projects content here */}
    </div>
  );
}
