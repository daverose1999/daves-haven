import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import flowerFrame from '../../assets/74967-paper-summer-shape-flower-border-free-download-png-hq.png'
import flowerFrame2 from '../../assets/R.png'
import leaf from '../../assets/tropical-leaf-pattern.png'
import leaf2 from '../../assets/pdflowerset17-gloy-01_1.png'

const Container = styled.main`

#section1{
    position: relative;
}

`
const Section = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #ff3fac;
    overflow: hidden;

    .text{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        letter-spacing: 0.05em;


        span{
            padding: 5px 25px 5px 15px;
            background-color: #fff;
            font-size: 5.25em;
            line-height: 1.7em;
            color: #4a4a4a;
            opacity: 0;
            animation: 4s fade ease-in forwards;
            animation-delay: calc(1s * var(--fade));
        }
    }

    .flower-frame{
        position absolute;
        object-fit: cover;
        opacity: 0; 
        width: 100%;
        height: 100%;
        z-index: 3;
        display: inline-block;
        animation: 2s anim-lineUp ease-in forwards;
        animation-delay: calc(1s * var(--springUp));
    }

    .leaf{
        z-index: 2;
    }

    .leaf2{
        z-index: 1;
    }


@keyframes anim-lineUp {
0% {
    opacity: 0;
    transform: scale(1.2, 1.2);
}
100% {
    opacity: 1;
    transform: scale(1, 1);
}
}

@keyframes fade {
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
}

`


const Home = () => {
   
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {

    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollValue]);


    return (
        <Container >
            <Section id="section1">
                <p className='text'>
                    <span style={{ '--fade': 1 }}>"Dream</span>
                    <br />
                    <span style={{ '--fade': 2 }}>Big"</span></p>
                <div>
                    <img className='flower-frame' style={{'--springUp': 4}} src={flowerFrame} alt='' />
                    <img className='flower-frame' style={{'--springUp': 3}} src={flowerFrame2} alt='' />
                    <img className='flower-frame leaf' style={{'--springUp': 2}} src={leaf} alt='' />
                    <img className='flower-frame leaf2' style={{'--springUp': 1}} src={leaf2} alt='' />
                </div>
            </Section>
             
        </Container>
    )
}

export {Home}