function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-96 max-w-xl bg-green_first rounded-full p-1 fixed top-10">
          <ul className="text-main_color flex justify-around">
            <li className="hover:bg-green_second transition delay-75 px-6 py-1 rounded-full">
              <a href="#">Home</a>
            </li>
            <li className="hover:bg-green_second transition delay-75 px-6 py-1 rounded-full">
              <a href="#">Portfolio</a>
            </li>
            <li className="hover:bg-green_second transition delay-75 px-6 py-1 rounded-full">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
