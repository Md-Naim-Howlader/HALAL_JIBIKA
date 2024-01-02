import "./App.css";
import ContextProvider from "./Context/ContextProvider";
import MainLayout from "./layout/Main Layout/MainLayout";

function App() {
  return (
    <>
      <ContextProvider>
        <MainLayout />
      </ContextProvider>
    </>
  );
}

export default App;
