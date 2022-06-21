import React from 'react'
import styled from 'styled-components'

import flowerFrame from '../../assets/74967-paper-summer-shape-flower-border-free-download-png-hq.png'
import flowerFrame2 from '../../assets/R.png'
import leaf from '../../assets/tropical-leaf-pattern.png'
import leaf2 from '../../assets/pdflowerset17-gloy-01_1.png'

const Container = styled.main`

`
const Section = styled.section`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #ff3fac;

    .text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        letter-spacing: 0.05em;

        span{
            padding: 5px 25px 5px 15px;
            background-color: #fff;
            font-size: 4.75em;
            line-height: 1.7em;
        }
    }

    .flower-frame{
        position absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        z-index: 3;
    }

    .leaf{
        z-index: 2;
    }

    .leaf2{
        z-index: 1;
    }

`


const Home = () => {
   
//   const [scrollValue, setScrollValue] = useState(0);

//   useEffect(() => {

//     const onScroll = (e) => {
//       setScrollValue(e.target.documentElement.scrollTop);
//     };

//     window.addEventListener('scroll', onScroll);

//     return () => window.removeEventListener('scroll', onScroll);
//   }, [scrollValue]);


    return (
        <Container >
            <Section id="section1">
                <p className='text'><span style=''>"Dream</span><br /> <span>Big"</span></p>
                <div>
                    <img className='flower-frame' src={flowerFrame} alt='' />
                    <img className='flower-frame' src={flowerFrame2} alt='' />
                    <img className='flower-frame leaf' src={leaf} alt='' />
                    <img className='flower-frame leaf2' src={leaf2} alt='' />
                </div>
            </Section>
              
        </Container>
    )
}

export {Home}