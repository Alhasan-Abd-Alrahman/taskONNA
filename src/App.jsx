import Topbar from './layout/Topbar/Topbar';
import Sidebar from './layout/Sidbar/Sidebar';
import Content from './layout/Content/Content';
import './App.css';
import { useReducer } from 'react';
import sidebarReducer from './Reducers/sidebarReducer';

const initialState = {
  isSidebarOpen: false,
};

function App() {
  const [state, dispatch] = useReducer(sidebarReducer, initialState);

  return (
    <div className={`app-container ${state.isSidebarOpen ? 'sidebar-open' : ''}`}>
     
      <Sidebar isSidebarOpen={state.isSidebarOpen} dispatch={dispatch} />

  
      <div className="main-content">
        <Topbar isSidebarOpen={state.isSidebarOpen} dispatch={dispatch} />
        <Content dispatch={dispatch} />

      </div>

  
    </div>
  );
}

export default App;
