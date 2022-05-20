import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PLAYER_FORM_ROUTE, SHOW_PLAYERS_ROUTE } from "./constants/routes";
import { FormPage } from "./features/View/FormPage";
import { LandingPage } from "./features/View/LandingPage";
import { ListPage } from "./features/View/ListPage";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path={PLAYER_FORM_ROUTE} element={<FormPage />} />
        <Route path={SHOW_PLAYERS_ROUTE} element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
  // <LandingPage />;
}
