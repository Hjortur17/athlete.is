import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

import Script from "next/script";
import Link from "next/link";

const tiers = [
  {
    name: "YOUTH athlete",
    id: "youth-athlete",
    key: "eyJhY2NvdW50Ijo2NywicGxhbiI6Mzg4LCJicmFuZGluZyI6dHJ1ZX0=",
    price: "4.990 kr.",
    features: [
      "Mánaðarleg áskrift",
      "Æfingakerfi hannað til að byggja grunn fyrir þig til að ná langt í íþróttinni þinni",
      "3 styrktaræfingar á viku",
      "3 körfuboltaæfingar á viku",
      "Æfingaplanið er uppfært á 4 vikna fresti",
      "Þú færð æfingar og myndbönd beint í símann með smáforriti",
      "Samskipti við þjálfara í smáforriti",
    ],
    mostPopular: false,
  },
  {
    name: "HYGGE athlete",
    id: "hygge-athlete",
    key: "eyJhY2NvdW50Ijo2NywicGxhbiI6MzAxLCJicmFuZGluZyI6dHJ1ZX0=",
    price: "3.990 kr.",
    features: [
      "Mánaðarleg áskrift",
      "Æfingakerfi hannað til að halda þér “athletic” að eilífu!",
      "5 styrktaræfingar á viku",
      "Æfingaplanið er uppfært á 4 vikna fresti",
      "Þú færð æfingar og myndbönd beint í símann með smáforriti",
      "Samskipti við þjálfara í smáforriti",
    ],
    mostPopular: false,
  },
  {
    name: "ELITE athlete",
    id: "elite-athlete",
    key: "eyJhY2NvdW50Ijo2NywicGxhbiI6MzAwLCJicmFuZGluZyI6dHJ1ZX0=",
    price: "4.990 kr.",
    features: [
      "Mánaðarleg áskrift",
      "Æfingakerfi hannað til að gera þig ELITE í þinni íþrótt!",
      "5 styrktaræfingar á viku",
      "3 körfuboltaæfingar á viku",
      "Æfingaplanið er uppfært á 3 vikna fresti",
      "Þú færð æfingar og myndbönd beint í símann með smáforriti",
      "Samskipti við þjálfara í smáforriti",
    ],
    mostPopular: true,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
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
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "ring-2 ring-red-600"
                  : "ring-1 ring-gray-200",
                "rounded-3xl p-8 xl:p-10 first:order-last  md:first:order-first"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className="text-gray-900 text-2xl font-semibold leading-8"
                >
                  {tier.name}
                </h3>
              </div>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price}
                </span>
              </p>

              <Script src="https://askell.overcastcdn.com/js/dist/paymentbutton.js?v=2"></Script>
              <button
                type="button"
                data-key={tier.key}
                data-redirect-url="athlete.is"
                aria-describedby={tier.id}
                className="askell-payment-button button"
              >
                Skrá mig
              </button>

              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-red-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
