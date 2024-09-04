import { RouterProvider } from "react-router-dom";
import router from "./components/Routes";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Jumgal Arymbaev | A Software Developer based in the USA.</title>
        <meta
          name="description"
          content="Jumgal Arymbaev's personal website"
        />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
