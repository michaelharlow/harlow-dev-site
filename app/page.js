'use client';

import Intro from "@/components/Intro";
import BigPhoto from "@/components/BigPhoto";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="fixed flex w-full h-full justify-center items-center z-[-1]">
        <div className="page-background"></div>
      </div>
      <Navbar />
      <main className="flex flex-col items-center justify-center mx-4 h-[90vh]">
        <div className="flex flex-row flex-wrap sm:flex-nowrap justify-between items-center w-5/6">
          <Intro />
          <BigPhoto />
        </div>
      </main>
      <div className="bg-gray-900 w-full pb-16 pt-8" id="about">
        <h1 className="text-white text-4xl font-bold text-center p-8">
          About Me
        </h1>
        <div className="flex flex-col items-center justify-center text-gray-200">
          <p className="sm:text-center sm:mx-0 mx-4 sm:text-xl text-md font-semibold max-w-6xl">
            I love everything about coding. I love solving problems, the satisfaction of seeing
            my ideas come to life, and the creative solutions I get to develop. Outside of computing,
            I enjoy running 🏃‍♂️, linguistics 🗣️, and nature 🌳. I also have a weird obsession with
            doing handstands, which I think needs to be made public knowledge.

            I am currently a student at the University of Central Missouri studying Computer Science,
            and looking to study abroad soon! If I could tell everyone that met me one thing it would
            be that &quot;The greatest gift in life is a happy smile&quot;. :&#41;
          </p>
        </div>
        <h1 className="text-white text-4xl font-bold text-center p-8">
          Tech skills
        </h1>
        <div className="flex flex-col items-center justify-center text-gray-200">
          <h3 className="text-center sm:mx-0 mx-4 sm:text-2xl text-md font-semibold max-w-6xl">
            Python • Java • C++ • JavaScript • HTML • CSS • React • Next.js • TailwindCSS • Node.js • SQL • Git • GitHub • Linux &#40;Ubuntu&#41; • Windows
          </h3>
        </div>
      </div>
      <h1 className="text-gray-900 sm:text-6xl text-4xl font-extrabold text-center p-8" id="projects">
        Projects
      </h1>
      <div className="grid sm:grid-rows-1 sm:grid-cols-2 grid-cols-1 gap-4 w-full">
        <div onClick={
          () => window.location.href = "https://quotopia-rosy.vercel.app/"
        } className="bg-gray-800 rounded-xl m-3 hover:bg-gray-700">
          <h2 className="text-white sm:text-5xl text-2xl font-bold px-6 pt-6">
            Quotopia
          </h2>
          <h3 className="text-gray-200 sm:text-3xl text-lg font-bold px-6 pb-6">
            Quote database and web app
          </h3>
        </div>
        <div onClick={
          () => window.location.href = "https://trandrew1023.github.io/edi-translator/"
        } className="bg-gray-800 rounded-xl m-3 hover:bg-gray-700">
          <h2 className="text-white sm:text-5xl text-2xl font-bold px-6 pt-6">
            EDI Translator
          </h2>
          <h3 className="text-gray-200 sm:text-3xl text-lg font-bold px-6 pb-6">
            X12 EDI file translator web app
          </h3>
        </div>
      </div>
      <footer className="flex items-center justify-around text-gray-900 py-4">
        <p className="text-center">
          Created by Michael Harlow
        </p>
        <p className="text-center">
          Built with Next.js and TailwindCSS
        </p>
      </footer>
    </>

  );
}
