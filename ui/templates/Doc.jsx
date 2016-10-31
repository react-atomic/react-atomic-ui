import React, {Component} from 'react'; 
import { DocTemplate } from 'pmvc_react_admin';
import Menu from '../organisms/Menu';

const Doc = (props) =>
{
    return (
        <DocTemplate 
            {...props} 
            menu={<Menu />}
        />
    );
}

export default Doc;
