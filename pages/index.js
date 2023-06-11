import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/nav';

export default function Home() {
  return (
    <div className="bg-purple-900">
      <Nav />
      <h1 className="bg-red-500 text-white text-center py-8 text-4xl font-bold">
        Welcome to my page!
      </h1>
    </div>
  );
}
