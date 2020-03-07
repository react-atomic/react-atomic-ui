import React from 'react'; 

/*Base*/
import CodeExample from 'organism-react-code';
import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 

import CodeExampleExample from '../organisms/CodeExample.example';
import CodeEditorExample from '../organisms/CodeEditor.example';
import codeEditorExample from '!raw-loader!../../../ui/organisms/CodeEditor.example';

class Code extends BasePage
{
    static defaultProps = {
        pageName: 'Code' 
    };

    state = {};

    componentDidMount() {
      this.setState({value: null});
    }

    render()
    {
        return (
            <Doc>
                <CodeExampleExample />
                <CodeExample
                  code={codeEditorExample}
                  header="Codemirror Example"
                >
                  <CodeEditorExample />
                </CodeExample>
            </Doc>
        );
    }
}

export default Code;
