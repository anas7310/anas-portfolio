import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/*LEFT*/}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project_1.jpeg" alt="" />
            </div>
            <div className="text-content">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent:'space-between',
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <h2>Chat and Calling Application</h2>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl font-bold text-sm sm:text-base md:text-lg border border-green-500 bg-green-100 text-green-500 shrink-0">
                  <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 inline-block"></span>
                  Completed
                </span>
              </div>
              <p className="text-white-50 md:text-xl">
                A secure chat and calling application enabling real-time text,
                voice, and video communication using Socket.IO and WebRTC. The
                platform supports peer-to-peer and group calling (up to 8 users)
                with end-to-end encryption and MongoDB-backed scalability.
              </p>
            </div>
          </div>
          {/*RIGHT*/}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project_2.jpeg" alt="Translation Model" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <h2>Multilingual to Arabic Translation System</h2>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl font-bold text-sm sm:text-base md:text-lg border border-orange-500 bg-orange-100 text-orange-500 shrink-0">
                  {/* Circle/Dot */}
                  <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-orange-500 inline-block"></span>
                  In-Progress
                </span>
              </div>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/project_33.jpeg"
                  alt="Uber Backend Microservice"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  marginBottom: "8px",
                }}
              >
                <h2 style={{ margin: 0 }}>Book-a-Ride Backend Microservice</h2>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl font-bold text-sm sm:text-base md:text-lg border border-green-500 bg-green-100 text-green-500 shrink-0">
                  {/* Circle/Dot */}
                  <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 inline-block"></span>
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
