import React, {Component} from 'react'; 
import { getDocTemplate } from 'pmvc_react_admin';
import Menu from '../organisms/Menu';

const DocTemplate = getDocTemplate({}, true, {
    sideWidth: 160
});

const Doc = ({children, ...props}) =>
<DocTemplate 
    {...props} 
    body={children}
    menu={<Menu />}
/>

export default Doc;
