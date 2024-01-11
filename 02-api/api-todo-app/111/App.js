import {ReactComponent as HomeLogo} from '../src/icons/home.svg';
import './App.css';
import {useState} from "react";
import SidebarButton from "./components/SidebarButton";

function App() {
    const [selectedButton, setSelectedButton] = useState();
    const clickHandler = () => {
        if (style !== "default") setStyle("default");
        else setStyle("clicked");
    }


    return (
        <div className="App">
            <header className="App-header">
                <SidebarButton isSelected={selectedButton === 'home'}>
                    <HomeLogo />
                </SidebarButton>
                <SidebarButton isSelected={selectedButton === 'home2'}>
                    <HomeLogo />
                </SidebarButton>
            </header>
        </div>
    );
}

export default App;
