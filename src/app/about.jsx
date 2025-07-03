import React from "react";

import Image from "next/image";

function About() {
  return (
    <div>
      {" "}
      <div>
        {" "}
        <div className="p-[5em]" style={{ backgroundColor: "white" }}>
          <h1 className="pb-[4em] text-center  md:text-left  text-2xl">
            About Dr. Serena Blake
          </h1>
          <div className="  flex flex-col md:flex-row items-center">
            {" "}
            <Image
              src="/profile.jpg"
              width={300}
              height={300}
              alt="Portrait of Dr. Serena Blake"
              className="pe-4 pb-[4em]"
            />
            <p className="text-center">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based
              in Los Angeles, CA, with eight years of experience and over 500
              client sessions. She blends evidence-based approaches—like
              cognitive-behavioral therapy and mindfulness—with compassionate,
              personalized care to help you overcome anxiety, strengthen
              relationships, and heal from trauma. Whether you meet in her
              Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
              committed to creating a safe, supportive space for you to thrive.
            </p>
          </div>
        </div>
        <div className="p-4" style={{ backgroundColor: "white" }}>
          <hr className="border m-[2em]" />
        </div>
      </div>
      <div>
        {" "}
        <div className="text-center m-[2em] ">
          <div className="pb-[1em] text-3xl ">
            <h1>Therapy can be a space where you invest in yourself—</h1>{" "}
            <h1>one of the highest forms of self-care.</h1>
          </div>

          <p className="mb-[5em]">
            You may be led to therapy by anxiety, depression, relationship
            stress, past or recent trauma, grief and loss, self-esteem issues,
            or challenges with family, parenting, or parental relationships.
            Whatever the source of your stress, you don't have to face it alone.
            Therapy offers you the time and space to work toward wellness and
            peace.
          </p>
        </div>
      </div>
      <Focus />
      <div style={{ background: "#91C8E4" }} className="h-[20em]">
        <div className="flex flex-col justify-center text-center h-[20em]">
          <h1 className="text-2xl pb-2 ">Rates</h1>
          <div>
            {" "}
            <p>1. $200 / individual session </p>
            <p>2. $240 / couples session</p>
          </div>
        </div>
      </div>
      <div className="section flex flex-col justify-center text-center h-[10em]">
        <h1>Unable to accept new clients at this time.</h1>
      </div>
      <div className="h-[20em] bg-[url('/sand.jpg')] bg-cover bg-center flex flex-col text-center justify-center">
        <div>
          <h1>
            “I have come to believe that caring for myself is not
            self-indulgent. Caring for myself is an act of survival.”
          </h1>
          <p>—Audre Lorde</p>
        </div>
      </div>
      <div className=" section flex flex-col text-center justify-center h-[20em]">
        <h1> Dr. Serena Blake, PsyD (Clinical Psychologist)</h1>
        <a href="mailto: serena@blakepsychology.com" className="underline">
          {" "}
          serena@blakepsychology.com
        </a>
        <p>Phone: (323) 555-0192</p>
        <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
        <p>
          <a href="/page.jsx">Home</a>
        </p>
      </div>
      <footer className="text-center">
        © 2025 Dr. Serena Blake, PsyD. Psychological Services, PLLC. All rights
        reserved.
      </footer>
      s
    </div>
  );
}

export default About;
