import React, { useState } from 'react';
import { DndContext } from "@dnd-kit/core";
import DroppableZone from '../../components/DroppableZone/DroppableZone';
import styles from './content.module.css';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import { v4 as uuid } from 'uuid';

import { FaRegPenToSquare } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Content() {
  const [droppedWidgets, setDroppedWidgets] = useState([]);
  const [pendingWidgets, setPendingWidgets] = useState([]);
  const [wasSaved, setWasSaved] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(prev => !prev);
  };

  const handleDrop = (event) => {
    const widget = event?.active?.data?.current?.widget;
    if (!widget) return;

    const newWidget = {
      ...widget,
      i: uuid(),
      x: 0,
      y: (droppedWidgets.length + pendingWidgets.length) * 3,
      w: 6,
      h: 5
    };

    setPendingWidgets(prev => [...prev, newWidget]);
  };

  const handleSave = () => {
    setDroppedWidgets(prev => [...prev, ...pendingWidgets]);
    setPendingWidgets([]);
    setWasSaved(true); 
    setIsRightSidebarOpen(false);
  };
  const handleSidebarClose = () => {
    if (!wasSaved) {
      setPendingWidgets([]); 
    }
    setIsRightSidebarOpen(false);
    setWasSaved(false);
  };

  const handleRemove = (id) => {
    setDroppedWidgets(prev => prev.filter(widget => widget.i !== id));
    setPendingWidgets(prev => prev.filter(widget => widget.i !== id));
  };

  const allWidgets = [...droppedWidgets, ...pendingWidgets];

  return (
    <div className={styles.main_content}>
      <button className={styles.rightToggleButton} onClick={toggleRightSidebar}>
      <FaRegPenToSquare />
      </button>
      {isRightSidebarOpen && (
      <div className={styles.rightToggleActions}>
        <button className={styles.rightToggleSave} onClick={handleSave}>
          <h6><FaCheck /> Save</h6>
        </button>
        <button className={styles.rightToggleDiscard} onClick={handleSidebarClose}>
          <h6><IoMdClose /> Discard</h6>
        </button>
      </div>
    )}
     
      <DndContext onDragEnd={handleDrop}>
        <DroppableZone widgets={allWidgets} onRemove={handleRemove} isSidebarOpen={isRightSidebarOpen} />
        <RightSidebar isOpen={isRightSidebarOpen} onClose={handleSidebarClose} />
      </DndContext>
    </div>
  );
}
