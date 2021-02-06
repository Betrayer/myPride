import React from "react";
import css from "./top.module.css";

const TopSection = () => {
  return (
    <section className={css.topSection}>
      <div className={css.container}>
        <h1>Bohdan Illiakov</h1>
        <h2>Frontend developer</h2>
      </div>
    </section>
  );
};

export default TopSection;
