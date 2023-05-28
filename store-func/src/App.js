import './main.css';
import {ShopItemFunc} from "./components/ShopItemFunc";
import {ShopItemClass} from "./components/ShopItemClass";

function App() {
    return (
        <div className="container">
            <div className="background-element">
            </div>
            <div className="highlight-window">
                <div className='highlight-overlay'></div>
            </div>
            <div className="window">
                <ShopItemFunc />
                {/*<ShopItemClass />*/}
            </div>
        </div>
  );
}

export default App;
