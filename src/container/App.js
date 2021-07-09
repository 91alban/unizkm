import Header from '../component/Header/Header';
import NavigationBar from '../component/NavigationBar/NavigationBar';
import YearBar from '../component/YearBar/YearBar';
import Body from '../component/Body/Body';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <YearBar />
      <Body />
    </div>
  );
}

export default App;
