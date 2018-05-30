import React, {PureComponent} from 'react'
import Dropzone from 'organism-react-dropzone'
import get from 'get-object-value'

class DropzoneExample extends PureComponent
{
    state = {
        urls: []
    }

    handleClick = () => 
    {
        this.dropzone.openDialog();
    }

    render()
    {
        const {urls} = this.state;
        return (
            <div>
            <Dropzone 
                ref={el=>this.dropzone=el}
                acceptedFiles=".png, .jpg"
                showFiletypeIcon={true}
                postUrl="https://file.io"
                djsConfig={{
                    addRemoveLinks: true
                }}
                eventHandlers={{
                    success: file => 
                    {
                        this.setState(({urls})=>{
                            const req = get(file, ['xhr', 'response']); 
                            if (req) {
                                const json = JSON.parse(req);    
                                urls.push(json.link);
                            }
                            return urls;
                        });
                    }
                }}
            />
            <ul>
                {
                    urls.map( (url, key) =>
                        <li key={key}><a href={url} target="_blank">{url}</a></li>
                    )
                }
            </ul>
            <button onClick={this.handleClick}>open</button>
            </div>
        );
    }

}

export default DropzoneExample;
