// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const App = () => {
  return (
    // <div className="global-container">
    <RouterProvider router={router} />
    // </div>
  );
};

export default App;
