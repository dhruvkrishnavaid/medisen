import { Link } from "react-router-dom";

const Doctors = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)" width="52" height="24" />
            </svg>
            <span className="relative">Meet Our Doctors</span>
          </span>{" "}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          <b>Introducing a well qualified and specialized team of doctors</b>
        </p>
      </div>
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <button
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded-lg shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img src="images/doctor-1.jpg" className="object-cover w-full h-48" alt="" />
            <div className="flex-grow border border-t-0 rounded-b-lg">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">Dr Pranit Goel</h6>
                <p className="text-sm font-sans text-gray-900">
                  <b>Cardiologist</b>
                  <br></br>
                  <br></br>
                  Dr. Pranit Goel stands as a beacon of excellence in the field of cardiovascular medicine, boasting
                  over 7 years of unwavering commitment to cardiac health. Renowned for his specialized expertise, Dr.
                  Khan is dedicated to the diagnosis, management, and treatment of cardiovascular diseases with
                  precision and compassion. His profound understanding of cardiac conditions, coupled with a
                  patient-centric
                </p>
              </div>
            </div>
          </div>
        </button>
        <button
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded-lg shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img src="images/doctor-2.jpg" className="object-cover w-full h-48" alt="" />
            <div className="flex-grow border border-t-0 rounded-b-lg">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">Dr Neha Jaiswal</h6>
                <p className="text-sm font-sans text-gray-900">
                  {" "}
                  <b>Paediatrician</b>
                  <br></br>
                  <br></br>Dr. Neha Jaiswal stands as a beacon of compassion and expertise in pediatric and adolescent
                  medicine, committed to delivering exceptional care to the youngest members of our community. With a
                  heartfelt dedication to the well-being of children and adolescents, Dr. Jaiswal combines her extensive
                  medical knowledge with a nurturing approach, ensuring that each young patient receives the highest
                  standard of care.
                </p>
              </div>
            </div>
          </div>
        </button>
        <button
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded-lg shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img src="images/doctor-3.jpg" className="object-cover w-full h-48" alt="" />
            <div className="flex-grow border border-t-0 rounded-b-lg">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">Dr Kartikey bhatnagar</h6>
                <p className="text-sm text-gray-900 font-sans">
                  <b>Sexologist</b>
                  <br></br>
                  <br></br>
                  Dr. Kartikey is a renowned sexologist with over a decade of experience in the field of sexual health
                  and education. Based in a bustling urban center, he has dedicated his career to promoting
                  understanding and awareness of sexual wellness, addressing issues that often remain shrouded in
                  stigma. His approach combines traditional medical practices with modern therapeutic techniques,
                  allowing him to provide comprehensive care to his patients
                </p>
              </div>
            </div>
          </div>
        </button>
        <button
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded-lg shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img src="images/doctor-4.jpg" className="object-cover w-full h-48" alt="" />
            <div className="flex-grow border border-t-0 rounded-b-lg">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">Dr Dhruv krishna vaid</h6>
                <p className="text-sm text-gray-900 font-sans">
                  <b>General physicist</b>
                  <br></br>
                  <br></br>
                  With a wealth of experience spanning over 25 years, Dr.krishna Dhruv vaid stands as a pillar of
                  expertise and compassion in the field of general medicine. As a seasoned general physician, Dr. Go as
                  dedicated her career to providing comprehensive healthcare to patients of all ages, offering a wide
                  range of medical services and diagnostic expertise. Her deep-rooted commitment to patient well-being,
                  coupled with her extensive experience, instilis confidence and trust among her patients and peers
                  alike. Dr. Goel's compassionate approach and meticulous attention to detail ensure that each patient
                  receives personalized care tailored to their unique needs.
                </p>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="text-center">
        <Link
          to="/appointment"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-lg shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Book an appointment
        </Link>
      </div>
    </div>
  );
};

export default Doctors;
