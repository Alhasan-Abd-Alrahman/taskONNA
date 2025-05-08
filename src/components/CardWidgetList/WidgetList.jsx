// components/WidgetList.jsx
import WidgetCard from './../Cardwidget/Cardwidget';
import styles from "./WidgetList.module.css"
export default function WidgetList({ widgets }) {

  return (
    <div className={styles.WidgetList}>
      {widgets.map(widget => (
        <WidgetCard key={widget.id} widget={widget} />
      ))}
    </div>
  );
}
