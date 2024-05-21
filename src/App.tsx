import Form from "./components/Form";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <main>
          <Form />
        </main>
      </ContextProvider>
    </>
  );
}

export default App;
