"use client";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/hook/useTheme";

type TimeLineElementPropsType = (typeof experiencesData)[number];

export const TimeLineElement = (props: TimeLineElementPropsType) => {
  const { ref, inView } = useInView();
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div ref={ref} className="vertical-timeline-element absolute">
      <VerticalTimelineElement
        contentStyle={{
          backgroundColor: isLight ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: isLight
            ? "0.4rem solid #9ca3af"
            : "0.4rem solid rgba(255, 255, 255, 0.5)",
        }}
        date={props.date}
        icon={props.icon}
        iconStyle={{
          background: isLight ? "white" : "rgba(255, 255, 255, 0.15)",
          fontSize: "1.5rem",
        }}
        visible={inView}
      >
        <h3 className="font-semibold capitalize">{props.title}</h3>
        <p className="!mt-0">{props.location}</p>
        <p className="!mt-1 text-gray-700 dark:text-white/70">
          {props.description}
        </p>

        <ul className="flex flex-wrap py-6 gap-2 sm:mt-auto">
          {props.teckStack.map((stack) => (
            <li key={`${stack},${props.date}`} className="tag">
              {stack}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </div>
  );
};
