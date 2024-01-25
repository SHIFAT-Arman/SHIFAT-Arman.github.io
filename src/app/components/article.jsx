import Image from "next/image";

export default function Article() {
  return (
    <div>
      {/*This is article section */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-20 max-w-2xl mx-auto lg:grid-cols-3 lg:max-w-none lg:mx-0">
        <article className="justify-between items-start flex-col flex">
          <div className="w-full relative">
            <Image
              src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3603&amp;q=80"
              alt="thumbnail"
              width={3603}
              height={2402}
              className="lg:aspect-[3/2] md:aspect-[2/1] object-cover bg-gray-100 rounded-2xl w-full aspect-video max-w-full h-auto block align-middle"
            />
            <div className="ring-gray-900 ring-opacity-[0.1] ring-inset ring-1 rounded-2xl absolute inset-0"></div>
          </div>
          <div className="max-w-xl">
            <div className="text-xs flex gap-x-4 items-center mt-8 ">
              <time dateTime="2023-11" className="text-gray-500">
                November, 2023
              </time>
              <a
                href="#"
                className="text-gray-600 font-medium py-[0.375rem] px-3 bg-gray-50 rounded-full z-10 relative decoration-inherit"
              >
                Java
              </a>
            </div>
            <div className="relative">
              <h3 className="text-gray-900 leading-6 font-semibold text-lg mt-3 m-0 ">
                <a href="#">
                  <span className="inset-0 absolute"></span>Welfare Management
                  System
                </a>
              </h3>
              <p className="text-gray-600 leading-6 text-sm line-clamp-3 mt-5 m-0">
                This is a application for managing welfare of a company. This
                application is developed using Java and MySQL.
              </p>
            </div>

            {/* <div className="flex items-center gap-x-4 mt-8 relative">
              <Image
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt="dp"
                width={256}
                height={256}
                className="bg-gray-100 rounded-full w-10 h-10 max-w-full block align-middle"
              />
              <div className="leading-6 text-sm">
                <p className="text-gray-900 font-semibold m-0">
                  <a href="#">
                    <span className="inset-0 absolute"></span>Michael Foster
                  </a>
                </p>
                <p className="text-gray-600 m-0">Co-Founder / CTO</p>
              </div>
            </div> */}
          </div>
        </article>

        <article className="justify-between items-start flex-col flex">
          <div className="w-full relative">
            <Image
              src="/cplus_icon.png"
              alt="thumbnail"
              width={3603}
              height={2402}
              className="lg:aspect-[3/2] md:aspect-[2/1] object-cover bg-gray-100 rounded-2xl w-full aspect-video max-w-full h-auto block align-middle"
            />
            <div className="ring-gray-900 ring-opacity-[0.1] ring-inset ring-1 rounded-2xl absolute inset-0"></div>
          </div>
          <div className="max-w-xl">
            <div className="text-xs flex gap-x-4 items-center mt-8 ">
              <time dateTime="2020-03-16" className="text-gray-500">
                ---------
              </time>
              <a
                href="#"
                className="text-gray-600 font-medium py-[0.375rem] px-3 bg-gray-50 rounded-full z-10 relative decoration-inherit"
              >
                C++
              </a>
            </div>
            <div className="relative">
              <h3 className="text-gray-900 leading-6 font-semibold text-lg mt-3 m-0 ">
                <a href="#">
                  <span className="inset-0 absolute"></span>Project-02
                </a>
              </h3>
              <p className="text-gray-600 leading-6 text-sm line-clamp-3 mt-5 m-0">
                working on it...
              </p>
            </div>
            {/* <div className="flex items-center gap-x-4 mt-8 relative">
              <Image
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt="dp"
                width={256}
                height={256}
                className="bg-gray-100 rounded-full w-10 h-10 max-w-full block align-middle"
              />
              <div className="leading-6 text-sm">
                <p className="text-gray-900 font-semibold m-0">
                  <a href="#">
                    <span className="inset-0 absolute"></span>Lindsay Walton
                  </a>
                </p>
                <p className="text-gray-600 m-0">Front-end Developer</p>
              </div>
            </div> */}
          </div>
        </article>

        <article className="justify-between items-start flex-col flex">
          <div className="w-full relative">
            <Image
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80"
              alt="thumbnail"
              width={3603}
              height={2402}
              className="lg:aspect-[3/2] md:aspect-[2/1] object-cover bg-gray-100 rounded-2xl w-full aspect-video max-w-full h-auto block align-middle"
            />
            <div className="ring-gray-900 ring-opacity-[0.1] ring-inset ring-1 rounded-2xl absolute inset-0"></div>
          </div>
          <div className="max-w-xl">
            <div className="text-xs flex gap-x-4 items-center mt-8 ">
              <time dateTime="2020-03-16" className="text-gray-500">
                --------
              </time>
              <a
                href="#"
                className="text-gray-600 font-medium py-[0.375rem] px-3 bg-gray-50 rounded-full z-10 relative decoration-inherit"
              >
                Python
              </a>
            </div>
            <div className="relative">
              <h3 className="text-gray-900 leading-6 font-semibold text-lg mt-3 m-0 ">
                <a href="#">
                  <span className="inset-0 absolute"></span>Project-03
                </a>
              </h3>
              <p className="text-gray-600 leading-6 text-sm line-clamp-3 mt-5 m-0">
                working on it...
              </p>
            </div>
            {/* <div className="flex items-center gap-x-4 mt-8 relative">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt="dp"
                width={256}
                height={256}
                className="bg-gray-100 rounded-full w-10 h-10 max-w-full block align-middle"
              />
              <div className="leading-6 text-sm">
                <p className="text-gray-900 font-semibold m-0">
                  <a href="#">
                    <span className="inset-0 absolute"></span>Michael Foster
                  </a>
                </p>
                <p className="text-gray-600 m-0">Backend Developer</p>
              </div>
            </div> */}
          </div>
        </article>
      </div>
      <nav
        aria-label="Pagination"
        className="py-3 px-4 bg-white justify-between items-center flex sm:px-6"
      >
        <div className="flex flex-1 justify-between sm:flex-1 sm:justify-end">
          <a
            href="#"
            className="ring-inset ring-1 ring-gray-300 text-slate-900 font-semibold text-sm py-2 px-2 bg-white rounded-md items-center inline-flex relative text-inherit"
          >
            Previous
          </a>
          <a
            href="#"
            className="ring-inset ring-1 ring-gray-300 text-slate-900 font-semibold text-sm py-2 px-3 bg-white rounded-md items-center inline-flex 
            ml-3 relative text-inherit"
          >
            Next
          </a>
        </div>
      </nav>
    </div>
  );
}
