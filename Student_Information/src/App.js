import React from "react";
import useStudents from "./services/useStudents";
import Instructions from "./Instructions";
import { Routes, Route } from "react-router-dom";
import Students from "./components/Students";
import Navigation from "./components/Navigation";
import Student from "./components/Student";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";

const App = () => {
  const students = useStudents();

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Instructions />} />
        <Route path="students" element={<Students ourStudents={students} />}>
          <Route path=":studentId" element={<Student studentInfo={students} />} />
        </Route>
        <Route path="contacts" element={<Contacts ourStudents={students} />}>
          <Route path=":studentId" element={<Contact contactInfo={students} />} />
        </Route>
      </Routes>
      {console.log(students)}
    </div>
  );
};

export default App;
