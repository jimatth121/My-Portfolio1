import React, {
  useContext,
  createContext,
  useLayoutEffect,
  useState,
} from "react";

const ModeContext = createContext(null);

const ModeContextProvider = (props) => {
  const [mode, setMode] = useState(false);
  useLayoutEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (    
      localStorage.mode === "dark" ||
      (!("mode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const changeMode = () => {
    if (mode === true) {
      localStorage.mode = "light";
    } else {
      localStorage.mode = "dark";
    }

    setMode((prev) => !prev);
  };

  return (
    <ModeContext.Provider value={[mode, changeMode]}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;

export const useDarkMode = () => useContext(ModeContext);
