import React, {Component} from 'react'; 
import {navigationDispatch} from 'organism-react-navigation';

class BasePage extends Component
{
    componentDidMount()
    {
        setTimeout(()=>{
            navigationDispatch({
                params: {
                    activeMenu: this.props.pageName 
                }
            });
        });
    }

    componentWillUnmount()
    {
        setTimeout(()=>{
            navigationDispatch({
                params: {
                    activeMenu: null
                }
            });
        });
    }
}

export default BasePage;
