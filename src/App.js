import { Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import Episode from "./pages/Episode";
import EpisodeCard from "./components/EpisodeCard";
import * as routes from "./constants/routes";

function App({ id }) {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.EPISODE} element={<Episode />}>
        <Route path={id} element={<EpisodeCard />} />
      </Route>

      {/* <Route path={routes.EPISODES} element={<Invoices />} /> */}
      {/* <Route path={routes.LOCATION} element={<Invoices />} /> */}
      {/* <Route path={routes.CHARACTER} element={<Invoices />} /> */}
    </Routes>
  );
}

export default App;
