import { RouterProvider } from "react-router-dom";
import router from "./components/Routes";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Jumgal Arymbaev</title>
        <meta
          name="description"
          content="A description of my personal website"
        />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
