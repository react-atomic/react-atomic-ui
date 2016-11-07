import React from 'react'; 
import { VerticalMenu } from 'pmvc_react_admin';
import { ReLink, ReshowComponent, Container } from 'reshow';
import {mixClass} from 'react-atomic-molecule';
import get from 'get-object-value';

const menus = [
    'atoms',
    'molecules',
    'organisms',
    'icons'
];

class Menu extends ReshowComponent
{

    getMenu(arrMenu)
    {
        let menus = arrMenu.map((item, key)=>{
            const classes = mixClass(
                'item',
                {
                    'active': get(this,['state','data','menu']) === item 
                }
            );
            return (
            <ReLink className={classes} key={key} href={'#/'+item}>
                {item}
            </ReLink>
            );
        });
        return menus;
    }

    render()
    {
        return (
            <VerticalMenu>
                {this.getMenu(menus)}
            </VerticalMenu>
        );
    }
}
const MenuContainer = Container.create(Menu);
export default MenuContainer;
