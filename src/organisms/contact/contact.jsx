function Contact() {
  return (
    <>
      <div className="contact w-full h-dvh flex flex-col justify-center items-center gap-6" id="contact">
        <h1 className="text-6xl">Lets Design Together</h1>
        <p className="text-lg">I'd love to hear from you! Whether you have a project in mind or just want to say hello, feel free to reach out.</p>
        <div className="contact-bar grid grid-cols-4 gap-2 w-3/4 mt-24">
          <div className="input col-span-3">
            <input type="text" placeholder="Enter Your Email" className="p-4 rounded-md w-full text-black" />
          </div>
          <div className="button ">
            <input type="submit" value="Contact Me" className="w-full h-full text-center bg-gradient-to-r from-biru_tosca to-green_first rounded-md text-black text-lg font-bold" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
