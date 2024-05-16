import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:mx-20 lg:mx-40 mx-20 my-20 h-dvh min-w-[600px] paragraph gap-y-8 relative z-30"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-y-8">
        <div className="flex flex-row items-center justify-between">
          <div className="max-w-[500px] min-w-[300px] flex flex-col gap-y-2">
            <h2 className="text-[30px]">About</h2>
            <p className="paragraph indent-14">
              Growing up as a digital native, I've always been interested in
              digital experiences and how to make things user-friendly. Despite
              my background in Statistics, my interest in web design led me to
              explore more about coding and design, while being in Statistics
              taught me analytical thinking and attention to detail. It's
              allowed me to approach frontend development in a unique way, and
              I'm excited about continuing to learn and grow in this area.
            </p>
          </div>
          <div className="rounded-full overflow-hidden border-2 w-[200px] h-[200px] mr-12 shrink-0">
            <img
              src="assets/picture2.jpg"
              alt="a picture of me"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col min-w-[300px] gap-y-8">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-[24px]">Education</h2>
            <p className="subheading">University of Waterloo</p>
            <p>Bachelor of Mathematics, Statistics</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-[24px]">Work Experience</h2>
            <div>
              <p className="subheading">Matrix Leap Software Developer</p>
              <p>
                I designed and built interfaces for AI driven enterprise tools
                using Next.js and TailwindCSS.
              </p>
            </div>
            <div>
              <p className="subheading">Tailless Studio Front-End Engineer</p>
              <p>
                I translated designs into interactive mobile and web experiences
                using Flutter and Next.js.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-[24px]">Technologies I use</h2>
        <p>
          HTML/CSS, JavaScript, NodeJS, React, Next, Flutter, TailwindCSS, BootStrap, three.js
          MongoDB, NoSQL, GraphQL, Figma
        </p>
      </div>
    </div>
  );
};

export default About;
