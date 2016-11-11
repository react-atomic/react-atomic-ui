import React from 'react'; 
import { VerticalMenu } from 'pmvc_react_admin';
import { SideMenu } from 'organism-react-navigation';
import { ReshowComponent, Container } from 'reshow';
import get from 'get-object-value';

const menus = [
    'atoms',
    'molecules',
    'organisms',
    'icons',
    'list'
];

class Menu extends ReshowComponent
{

    render()
    {
        let thisMenus = {};
        menus.forEach((item)=>{
            thisMenus[item] = {
                text: item,
                href: '#/'+item
            };
        });
        return (
            <SideMenu
                menus={thisMenus}
                active={get(this,['state','data','menu'])}
                component={<VerticalMenu />}
            />
        );
    }
}
const MenuContainer = Container.create(Menu);
export default MenuContainer;
