import React from "react";

import Script from "next/script";
import Link from "next/link";
import Head from "next/head";

export default function Fjar() {
  return (
    <>
      <Head>
        <title>athlete.is</title>
        <meta
          name="description"
          content="Æfingaplan sem hjálpar þér að ná betri árangri! Allar æfingar og myndbönd aðgengilegar í smáforriti og beint samband við þjálfara."
        />
      </Head>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Náðu lengra í þinni íþrótt!
            </h1>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Æfingaplan sem hjálpar þér að ná betri árangri! Allar æfingar og
            myndbönd aðgengilegar í smáforriti og beint samband við þjálfara.
          </p>
          <Link
            href="/skilmalar"
            className="text-sm xl:text-lg text-gray-600 absolute right-6 xl:right-0 -top-20"
          >
            Skilmálar
          </Link>
          <div className="flex justify-center">
            <Script src="https://askell.overcastcdn.com/js/dist/paymentbutton.js?v=2"></Script>
            <button
              type="button"
              data-key="eyJhY2NvdW50Ijo2NywicGxhbiI6NDY1LCJicmFuZGluZyI6dHJ1ZX0="
              data-redirect-url="athlete.is"
              className="askell-payment-button button"
            >
              Skrá mig í fjarþjálfun
            </button>
          </div>
        </div>
      </div>
    </>
  );
}