import { withRouter } from "react-router-dom";

function OnRouteChange() {
  if (document.getElementById("nav-menu") !== null)
    document.getElementById("nav-menu").classList.remove("mobile");
    window.scrollTo(0,0);
  return null;
}

export default withRouter(OnRouteChange);