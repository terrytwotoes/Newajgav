import React, { Component } from "react";
import "./Styles1.css";

export default function Hrm() {
  return (
    <>
    <div className="wrapper">
      <h1>HRM</h1>
      <p>

        We offer Customized HR solutions for your business to enable cost
        reduction, meeting deadlines and avail best HR assets. When Human
        Resource is no more a liability but a valuable asset to the changing
        business scenarios, we offer services for all your HR requirements. Be
        it one time service or ongoing needs, our expert team is ready to handle
        each unique project in time bound and cost effective ways.
      </p>
    </div>
    <div className="servicesWrapper">
    <div className="consultingWrapper">
      <h1> Consult us for your requirements regarding:</h1>
      <ui >
        <li>Recruitment</li>
        <li>Job Analysis</li>
        <li>Defining KRA and KPI</li>
        <li>Performance Management</li>
        <li>Salary Packages Structuring</li>
        <li>Analysis of market pay scales</li>
        <li>Development</li>
        <li>Implementation of Work Policy</li>
        <li>Terms</li>
      </ui>
    </div>
    <div className="hrdWrapper">
      <h1>HRD services </h1>
      <ui>
        <li>Leadership</li>
        <li>Motivation</li>
        <li>Corporate communication and reporting</li>
        <li>Employee engagement and retension</li>
        <li>Personality development</li>
        <li>time and stress management</li>
        <li>Work ethics, employee behavior and attitude</li>
        <li>Gender Sensitivity</li>
        <li>Project Management</li>
        <li>Team Building Workshops</li>
      </ui>
    </div>
  </div>
  </>
  );
}
