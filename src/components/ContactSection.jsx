import React from "react";
import Image from "next/image";
import Link from "next/link";
const ContactSection = () => {
  const whatsApp_url = "https://api.whatsapp.com/send?phone=9977149888";

  return (
    <>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Contact Us
              </span>
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Reach out to us on whatsapp or visit the office to get further
              details on all the services we provide.
            </p>
            <span className="">
              <Link href={whatsApp_url}>
                <span className="flex gap-5">
                  <button>
                    <Image src="/images/whatsapp.png" width={50} height={50} />
                  </button>
                  <p className="text-4xl text-green-400">AEGIS I-NET</p>
                </span>
              </Link>
            </span>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative  ">
              <Image
                src="/images/contact2.png"
                width={350}
                height={350}
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="mt-[10rem] w-full overflow-hidden px-4 flex flex-col gap-2 md:grid md:grid-cols-2  text-white">
        <h1 className="mt-5 text-4xl md:text-5xl lg:text-7xl">Address</h1>
        <p className="mt-5 text-lg md:text-2xl lg:text-4xl">
          1149, Dr Ravi Agrawal lane, Home Science College Rd, near Ayush
          Gallery, Napier Town, Jabalpur, Madhya Pradesh 482002
        </p>
      </div>
      <div>
        <div className="w-full mt-[5rem]">
          <Image
            src="/images/googlemap.png"
            width={1100}
            height={200}
            className="rounded-3xl"
          />
        </div>
      </div>
    </>
  );
};

export default ContactSection;
