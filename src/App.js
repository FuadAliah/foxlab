import { Route, Switch } from "react-router";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import useFetch from "./Components/UseFetch/useFetch";
import Posts from "./Views/Posts/Posts";
import DetailedPage from "./Views/Detailed/Detailed";
import Data from "./Data_STR/mapFunction";

import Links from "./Data_STR/Links";
import Test from "./Data_STR/Test";

import "./App.scss";
import UploadForm from "./Views/UploadForm/UploadForm";

const App = () => {
  const { data: menu } = useFetch("https://firebasestorage.googleapis.com/v0/b/pocket-design-fbec1.appspot.com/o/menu-icons.json?alt=media&token=4e045800-ebd4-498e-9d6a-cd7b5c775b29");
  return (
    <div className="content">
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/items" component={Posts} />
        {menu && menu.map(nav => <Route exact path={`/${nav.name}`} key={nav.id} component={Posts} />)}
        {menu && menu.map(nav => <Route path={`/${nav.name}/:id`} key={nav.id} component={DetailedPage} />)}
        <Route exact path="/ff" component={Data} />
        <Route exact path="/link" component={Links} />
        <Route exact path="/tt" component={Test} />
        <Route exact path="/new" component={UploadForm} />
      </Switch>
    </div>
  );
};

export default App;
