import { Routes as Router, Route } from "react-router-dom";

import { Home } from "./pages/Home";

import { ArticleList } from "./pages/ArticleList";
import { LayoutContainer } from "./pages/LayoutContainer";
import { ArticleDetails } from "./pages/ArticleDetails";

export const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<LayoutContainer />}>
        <Route path="/new"     element={<Home />} />
        <Route path="/articles" element={<ArticleList/>} />
        <Route path="/articles/:hash" element={<ArticleDetails/>} />
      </Route>
    </Router>
  );
};
