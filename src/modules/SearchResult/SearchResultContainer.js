import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SearchResultComponent } from "./SearchResultComponent";
import * as searchResultAction from "./ducks/action";

class SearchResultContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.action.fetchOfferSearchResult();
  }

  render() {
    const { searchFilter } = this.props;
    const { dispatch } = this.props;

    return <SearchResultComponent {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  searchFilter: state.searchResultReducer.searchFilter,
  offerSearchResult: state.searchResultReducer.offerSearchResult,
  routerLocation: state.router.location.pathname,
  modalOpen: state.searchResultReducer.modalOpen,
  showSuggestion: state.searchResultReducer.showSuggestion,
  locationListResult: state.searchResultReducer.locationListResult
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ ...searchResultAction }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultContainer);
