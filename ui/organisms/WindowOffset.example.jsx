import React, {Component} from 'react'; 
import getWindowOffset from 'get-window-offset';
import { PopupHover, PopupOverlay } from 'organism-react-popup';

class WindowOffsetExample extends Component
{
    handleClick = (e) =>
    {
        getWindowOffset(e.currentTarget);
    }

    render()
    {
        return (
            <div style={Styles.container}>
                <PopupHover>
                    <div style={{...Styles.col, ...Styles.col1}} onClick={this.handleClick}>1</div>
                </PopupHover>
                <div style={{...Styles.col, ...Styles.col2}} onClick={this.handleClick}>2</div>
                <div style={{...Styles.col, ...Styles.col3}} onClick={this.handleClick}>3</div>
            </div>
        );
    }
}

export default WindowOffsetExample;

const Styles = {
    container: {
        justifyContent: 'space-around',
        display: 'flex'
    },
    col: {
        width: 60,
        height: 60,
        lineHeight: '60px',
        textAlign: 'center',
        color: '#fff'
    },
    col1: {
        background: '#c00'
    },
    col2: {
        background: '#095'
    },
    col3: {
        background: '#059'
    }
};
