import React from "react";
import { NavLink } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import Divider from '@material-ui/core/Divider';
import routes  from '../routes/route.config';
import "./styles/breadcrumbTitle.css";

const Breadcrumbs = ({ breadcrumbs }) => {
     if(breadcrumbs && breadcrumbs.length === 1){
         return (
            <div className="cat-title">
                <h2>Search Hotels</h2>
            </div>
         )
     }else{
         return(
             <div className="cat-breadcrumbs-title">
                    {breadcrumbs.map((breadcrumb, index) => {
                        console.log(`breadcrumb from ........`,breadcrumb);
                        return (
                            <span key={breadcrumb.key}>
                                {(index === breadcrumbs.length - 1) && 
                                    <span>
                                        {breadcrumb}
                                    </span> 
                                }
                                {(index !== breadcrumbs.length - 1) && 
                                    <span>
                                        <NavLink to={breadcrumb.props.match.url}>
                                          {breadcrumb}
                                        </NavLink> 
                                        <i> > </i>
                                    </span>
                                }
                            </span>
                        )}
                    )}
                    <Divider className="breadcrumb-divider"/>
                </div>
            )
     }
           
};

export default withBreadcrumbs(routes)(Breadcrumbs);