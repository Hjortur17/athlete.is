import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Confirm() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center text-neutral-900 px-6 xl:px-0 justify-between ${inter.className} bg-neutral-50`}
    >
      <div className="w-full max-w-screen-xl mx-auto pt-12 flex items-center justify-between">
        <h1 className="text-xl xl:text-2xl 2xl:text-3xl font-extrabold">Athlete.is</h1>
        <Link href="/" className="text-sm xl:text-lg">Aftur heim</Link>
      </div>

      <div className="relative max-w-2xl mx-auto text-center space-y-6 my-12 md:my-24 xl:my-0">
        <h2 className='text-5xl xl:text-6xl 2xl:text-7xl font-black'>Takk fyrir!</h2>
        <p className='text-2xl 2xl:text-3xl font-light'>Takk fyrir að velja Athlete.is, við munum vera í sambandi við þig með framhaldið</p>
      </div>

      <div></div>
    </main>
  )
}
