import myProfile from "../../assets/myprofile.jpg";

function About() {
  return (
    <>
      <div className="about w-full h-dvh flex items-center" id="about">
        <div className="grid grid-cols-2 h-min">
          <div className="about_me flex flex-col gap-6 pr-14">
            <h1 className="bg-gradient-to-r from-biru_tosca to-green_first bg-clip-text text-transparent inline-block font-bold text-8xl">About Me</h1>
            <p className="text-xl w-2/3">
              Hi! I'm Ali Masykur, a freelance web developer based in Probolinggo. I have over 5 years of experience in web development, working with a variety of clients from startups to established businesses.
            </p>
            <p className="text-xl w-2/3">My expertise includes front-end and back-end development, ensuring a seamless and efficient user experience.</p>
            <div className="profile">
              <img src={myProfile} alt="" className="object-cover w-32 h-32 rounded-full" />
            </div>
          </div>
          <div className="skills flex flex-col gap-6">
            <h1 className="bg-gradient-to-r from-biru_tosca to-green_first bg-clip-text text-transparent inline-block font-bold text-8xl">Skills</h1>
            <div className="skills_item flex gap-3 text-lg flex-wrap gap-y-6">
              <div className="html bg-biru_tosca text-main_color px-8 rounded-full">
                <p>HTML</p>
              </div>
              <div className="css bg-biru_tosca text-main_color px-8 rounded-full">
                <p>CSS</p>
              </div>
              <div className="javascript bg-biru_tosca text-main_color px-8 rounded-full">
                <p>Javascript</p>
              </div>
              <div className="php bg-biru_tosca text-main_color px-8 rounded-full">
                <p>php</p>
              </div>
              <div className="react bg-biru_tosca text-main_color px-8 rounded-full">
                <p>react</p>
              </div>
              <div className="laravel bg-biru_tosca text-main_color px-8 rounded-full">
                <p>laravel</p>
              </div>
              <div className="bootstrap bg-biru_tosca text-main_color px-8 rounded-full">
                <p>bootstrap</p>
              </div>
              <div className="tailwind bg-biru_tosca text-main_color px-8 rounded-full">
                <p>tailwind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
