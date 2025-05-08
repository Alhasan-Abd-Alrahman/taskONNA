import React from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./RightSidebar.module.css";

export default function SidebarHeader({ onClose }) {
  return (
    <div className={`d-flex justify-content-between ${styles.headersidebar}`}>
      <h6>Add widget</h6>
      <IoMdClose onClick={onClose} style={{ cursor: "pointer" }} />
    </div>
  );
}