import './App.css';
import HeaderNavigation from './components/header/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostComponent from './components/post/post';
import Aside from './components/aside/aside';

function App() {
  return (
    <div className="App">
      <HeaderNavigation />
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
