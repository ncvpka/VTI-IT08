import logo from './logo.svg';
import './App.css';
import DiaryForm from './components/DiaryForm';
import DiaryItem from "./components/DiaryItem";


function App() {
  return (
    <div className="App">
      <DiaryForm />
      <DiaryItem />
    </div>
  );
}

export default App;
