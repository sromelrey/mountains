import { connect } from "react-redux";
import MountainListPage from "./MountainListPage";
import { FilterMountainByTitle, SortMountains } from "actions/MountainPage";

const mapsDispatchToProps = (dispatch) => ({
  FilterMountainByTitle(title) {
    dispatch(FilterMountainByTitle(title));
  },
  SortMountains(title) {
    dispatch(SortMountains(title));
  },
});

export default connect(null, mapsDispatchToProps)(MountainListPage);
