import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExcersiceCard from "./ExcersiceCard";

export default function Workout(props) {
  const { workout } = props;
  return (
    <SectionWrapper
      id={"formulated"}
      header={"WELCOME TO"}
      title={["THE", "DANGER", "ZONE"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <ExcersiceCard i={i} exercise={exercise} key={i} />;
        })}
      </div>
    </SectionWrapper>
  );
}
