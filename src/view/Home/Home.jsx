import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import top1 from '../../assets/section2/16.png'
import top2 from '../../assets/section2/11.png'
import top3 from '../../assets/section2/7.png'
import top4 from '../../assets/section2/6.png'
import top5 from '../../assets/section2/8.png'
import top6 from '../../assets/section2/ezgif-3-cfa0e24e09-removebg.png'
import top7 from '../../assets/section2/17.png'
import top8 from '../../assets/section2/[removal.ai]_tmp-62b5a4e35d48c.png'
import top9 from '../../assets/section2/html.webp'


import bottom1 from '../../assets/section2/9.png'
import bottom2 from '../../assets/section2/10.png'
import bottom3 from '../../assets/section2/12.png'
import bottom4 from '../../assets/section2/vuejs.webp'
import bottom5 from '../../assets/section2/react.png'
import bottom6 from '../../assets/section2/css.webp'
import shadow from '../../assets/section2/shadow.png'


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
        left: 10%;
        transform: rotate(-32deg);
        width: 22%;
        z-index: 1
    }

    .top7{
        top: 17%;
        right: 26%;
        width: 5%;
    }

    .top8{
        top: 15%;
        left: 27%;
        width: 15%;
        filter: blur(3px);
        -webkit-filter: blur(3px);
    }

    .top9{
        top: 5%;
        right: 2%;
        width: 15%;
        transform: rotate(60deg);
        filter: blur(2px);
        -webkit-filter: blur(2px);
    }

    .bottom1{
        bottom: 0%;
        left: -5%;
        width: 23%;
        z-index: 1;
    }

    .bottom2{
        bottom: 0%;
        right: 0%;
        width: 23%;
        z-index: 1;
    }

    .bottom3{
        bottom: 10%;
        left: 25%;
        width: 15%;
    }

     .bottom4{
       bottom: 10%;
        right: 0%;
        width: 15%;

    }

    .bottom5{
        bottom: 0%;
        right: 15%;
        width: 15%;
    }


    .bottom6{
        position: absolute;
        bottom: 5%;
        left: 10%;
        width: 15%;
 
        img{
            bottom: 0;
            position: absolute;
            width: 100%;
        }

        .image{
            transform: rotate(30deg);
        }

        .shadow{
            opacity: 0.3;
        }
    }
`

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
                    <Image className='top8' src={top8} />
                    <Image className='top9' src={top9} />
                </Images>

                <Images className='bottom'>
                    <Image className='bottom1' src={bottom1} />
                    <Image className='bottom2' src={bottom2} />
                    <Image className='bottom3' src={bottom3} />
                    <Image className='bottom4' src={bottom4} />
                    <Image className='bottom5' src={bottom5} />
                    <div className='bottom6'>
                        <Image className='image' src={bottom6} />
                        <Image className='shadow' src={shadow} />
                    </div>
                </Images>
                
             
            </Section>
             
        </Container>
    )
}

export { Home }
