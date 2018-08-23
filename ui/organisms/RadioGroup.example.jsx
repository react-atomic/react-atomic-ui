import React, {PureComponent} from 'react'; 

import {Form, Button} from 'react-atomic-molecule'
import {RadioGroup} from 'react-atomic-organism'

const options = [
    {
        label: 'Boy',
        value: 'boy'
    },
    {
        label: 'Girl',
        value: 'girl'
    },
]

class RadioGroupExample extends PureComponent
{
    state = {
        value: ''
    }
    handleChange = () =>
    {
        this.setState({value: this.radio.getValue()})
    }

    render()
    {
        const {value} = this.state
        return (
            <Form>
                <RadioGroup
                    ref={el=>this.radio=el}
                    inline={false}
                    label="Sex: "
                    name="sex"
                    value={value}
                    options={options}
                    onChange={this.handleChange}
                />
                <div>Current: {value}</div>
                <Button onClick={()=>this.setState({value: 'boy'})}>Set to Boy</Button>
                <Button onClick={()=>this.setState({value: 'girl'})}>Set to Girl</Button>
            </Form>
        )
    }
}

export default RadioGroupExample
