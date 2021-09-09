import './App.css';
import Navigation from './components/header/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostComponent from './components/post/post';
import Aside from './components/aside/aside';
import { Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navigation />
      <body>
        <div>
          <Aside />
        </div>
        <div>
          <PostComponent />
        </div>
      </body>

    </div>
  );
}

export default App;
