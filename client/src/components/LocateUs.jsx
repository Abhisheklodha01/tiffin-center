import React from "react";

const LocateUs = () => {
  return (
    <div className="flex md:flex-row flex-col pt-28 pb-10">
      <div className="md:w-1/2 mr-5 md:mr-0 text-gray-200 ml-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117314.32495103647!2d77.36522069518789!3d23.2404430571185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4140713f2571%3A0x7486cb8cb975f5f5!2sMa%20Annapurna%20tiffin%20and%20mess!5e0!3m2!1sen!2sin!4v1715614966683!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[500px] w-full"
        />
      </div>

      <div class="  relative flex flex-col ml-5 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl md:w-1/2 mt-10 md:mt-0">
        <div >
          <h5 class="ml-5 md:text-3xl block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            ADDRESS
          </h5>
          <p class="ml-5 block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          <span className=" font-semibold md:text-2xl">Ma Annapurna tiffin and mess</span> <br />
          <span className=" md:text-2xl">435 A Madhvi apartment F-1, near madarasa, Kalpana Nagar, Bhopal, Madhya Pradesh 462002</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocateUs;
