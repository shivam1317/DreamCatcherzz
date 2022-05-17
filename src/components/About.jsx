import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Footer from "./Footer";
import "../css/about.css";
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <meta name="title" content="About Us" />
    <meta name="description" content="This is the about page of DreamCatcherzz design team" />
    <meta name="keywords" content="Shilpa Rawat, Kashyap Rawat, DreamCatcherzz" />
      <div className="h-fitcontent w-full flex-row my-5 " id="container">
        <div className=" flex-wrap w-full inline-flex align-center justify-evenly p-5 ">
          <p className=" inline-flex align-top my-5  h-fit lg:w-4/5 md:w-3/4 text-md">
            Dreamcatcherzz is Lead by two main Designers : Shilpa Shah Rawat and
            Kashyap Rawat. Most clients describe the work of Shilpa & Kashyap as
            ‘ Dream come true’ . That’s why the name Dreamcatcherzz.
            <br></br>
            <br></br>
            In short Span of 4 years, Dreamcatcherzz has Designed and executed
            many projects in different cities across India ( Mumbai, Jaipur,
            Bangalore, Vadodara, Jhalawar, Kota) projects are in the these
            categories : Apartment Design Projects , Bungalow design, Store &
            Restaurant Design, Quick Service Restaurant (QSR), Food truck
            design, Toy Library in a truck & commercial office spaces. clients
            Some of the unique work are done for clients like
          </p>

          {/* <span className="mx-10"> oleo olekaoisj uogyahysHAUasv hjgCVAchievemnts and magazine reviews</span> */}
          <ul className="list-disc">
            <li>Taj Mahal Palace hotel, Mumbai.</li>
            <li>Taj Falaknuma Palce hotel, Hyderabad.</li>
            <li>99pancakes.</li>
            <li>Kota Kachori (Kota, Jaipur ,bangalore)</li>
            <li>Munot Ornaments Annex</li>
          </ul>
        </div>

        <div className="w-full align-center inline-flex lg:my-10 md:my-0 flex-wrap-reverse justify-evenly p-5 bg-gray-100">
          <div className=" inline-flex align-between lg:my-20 my-5 h-fit lg:w-1/2 md:w-3/4">
            Shilpa has Studied interior design From M.S University, Vadodara.
            She has worked 5 years as senior Interior Designer & Décor Stylist
            in top architectural firm in Vadodara (Baroda) before starting
            Dreamcatcherzz with her husband Kashyap .She brings her expertise of
            looking at spaces as whole unit and giving Soul & life to them.
            Shilpa has an eye to beauty , elegance with simplicity and thus her
            décor styling for any space is fabulous . She has worked on various
            reputed projects starting from apartments, to bungalows, banquets,
            offices & commercial Spaces.
          </div>
          <div className="flex flex-col justify-evenly items-center">
            <img
              className="inline lg:mr-5 md:mr-0 w-64 h-64"
              src="./images/shilpaRound.png"
              alt="The team of Dreamcatcherzzz"
              description="Shilpa Rawat image"
            />

            <div className="mt-3 text-xl text-red-600 font-bold">
              SHILPA RAWAT
            </div>
            {/* <span className="mx-10"> oleo olekaoisj uogyahysHAUasv hjgCVAchievemnts and magazine reviews</span> */}
          </div>
        </div>

        <div className=" flex-wrap w-full inline-flex align-center lg:my-10 md:my-0 justify-evenly p-5 ">
          <div className="flex flex-col justify-evenly items-center bg-white">
            <img
              className=" inline rounded-xl h-64 w-64"
              src="./images/kashyapRound.png"
              alt="The team of Dreamcatcherzzz"
              description="Kashyap Rawat image"
            />
            <div className="mt-3 text-left text-xl text-red-600 font-bold">
              KASHYAP RAWAT
            </div>
          </div>

          <div className=" inline-flex align-between lg:my-20 my-5 h-fit  lg:w-1/2 md:w-3/4">
            Kashyap has done his Advance Product Design from Raffles Design
            International ( Singapore institute). Before Product design Kashyap
            had already gained knowledge in the stream of graphic design &
            interior design along with his graduation Degree in B.M.S
            (Marketing). He has great expertise in lighting, furniture & goes
            deeper in details of production , manufacturing , fabrication.
            Kashyap has won recognition in Kalaghoda Arts Festival for his
            delightful Lighting installations and has been recognised as ‘Top
            Innovative lighting designers of India’. The duo also won
            Recognition of Masters design 2020 for their great design &
            execution of the Food store & QSR done in Jaipur for the Brand Kota
            Kachori.
          </div>

          {/* <span className="mx-10"> oleo olekaoisj uogyahysHAUasv hjgCVAchievemnts and magazine reviews</span> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
