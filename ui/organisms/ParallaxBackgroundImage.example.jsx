import React from 'react'; 
import {ParallaxBackgroundImage} from 'organism-react-parallax';

const ParallaxBackgroundImageExample = () =>
<ParallaxBackgroundImage
    style={Styles.container}
    backgroundImage="https://c1.staticflickr.com/9/8621/16732897815_4705c08fe6_h.jpg"
>
test
</ParallaxBackgroundImage>

export default ParallaxBackgroundImageExample;

const Styles = {
    container: {
        height: 300,
        color: '#fff',
        textAlign: 'center',
        paddingTop: 200,
    }
};
