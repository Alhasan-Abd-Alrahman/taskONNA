import styles from './Sidebar.module.css';
import { FaHome, FaTachometerAlt, FaUser, FaBuilding, FaAppStore, FaBars } from 'react-icons/fa';
import img from './../../assets/img/logo.png';

function Sidebar({ isSidebarOpen, dispatch }) {
  return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>

      <button className={styles.toggleButton} onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}>
        <FaBars />
      </button>

      {isSidebarOpen && (
      
          <img src={img} alt="Logo" className={styles.logo}  />
      )}

      <ul className={`${styles.menu} ${isSidebarOpen ? styles.showMenu : ''}`}>
        <li className={styles.menuItem}><FaHome className={styles.icon} /><span>Home</span></li>
        <li className={styles.menuItem}><FaTachometerAlt className={styles.icon} /><span>Dashboard</span></li>
        <li className={styles.menuItem}><FaUser className={styles.icon} /><span>User</span></li>
        <li className={styles.menuItem}><FaBuilding className={styles.icon} /><span>Organization</span></li>
        <li className={styles.menuItem}><FaAppStore className={styles.icon} /><span>My App</span></li>
      </ul>
    </div>
  );
}

export default Sidebar;
