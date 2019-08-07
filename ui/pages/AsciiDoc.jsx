import React from 'react'; 

/*Base*/
import CodeExample from 'organism-react-code';
import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 

/*Sample*/
import AsciiDocExample from '../organisms/AsciiDoc.example';
import asciiDocExample from '!raw-loader!../../../ui/organisms/AsciiDoc.example';

class AsciiDocPage extends BasePage
{

    static defaultProps = {
        pageName: 'AsciiDoc' 
    };

    render()
    {
        return (
            <Doc>
                <CodeExample
                    code={asciiDocExample}
                    header="Ascii Doc"
                    edit="https://codesandbox.io/s/8vj7x3m82"
                    git="react-atomic/react-atomic-organism/tree/master/packages/organism-react-asciidoc/"
                >
                    <AsciiDocExample />
                </CodeExample>
            </Doc>
        );
    }
}

export default AsciiDocPage;
