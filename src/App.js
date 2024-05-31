
import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

function App() {

    useEffect(()=> {
        tg.ready();
    },[])
    const onClose = () => {
        tg.close()
    }

  return (
    <div className="App">
        <buttonn onClick={onClose} >Close</buttonn>
    </div>
  );
}

export default App;
