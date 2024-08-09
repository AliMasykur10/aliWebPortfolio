function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center ">
        <div className="max-w-xl bg-green_first rounded-full p-1 fixed top-10 z-10">
          <ul className="text-main_color flex justify-around">
            <li className="text-center">
              <a href="#freelance" className="hover:bg-green_second transition delay-75 px-6 py-1 rounded-full">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:bg-green_second transition delay-75 px-6 py-1 rounded-full">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:bg-green_second transition delay-75 px-6 py-1 rounded-full">
                Experience
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:bg-green_second transition delay-75 px-6 py-1 rounded-full">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:bg-green_second transition delay-75 px-6 py-1 rounded-full">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
