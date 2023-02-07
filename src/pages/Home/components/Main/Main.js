import "./Main.css";

const Main = () => {
  return (
    <>
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Accounting
            <span className="relative whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path
                  d={`M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 
              12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 
              27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 
              7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 
              4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 
              4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 
              7.584 19.787 1.924 20.814 1.98 24.557 
              1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 
              2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z`}
                ></path>
              </svg>
              <span className="relative ">
                {" "}
                made simple <br />
              </span>
            </span>
            for small businesses.
          </h1>
          <p className="mx-auto mt-10 max-w-2xl text-lg tracking-tight text-slate-700">
            Most bookkeeping software is accurate, but hard to use. We make the
            opposite trade-off, and hope you don’t get audited.
          </p>
        </div>
        <div className="mt-1 flex justify-center gap-x-6">
          <a
            className={`group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold 
          focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 
          text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900`}
            href="/userregister"
          >
            Get 6 months free
          </a>
          <a
            className={`group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none 
          ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 
          focus-visible:outline-blue-600 focus-visible:ring-slate-300`}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            <svg
              aria-hidden="true"
              className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
            >
              <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"></path>
            </svg>
            <span className="ml-3">Watch video</span>
          </a>
        </div>

        <div className="mt-36 lg:mt-44">
          <p className="font-display text-center text-slate-900">
            Trusted by these six companies so far
          </p>
          {
            // eslint-disable-next-line
          }<ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            <li>
              {
                // eslint-disable-next-line
              }<ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                <li className="flex">
                  <img
                    alt="Transistor"
                    src="https://salient.tailwindui.com/_next/static/media/transistor.7274e6c3.svg"
                    width="158"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    loading="lazy"
                    style={{ color: `transparent` }}
                  />
                </li>
                <li className="flex">
                  <img
                    alt="Tuple"
                    src="https://salient.tailwindui.com/_next/static/media/tuple.74eb0ae0.svg"
                    width="105"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    loading="lazy"
                    style={{ color: `transparent` }}
                  />
                </li>
                <li className="flex">
                  <img
                    alt="StaticKit"
                    src="https://salient.tailwindui.com/_next/static/media/statickit.d7937794.svg"
                    width="127"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    loading="lazy"
                    style={{ color: `transparent` }}
                  />
                </li>
              </ul>
            </li>
            <li>
              {
                // eslint-disable-next-line
              }<ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                <li className="flex">
                  <img
                    alt="Mirage"
                    src="https://salient.tailwindui.com/_next/static/media/mirage.18d2ec4e.svg"
                    width="138"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    loading="lazy"
                    style={{ color: `transparent` }}
                  />
                </li>
                <li className="flex">
                  <img
                    alt="Laravel"
                    src="https://salient.tailwindui.com/_next/static/media/mirage.18d2ec4e.svg"
                    width="136"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    loading="lazy"
                    style={{ color: `transparent` }}
                  />
                </li>
                <li className="flex">
                  <img
                    alt="Statamic"
                    src="https://salient.tailwindui.com/_next/static/media/statamic.6da5ebfb.svg"
                    width="147"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    loading="lazy"
                    style={{ color: `transparent` }}
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <section
          id="features"
          aria-label="Features for running your books"
          className="relative mt-12 overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
        >
          <img
            alt="background-features"
            src="https://salient.tailwindui.com/_next/static/media/background-features.5f7a9ac9.jpg"
            width="2245"
            height="1636"
            decoding="async"
            data-nimg="1"
            className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
            loading="lazy"
            style={{ color: "transparent" }}
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
                Everything you need to run your books.
              </h2>
              <p className="mt-6 text-lg tracking-tight text-blue-100">
                Well everything you need if you aren’t that picky about minor
                details like tax compliance.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <div
                  className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <div
                    className={`group relative rounded-full py-1 px-4 lg:rounded-r-none 
                lg:rounded-l-xl lg:p-6 bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10`}
                  >
                    <h3>
                      <button
                        className={`font-display text-lg [&:not(:focus-visible)]:focus:outline-none text-blue-500 hover:text-blue lg:text-white`}
                        id="headlessui-tabs-tab-:R2ba9m:"
                        role="tab"
                        type="button"
                        aria-selected="true"
                        tabIndex="0"
                        data-headlessui-state="selected"
                        aria-controls="headlessui-tabs-panel-:Rda9m:"
                      >
                        <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"></span>
                        Payroll
                      </button>
                    </h3>
                    <p className="mt-2 hidden text-sm lg:block text-white">
                      Keep track of everyone's salaries and whether or not
                      they've been paid. Direct deposit not supported.
                    </p>
                  </div>
                  <div className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
                    <h3>
                      <button
                        className={`font-display text-lg [&:not(:focus-visible)]:focus:outline-none text-blue-100 hover:text-white lg:text-white`}
                        id="headlessui-tabs-tab-:R2ja9m:"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        tabIndex="-1"
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:Rla9m:"
                      >
                        <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"></span>
                        Claim expenses
                      </button>
                    </h3>
                    <p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">
                      All of your receipts organized into one place, as long as
                      you don't mind typing in the data by hand.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div
                    id="headlessui-tabs-panel-:Rda9m:"
                    role="tabpanel"
                    tabIndex="0"
                    data-headlessui-state="selected"
                    aria-labelledby="headlessui-tabs-tab-:R2ba9m:"
                  ></div>
                </div>
              </div>
              <div className="relative sm:px-6 lg:hidden">
                <div
                  className={`absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] 
                    bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl`}
                ></div>
                <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                  Keep track of everyone's salaries and whether or not they've
                  been paid. Direct deposit not supported.
                </p>
              </div>
              <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                <img
                  alt=""
                  sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                  srcSet={`https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&w=640&q=75 640w, 
                      https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&w=750&q=75 750w, 
                      https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&w=828&q=75 828w, 
                      https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&w=1080&q=75 1080w, 
                      https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&w=1200&q=75 1200w, 
                      https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&w=&q=75 3840w" 
                      src=https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&w=1200&q=75`}
                  width="2174"
                  height="1464"
                  decoding="async"
                  data-nimg="1"
                  className="w-full"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="faq"
          aria-labelledby="faq-title"
          className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
        >
          <img
            alt="background-faqs"
            src="https://salient.tailwindui.com/_next/static/media/background-faqs.55d2e36a.jpg"
            width="1558"
            height="946"
            decoding="async"
            data-nimg="1"
            className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
            loading="lazy"
            style={{ color: "transparent" }}
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2
                id="faq-title"
                className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
              >
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                If you can’t find what you’re looking for, email our support
                team and if you’re lucky someone will get back to you.
              </p>
            </div>{
                // eslint-disable-next-line
              }<ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
            >
              <li>{
                // eslint-disable-next-line
              }<ul role="list" className="flex flex-col gap-y-8">
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      Does TaxPal handle VAT?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      Well no, but if you move your company offshore you can
                      probably ignore it.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      Can I pay for my subscription via purchase order?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      Absolutely, we are happy to take your money in all forms.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      How do I apply for a job at TaxPal?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      We only hire our customers, so subscribe for a minimum of
                      6 months and then let’s talk.
                    </p>
                  </li>
                </ul>
              </li>
              <li>{
                // eslint-disable-next-line
              }<ul role="list" className="flex flex-col gap-y-8">
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      What was that testimonial about tax fraud all about?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      TaxPal is just a software application, ultimately your
                      books are your responsibility.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      TaxPal sounds horrible but why do I still feel compelled
                      to purchase?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      This is the power of excellent visual design. You just
                      can’t resist it, no matter how poorly it actually
                      functions.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      I found other companies called TaxPal, are you sure you
                      can use this name?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      Honestly not sure at all. We haven’t actually incorporated
                      or anything, we just thought it sounded cool and made this
                      website.
                    </p>
                  </li>
                </ul>
              </li>
              <li>{
                // eslint-disable-next-line
              }<ul role="list" className="flex flex-col gap-y-8">
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      How do you generate reports?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      You just tell us what data you need a report for, and we
                      get our kids to create beautiful charts for you using only
                      the finest crayons.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      Can we expect more inventory features?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      In life it’s really better to never expect anything at
                      all.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      I lost my password, how do I get into my account?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      Send us an email and we will send you a copy of our latest
                      password spreadsheet so you can find your information.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section
          id="get-started-today"
          className="relative overflow-hidden bg-blue-600 py-32"
        >
          <img
            alt="background-call-to-action"
            src="https://salient.tailwindui.com/_next/static/media/background-call-to-action.6a5a5672.jpg"
            width="2347"
            height="1244"
            decoding="async"
            data-nimg="1"
            className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
            loading="lazy"
            style={{ color: "transparent" }}
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Get started today
              </h2>
              <p className="mt-4 text-lg tracking-tight text-white">
                It’s time to take control of your books. Buy our software so you
                can feel like you’re doing something productive.
              </p>
              <a
                className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
                href="/userregister"
              >
                Get 6 months free
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <img
              src="logo512.png"
              height="40px"
              className="mx-auto h-10 w-auto"
              alt="logo"
            />
            <nav className="mt-10 text-sm" aria-label="quick links">
              <div className="-my-1 flex justify-center gap-x-6">
                <a
                  className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="/#features"
                >
                  Features
                </a>
                <a
                  className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="/#faq"
                >
                  Frequently asked questions
                </a>
                <a
                  className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="/#get-started-today"
                >
                  Start today
                </a>
              </div>
            </nav>
          </div>
          <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
            <div className="flex gap-x-6">
              <a
                className="group"
                aria-label="TaxPal on Twitter"
                href="https://twitter.com"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                >
                  <path
                    d={`M8.29 20.251c7.547 0 11.675-6.253 
                    11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 
                    1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 
                    5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 
                    3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84`}
                  ></path>
                </svg>
              </a>
              <a
                className="group"
                aria-label="TaxPal on GitHub"
                href="https://github.com"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                >
                  <path
                    d={`M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 
                  9.504.5.092.682-.217.682-.483 
                  0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 
                  1.531 1.032.892 1.53 2.341 1.088 
                  2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 
                  .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 
                  1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 
                  12.017C22 6.484 17.522 2 12 2Z`}
                  ></path>
                </svg>
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500 sm:mt-0">
              Copyright © 2023 TaxPal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
