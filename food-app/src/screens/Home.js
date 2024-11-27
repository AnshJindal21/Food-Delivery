import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Corousel from "../components/Corousel";


export default function Home() {
  return (
    /*container class means mobile ke lie pehle*/
    <div>
      <div><Navbar /></div>
      <div id="div-corousel"><Corousel/></div>
      <div className="m-3"><Card/></div>
      <div className="m-3"><Card/></div>
      <div className="m-3"><Card/></div>
      <div className="m-3"><Card/></div>
      <div className="m-3"><Card/></div>

      <div><Footer /></div>
    </div>
  );
}
