import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen bg-light-white dark:bg-dark-gunmetal text-light-spacegray dark:text-dark-frenchgray">
      <h1 className="text-3xl font-bold">Hello, world! ;)</h1>
      <button
        onClick={toggleDarkMode}
        className="bg-light-cornflowerblue hover:bg-light-azureblue dark:bg-dark-ferngreen dark:hover:bg-dark-pigmentgreen p-2 rounded"
      >
        Toggle Mode
      </button>
    </div>
  );
}

export default App;
