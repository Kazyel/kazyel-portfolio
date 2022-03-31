import type { NextPage } from 'next'
import DayMode from '../pages/assets/icons/day-mode.png'
import NightMode from '../pages/assets/icons/night-mode.png'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import Image from 'next/image'
import { Link } from 'react-scroll'

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)


  function changeTheme() { theme === 'dark' ? setTheme('light') : setTheme('dark') }

  useEffect(() => setMounted(true), [])


  if (!mounted) return null

  return (
    <div className="">
      <Head>
        <title>Kazyel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id='start' className='flex min-h-screen flex-col items-center justify-center py-2'>
        <h1 className="text-6xl py-4 selection:bg-violet-900 font-bold">
          Yo!{' '}
          <Link activeClass="active" to="cards" spy={true} smooth={true} duration={1000}> 
          <a
            className="text-purple-600 hover:underline"
            href="#cards"
          >
            I'm Kazyel!
          </a>
          </Link>
        </h1>

        <div>
          <button
            id="themeBtn"
            className="ease-in-out delay-200"
            type="button"
            onClick={() => changeTheme()}
          >
           {theme === 'dark' ? <Image className="dark:invert" src={NightMode}></Image>  :  <Image className="dark:invert" src={DayMode}></Image>}
          </button>
        </div>
      </section>  
      
  
      <section id='cards' className="flex w-full flex-1 flex-col items-center justify-center p-20 text-center"> 
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="ease mt-6 w-96 rounded-xl border p-6 text-left shadow-md transition delay-100 hover:border-purple-600 hover:text-purple-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="ease mt-6 w-96 rounded-xl border p-6 text-left shadow-md transition delay-100 hover:border-purple-600 hover:text-purple-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="ease mt-6 w-96 rounded-xl border p-6 text-left shadow-md transition delay-100 hover:border-purple-600 hover:text-purple-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="ease mt-6 w-96 rounded-xl border p-6 text-left shadow-md transition delay-100 hover:border-purple-600 hover:text-purple-600 "
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </section>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image className="dark:invert" src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
