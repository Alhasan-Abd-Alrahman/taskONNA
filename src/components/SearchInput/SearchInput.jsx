import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import styles from "./SearchInput.module.css";

export default function SearchInput({ value, onChange }) {
  return (
    <div className={styles.search_container}>
      <input
        type="text"
        placeholder=" "
        value={value}
        onChange={onChange}
        className={styles.search_input}
      />
      <label className={styles.search_label}>Search</label>
      <IoSearchOutline className={styles.search_icon} />
    </div>
  );
}
