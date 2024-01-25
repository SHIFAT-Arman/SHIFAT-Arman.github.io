export default function Navbar() {
  return (
    <div>
      <nav className="flex-col flex justify-center items-center bg-white p-4">
        <li className="list-none">
          <ul role="list" className="mt-2 -mx-2 list-none list-inside flex">
            <li>
              <a
                href="#"
                className="text-gray-700 leading-6 font-semibold text-sm p-2 rounded-md gap-x-3 flex decoration-inherit hover:text-amber-400"
              >
                <span className="text-gray-400 font-medium text-[0.625rem] bg-white border-gray-200 border rounded-lg justify-center items-center shrink-0 w-6 h-6 flex">
                  H
                </span>
                <span className="text-ellipsis overflow-hidden whitespace-nowrap">
                  Home
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-700 leading-6 font-semibold text-sm p-2 rounded-md gap-x-3 flex decoration-inherit hover:text-amber-400 "
              >
                <span className="text-gray-400 font-medium text-[0.625rem] bg-white border-gray-200 border rounded-lg justify-center items-center shrink-0 w-6 h-6 flex">
                  P
                </span>
                <span className="text-ellipsis overflow-hidden whitespace-nowrap">
                  Project
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-700 leading-6 font-semibold text-sm p-2 rounded-md gap-x-3 flex decoration-inherit hover:text-amber-400"
              >
                <span className="text-gray-400 font-medium text-[0.625rem] bg-white border-gray-200 border rounded-lg justify-center items-center shrink-0 w-6 h-6 flex">
                  S
                </span>
                <span className="text-ellipsis overflow-hidden whitespace-nowrap">
                  Socials
                </span>
              </a>
            </li>
          </ul>
        </li>
      </nav>
    </div>
  );
}
