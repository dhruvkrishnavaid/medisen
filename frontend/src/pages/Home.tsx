import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="px-4 py-16 h-screen mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                The quick, brown fox
                <br className="hidden md:block" />
                jumps over{" "}
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative inline-block text-deep-purple-accent-400">a lazy dog</span>
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae. explicabo.
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr className="h-1 bg-deep-purple-100 mx-8 rounded-2xl" />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h5 className="mb-8 text-4xl font-extrabold leading-none md:pl-2">
          The quick, brown fox
          <br className="hidden md:block" />
          jumps over <span className="inline-block text-deep-purple-accent-400">a lazy dog</span>
        </h5>
        <div className="grid gap-3 row-gap-3 lg:grid-cols-3">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Sed ut perspiciatis unde omnis iste
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              I'll be sure to note that in my log
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Well, that's certainly good to know
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Leverage agile frameworks to provide
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Dingy I'm tellin' you rhubaahb Bangah
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              That is the true genius of America
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              We meet at one of those defining
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              We did not go by choice, we went
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Those options are already baked in
            </li>
          </ul>
        </div>
      </div>
      <hr className="h-1 bg-deep-purple-100 mx-8 rounded-2xl" />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <svg className="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="font-semibold leading-5">The quick, brown fox</h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam.
              </p>
              <Link
                to="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <svg className="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="font-semibold leading-5">Smooth as an android</h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam.
              </p>
              <Link
                to="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <svg className="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="font-semibold leading-5">This is about justice</h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam.
              </p>
              <Link
                to="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
