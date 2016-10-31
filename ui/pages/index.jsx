import React from 'react'; 
import Atoms from '../pages/Atoms';
import Molecules from '../pages/Molecules';
import Organisms from '../pages/Organisms';
import Icons from '../pages/Icons';
import {ClientRoute} from 'reshow'; 

const themes = {
    atoms: <Atoms />,
    molecules: <Molecules />,
    organisms: <Organisms />,
    icons: <Icons />
};

const Index = (props) => {
    
    let {themePath, ...others} = props;

    if (!themePath) {
        themePath = 'atoms';
    }

    return (
        <ClientRoute
            {...others}
            themes={themes}
            themePath={themePath}
        />
    );
};

export default Index;

