import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <hr className="mx-4 md:mx-24 lg:mx-8" />
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link to="/" aria-label="Go home" title="Medisen" className="inline-flex items-center">
              <svg
                className="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Medisen</span>
            </Link>
            <div className="mt-2 lg:max-w-sm">
              <p className="text-sm text-gray-800">Your AI Health Companion.</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <Link
                to="tel:+918501235021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +91 8501235021
              </Link>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <Link
                to="mailto:info@medisen.ai"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@medisen.ai
              </Link>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <Link
                to="https://maps.app.goo.gl/p29HTWugdqSEkDf48"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                19th KM Stone, NH-09, Ghaziabad, Uttar Pradesh 201009
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">© Copyright 2024 Medisen Inc. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
