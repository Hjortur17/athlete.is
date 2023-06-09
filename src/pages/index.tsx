import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center text-neutral-900 px-6 xl:px-0 justify-between ${inter.className} bg-neutral-50`}
    >
      <div className="w-full max-w-screen-xl mx-auto pt-12 flex items-center justify-between">
        <h1 className="text-xl xl:text-2xl 2xl:text-3xl font-extrabold">athlete.is</h1>
        <Link href="/skilmalar" className="text-sm xl:text-lg">Skilmálar</Link>
      </div>

      <div className="relative max-w-3xl mx-auto text-center space-y-6 my-12 md:my-24 xl:my-0">
        <h2 className='text-5xl xl:text-6xl 2xl:text-7xl font-black'>Náðu lengra í þinni íþrótt!</h2>
      </div>

      <div className="grid gap-6 text-center lg:grid-cols-3 w-full max-w-screen-xl mx-auto pb-12">
        <a
          href="https://greidslusida.valitor.is/Tengill/zb5c7f"
          className="group text-left rounded-lg border-2 border-transparent px-5 py-4 transition-colors hover:border-neutral-600 bg-neutral-200/60"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-bold`}>
            Mælingar (2 skipti) <br />& Off-Season fjarþjálfun{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <h2 className={`mb-3 text-3xl font-black`}>
            24.990kr.
          </h2>
          <ul className={`mx-5 list-disc max-w-[30ch] text-sm`}>
            <li className='font-semibold'>Mælingar fyrir og eftir sumar</li>
            <ul className='list-disc list-inside opacity-80'>
              <li>Stökkkraftur</li>
              <li>Sprengikraftur í efri líkama</li>
              <li>Þyngd og fitumæling</li>
            </ul>
            <li className='font-semibold my-2'>12 vikna off-season styrktarprogram</li>
            <li className='font-semibold'>Aðgangur að appi með</li>
            <ul className='list-disc list-inside opacity-80'>
              <li>Æfingar, upplýsingar og video</li>
              <li>Niðurstöður mælinga</li>
            </ul>
          </ul>
        </a>

        <a
          href="https://greidslusida.valitor.is/Tengill/u5y8b5"
          className="group text-left rounded-lg border-2 border-transparent px-5 py-4 transition-colors hover:border-neutral-600 bg-neutral-200/60"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-bold`}>
            Off-Season fjarþjálfun{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <h2 className={`mb-3 text-3xl font-black`}>
          13.990kr.
          </h2>
          <ul className={`mx-5 list-disc max-w-[30ch] text-sm`}>
            <li className='font-semibold'>12 vikna off-season styrktarprogram</li>
            <li className='font-semibold'>Aðgangur að appi með:</li>
            <ul className='list-disc list-inside opacity-80'>
              <li>Æfingar, upplýsingar og video</li>
            </ul>
          </ul>
        </a>

        <a
          href="https://greidslusida.valitor.is/Tengill/7bes5g"
          className="group text-left rounded-lg border-2 border-transparent px-5 py-4 transition-colors hover:border-neutral-600 bg-neutral-200/60"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-bold`}>
            Mælingar (1 skipti){' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <h2 className={`mb-3 text-3xl font-black`}>
          7.990kr.
          </h2>
          <ul className={`mx-5 list-disc max-w-[30ch] text-sm`}>
            <li className='font-semibold'>Mæling</li>
            <ul className='list-disc list-inside opacity-80'>
              <li>Stökkkraftur</li>
              <li>Sprengikraftur í efri líkama</li>
              <li>Þyngd og fitumæling</li>
            </ul>
          </ul>
        </a>
      </div>
    </main>
  )
}
