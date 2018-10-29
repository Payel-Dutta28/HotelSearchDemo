import React from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router';
import { history } from '../_helper';
import routes from './route.config';

class RouteComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
         return(
            <Switch>
                {renderRoutes(routes)}
            </Switch>
        )
    }

}

export default RouteComponent;