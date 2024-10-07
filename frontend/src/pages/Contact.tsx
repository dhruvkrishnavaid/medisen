import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <div className="pb-4 text-4xl font-bold w-full text-center">Contact Our Team</div>
          <p className="text-base text-gray-700 md:text-lg">
            Contact us for more web insights<br></br> and if any kind of suggestion regarding to our project, feel free
            to connect
          </p>
        </div>
        <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
          <div className="grid sm:grid-cols-3">
            <div className="relative w-full h-48 max-h-full rounded-lg shadow sm:h-auto">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="images/WhatsApp Image 2024-10-07 at 22.21.00_5d56a372.jpg"
                alt="Person"
              />
            </div>
            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">Dhruv Vaid krishna </p>
              <p className="mb-4 text-xs text-gray-800">TECH - LEAD</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800">
                Setup environment of our project with help of frameworks and also provide any type of technical support
              </p>
              <div className="flex items-center  space-x-3">
                <div className=" flex items-center space-x-4 relative top-5">
                  <Link
                    to="https://instagram.com/dhruvkvaid"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <big>
                      <i className="fa-brands fa-instagram" />
                    </big>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/dhruv-krishna-vaid-677920328"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <big>
                      <i className="fa-brands fa-linkedin" />
                    </big>
                  </Link>
                  <Link
                    to="https://github.com/dhruvkrishnavaid"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <big>
                      <i className="fa-brands fa-github" />
                    </big>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3">
            <div className="relative w-full h-48 max-h-full rounded-lg shadow sm:h-auto">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="images/Screenshot 2024-10-07 212420.png"
                alt="Person"
              />
            </div>
            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">Kartikey bhatnagar</p>
              <p className="mb-4 text-xs text-gray-800">ASSISTANT TECH - LEAD</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800">
                Contribute for technical part and user interface and frontend side
              </p>
              <div className="flex items-center space-x-3">
                <div className=" flex items-center space-x-4 relative top-5">
                  <Link
                    to="https://www.instagram.com/_kartikey2004/"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <big>
                      <i className="fa-brands fa-instagram" />
                    </big>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/kartikey-bhatnagar-0a5a4432a/"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <big>
                      <i className="fa-brands fa-linkedin" />
                    </big>
                  </Link>
                  <Link
                    to="https://github.com/kartikey2004-git"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <big>
                      <i className="fa-brands fa-github" />
                    </big>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3">
            <div className="relative w-full h-48 max-h-full rounded-lg shadow sm:h-auto">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="images/Screenshot 2024-10-07 221229.png"
                alt="Person"
              />
            </div>
            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">Diksha chauhan</p>
              <p className="mb-4 text-xs text-gray-800">ASSISTANT PRODUCT MANAGER</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800">
                Contribute in dataset and helps in building prototype
              </p>
              <div className="flex items-center space-x-3">
                <div className=" flex items-center space-x-4 relative top-5">
                  <Link
                    to="https://www.instagram.com/its.dika_chauhan/"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <big>
                      <i className="fa-brands fa-instagram" />
                    </big>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/diksha-chauhan-3b826a2aa"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <big>
                      <i className="fa-brands fa-linkedin" />
                    </big>
                  </Link>
                  <Link
                    to="https://github.com/dikshachauhan21"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <big>
                      <i className="fa-brands fa-github" />
                    </big>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3">
            <div className="relative w-full h-48 max-h-full rounded-lg shadow sm:h-auto">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="images/Screenshot 2024-10-07 211912.png"
                alt="Person"
              />
            </div>
            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">Nikhil singh</p>
              <p className="mb-4 text-xs text-gray-800">PRODUCT MANAGER</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800">
                Analyze the problem and suggest some projects ideas
                <br></br>and holds the part of presentation
              </p>
              <div className="flex items-center space-x-3">
                <div className=" flex items-center space-x-4 relative top-5">
                  <Link
                    to="https://www.instagram.com/nikhhil_singhh/"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <big>
                      <i className="fa-brands fa-instagram" />
                    </big>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/nikhil-singh-819532260/"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <big>
                      <i className="fa-brands fa-linkedin" />
                    </big>
                  </Link>
                  <Link
                    to="https://github.com/nikhil20-git"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <big>
                      <i className="fa-brands fa-github" />
                    </big>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pb-16">
        <Link
          to="https://github.com/dhruvkrishnavaid/Medisen"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="⭐ Star us on GitHub"
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          ⭐ Star Medisen on GitHub
          <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Contact;
