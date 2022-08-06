import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contacts = ({ ourStudents }) => {
  return (
    <div>
      <h2>Contact Information</h2>
      <ul>
        {ourStudents.map((student, i) => {
          return (
            <Link key={i} to={student.login.uuid}>
              <li>
                {student.name.title} {student.name.first} {student.name.last}
              </li>
            </Link>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default Contacts;
