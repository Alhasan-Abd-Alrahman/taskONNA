import React from "react";
import styles from "./RightSidebar.module.css";

export default function FilterButtons({ selectedType, setSelectedType, types, widgets }) {
  return (
    <div className={styles.filter_tags}>
      {types.map((type) => (
        <button
          key={type}
          className={`${styles.filter_button} ${selectedType === type ? styles.active : ""}`}
          onClick={() => setSelectedType(type)}
        >
          {type} ({widgets.filter(w => type === "All" || w.typeWidget === type).length})
        </button>
      ))}
    </div>
  );
}