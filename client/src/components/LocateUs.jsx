import React from "react";

const LocateUs = () => {
  return (
    <div
      className="w-full h-full mx-auto bg-white text-gray-200"
    >
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117314.32495103647!2d77.36522069518789!3d23.2404430571185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4140713f2571%3A0x7486cb8cb975f5f5!2sMa%20Annapurna%20tiffin%20and%20mess!5e0!3m2!1sen!2sin!4v1715614966683!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[500px] w-full"
        />
      </div>
    </div>
  );
};

export default LocateUs;
