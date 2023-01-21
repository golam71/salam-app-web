import { createSignal, Show } from "solid-js";

export const NavBar = (props) => {
  const [show, setShow] = createSignal(false);
  return (
    <nav class="bg-smoke-400">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <a href="/">{props.salam_app_logo}</a>
            </div>
          </div>
          <div class=" flex items-center sm:hidden">
            <button
              type="button"
              class="inline-flex items-center px-6 py-2 border border-transparent shadow-sm text-base font-bold rounded-md text-black bg-aquamarine hover:bg-aquamarine-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aquamarine-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setShow(!show())}
            >
              {show() ? <>{props.navbar_open}</> : <>{props.navbar_close}</>}
            </button>
          </div>
          <div class="flex-1 items-center justify-center sm:items-stretch sm:justify-start hidden sm:block ">
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4 justify-end items-center">
                <a
                  href="https://salam-app.canny.io/"
                  target="_blank" 
                  class="text-swans-50 hover:bg-gray-700 hover:text-swans-500 px-3 py-2 rounded-md text-sm font-bold"
                >
                  FEATURE REQUEST
                </a>
                <a
                  href="/gallery"
                  class="text-swans-50 hover:bg-gray-700 hover:text-swans-500 px-3 py-2 rounded-md text-sm font-bold"
                >
                  GALLERY
                </a>
                <a
                  href="/team"
                  class="text-swans-50 hover:bg-gray-700 hover:text-swans-500 px-3 py-2 rounded-md text-sm font-bold"
                >
                  TEAM
                </a>
                <a
                  href="/careers"
                  class="text-swans-50 hover:bg-gray-700 hover:text-swans-500 px-3 py-2 rounded-md text-sm font-bold"
                >
                  CAREER
                </a>
                <a class="px-3" href="#download"  >{props.get_app_btn}</a> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <Show when={show() === true}>
        <div class="sm:hidden z-20 relative" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1 absolute w-full bg-smoke-400">
            <a
              href="https://salam-app.canny.io/"
              class="text-gray-300  hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Feature Request
            </a>

            <a
              href="/gallery"
              class="text-gray-300  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Gallery
            </a>

            <a
              href="/team"
              class="text-gray-300  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </a>

            <a
              href="/career"
              class="text-gray-300  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Career 
            </a>
            <a
              href="#download"
              class="text-gray-300  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Download 
            </a>
          </div>
        </div>
      </Show>
    </nav>
  );
};
