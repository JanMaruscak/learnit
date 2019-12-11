import { withRouter } from "react-router-dom";

function OnRouteChange() {
  window.scrollTo(0, 0);
  return null;
}

export default withRouter(OnRouteChange);
