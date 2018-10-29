import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { HotelResultComponent } from "./HotelResultComponent";
import * as searchResultAction from "../SearchResult/ducks/action";

class HotelResultContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return <HotelResultComponent {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  hotelList: state.operationReducer.hotelSearchResult
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ ...searchResultAction }, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelResultContainer);
