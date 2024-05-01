"use client";

import Image from "next/image";
import { useEffect } from "react";

import ProfilePic from "@/public/images/binocular-michael-300.png";
import EyePic from "@/public/images/googly-eye-25.png";

export default function BigPhoto() {
  const calcAngle = (x, y, dx, dy) => {
    const dy2 = dy - y;
    const dx2 = dx - x;
    const theta = Math.atan2(dy2, dx2);
    return theta;
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const eye = document.getElementById("photo");
      const eyes = document.querySelectorAll(".eye");

      if (!eye) return;

      const rekt = eye.getBoundingClientRect();
      const centerX = rekt.left + rekt.width / 2;
      const centerY = rekt.top + rekt.height / 2 - 125;
      eyes.forEach((eye) => {
        const angle =
          calcAngle(e.clientX, e.clientY, centerX, centerY) * (180 / Math.PI);
        eye.style.transform = `rotate(${angle + 180}deg)`;
      });
    });

    return () => {
      document.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <div className="sm:m-8 mt-8 flex-shrink-0">
      <Image
        id="photo"
        className="shadow-2xl rounded-3xl"
        src={ProfilePic}
        alt="Photo of Michael"
      />
      <Image
        className="eye relative bottom-[280px] left-[125px]"
        src={EyePic}
        alt="googly eye"
      />
      <Image
        className="eye relative bottom-[305px] left-[170px]"
        src={EyePic}
        alt="googly eye"
      />
    </div>
  );
}
