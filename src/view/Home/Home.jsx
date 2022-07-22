import React, {useEffect, useState} from 'react'

import top1 from '../../assets/section2/16.png'
import top2 from '../../assets/section2/11.png'
import top3 from '../../assets/section2/7.png'
import top4 from '../../assets/section2/6.png'
// import top5 from '../../assets/section2/8.png'
import top6 from '../../assets/section2/ezgif-3-cfa0e24e09-removebg.png'
import top7 from '../../assets/section2/17.png'
import top8 from '../../assets/section2/[removal.ai]_tmp-62b5a4e35d48c.png'
import top9 from '../../assets/section2/html.webp'
import top10 from '../../assets/section2/19.png'
import top11 from '../../assets/section2/3-removebg-preview.png'
import top12 from '../../assets/section2/2.png'
// import top13 from '../../assets/section2/1.png'
// import top14 from '../../assets/section2/4.png'
// import top15 from '../../assets/section2/3.png'
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
// import bottom7 from '../../assets/section2/18.png'
import bottom8 from '../../assets/section2/22.png'
// import bottom9 from '../../assets/section2/UI-UX-6-25-2022 (1).png'
import bottom10 from '../../assets/section2/20.png'
// import bottom11 from '../../assets/section2/rocket.webp'

import shadow from '../../assets/section2/shadow.png'
import avatar from '../../assets/section2/ReadyPlayerMe-Avatar.png'
// import avatar3d from '../../assets/section2/avatar.glb'

import holo from '../../assets/section2/holographic-projection.png'

import CV from '../../assets/resume/Profile.pdf';
// import hi from '../../assets/section2/22455f7a900bd190434513f81626ca59.png_wh300-removebg-preview.png' 
// import hi from '../../assets/section2/Hello.png'


import { Container, Text, Images, Image, Section, About } from './styles'


const Home = () => {
   
  const [scrollValue, setScrollValue] = useState(0);
  const [message, setMessage] = useState('');


  useEffect(() => {

    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollValue]);


  const handleChange = event => {
    if (event.target.value.includes('yes'))
    {
      setMessage("download");
    }

    else {
      setMessage("no");
    }
    };

    return (
        <Container dir="ltr" >
            <Section id="section1">
                <Images className='top'>
                    <Image className='top1' src={top1} />
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
                    <div className='box'></div>
                    <h1>Da<span>ve</span>'s
                        <br/>
                        H<span>a</span>ven
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
          <div className='hologram'>
            <div className="card">
                <figure>
                <Image className='avatar ' src={avatar} alt='' />
                <Image className='avatar ' src={avatar} alt='' />
                <Image className='avatar ' src={avatar} alt='' />
                <Image className='avatar ' src={avatar} alt='' />
                <Image className='avatar ' src={avatar} alt='' />
                <Image className='avatar ' src={avatar} alt='' />
                <Image className='avatar ' src={avatar} alt='' />
                {/* <div id="aSide">
                        <model-viewer className='avatar' src={avatar3d} alt="VR Headset" auto-rotate camera-controls ar ios-src={avatar3d}></model-viewer>
                </div> */}
                </figure>
            </div>
            <div className='projector'>
                <Image className='holoContainer' src={holo} alt='' />
                <div className="holo"></div>
            </div>
          </div>
                <About>
              <div className='fakeMenu'>
                 <div>
                <div className="fakeButtons fakeClose"></div>
                <div className="fakeButtons fakeMinimize"></div>
                <div className="fakeButtons fakeZoom"></div>
              </div>
              <div>
                About Me
              </div>
              </div>
            <div className="fakeScreen">
              <h1 className="line1 color1">Dave's Haven v0.1
              <br/>Copyright ©2022, Daveisagirl Inc.</h1>
             
              <p className="line2 color2">I'm Daverose Tholley but you can call me Dave</p>
              <p className="line3 color2">I'm a Sierra Leonean UI/UX designer and front-end developer but i work in Ghana.</p>
              <p className="line4 color2">I love working with crazy colours and shapes, but that that doesn't mean i don't like normal things 😂.</p>
              <p className="line5 color2">Normal designs done right can be cool too. but I love making random elements work to give a visually pleasing experience.</p>
              <p className="line6 color2">When i am not coding or daydreaming of crazy designs. I love to read cheesy novels and movies, no genre preference</p>
              <p className="line7 color2">Not the ones that try not to be smart or take themselves seriously, the self aware ones. They know they are bad and they give it all they've got.</p>
              <p className="line8 color3">I respect that!</p>
              <p className="line8 color4">Do you want to download my CV? (type 'yes' or 'no')  </p>
              <p className="line10">&gt; <input type="text" onChange={handleChange} autoFocus/></p>

              {message === 'download' &&
                (
                  <div>
                    <button onClick={onClick} download>
                      Click to download
                    </button>
                  </div>
                )
              }
        
              <p className="line9">Let's work together!</p>

              </div>
                    {/* <h1>Hi</h1>
                    <p>I'm Hologram-Daverose but you can call me holo-Dave.</p>
                    <p>I'm a Sierra Leonean UI/UX designer and front-end developer but i work in Ghana.</p>
                    <p></p>
                    <p>Normal designs done right can be cool too. but I love making random elements work to give a visually pleasing experience.</p>
                    <p>When i am not coding or daydreaming of crazy designs. I love to read cheesy novels and movies, no genre preference</p>
                    <p>Not the ones that try not to be smart or take themselves seriously, the self aware ones. They know they are bad and they give it all they've got.</p>
                    <p>I respect that!</p>
                    <p>I made my holo-Dave wear glasses coz i want to show you that i am a cool and quirky babe.</p>
                    <p>That was a lie, holo-Dave's eye are creepy and they were lowley staring into my soul.</p> */}
                </About>
            </Section>
        </Container>
    )
}

export { Home }
