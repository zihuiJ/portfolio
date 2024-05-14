import React from "react";

const About = () => {
  return (
    <div className="flex flex-row paragraph items-center justify-between md:mx-20 lg:mx-40 mx-20 h-dvh min-w-[600px]">
      <div>
        <h2 className="text-[30px]">About</h2>
        <p className="w-[500px] paragraph indent-14">
          Growing up as a digital native, I've always been interested in digital
          experiences and how to make things user-friendly. Despite my
          background in Statistics, my interest in web design led me to explore
          more about coding and design, while being in Statistics taught me
          analytical thinking and attention to detail. It's allowed me to
          approach frontend development in a unique way, and I'm excited about
          continuing to learn and grow in this area.
        </p>
      </div>
      <div className="rounded-full overflow-hidden border-2 w-[200px] h-[200px] mr-12 shrink-0">
        <img
          src="assets/picture2.jpg"
          alt="a picture of me"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col">
        <div>
          <h2 className="subheading">Education</h2>
          <p>University of Waterloo</p>
          <p>Bachelor of Mathematics, Statistics</p>
        </div>
        <div>
          <h2 className="subheading">Work Experience</h2>
          <p>Matrix Leap Software Developer</p>
          <p>
            I design and build interfaces for AI driven enterprise tools using
            Next.js and TailwindCSS.
          </p>
        </div>
        <div>
          <h2 className="subheading">Technologies I use</h2>
          <p>
            HTML/CSS, JavaScript, NodeJS, React, Next, TailwindCSS, BootStrap,
            MongoDB, NoSQL, GraphQL, Figma
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
