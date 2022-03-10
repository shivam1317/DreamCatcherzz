import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Footer from "./Footer";
function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="h-fitcontent w-full flex-row my-5 " id="container">
        <div className=" flex-wrap w-full inline-flex align-center justify-evenly p-5 ">
          <img
            className=" inline shadow-2xl rounded-xl"
            src="./images/logofinal.png"
            alt="The team of Dreamcatcherzzz"
            data-aos="flip-left"
            data-aos-duration="4000"
          />
          <div className=" inline-flex align-top my-10  h-fit lg:w-1/2 md:w-3/4 text-sm">
            Dreamcatcherzz formerly known as KSR Design Studio is lead by
            Product Designer : Kashyap S Rawat &amp; Interior Designer : Shilpa
            Rawat. Kashyap Rawat started his career in 2010 with his first
            project of doing a chandelier for Taj mahal palace Hotel , Mumbai,
            followed by the project of designing Signs for Taj Falaknuma Palace.
            His work and story have been covered in magazines/ newspapers like
            Home Review (July 2014), Creative gaga, ET wealth and TOI . Kashyap
            also got recognized by Home &amp; Design Trends (July 2017 issue)
            amongst the selected and most Innovative Lighting designers of
            India. He has worked on Projects for Brands like Taj Palace hotels,
            JWT, Palladium,India International Jewellery Show, Melissa shoes
            Launch and had done many installations at Kalaghoda Arts Festival
            since 2009. Kashyap also transformed his hobby &amp; addiction of
            accessory into a business with a practical use for it, Check
            @vaultrail for that ( VAULT TRAIL) . Kashyap is also a fitness
            enthusiast pursuing crossfit, yoga, dace fitness. In 2017, to expand
            its portfolio to Interior Design , KSR Design Studio was renamed to
            Dreamcatcherzz .
          </div>

          {/* <span className="mx-10"> oleo olekaoisj uogyahysHAUasv hjgCVAchievemnts and magazine reviews</span> */}
        </div>

        <div className="w-full align-center inline-flex lg:my-10 md:my-0 flex-wrap-reverse justify-evenly p-5 bg-gray-100">
          <div className=" inline-flex align-between my-20 h-fit lg:w-1/2 md:w-3/4">
            Dreamcatcherzz is Lead by two main Designers : Shilpa Shah Rawat (
            Interior Designer) and Kashyap Rawat( Product Designer) . Shilpa has
            Studied interior design From M.S University, Vadodara. She has
            worked 5 years as senior Interior Designer &amp; Décor Stylist in
            top architectural firm in Vadodara (Baroda) before starting
            Dreamcatcherzz with her husband Kashyap .She brings her expertise of
            looking at spaces as whole unit and giving Soul &amp; life to them.
            Shilpa has an eye to beauty , elegance with simplicity and thus her
            décor styling for any space is fabulous . She has worked on various
            reputed projects starting from apartments, to bungalows, banquets,
            offices &amp; commercial Spaces.
          </div>
          <div className="flex flex-col justify-evenly items-center">
            <img
              className=" rounded-xl inline shadow-2xl lg:mr-5 md:mr-0 h-96 w-64"
              src="./images/Shilpamaam.jpeg"
              alt="The team of Dreamcatcherzzz"
              data-aos="fade-left"
              data-aos-duration="4000"
            />

            <div className="mt-3 text-xl text-red-600 font-bold">
              SHILPA RAWAT
            </div>
            {/* <span className="mx-10"> oleo olekaoisj uogyahysHAUasv hjgCVAchievemnts and magazine reviews</span> */}
          </div>
        </div>

        <div className=" flex-wrap w-full inline-flex align-center lg:my-10 md:my-0 justify-evenly p-5 ">
          <div className="flex flex-col justify-evenly items-center">
            <img
              className=" inline shadow-2xl rounded-xl h-96 w-64"
              src="./images/kashyapsir.jpeg"
              alt="The team of Dreamcatcherzzz"
              data-aos="fade-right"
              data-aos-duration="4000"
            />
            <div className="text-left text-xl text-red-600 font-bold">
              KASHYAP RAWAT
            </div>
          </div>

          <div className=" inline-flex align-between my-20  h-fit  lg:w-1/2 md:w-3/4">
            Kashyap has done his Advance Product Design from Raffles Design
            International ( Singapore institute). Before Product design Kashyap
            had already gained knowledge in the stream of graphic design &amp;
            interior design along with his graduation Degree in B.M.S
            (Marketing). He has great expertise in lighting, furniture &amp;
            goes deeper in details of production , manufacturing , fabrication.
            Kashyap has won recognition in Kalaghoda Arts Festival for his
            delightful Lighting installations. Infact his career started with
            making custom Chandelier and décor items only for Taj Mahal Palace,
            MUMBAI. He then also did all signages design &amp; execution of Taj
            Falaknuma Palace, Hyderabad. He also did Décor Lighting for
            Palladium Mall Mumbai. He has been covered by many reputed magazines
            for his innovative design work and has been recognised as ‘Top few
            innovative lighting designers of India’.
          </div>

          {/* <span className="mx-10"> oleo olekaoisj uogyahysHAUasv hjgCVAchievemnts and magazine reviews</span> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
