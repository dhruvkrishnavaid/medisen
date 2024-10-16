const LearnMore = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-16">Learn More</h1>
      <div className="grid grid-cols-1 gap-8 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-lg shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img src="images/topic1.jpg" alt="" className="object-cover w-full lg:absolute h-80 lg:h-full" />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">Understanding Chronic Diseases</h5>
            <p className="mb-5 text-gray-800">
              <span className="font-bold">Explore</span> the causes, symptoms, and management of chronic diseases for a
              healthier life.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn More
                <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-lg shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img src="images/topic2.png" alt="" className="object-cover w-full lg:absolute h-80 lg:h-full" />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">Wellness and Nutrition</h5>
            <p className="mb-5 text-gray-800">
              <span className="font-bold">Discover</span> the importance of nutrition and wellness practices for overall
              wellbeing.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn More
                <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-lg shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img src="images/topic3.jpg" alt="" className="object-cover w-full lg:absolute h-80 lg:h-full" />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">Mental Health Awareness</h5>
            <p className="mb-5 text-gray-800">
              <span className="font-bold">Learn</span> about mental health conditions, coping strategies, and the
              importance of seeking help.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn More
                <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMore;
