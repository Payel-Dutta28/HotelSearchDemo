import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HomeComponent } from './HomeComponent';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const {route} = this.props;
        return React.createElement(HomeComponent, route);
    }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);