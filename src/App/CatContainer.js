import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { CatComponent } from './CatComponent';

class CatContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return React.createElement(CatComponent);
    }
}

const mapStateToProps = state => ({
    // courses: state.coursesReducer.courses,
    // authenticated : state.authReducer.authenticated,
    // userinfo : state.authReducer.userinfo
});

const mapDispatchToProps = (dispatch) => ({
    // action: bindActionCreators({...courseAction, ...authAction}, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CatContainer));