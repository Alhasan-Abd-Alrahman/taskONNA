import styles from '../Topbar/Topbar.module.css';


import img from './../../assets/img/logo.png'
// { dispatch }
export default function Topbar({ isSidebarOpen }) {
  return (
    <div className={` ${styles.topbar}`}>
      {!isSidebarOpen && (
        <img
          src={img}
          alt="Logo"
          className={styles.logo}
          style={{ width: '250px', height: 'auto' }}
        />
      )}
    </div>
  );
}




