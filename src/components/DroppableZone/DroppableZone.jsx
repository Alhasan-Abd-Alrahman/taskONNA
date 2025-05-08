import React, { useEffect, useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { Responsive, WidthProvider } from "react-grid-layout";
import styles from "./DroppableZone.module.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { FaRegTrashAlt } from "react-icons/fa";

const WidgetComponent = React.memo(function Widget({ widget, onRemove }) {
  return (
    <div className={styles.gridItembox}>
      <button
        className={styles.closeButton}
        onClick={() => onRemove(widget.i)}
      >
        <FaRegTrashAlt />
      </button>
      <div className={styles.widgetBox}>
        <div className={styles.textcard}>
          <strong>{widget.title}</strong>
          <p>{widget.description}</p>
        </div>
        <img src={widget.image} alt={widget.title} className={styles.widgetImage} />
      </div>
    </div>
  );
});

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function DroppableZone({ widgets, onRemove, isSidebarOpen }) {
  const { setNodeRef } = useDroppable({ id: "droppable-zone" });
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    setHighlight(isSidebarOpen);
  }, [isSidebarOpen]);

  const layout = widgets.map(widget => ({
    i: widget.i,
    x: widget.x,
    y: widget.y,
    w: widget.w,
    h: widget.h
  }));

  return (
    <div
      ref={setNodeRef}
      className={`${styles.dropZone} ${highlight ? styles.dropZoneActive : ""}`}
    >
      <ResponsiveGridLayout
        className={styles.layout}
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768 }}
        cols={{ lg: 20, md: 16, sm: 12 }}
        rowHeight={30}
        isResizable
        isDraggable
        measureBeforeMount={false}
        useCSSTransforms={true}
        compactType={null}
        preventCollision={false}
      >
        {widgets.map(widget => (
          <div key={widget.i}>
            <WidgetComponent widget={widget} onRemove={onRemove} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}




//  {/*test for background dropzone */}
//       {/* <div className={styles.gridOverlay}>
//         {[...Array(1000)].map((_, i) => (
//         <div key={i} className={styles.gridCell}></div>
//             ))}
//         </div> */}
