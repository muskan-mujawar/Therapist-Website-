"use client";
import { useEffect } from "react";
import Focus from "@/app/focus";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-element");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  function handleClick() {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScr_Ji2Ox2Q-CwXaDEdPcwDj0yuiWs-yLU3ZjFVamDigd6WoQ/viewform?embedded=true"
    );
  }
  return (
    <div className="fade-element">
      <div>
        <div
          id="first"
          className=" h-[100vh] flex flex-col items-center justify-center"
        >
          <div className="bg-[url('/ocean.jpg')] bg-cover bg-center h-[40em] w-[60em]">
            <div className="flex flex-col items-center justify-center h-[40em]">
              {" "}
              <h1 className="text-4xl">Psychological Care for</h1>
              <h1 className="text-4xl mb-[1em]">
                {" "}
                Change, Insight, and Well-Being
              </h1>
              <h3 className="mb-[5em]">
                Offering individual psychotherapy for adults via telehealth in
                Michigan and most U.S. states through PSYPACT participation
              </h3>
              <div className="border border-design bg-blue-200 p-[1em] hover:bg-blue-100">
                <button onClick={handleClick} className="">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div
          className="p-[5em] fade-element"
          style={{ backgroundColor: "white" }}
        >
          <h1 className="pb-[4em] text-center  md:text-left  text-2xl text-[#7F7F6B]">
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
            <p className="text-center text-[#8E7E7F]">
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
          <div className="pb-[1em] text-3xl text-[#575653]">
            <h1>Therapy can be a space where you invest in yourself—</h1>{" "}
            <h1>one of the highest forms of self-care.</h1>
          </div>

          <p className="mb-[5em] text-[#4C555B]">
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
      <div style={{ background: "#94B0B0" }} className="h-[20em]">
        <div className="flex flex-col justify-center text-center h-[20em]">
          <h1 className="text-2xl pb-2 ">Rates</h1>
          <div>
            {" "}
            <p>1. $200 / individual session </p>
            <p>2. $240 / couples session</p>
          </div>
        </div>
      </div>
      <div className="section flex flex-col justify-center text-center h-[10em] text-[#404060]">
        <h1>Unable to accept new clients at this time.</h1>
      </div>
      <div className="h-[20em] bg-[url('/sand.jpg')] bg-cover bg-center flex flex-col text-center justify-center">
        <div>
          <h1 className="text-[#2A1801]">
            “I have come to believe that caring for myself is not
            self-indulgent.
          </h1>
          <h1 className="text-[#2A1801]">
            {" "}
            Caring for myself is an act of survival.”
          </h1>
          <p className="text-[#5D463E]">—Audre Lorde</p>
        </div>
      </div>
      <div className=" section flex flex-col text-center justify-center h-[20em]">
        <h1 className="text-2xl m-2 pb-2 text-[#404060]">
          {" "}
          Dr. Serena Blake, PsyD (Clinical Psychologist)
        </h1>
        <a
          href="mailto: serena@blakepsychology.com "
          className="underline text-[#394752]"
        >
          {" "}
          serena@blakepsychology.com
        </a>
        <p className="text-[#394752]">Phone: (323) 555-0192</p>
        <p className="text-[#394752]">
          1287 Maplewood Drive, Los Angeles, CA 90026
        </p>
        <a href="#first" className="underline text-[#394752]">
          Home
        </a>
      </div>
      <footer className="text-center">
        © 2025 Dr. Serena Blake, PsyD. Psychological Services, PLLC. All rights
        reserved.
      </footer>
    </div>
  );
}
