import React from "react";

const Edu = () => {
  const educationHistory = [
    {
      id: 1,
      level: "SD",
      school: "MI Tanwiriyah I",
      yearIn: "2009",
      yearOut: "2016",
    },
    {
      id: 2,
      level: "SMP",
      school: "SMPN 3 Limbangan",
      yearIn: "2016",
      yearOut: "2018",
    },
    {
      id: 3,
      level: "SMP",
      school: "SMP Tri Bhakti",
      yearIn: "2018",
      yearOut: "2019",
    },
    {
      id: 4,
      level: "SMK",
      school: "SMKN 6 Garut",
      yearIn: "2019",
      yearOut: "2022",
    },
    {
      id: 5,
      level: "S1",
      school: "Universitas Ma'soem",
      yearIn: "2022",
      yearOut: "Now",
    },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-xs">
            <th>No</th>
            <th>Tingkat</th>
            <th>Nama Sekolah</th>
            <th>Tahun Masuk</th>
            <th>Tahun Keluar</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {educationHistory.map((edu) => (
            <tr key={edu.id}>
              <th>{edu.id}</th>
              <td>{edu.level}</td>
              <td>{edu.school}</td>
              <td>{edu.yearIn}</td>
              <td>{edu.yearOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Edu;
