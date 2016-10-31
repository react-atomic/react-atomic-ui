import React from 'react'; 
import { VerticalMenu } from 'pmvc_react_admin';
import { ReLink } from 'reshow';

const menus = [
    'atoms',
    'molecules',
    'organisms',
    'icons'
];

const Menu = (props) =>
<VerticalMenu>
    {menus.map((item, key)=>(
        <ReLink className="item" key={key} href={'#'+item}>
            {item}
        </ReLink>
    ))}
</VerticalMenu>

export default Menu;
