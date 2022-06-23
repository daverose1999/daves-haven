import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import top1 from '../../assets/section2/16.png'
import top2 from '../../assets/section2/11.png'
import top3 from '../../assets/section2/7.png'
import top4 from '../../assets/section2/6.png'
import top5 from '../../assets/section2/8.png'
import top6 from '../../assets/section2/ezgif-3-cfa0e24e09-removebg.png'
import top7 from '../../assets/section2/17.png'



import bottom1 from '../../assets/section2/9.png'
import bottom2 from '../../assets/section2/10.png'
import bottom3 from '../../assets/section2/12.png'
import bottom4 from '../../assets/section2/13.png'
import bottom5 from '../../assets/section2/14.png'












// import flowerFrame from '../../assets/74967-paper-summer-shape-flower-border-free-download-png-hq.png'
// import flowerFrame2 from '../../assets/R.png'
// import leaf from '../../assets/tropical-leaf-pattern.png'
// import leaf2 from '../../assets/pdflowerset17-gloy-01_1.png'

const Container = styled.main`



`
const Section = styled.section`
    background-color: #ff3fac;
    width: 100%;
    height: 100vh;





`
const Images = styled.div`

    .top1{
        top: 0%;
        left: 33%;
        width: 37%;
    }

    .top2{
        width: 16%;
        top: 10%;
        left: 43%;
        filter: blur(0.5px);
        -webkit-filter: blur(0.5px);
    }

    .top3{
        width: 8%;
        top: 18%;
        left: 61%;
    }

    .top4{
        width: 15%;
        top: 5%;
        left: 60%;
    }

    .top5{
        top: 0%;
        right: 8%;
        width: 22%;
    }

    .top6{
        top: 0%;
        left: 8%;
        transform: rotate(-32deg);
        width: 22%;
    }

    .top7{
        top: 17%;
        right: 26%;
        width: 5%;
    }

    .bottom1{
        bottom: 0%;
        left: -5%;
        width: 23%;
        z-index: 1;
    }

    .bottom2{
        bottom: 0%;
        right: -0%;
        width: 23%;
        z-index: 1;
    }

    .bottom3{
        bottom: 10%;
        left: 20%;
        width: 15%;
    }

     .bottom4{
       bottom: 20%;
        right: 5%;
        width: 10%;
        filter: blur(0.5px);
        -webkit-filter: blur(0.5px);
    }

    .bottom5{
       bottom: 20%;
        left: 5%;
        filter: blur(0.5px);
        -webkit-filter: blur(0.5px);
    }

`
// const Text = styled.p`
//     position: absolute;
//     left: 50%;
//     color: #ff3fac;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     text-shadow: -8px -8px -12px rgba(255, 255, 255, 0.1)
//     , 8px 8px 12px rgba(0, 0, 0, 0.1);
//     font-size: 10.0rem;
// `

const Image = styled.img`
    position: absolute;
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
                <Images className='top'>
                    <Image className='top1' src={top1} />
                    <Image className='top2' src={top2} />
                    <Image className='top3' src={top3} />
                    <Image className='top4' src={top4} />
                    <Image className='top5' src={top5} />
                    <Image className='top6' src={top6} />
                    <Image className='top7' src={top7} />
                </Images>
                <Images className='bottom'>
                    <Image className='bottom1' src={bottom1} />
                    <Image className='bottom2' src={bottom2} />
                    <Image className='bottom3' src={bottom3} />
                    <Image className='bottom4' src={bottom4} />
                    <Image className='bottom5' src={bottom5} />
                </Images>
                
             
            </Section>
             
        </Container>
    )
}

export { Home }
