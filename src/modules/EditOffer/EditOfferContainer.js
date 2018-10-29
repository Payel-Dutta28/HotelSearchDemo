import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EditOfferComponent } from './EditOfferComponent';

class EditOfferContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return React.createElement(EditOfferComponent);
    }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(EditOfferContainer);