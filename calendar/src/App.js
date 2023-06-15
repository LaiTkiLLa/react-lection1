import './main.css';
import {Calendar} from "./components/calendar";

const now = new Date(2023, 5, 15);

function App() {
  return (
      <Calendar now={now}/>
  );
}

export default App;
