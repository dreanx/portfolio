import Head from "next/head";
import Image from "next/image";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className="font-bangersbg-purple-900">
      <Nav />
      <h1 className="font-bangers text-4xl bg-red-500 text-center py-10">
        Welcome to my page!
      </h1>
      <p className="font-lato text-lg px-5 py-10 bg-blue-300">
        This is a mobile-first approach for the home page content. Adjustments
        for larger screens can be made using Tailwind CSS responsive classes.
      </p>
    </div>
  );
}
