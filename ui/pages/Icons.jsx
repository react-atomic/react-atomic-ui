import React,{Component} from 'react'; 
import Calendar from 'ricon/Calendar';
import Description from 'ricon/Description';
import DropDown from 'ricon/DropDown';
import Facebook from 'ricon/Facebook';
import FacebookMessage from 'ricon/FacebookMessage';
import Hamburger from 'ricon/Hamburger';
import HamburgerToArrow from 'ricon/HamburgerToArrow';
import HamburgerToX from 'ricon/HamburgerToX';
import MyLocation from 'ricon/MyLocation';
import Phone from 'ricon/Phone';
import Pin from 'ricon/Pin';
import Pulse from 'ricon/Pulse';
import X from 'ricon/X';
import ZoomIn from 'ricon/ZoomIn';

import Doc from '../templates/Doc'; 

const icons = [
    ['Calendar', <Calendar />],
    ['DropDown', <DropDown />],
    ['Description', <Description />],
    ['Facebook', <Facebook />],
    ['FacebookMessage', <FacebookMessage />],
    ['Hamburger', <Hamburger />],
    ['HamburgerToArrow', <HamburgerToArrow on={true} />],
    ['HamburgerToX', <HamburgerToX on={true} />],
    ['MyLocation (fixed)', <MyLocation />],
    ['MyLocation (off)', <MyLocation type="off" />],
    ['MyLocation (on)', <MyLocation type="on" />],
    ['MyLocation (loading)', <MyLocation loading={true} type="on" />],
    ['Phone', <Phone />],
    ['Pin',<Pin />],
    ['Pulse',<Pulse />],
    ['X',<X style={{position:'static'}}/>],
    ['ZoomIn', <ZoomIn />],
];

const Icons = (props) =>
{
    return (
        <Doc>
        <div className="pure-g">
        {
            icons.map((v,k)=>
                <div key={k} className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-5" style={Styles.grid}>
                    <div style={Styles.icon}>{v[1]}</div>
                    <div>{v[0]}</div>
                </div>
            )
        }
        </div>
        </Doc>
    );
}

export default Icons;

const Styles = {
    grid: {
        textAlign: 'center'
    },
    icon: {
        maxWidth: 30,
        minHeight: 30,
        maxHeight: 30,
        margin: '0 auto 10px',
        position: 'relative',
    }
};
