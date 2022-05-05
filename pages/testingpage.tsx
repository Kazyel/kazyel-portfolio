import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Link from 'next/link'
import Navbar from './navbar'

const TestePage: NextPage = () => {
  return (
    <div>
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
      <section className="flex min-h-screen flex-col items-center justify-center py-2">
        <div className="m-5 text-5xl font-bold text-purple-500">
          Testando a página
        </div>
        <div>
          <button className="font-bold hover:underline">
            <Link href="/">
              <a>Voltar para a página anterior</a>
            </Link>
          </button>
        </div>
      </section>
    </motion.div>
    </div>
  )
}

export default TestePage
