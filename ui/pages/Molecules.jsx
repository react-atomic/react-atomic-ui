import React, {Component} from 'react'; 
import {navigationDispatch} from 'organism-react-navigation';
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
            navigationDispatch({
                params: {
                    activeMenu: 'molecules'
                }
            });
        });
    }

    componentWillUnmount()
    {
        setTimeout(()=>{
            navigationDispatch({
                params: {
                    activeMenu: null
                }
            });
        });
    }

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
