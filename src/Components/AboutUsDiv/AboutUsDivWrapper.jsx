import React from "react";
import styles from "./AboutUs.module.css";
// import purpleBackground from "../../Assets/purple-background.jpg";
// import purpleBackground from "../../Assets/collage1.jpg";
import backImg from "../../Assets/back_main.jpg";

export default function AboutUsDivWrapper() {
  return (
    <div className={styles.rootWapper}>
      <img
        className="img-fluid"
        style={{ width: "100%", height: "auto" }}
        src={backImg}
        alt="NA"
      />
    </div>
  );
}
