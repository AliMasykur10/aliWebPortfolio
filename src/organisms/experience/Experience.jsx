import arrow_rigt_top from "../../assets/Arrow_Up_Right.png";

function Experience() {
  return (
    <>
      <div className="experience w-full h-dvh flex items-center" id="experience">
        <div className="expereince_container grid grid-cols-2 h-min">
          <div className="text_work">
            <h1 className="bg-gradient-to-r from-biru_tosca to-green_first bg-clip-text text-transparent inline-block font-bold text-8xl">Work Experience</h1>
          </div>

          <div className="work_experience">
            <div className="work_item flex gap-4 ">
              <div>
                <div className="item_list w-4 h-4 rounded-full bg-gradient-to-r from-biru_tosca to-green_first mt-1" />
              </div>
              <div className="experience_item flex flex-col gap-4">
                <h3 className="text-lg">
                  Freelance <span className="text-biru_tosca">Web Developer</span>
                  <img src={arrow_rigt_top} className="inline" alt="arrow top right" />
                </h3>
                <p className="text-wrap">As a web developer, I have created a personal portfolio, a movie website, and an e-commerce website</p>

                <p className="text-biru_tosca text-sm">Nov 2022 - Present</p>
              </div>
            </div>

            <div className="work_item flex gap-4 mt-6">
              <div>
                <div className="item_list w-4 h-4 rounded-full bg-gradient-to-r from-biru_tosca to-green_first mt-1" />
              </div>
              <div className="experience_item flex flex-col gap-4">
                <h3 className="text-lg">
                  Video Editor at <span className="text-biru_tosca">Ntv kita</span>
                  <img src={arrow_rigt_top} className="inline" alt="arrow top right" />
                </h3>
                <p className="text-wrap">I was a video editor for a local company on YouTube, handling tasks such as editing news videos, podcasts, baby video and photo competitions, and advertising videos.</p>

                <p className="text-biru_tosca text-sm">Nov 2020 - Mar 2021</p>
              </div>
            </div>

            <div className="work_item flex gap-4 mt-6">
              <div>
                <div className="item_list w-4 h-4 rounded-full bg-gradient-to-r from-biru_tosca to-green_first mt-1" />
              </div>
              <div className="experience_item flex flex-col gap-4">
                <h3 className="text-lg">
                  Graphic Designer at <span className="text-biru_tosca">Anaphalis Studio</span>
                  <img src={arrow_rigt_top} className="inline" alt="arrow top right" />
                </h3>
                <p className="text-wrap">I was a freelance graphic layout designer using Canva, creating 5-10 designs per day and making video content for various social media platforms.</p>

                <p className="text-biru_tosca text-sm">Nov 2020 - Mar 2021</p>
              </div>
            </div>

            {/* <div className="pseudo_line bg-white w-1 h-full absolute"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
