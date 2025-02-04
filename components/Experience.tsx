"use client";
import { useCustomInView } from "@/hook/useCustomInView";
import { experiencesData } from "@/lib/data";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TimeLineElement } from "./TimeLineElement";

const Experience = () => {
  const { ref } = useCustomInView("Experience", 0.3);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28">
      <div className="overflow-hidden">
        <h2>Experience</h2>
        <VerticalTimeline lineColor="">
          {experiencesData.map((experience) => (
            <TimeLineElement key={experience.date} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
