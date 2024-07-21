import vector1 from "../assets/Vector_1.png";
import arrow_right from "../assets/arrow_right.png";
import arrow_rigt_top from "../assets/Arrow_Up_Right.png";

function Home() {
  return (
    <>
      <div className="w-full h-dvh">
        <div className="vector1 absolute right-48 top-20">
          <img src={vector1} alt="vector 1" />
        </div>
        <div className="container_home w-full h-dvh flex flex-col justify-center ">
          <div className="hello_ali_masykur text-7xl ">
            <h2>
              Hello, I’m
              <br />
              Ali Masykur
            </h2>
            <h2></h2>
          </div>
          <div className="freelance text-9xl text-right ">
            <h2 className="bg-gradient-to-r from-biru_tosca to-green_first bg-clip-text text-transparent inline-block font-bold">
              Freelance
              <br />
              Web Developer
            </h2>
          </div>
          <div className="hire grid grid-cols-2 py-24">
            <div className="hire_button">
              <button className="border py-2 px-4 rounded-full flex">
                <p className="ml-2">Hire me</p>
                <img src={arrow_right} alt="arrow right" />
              </button>
            </div>
            <div className="hire_text flex">
              <div className="hire_image mx-2">
                <img src={arrow_rigt_top} alt="" />
              </div>
              <p>Whether you need a new website, a redesign, or ongoing maintenance, I'm here to help bring your vision to life.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
