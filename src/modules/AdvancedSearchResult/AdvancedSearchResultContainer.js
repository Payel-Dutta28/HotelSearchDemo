import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AdvancedSearchResultComponent } from './AdvancedSearchResultComponent';

class AdvancedSearchResultContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return React.createElement(AdvancedSearchResultComponent);
    }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSearchResultContainer);