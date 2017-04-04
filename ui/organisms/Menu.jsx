import React from 'react'; 
import { VerticalMenu } from 'pmvc_react_admin';
import { SideMenu } from 'organism-react-navigation';
import get from 'get-object-value';
import {pageStore} from 'reshow'; 

const keys = Object.keys;

const Menu = (props)=>
{
    let thisMenus = {};
    const themes = pageStore.getMap('themes');
    keys(themes).forEach((item)=>{
        thisMenus[item] = {
            text: item,
            href: '#/'+item
        };
    });
    return (
        <SideMenu
            menus={thisMenus}
            component={<VerticalMenu />}
        />
    );
}

export default Menu;
