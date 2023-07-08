// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Modal from "./components/modal";
import { useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { useEffect } from "react";

const App = () => {
  const { modal } = useAppSelector((state: RootState) => state.global);

  return (
    // <div className="global-container">
    <>
      <RouterProvider router={router} />
      {modal && <Modal />}
    </>
    // </div>
  );
};

export default App;
