import { connect } from "react-redux";
import MountainDetailPage from "./MountainDetailPage";
import { GetMountainPageDetailsBySlug } from "actions/MountainPage";

const mapsDispatchToProps = (dispatch) => ({
  GetMountainPageDetailsBySlug(slug) {
    dispatch(GetMountainPageDetailsBySlug(slug));
  },
});

export default connect(null, mapsDispatchToProps)(MountainDetailPage);
