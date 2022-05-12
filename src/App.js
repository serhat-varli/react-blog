import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./comçponent/foother/footer";
import Header from "./comçponent/header/header";
import Home from "./comçponent/home/home";
import Create from "./comçponent/content/create";
import BlogDetail from './comçponent/contentdetail/detail';
import NotFound from './comçponent/404/nodfound';
function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create" >
            <Create />
          </Route>
          <Route path="/detail/:id" >
            <BlogDetail />
          </Route>
          <Route path="*" >
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
