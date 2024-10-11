// src/App.jsx
import './App.css';
import WSIViewer from './components/WSIViewer';
import HubView from './components/HubView';

function App() {
  return (
    <div className="app">
      <div className="left-panel">
        <h2>Image Details</h2>
        <p>Findings and Annotations go here.</p>
      </div>
      <div className="main-panel">
        <WSIViewer />
      </div>
      <div className="hub-view">
        <HubView />
      </div>
    </div>
  );
}

export default App;

