import React from "react";
import Image from "next/image";

function Focus() {
  return (
    <div className="section ">
      {" "}
      <div className="">
        <hr className="border m-[2em] " />
        <h1 className="text-center text-3xl pb-[70px] mt-[4em] text-[#41413F]">
          Area of Focus
        </h1>
      </div>
      <div className="flex flex-col  md:flex-row">
        <div className="p-2">
          <div className="flex justify-center items-center ">
            <Image
              src="/anxiety.jpg"
              alt="fbvb"
              width={250}
              height={400}
              className="mt-2 rounded-full w-[300px] h-[300px]"
            />
          </div>
          <h3 className="text-center pb-4 mb-4 pt-4 mt-4 text-[#414054]">
            {" "}
            Anxiety & Stress Management
          </h3>

          <p className="text-center m-[2em] text-[#AEB3A1]">
            Anxiety and chronic stress can affect every aspect of your life —
            from work and relationships to your sense of inner peace. Together,
            we’ll identify the sources of your anxiety, understand how it
            impacts your thoughts and body, and develop practical tools for
            managing overwhelming feelings. Using proven techniques like
            mindfulness, CBT, and relaxation strategies, therapy helps you
            regain control and build resilience.
          </p>
        </div>
        <div className="p-2">
          <div className="flex justify-center items-center ">
            {" "}
            <Image
              src="/relationship.jpg"
              alt="fbvb"
              width={300}
              height={100}
              className=" rounded-full w-[300px] h-[300px] justify-center"
            />
          </div>{" "}
          <h3 className="text-center  pb-4 mb-4 pt-4 mt-4 text-[#414054]">
            {" "}
            Relationship Counseling
          </h3>
          <p className="text-center m-[2em] text-[#AEB3A1]">
            Strong, healthy relationships are built on communication, trust, and
            understanding. Whether you’re navigating challenges in a romantic
            partnership, family, or friendship, therapy provides a safe space to
            explore patterns, resolve conflict, and deepen emotional connection.
            Together, we work on practical strategies to foster respect,
            empathy, and lasting bonds.
          </p>
        </div>
        <div className="p-2">
          <div className="flex justify-center items-center ">
            <Image
              src="/focus2.jpg"
              alt="fbvb"
              width={300}
              height={300}
              className="rounded-full w-[300px] h-[300px]
               ms-4"
            />
          </div>{" "}
          <h3 className="text-center  pb-4 mb-4 pt-4 mt-4 text-[#414054]">
            {" "}
            Trauma Recovery
          </h3>
          <p className="text-center m-[2em] text-[#AEB3A1]">
            Trauma can leave lasting emotional scars that affect your sense of
            safety, identity, and connection to others. In therapy, you’ll find
            compassionate support to gently process painful memories, reduce
            distressing symptoms, and reclaim a sense of empowerment. We’ll work
            at your pace using evidence-based approaches that honor your
            experience and support your healing journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Focus;
