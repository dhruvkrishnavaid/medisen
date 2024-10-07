const Services = () => {
  return (
    <div className="bg-gray-100">
      <div className="pb-4 pt-16 text-4xl font-bold w-full text-center">Our services</div>
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg viewBox="0 0 88 88" className="w-full max-w-screen-xl text-indigo-100">
            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
            <circle fillOpacity="0.2" fill="currentColor" cx="44" cy="44" r="44" />
            <circle fillOpacity="0.2" fill="currentColor" cx="44" cy="44" r="37.5" />
            <circle fillOpacity="0.3" fill="currentColor" cx="44" cy="44" r="29.5" />
            <circle fillOpacity="0.3" fill="currentColor" cx="44" cy="44" r="22.5" />
          </svg>
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded-lg shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
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
              <p className="mb-2 font-bold">Primary Healthcare Services</p>
              <p className="text-sm leading-5 text-gray-900">
                Our team helps you with regular health checkups and treatments for you and your family. We.re here to
                keep you happy, healthy and safe.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded-lg shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
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
              <p className="mb-2 font-bold">Learning About Health</p>
              <p className="text-sm leading-5 text-gray-900">
                Come, join our classes to learn the art of staying and living a healthy life. We talk about eating well,
                staying calm, and how to deal with being sick.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded-lg shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
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
              <p className="mb-2 font-bold">Special Treatments</p>
              <p className="text-sm leading-5 text-gray-900">
                Advanced treaments and procedures delivered by experienced specialists.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded-lg shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
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
              <p className="mb-2 font-bold">Predicting Health Issues</p>
              <p className="text-sm leading-5 text-gray-900">
                We use AI to guess if you might get sick in the near future. Then, we give you tips to stay healthy and
                avoid getting sick.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded-lg shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
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
              <p className="mb-2 font-bold">Finding Out What's Wrong</p>
              <p className="text-sm leading-5 text-gray-900">
                Our hogh-tech machines help find out what's wrong with your health, quickly and accurately. That way, we
                can start fixing the problem sooner.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded-lg shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
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
              <p className="mb-2 font-bold">Health Camps</p>
              <p className="text-sm leading-5 text-gray-900">
                We organise health camps near your home, where you can get free checkups, medicines, and advice from
                doctors. We care about your health, and we want to make it easy for you to stay healthy.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded-lg shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
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
              <p className="mb-2 font-bold">Female Health Awareness Drives</p>
              <p className="text-sm leading-5 text-gray-900">
                We hold special programmes just for ladies to learn about their helath. We talk about important topics
                like pregnancy, childbirth, staying safe, and taking care oftheir bodies. These programmes are fun and
                informative, and they help women feel confident and healthy.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded-lg shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
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
              <p className="mb-2 font-bold">Personalised Health Plans</p>
              <p className="text-sm leading-5 text-gray-900">
                Our team creates personalised health plans just for you. We look at your lifestyle, health goals, and
                any health problems that you may have, and we come up with a plan to help you feel your best.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
