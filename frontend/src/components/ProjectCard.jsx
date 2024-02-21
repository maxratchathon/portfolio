import React from "react";

const ProjectCard = (name, body) => {
  name = "";
  body = "";
  return (
    <>
      <div className="flex flex-center flex-col items-center w-[300px]">
        <img className="w-[300px] h-[200px] bg-slate-50" />
        <p className="m-3 text-white">{name ? name : "name"}</p>
        <p className="m-3 text-white">
          {body ? body : "lorem ipsum odor samor."}
        </p>
      </div>
    </>
  );
};

export default ProjectCard;
