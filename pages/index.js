import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/nav';

export default function Home() {
  return (
    <div className="font-bangersbg-purple-900">
      <Nav />
      <h1 className="font-bangers text-6xl bg-red-500 text-white text-center py-8 text-4xl">
        Welcome to my page!
      </h1>
    </div>
  );
}
