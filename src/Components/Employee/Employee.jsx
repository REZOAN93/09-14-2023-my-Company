import React from "react";

const Employee = ({ member,handleSelect }) => {
  const { name, description, salary, position } = member;
  return (
    <div>
      <div className="card glass text-white">
        <h1 className=" text-2xl text-center mt-2">{name}</h1>
        <div className="flex justify-center my-2">
          <figure className="w-48 h-48 rounded-full">
            <img
              className="w-48 h-48 rounded-full"
              src={member?.picture}
              alt="car!"
            />
          </figure>
        </div>
        <div className="card-body h-52 p-2 pb-5">
          <p className=" text-justify border-b-2">{description}</p>
          <div className="flex justify-between border-b-2 pb-2 font-bold text-green-100">
            <div>
              <p>Salary: ${salary}</p>
            </div>
            <div>
              <p>{position}</p>
            </div>
          </div>
          <button onClick={()=>handleSelect(member)} className="btn btn-sm glass text-white font-bold hover:bg-lime-600">
            Select for the New Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
