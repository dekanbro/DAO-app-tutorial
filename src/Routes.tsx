import { Routes as Router, Route } from "react-router-dom";

import { Home } from "./pages/Home";

import { List } from "./pages/List";
import { LayoutContainer } from "./pages/LayoutContainer";

export const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<LayoutContainer />}>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Route>
    </Router>
  );
};
