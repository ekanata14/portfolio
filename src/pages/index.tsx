import Link from 'next/link';
import Tech from '../components/Tech';
import Repo from '../components/Repository/Repo';
import Edu from '../components/Education';
import Head from 'next/head';
import PhotoProfile from '../assets/img/photo-profile.jpg';

export default function HomePage() {
    return  (
    <>
      <Head>
            <link rel="shortcut icon" href={PhotoProfile.src} />
            <title>Home - Eka Nata.</title>
            <meta name="description" content="A young student who loves web development and programming." />
            <meta name="keywords" content="ekanata, frontend, dreamerdream" />
            <meta name="theme-color" content="#41B883"/>
        </Head>

        <main>
        <div className="full-container flex justify-center">
            <img src={PhotoProfile.src} alt="ekanata-photo-profile" className='w-80' style={{ borderRadius: "50%" }} />
        </div>
        <div className="full-container flex mt-5">
            <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-white text-center"><Link href="/">Hi, I'm Eka Nata</Link></h1>
            <p className="mt-5 font-normal leading-relaxed text-justify">
                Hi, I'm Fullstack Web Developer and an undergraduate student, 
                I have about 4 years of experience with Programming and Fullstack web development. 
                Laravel, NextJS, ReactJS, ExpressJS are the technologies I use all the time. Soon I will also learn flutter and mobile development. 
            </p>
            </div>
        </div>
 
        <div className="full-container mt-10">
            <Tech/>
        </div>

        <div className="full-container mt-20">
            <Repo/>
        </div>

        <div className="full-container mt-10">
            <Edu/>
        </div>
        </main>

        <footer className="w-full bottom-0 text-white bg-gray-900 bg-opacity-50">
            <div className="py-3 px-3 mx-auto flex items-center sm:flex-row flex-col justify-center">
                <p className="text-sm font-semibold sm:ml-2 sm:pl-4 sm:mt-1 mt-4">
                    © 2024 Eka Nata - <Link href="https://github.com/ekanata14">Github</Link>
                </p>
            </div>
        </footer>
    </>
    )
} 
