import React, {Component} from 'react'; 
import {dispatch} from 'reshow';
import {
    DividingHeader,
    Form,
    Field,
    InputBox,
    SearchBox

} from 'react-atomic-molecule';

import Doc from '../templates/Doc'; 

class Molecules extends Component
{
    componentDidMount()
    {
        setTimeout(()=>{
            dispatch({
                type: 'config/set',
                params: {
                    data: {
                        menu: 'molecules'
                    }
                }
            });
        });
    }

    componentWillUnmount()
    {
        dispatch({
            type: 'config/set',
            params: {
                data: null
            }
        });
    }

    component

    render()
    {
        return (
            <Doc>
                <DividingHeader>Input box</DividingHeader>
                <div>Inputbox</div>
                <Form>
                <Field atom="input" />
                </Form>
                <div>Inputbox with button</div>
                <InputBox />
                <div>Search Box</div>
                <SearchBox />
            </Doc>
        );
    }
}

export default Molecules;
