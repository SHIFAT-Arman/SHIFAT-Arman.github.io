import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white lg:px-24">
      <div className="pt-14 from-amber-100 bg-gradient-to-b overflow-hidden isolate relative rounded-3xl  ">
        <div
          className="ring-2 ring-indigo-50 shadow-amber-400 shadow-xl bg-orange-50 -skew-x-[30deg]  origin-top-right w-[200%] -mr-96 -z-10 right-2/4 top-0 bottom-0 absolute lg:-mr-96"
          aria-hidden="true"
        ></div>
        <div className="pt-32 pb-32 pl-6 pr-6 max-w-7xl ml-auto mr-auto lg:pl-8 lg:pr-8 ">
          <div className="max-w-2xl ml-auto mr-auto lg:grid lg:gap-x-8 lg:grid-rows-1 lg:grid-cols-1 lg:gap-y-6 lg:max-w-none lg:ml-0 lg:mr-0 ">
            <h1 className="text-gray-900 -tracking-wide font-bold text-4xl leading-10 max-w-2xl m-0 lg:col-auto lg:text-6xl lg:leading-[1] ">
              Hey there! myself <br /> Shifat Arman
            </h1>
            <div className="max-w-xl mt-6 lg:row-start-1 lg:col-end-1 lg:mt-0 ">
              <p className="text-gray-600 leading-8 text-lg m-0">
                currently doing my BSc in Computer Science and Engineering. I am
                a passionate programmer and a web developer. I love to learn new
                things and solve problems. I am a fast learner and a team
                player.
              </p>
              <div className="gap-x-6 items-center flex mt-10">
                <a
                  href="#"
                  className="shadow-sm text-white font-semibold text-sm py-[0.625rem] px-[0.875rem] bg-amber-500 rounded-md decoration-auto"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="text-gray-900 leading-6 font-semibold text-sm decoration-inherit"
                >
                  See projects <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <Image
              src="/flipped guy-02.svg"
              alt="mans image"
              className="object-cover rounded-2xl max-w-lg w-full aspect-[6/6] mt-10 h-auto block align-middle lg:mx-48 lg:row-end-2 lg:row-span-2 lg:max-w-none"
              height={800}
              width={600}
            />
          </div>
        </div>
        <div className="from-white bg-gradient-to-t h-24 -z-10 bottom-0 inset-x-0 absolute md:h-32"></div>
      </div>
    </div>
  );
}
