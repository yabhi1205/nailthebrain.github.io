import React, {useEffect,useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import "../../bsignup/bstyle.css";
import Nav from "./nav"
import Home from "./home"
import Books from "./books"
import  "./academics.css"
import Footer from '../../../footer';
import link from "../../../link/user"
import { useNavigate } from "react-router-dom";
import Profile from './Profile';

export default function Maina() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState("")

  useEffect( async () => {
    let a = await link.fetch();
    if (a.status!==200)
      {navigate("/")}
    else{
      setUserData(a.data.user.name)
    }
    
  }, [])
  


  return (
    <div className="Main">
      <Nav 
        name = {userData}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books"
          element={
            <Books
              // type={all}
              name="Books"
              text=" The beginning is the most precious part of the work. No one can
              afford to stand by and do nothing, so grab limitless opportunities
              from here. Find the books related to subjects of CSE and IT. Check
              them out!!!"
            />
          }
        />
        <Route
          path="/exams"
          element={
            <Books
              // type={all}
              name="Exam"
              text=" Building a future generation of innovation means setting up the
              youth for success.
              In this segment, you can download pdfs, and attempt the previous
              year's question papers of exams like GATE to improve your
              preparation. Analyze, plan and then execute, offering the roadmap
              and strategies to achieve your desires"
            />
          }
        />
        <Route path="/profile/*" element={<Profile />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}
