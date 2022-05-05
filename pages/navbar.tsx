import DarkModeButton from "./darkmode"

const Navbar = () => {
  const navbarButton = "cursor-pointer rounded-md m-2 px-2 py-1 text-xl font-bold hover:bg-black hover:text-white dark:hover:bg-white hover:dark:text-black";

  return (
    <div>
      <nav className="fixed z-10 w-full border-b border-purple-600 bg-white dark:bg-darkmode">
        <div className="w-full">
          <div className="flex h-16 w-full items-center">
            <div className="items mx-4 md:mx-10 flex w-full items-center justify-between">
              <div className="flex flex-shrink-0 items-center justify-center">
                <h1 className="cursor-pointer text-2xl font-bold drop-shadow-3xl dark:text-white">
                  Kazyel
                </h1>
              </div>
              <div className=" ml-10 flex items-center space-x-4">
                <div className="hidden md:block">
                  <a className={navbarButton}>
                    lol
                  </a>
                  <a className={navbarButton}>
                    foda-se?
                  </a>
                </div>
                  <DarkModeButton></DarkModeButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
