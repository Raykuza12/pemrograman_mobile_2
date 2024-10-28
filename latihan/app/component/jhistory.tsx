import React from "react";

const Jhistory = () => {
  const jobHistory = [
    {
      workplace: "Company A",
      position: "Web Developer",
      years: "2018-2020",
      description: "Developed and maintained websites for various clients.",
    },
    {
      workplace: "Company B",
      position: "UI/UX Designer",
      years: "2020-2022",
      description: "Designed user interfaces and improved user experiences.",
    },
    {
      workplace: "Company C",
      position: "Project Manager",
      years: "2022-Present",
      description: "Managed multiple projects and led development teams.",
    },
    {
      workplace: "Company D",
      position: "Full Stack Developer",
      years: "2022-Present",
      description:
        "Developed and maintained full-stack applications for various clients.",
    },
  ];

  return (
    <div
      className="flex flex-col gap-2 pt-4"
      style={{ width: "95%", margin: "0 auto" }}
    >
      {jobHistory.map((job, index) => (
        <div key={index} className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            {job.workplace}
          </div>
          <div className="collapse-content">
            <h2>Position: {job.position}</h2>
            <hr className="border-foreground border-2" />
            <h3>Years of work: {job.years}</h3>
            <hr className="border-foreground border-2" />
            <h3>Description</h3>
            <p>{job.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jhistory;
