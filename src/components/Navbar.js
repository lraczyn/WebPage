import React from 'react';
import ScrollTo from 'react-scroll-into-view';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        id="my_nav"
        className="top-0 fixed px-2 bg-black h-16 opacity-80  justify-between inset-x-0  py-4 lg:flex"
      >
        <div className="flex  text-white lg:text-4xl justify-between ">
          <ScrollTo selector="#hero_">
            <span className="">
              <div className="flex  ">
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M10.865 17.097c-2.289.805-5.172-.535-5.755-2.756-2.878-.005-5.086-1.408-5.11-3.886-.038-4.031 4.516-9.448 12-9.455 7.485-.007 11.996 5.312 12 10.329.004 5.017-4.182 6.897-7.607 6.263-.364 1.507-.171 3.578.232 4.747l-2.109.661c-.813-2.788-2.2-4.967-3.651-5.903zm-.692-9.276c-.691-.314-1.173-1.012-1.173-1.821 0-1.104.896-2 2-2s2 .896 2 2c0 .26-.05.509-.14.738 1.214.911 2.405 1.855 3.599 2.794.425-.333.96-.532 1.541-.532 1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5c-1.171 0-2.155-.807-2.426-1.895-1.201.098-2.404.173-3.606.254-.169.933-.987 1.641-1.968 1.641-1.104 0-2-.896-2-2 0-1.033.785-1.884 1.79-1.989.121-.731.252-1.46.383-2.19zm2.06-.246c-.297.232-.661.383-1.058.417l-.363 2.18c.504.224.898.651 1.08 1.177l3.647-.289c.047-.267.137-.519.262-.749l-3.568-2.736z" />
                </svg>
                <div className="hidden lg:block lg:text-4xl font-bold leading-relaxed  px-2 whitespace-no-wrap  ">
                  Raczynski
                </div>
              </div>
            </span>
          </ScrollTo>

          <div>
            <button className="lg:hidden">
              <i
                className="fas fa-bars text-2xl text-white "
                onClick={() => {
                  setNavbarOpen(!navbarOpen);
                }}
              ></i>
            </button>
          </div>
        </div>
        <div className="">
          <div
            className={
              'lg:flex flex-grow items-center bg-black lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
            }
            id="rollingMenu"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <ul
                  className={
                    'text-white   px-2 py-2 lg:text-xl flex items-center text-semibold font-bold'
                  }
                >
                  <ScrollTo selector="#hero_">
                    <li>
                      <button
                        // href="#"
                        className="inline-block hover:text-yellow-500 mx-4 "
                      >
                        HOME
                      </button>
                    </li>
                  </ScrollTo>
                  <ScrollTo selector="#about_">
                    <li>
                      <button
                        // href="#"
                        className="inline-block hover:text-yellow-500 mx-4 "
                      >
                        ABOUT
                      </button>
                    </li>
                  </ScrollTo>
                  <ScrollTo selector="#skills_">
                    <button className="inline-block hover:text-yellow-500 mx-4">
                      SKILLS
                    </button>
                  </ScrollTo>
                  <ScrollTo selector="#projects_">
                    <button className="inline-block hover:text-yellow-500 mx-4">
                      PROJECTS
                    </button>
                  </ScrollTo>
                  <ScrollTo selector="#resume_">
                    <button className="inline-bloc border- hover:text-yellow-500 mx-4">
                      <a href="https://drive.google.com/file/d/1KHIN5cQA1omrjFyaQPCmfnsExohnEccU/view?usp=sharing">
                        <i className="fas fa-file pr-2"></i>
                        RESUME
                      </a>
                    </button>
                  </ScrollTo>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
