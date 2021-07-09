import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderRoutes from './routes';

function App() {
  return (
    <Router>
      <div className="body">{renderRoutes()}</div>
    </Router>
  );
}

export default App;
