
import Home from "./Home";
import ItemDetails01 from "./ItemDetails01";
import Ranking from "./Ranking";
import Home08 from "./Home08";

const routes = [
  { path: "/", component: <Home /> },
  { path: "/marketplace", component: <Home08 /> },


  { path: "/item-details-01", component: <ItemDetails01 /> },
  { path: "/ranking", component: <Ranking /> },
];

export default routes;
