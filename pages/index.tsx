import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import * as Scroll from 'react-scroll'
import DarkModeButton from './darkmode'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Navbar from './navbar'

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false)

  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

  let Links = Scroll.Link

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Kazyel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <motion.div
      transition={{ duration: 0.5 }}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <section
        id="start"
        className="flex min-h-screen flex-col items-center justify-center py-2 selection:bg-violet-900"
      >
        <h1 className=" text-4xl md:text-6xl font-bold">
          Yo!{' '}
          <Links
            activeClass="active"
            to="cards"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <a
              href="#cards"
              className="mateus text-purple-500 hover:underline hover:drop-shadow-md"
            >
              <span className="mateuspan">I'm Mateus!</span>
            </a>
          </Links>
        </h1>

        <div className="p-5 text-lg md:text-2xl font-bold text-purple-700 drop-shadow-md duration-300 ease-in-out hover:text-purple-500">
          <Link href="/testingpage">
            <a className="hover:underline">I will be a Full Stack Developer!</a>
          </Link>
        </div>
        <div className="mb-5 bg-zinc-900 p-2.5 selection:bg-zinc-700 dark:selection:bg-zinc-800">
          <code className="text-white dark:text-white">
            Learning{' '}
            <span className="font-black text-yellow-400">JavaScript</span> at
            the moment!
          </code>
        </div>
      </section>
      <section
        id="cards"
        className="flex w-full flex-1 flex-col items-center justify-center p-20 text-center"
      ></section>
      <section
        id="cards"
        className="flex w-full flex-1 flex-col items-center justify-center p-20 text-center"
      ></section>{' '}
      <section
        id="cards"
        className="flex w-full flex-1 flex-col items-center justify-center p-20 text-center"
      ></section>{' '}
      <section
        id="cards"
        className="flex w-full flex-1 flex-col items-center justify-center p-20 text-center"
      ></section>{' '}
      <section
        id="cards"
        className="flex w-full flex-1 flex-col items-center justify-center p-20 text-center"
      ></section>
      <footer className="flex h-24 w-full items-center justify-center">
        <motion.div
          whileTap={{ scale: 2 }}
          drag="x"
          style={{ x, opacity }}
          dragConstraints={{ left: -50, right: 50 }}
          transition={{ duration: 2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-2xl font-bold text-purple-600">Foda-se?</span>
        </motion.div>
      </footer>
      </motion.div>
    </div>
  )
}

export default Home
