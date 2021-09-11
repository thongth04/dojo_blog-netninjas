import Home from "../components/Home";
import NavBar from "../components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "../components/Create";
import BlogDetails from "../components/BlogDetails";
import NotFound from "../components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;