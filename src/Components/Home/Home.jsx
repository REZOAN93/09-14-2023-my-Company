import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Employee from "../Employee/Employee";
import NewProject from "../NewProject";
import "./Home.css";
import Swal from "sweetalert2";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [selectNewTeam, setSelectNewTeam] = useState([]);
  const [cost, setTotal] = useState(0);
  const [remaing, setRemaining] = useState(0);
  console.log(selectNewTeam);
  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleSelect = (team) => {
    const isExist = selectNewTeam.find((na) => na.id == team.id);
    let cost = team.salary;

    if (isExist) {
      const info = Swal.fire("Already Selected for the Project");
      return info;
    } else {
      selectNewTeam.forEach((item) => {
        cost = cost + item.salary;
      });
    }
    const remainingAmount = 1000000 - cost;

    if (cost > 1000000) {
      const info = Swal.fire({
        title: "The Budget amount is finished",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return info;
    } else {
      setRemaining(remainingAmount);
      setTotal(cost);
      const remainingTeam = [...selectNewTeam, team];
      setSelectNewTeam(remainingTeam);
    }
  };
  return (
    <div className="">
      <div className="flex justify-between gap-5  ">
        <div className=" grid grid-cols-3 gap-3 py-5 w-9/12 ">
          {employees.map((na) => (
            <Employee
              key={na.id}
              member={na}
              handleSelect={handleSelect}
            ></Employee>
          ))}
        </div>
        <div className=" text-white py-5 px-5 w-3/12 space-y-4 border-s-4">
          <h1 className=" text-center font-extrabold text-3xl underline underline-offset-8">
            New Project
          </h1>
          <h1 className=" text-end  text-2xl">
            <p>
              Budget: $<span>1000000</span>
            </p>
            <p>
              Remaining: $<span>{remaing}</span>
            </p>
            <p>
              Total Cost: $<span>{cost}</span>
            </p>

            <div className="my-5">
              {selectNewTeam.map((na) => (
                <NewProject newTeam={na}></NewProject>
              ))}
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
