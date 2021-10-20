import { Route, Switch } from "react-router";
import Navigation from "./Components/Navigation";
import Page from "./Components/Pages/Page";
import Page2 from "./Components/Pages/Page2";
import Page3 from "./Components/Pages/Page3";
import Page4 from "./Components/Pages/Page4";
import Page5 from "./Components/Pages/Page5";
import Page6 from "./Components/Pages/Page6";
import Page7 from "./Components/Pages/Page7";
import Page8 from "./Components/Pages/Page8";
import Page9 from "./Components/Pages/Page9";
import Page10 from "./Components/Pages/Page10";
function App() {
  return (
    <div className="container">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Page} />
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/page3" component={Page3} />
        <Route exact path="/page4" component={Page4} />
        <Route exact path="/page5" component={Page5} />
        <Route exact path="/page6" component={Page6} />
        <Route exact path="/page7" component={Page7} />
        <Route exact path="/page8" component={Page8} />
        <Route exact path="/page9" component={Page9} />
        <Route exact path="/page10" component={Page10} />
      </Switch>
    </div>
  );
}

export default App;
