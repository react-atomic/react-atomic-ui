import Calendar from 'ricon/Calendar';
import ChevronRight from 'ricon/ChevronRight';
import Code from 'ricon/Code';
import Description from 'ricon/Description';
import DropDown from 'ricon/DropDown';
import Facebook from 'ricon/Facebook';
import FacebookMessage from 'ricon/FacebookMessage';
import Git from 'ricon/Git';
import Hamburger from 'ricon/Hamburger';
import HamburgerToArrow from 'ricon/HamburgerToArrow';
import HamburgerToX from 'ricon/HamburgerToX';
import MyLocation from 'ricon/MyLocation';
import Npm from 'ricon/Npm';
import Phone from 'ricon/Phone';
import Pin from 'ricon/Pin';
import Pulse from 'ricon/Pulse';
import ShoppingCart from 'ricon/ShoppingCart';
import Sort from 'ricon/Sort';
import X from 'ricon/X';
import ZoomIn from 'ricon/ZoomIn';

// Alert
import Error from 'ricon/Error';
import Warning from 'ricon/Warning';

import {reactStyle} from 'react-atomic-molecule';

import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 


const icons = [
    ['Calendar', <Calendar />],
    ['ChevronRight', <ChevronRight />],
    ['Code', <Code />],
    ['DropDown', <DropDown />],
    ['DropDown (up)', <DropDown up={true} />],
    ['Description', <Description />],
    ['Facebook', <Facebook />],
    ['FacebookMessage', <FacebookMessage />],
    ['Git', <Git />],
    ['Hamburger', <Hamburger />],
    ['HamburgerToArrow', <HamburgerToArrow on={true} />],
    ['HamburgerToX', <HamburgerToX on={true} />],
    ['MyLocation (fixed)', <MyLocation />],
    ['MyLocation (off)', <MyLocation type="off" />],
    ['MyLocation (on)', <MyLocation type="on" />],
    ['MyLocation (loading)', <MyLocation loading={true} type="on" />],
    ['Npm', <Npm />],
    ['Phone', <Phone />],
    ['Pin',<Pin />],
    ['Pulse',<Pulse />],
    ['ShoppingCart', <ShoppingCart />],
    ['Sort', <Sort />],
    ['X',<X style={{position:'static'}}/>],
    ['ZoomIn', <ZoomIn />],
// Alert
    ['Error',<Error />],
    ['Warning', <Warning />],
];

class Icons extends BasePage 
{
    static defaultProps = {
        pageName: 'icons' 
    };
    render()
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

