import React from 'react'; 
import {ClientRoute} from 'reshow'; 
import {PopupElement} from 'organism-react-popup';
import {PageLoadProgressHandler} from 'organism-react-progress'; 
import Atoms from '../pages/Atoms';
import Molecules from '../pages/Molecules';
import Organisms from '../pages/Organisms';
import Icons from '../pages/Icons';
import List from '../pages/List';

const themes = {
    atoms: <Atoms />,
    molecules: <Molecules />,
    organisms: <Organisms />,
    icons: <Icons />,
    list: <List />
};

const Index = (props) => {
    
    let {themePath, ...others} = props;

    if (!themePath) {
        themePath = 'atoms';
    }

    return (
        <div>
            <ClientRoute
                {...others}
                themes={themes}
                themePath={themePath}
            />
            <PopupElement />
            <PageLoadProgressHandler ajax={true} />
        </div>
    );
};

export default Index;

