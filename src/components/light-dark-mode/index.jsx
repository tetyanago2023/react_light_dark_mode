import useLocalStorage from "./useLocalStorage";
import './theme.css';


export default function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    const handleToggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    console.log(theme)

    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className={"container"}>
                <p>Hi all!</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    )
}