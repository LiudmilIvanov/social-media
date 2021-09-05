import './App.css';
import Navigation from './components/header/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './components/card/card';

function App() {
  return (
    <div className="App">
      <Navigation />
      <body>
        <div>
          <CardComponent />
        </div>
      </body>

    </div>
  );
}

export default App;
