import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./layouts/header/Header";
import Main from "./pages/main";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Main />} />
    </Route>
  )
);

export default router;
