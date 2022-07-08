import React, {useEffect, useState} from 'react'

import top1 from '../../assets/section2/16.png'
import top2 from '../../assets/section2/11.png'
import top3 from '../../assets/section2/7.png'
import top4 from '../../assets/section2/6.png'
import top5 from '../../assets/section2/8.png'
import top6 from '../../assets/section2/ezgif-3-cfa0e24e09-removebg.png'
import top7 from '../../assets/section2/17.png'
import top8 from '../../assets/section2/[removal.ai]_tmp-62b5a4e35d48c.png'
import top9 from '../../assets/section2/html.webp'
import top10 from '../../assets/section2/19.png'
import top11 from '../../assets/section2/3-removebg-preview.png'
import top12 from '../../assets/section2/2.png'
import top13 from '../../assets/section2/1.png'
import top14 from '../../assets/section2/4.png'
import top15 from '../../assets/section2/3.png'
import top16 from '../../assets/section2/24.png'
import top17 from '../../assets/section2/25.png'
import top18 from '../../assets/section2/[removal.ai]_tmp-62b7562603c78.png'
import top19 from '../../assets/section2/13.png'

import bottom1 from '../../assets/section2/9.png'
import bottom2 from '../../assets/section2/10.png'
import bottom3 from '../../assets/section2/12.png'
import bottom4 from '../../assets/section2/vuejs.webp'
import bottom5 from '../../assets/section2/react.png'
import bottom6 from '../../assets/section2/css.png'
import bottom7 from '../../assets/section2/18.png'
import bottom8 from '../../assets/section2/22.png'
import bottom9 from '../../assets/section2/UI-UX-6-25-2022 (1).png'
import bottom10 from '../../assets/section2/20.png'
import bottom11 from '../../assets/section2/rocket.webp'

import shadow from '../../assets/section2/shadow.png'
import avatar from '../../assets/section2/ReadyPlayerMe-Avatar.png'
import glasses from '../../assets/section2/[removal.ai]_tmp-62b8634ae8f7a.png'
import hi from '../../assets/section2/22455f7a900bd190434513f81626ca59.png_wh300-removebg-preview.png' 
// import hi from '../../assets/section2/Hello.png'




import { Container, Text, Images, Image, Section } from './styles'


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
                    {/* <Image className='top1' src={top1} /> */}
                    <Image className='top2' src={top2} />
                    <Image className='top3' src={top3} />
                    <Image className='top4' src={top4} />
                    {/* <Image className='top5' src={top5} /> */}
                    <Image className='top6' src={top6} />
                    <Image className='top7' src={top7} />
                    <Image className='top8' src={top8} />
                    <Image className='top9' src={top9} />
                    <Image className='top10' src={top10} />
                    <Image className='top11' src={top11} />
                    <Image className='top12' src={top12} />
                    {/* <Image className='top13' src={top13} /> */}
                    {/* <Image className='top14' src={top14} /> */}
                    {/* <Image className='top15' src={top15} /> */}
                    <Image className='top16' src={top16} />
                    <Image className='top17' src={top17} />
                    <Image className='top18' src={top18} />
                    <Image className='top19' src={top19} />

                </Images>
                <Text>
                    <h1>Da<span>ve</span>'s
                        H<span>a</span>v
                        <span>e</span>n
                    </h1>
                </Text>
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
                    {/* <Image className='bottom7' src={bottom7} /> */}
                    <Image className='bottom8' src={bottom8} />
                    {/* <Image className='bottom9' src={bottom9} /> */}
                    <Image className='bottom10' src={bottom10} />
                    {/* <Image className='bottom11' src={bottom11} /> */}
            </Images>
            </Section>
            <Section id='section2'>
                <Image className='avatar' src={avatar} alt='' />
                <Image className='glasses' alt='' src={glasses} />
                <Image className='hi' alt='' src={hi} />
            </Section>
        </Container>
    )
}

export { Home }
