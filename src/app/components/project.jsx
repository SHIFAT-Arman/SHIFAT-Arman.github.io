import Article from "./article";

export default function Project() {
  return (
    <div className="pt-24 pb-24 bg-white md:pt-8 md:pb-32">
      <div className="px-6 max-w-7xl mx-auto lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-gray-900 tracking-tight font-bold text-3xl m-0 md:text-4xl">
            Project Showcase
          </h2>
          <p className="text-gray-600 leading-8 text-lg mt-2">
            Projects I have worked on with my team or solo.
          </p>
        </div>
        <Article />
      </div>
    </div>
  );
}
