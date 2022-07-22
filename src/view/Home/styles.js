import styled from 'styled-components'


export const Container = styled.main`
box-sizing: border-box;
margin: 0:
font-family: 'Sacramento', cursive;
flex-flow: column nowrap;
scroll-snap-type: y mandatory;

    
    #section1{
       background-image: linear-gradient(to bottom, #e80386 0%,#ff36a8 49%,#ff42ae 100%);
        background-image: -webkit-linear-gradient(top, #e80386 0%,#ff36a8 49%,#ff42ae 100%);
       background-color: #ff3fac;    
    }

    #section2{
        background-color: #00b7d5;

        .hologram{
            position: absolute;
            top: 50%; 
            left: 15%;
            transform: translate(-15%, -50%);
            -webkit-transform: translate(-15%, -50%);
        }

        .avatar{
            width: 220px;
            opacity: 1;
            top: 100px;
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
            -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))
        }
  
        #aSide model-viewer {
            height: 600px;
            width: 600px;
            position: absolute;
            top: 0;
            left: 0;
            border: none;
        }
    
        .card {
            width: 420px;
            height: 420px;
            margin: auto;
            animation: float 1s infinite alternate;

            figure{
                display: flex;
                justify-content: center;
            }
        }

        .projector{
            position: relative;
            height: 220px;
            display: flex;
            justify-content: center;
            
            .holoContainer{
                width: 600px;
                bottom: 40px;
                -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.5)), to(rgba(0,0,0,1)))
            }
        }

        .holo {
            z-index: 2;
            width: 150px;
            height: 5px; 
            margin: 0px auto 0;
            background-color: #FFFFFF;
            border-radius: 100%;
            filter: blur(2.5px);
            transform: perspective(100px) rotateX(-30deg);
            transform-style: preserve-3d;
            animation: holographic 1.5s infinite alternate;
            backface-visibility: hidden;
        
            &:after {
                position: absolute;
                left: -10px;
                right: -10px;
                content: "";
                height: 20px;
                background-color: #FFFFFF80;
                border-radius: 100%;
                filter: blur(2.5px);
            }
        
        + .holo {
            animation-duration: .75s;
            opacity: .5;
            }
        }

        @keyframes float {
            from {
                will-change: unset;
                transform: translateY(-10px)
            } to {
                will-change: transform;
                transform: translateY(-30px)
            }
        }

        @keyframes holographic {
            from {
                will-change: box-shadow;
                box-shadow:
                0 -75px 5px #FFFFFF26,
                0 -1px 2px #FFFFFF0D,
                0 -45px 5px #FFFFFF26,
                0 -2px 3px #FFFFFF0D,
                0 -3px 4px #FFFFFF0D,
                0 -4px 6px #FFFFFF0D,
                0 -5px 10px #FFFFFFBF,
                0 -7px 20px #FFFFFFBF,
                0 -10px 30px #FFFFFFBF,
                0 -15px 40px #FFFFFFBF,
                0 -25px 50px #FFFFFFBF,
                0 -35px 60px #FFFFFFD9,
                0 -45px 70px #FFFFFFF2,
                0 -65px 80px #FFFFFFFF,
                0 -75px 90px #FFFFFFFF;
            } 
            to {
                will-change: unset;
                box-shadow:
                0 -1px 5px #FFFFFF26,
                0 -1px 2px #FFFFFF0D,
                0 -1px 5px #FFFFFF26,
                0 -2px 3px #FFFFFF0D,
                0 -3px 4px #FFFFFF0D,
                0 -4px 6px #FFFFFF0D,
                0 -5px 7px #FFFFFFBF,
                0 -7px 10px #FFFFFFBF,
                0 -10px 15px #FFFFFFBF,
                0 -15px 20px #FFFFFFBF,
                0 -25px 25px #FFFFFFBF,
                0 -35px 30px #FFFFFFD9,
                0 -45px 35px #FFFFFFF2,
                0 -65px 40px #FFFFFFFF,
                0 -75px 50px #FFFFFFFF;
            }
        }
    }
`
export const Section = styled.section`
    position: relative;
    scroll-snap-align: start;
    width: 100%;
    height: 100vh;
    overflow: hidden;


.avatar:nth-child(n+2) {
  opacity: 0;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.avatar:nth-child(2) {
  background-color: transparent;
  background-blend-mode: normal;
  -webkit-animation-name: glitch-anim-1;
  animation-name: glitch-anim-1;
}
.avatar:nth-child(3) {
  background-color: transparent;
  background-blend-mode: normal;
  -webkit-animation-name: glitch-anim-2;
  animation-name: glitch-anim-2;
}
.avatar:nth-child(4) {
  background-color: transparent;
  background-blend-mode: overlay;
  -webkit-animation-name: glitch-anim-3;
  animation-name: glitch-anim-3;
}
.avatar:nth-child(5) {
  background-color: transparent;
  background-blend-mode: overlay;
  -webkit-animation-name: glitch-anim-flash;
  animation-name: glitch-anim-flash;
}

.avatar:nth-child(6) {
  background-color: transparent;
  background-blend-mode: overlay;
  -webkit-animation-name: glitch-anim-flash;
  animation-name: glitch-anim-flash;
}
.avatar:nth-child(7) {
  background-color: transparent;
  background-blend-mode: normal;
  -webkit-animation-name: glitch-anim-1;
  animation-name: glitch-anim-1;
}

@-webkit-keyframes glitch-anim-1 {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(3px, 0, 0);
    transform: translate3d(3px, 0, 0);
    -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); }
  2% {
    -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
    clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
  4% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
    clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); }
  6% {
    -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
    clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); }
  8% {
    -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }
  10% {
    -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
  12% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); }
  14% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); }
  16% {
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); }
  18% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); }
  20% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%); }
  21.9% {
    opacity: 1;
    -webkit-transform: translate3d(3px, 0, 0);
    transform: translate3d(3px, 0, 0); }
  22%, 100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0); 
    } 
}

@keyframes glitch-anim-1 {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(3px, 0, 0);
    transform: translate3d(3px, 0, 0);
    -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); }
  2% {
    -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
    clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
  4% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
    clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); }
  6% {
    -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
    clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); }
  8% {
    -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }
  10% {
    -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
  12% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); }
  14% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); }
  16% {
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); }
  18% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); }
  20% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%); }
  21.9% {
    opacity: 1;
    -webkit-transform: translate3d(3px, 0, 0);
    transform: translate3d(3px, 0, 0); }
  22%, 100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0); } }

@-webkit-keyframes glitch-anim-2 {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(calc(-1 * 3px), 0, 0);
    transform: translate3d(calc(-1 * 3px), 0, 0);
    -webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
    clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%); }
  3% {
    -webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
    clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%); }
  5% {
    -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
    clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%); }
  7% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%); }
  9% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
    clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%); }
  11% {
    -webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
    clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%); }
  13% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%); }
  15% {
    -webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
    clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%); }
  17% {
    -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
    clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%); }
  19% {
    -webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
    clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%); }
  20% {
    -webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
    clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%); }
  21.9% {
    opacity: 1;
    -webkit-transform: translate3d(calc(-1 * 3px), 0, 0);
    transform: translate3d(calc(-1 * 3px), 0, 0); }
  22%, 100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0); } }

@keyframes glitch-anim-2 {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(calc(-1 * 3px), 0, 0);
    transform: translate3d(calc(-1 * 3px), 0, 0);
    -webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
    clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%); }
  3% {
    -webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
    clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%); }
  5% {
    -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
    clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%); }
  7% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%); }
  9% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
    clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%); }
  11% {
    -webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
    clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%); }
  13% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%); }
  15% {
    -webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
    clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%); }
  17% {
    -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
    clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%); }
  19% {
    -webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
    clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%); }
  20% {
    -webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
    clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%); }
  21.9% {
    opacity: 1;
    -webkit-transform: translate3d(calc(-1 * 3px), 0, 0);
    transform: translate3d(calc(-1 * 3px), 0, 0); }
  22%, 100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0); } }

@-webkit-keyframes glitch-anim-3 {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(0, calc(-1 * 3px), 0) scale3d(-1, -1, 1);
    transform: translate3d(0, calc(-1 * 3px), 0) scale3d(-1, -1, 1);
    -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
    clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%); }
  1.5% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
    clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%); }
  2% {
    -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
    clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%); }
  2.5% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%); }
  3% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
    clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%); }
  5% {
    -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
    clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%); }
  5.5% {
    -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
    clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%); }
  7% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
    clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%); }
  8% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%); }
  9% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
    clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%); }
  10.5% {
    -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
    clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%); }
  11% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
    clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%); }
  13% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
    clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%); }
  14% {
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
    clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%); }
  14.5% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
    clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%); }
  15% {
    -webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
    clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%); }
  16% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%); }
  18% {
    -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
    clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%); }
  20% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
    clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%); }
  21.9% {
    opacity: 1;
    -webkit-transform: translate3d(0, calc(-1 * 3px), 0) scale3d(-1, -1, 1);
    transform: translate3d(0, calc(-1 * 3px), 0) scale3d(-1, -1, 1); }
  22%, 100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0); } }

@keyframes glitch-anim-3 {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(0, calc(-1 * 3px), 0) scale3d(-1, -1, 1);
    transform: translate3d(0, calc(-1 * 3px), 0) scale3d(-1, -1, 1);
    -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
    clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%); }
  1.5% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
    clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%); }
  2% {
    -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
    clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%); }
  2.5% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%); }
  3% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
    clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%); }
  5% {
    -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
    clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%); }
  5.5% {
    -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
    clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%); }
  7% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
    clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%); }
  8% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%); }
  9% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
    clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%); }
  10.5% {
    -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
    clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%); }
  11% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
    clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%); }
  13% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
    clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%); }
  14% {
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
    clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%); }
  14.5% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
    clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%); }
  15% {
    -webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
    clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%); }
  16% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%); }
  18% {
    -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
    clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%); }
  20% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
    clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%); }
  21.9% {
    opacity: 1;
    -webkit-transform: translate3d(0, calc(-1 * 3px), 0) scale3d(-1, -1, 1);
    transform: translate3d(0, calc(-1 * 3px), 0) scale3d(-1, -1, 1); }
  22%, 100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0); } }

@-webkit-keyframes glitch-anim-text {
  0% {
    -webkit-transform: translate3d(calc(-1 * 3px), 0, 0) scale3d(-1, -1, 1);
    transform: translate3d(calc(-1 * 3px), 0, 0) scale3d(-1, -1, 1);
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%); }
  2% {
    -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }
  4% {
    -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
  5% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); }
  6% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); }
  7% {
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); }
  8% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); }
  9% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%); }
  9.9% {
    -webkit-transform: translate3d(calc(-1 * 3px), 0, 0) scale3d(-1, -1, 1);
    transform: translate3d(calc(-1 * 3px), 0, 0) scale3d(-1, -1, 1); }
  10%, 100% {
    -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); } }

@keyframes glitch-anim-text {
  0% {
    -webkit-transform: translate3d(calc(-1 * 3px), 0, 0) scale3d(-1, -1, 1);
    transform: translate3d(calc(-1 * 3px), 0, 0) scale3d(-1, -1, 1);
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%); }
  2% {
    -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }
  4% {
    -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
  5% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); }
  6% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); }
  7% {
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); }
  8% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); }
  9% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%); }
  9.9% {
    -webkit-transform: translate3d(calc(-1 * 3px), 0, 0) scale3d(-1, -1, 1);
    transform: translate3d(calc(-1 * 3px), 0, 0) scale3d(-1, -1, 1); }
  10%, 100% {
    -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); } }

@-webkit-keyframes glitch-anim-flash {
  0%, 5% {
    opacity: 0.2;
    -webkit-transform: translate3d(3px, 3px, 0);
    transform: translate3d(3px, 3px, 0); }
  5.5%, 100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0); } }

@keyframes glitch-anim-flash {
  0%, 5% {
    opacity: 0.2;
    -webkit-transform: translate3d(3px, 3px, 0);
    transform: translate3d(3px, 3px, 0); }
  5.5%, 100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0); } }
`
export const Images = styled.div`

    .top1{
        top: 0%;
        left: 35%;
        width: 37%;
    }

    .top2{
        width: 12%;
        top: 10%;
        left: 43%;
        // filter: blur(0.5px);
        // -webkit-filter: blur(0.5px);
        z-index: 2;
    }

    .top3{
        width: 7%;
        top: 15%;
        left: 61%;
        z-index: 1;
    }

    .top4{
        width: 13%;
        top: 5%;
        left: 60%;
        z-index: 1;
    }

    .top5{
        top: 0%;
        right: 8%;
        width: 16%;
        z-index: 1;
    }

    .top6{
        top: 0%;
        left: 0%;
        transform: rotate(-32deg);
        width: 20%;
        z-index: 1
    }

    .top7{
        top: 12%;
        right: 26%;
        width: 4%;
        z-index: 1
    }

    .top8{
        top: 5%;
        left: 23%;
        // transform: rotate(30deg);
        width: 13%;
        filter: blur(3px);
        -webkit-filter: blur(3px);
        z-index: 1;
    }

    .top9{
        top: 5%;
        right: 2%;
        width: 13%;
        transform: rotate(60deg);
        filter: blur(2px);
        -webkit-filter: blur(2px);
    }

    .top10{
        top: 20%;
        right: 5%;
        width: 13%;
         filter: blur(2px);
        -webkit-filter: blur(2px);
    }

    .top11{
        top: -5%;
        left: 15%;
        width: 13%;
        transform: rotate(150deg);
        filter: blur(2px);
        -webkit-filter: blur(2px);
        z-index: 0;
    }

    .top12{
        top: -10%;
        left: 0%;
        width: 5%;
    }
    
    .top13{
        top: 10%;
        left: 6%;
        width: 4%;
    }

    .top14{
        top: -5%;
        left: 10%;
        width: 4%;
    }

    .top15{
        top: 2%;
        left: 10%;
        width: 4%;
    }

    .top16{
        top: 5%;
        right: 10%;
        width: 3%;
    }

    .top17{
        top: 2%;
        right: 10%;
        width: 3%;
    }

    .top18{
        top: -5%;
        right: 15%;
        width: 6%;
       filter: blur(1px);
        -webkit-filter: blur(1px); 
    }

    .top19{
        top: -5%;
        left: 40%;
        width: 6%;
        transform: rotate(40deg);
        filter: blur(2px);
        -webkit-filter: blur(2px); 
    }

    .bottom1{
        bottom: 0%;
        left: -5%;
        width: 25%;
        z-index: 2;
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
        width: 13%;
        z-index: 1;
    }

     .bottom4{
       bottom: 10%;
        right: 0%;
        width: 15%;

    }

    .bottom5{
        bottom: 0%;
        right: 15%;
        width: 13%;
    }


    .bottom6{
        position: absolute;
        bottom: 5%;
        left: 12%;
        width: 15%;
        z-index: 1;
 
        img{
            bottom: 0;
            position: absolute;
            width: 100%;
        }

        .image{
            transform: rotate(40deg);
        }

        .shadow{
            opacity: 0.2;
        }
    }

    
    .bottom7{
        bottom: 20%;
        left: 30%;
        width: 15%;
        filter: blur(1px);
        -webkit-filter: blur(1px);
    }
     
    .bottom8{
        bottom: 15%;
        left: 5%;
        width: 15%;
    }

    .bottom9{
        top: 0;
        left: 50%;
    }

    .bottom10{
        
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 13%;
        z-index: 1;
    }
    .bottom11{
        bottom: 20%;
        left: 50%;
        width: 15%;
        filter: blur(1px);
        -webkit-filter: blur(1px);
        // z-index: 1;
    }
`
export const Image = styled.img`
    position: absolute;
`

export const Text = styled.div`
    position: absolute;
    width: fit-content;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    z-index: 1;
    text-align: center;
    user-select: none;
}


h1{
  font: 400 19vh "Sacramento";
  color: #fff;
  margin: 0;
  padding: 50px;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff42ae, 0 0 0.5em #f40, 0 0 0.1em #f40, 0 10px 3px #36454F;
  line-height: 100%;
  transform:  rotate(-2deg);
  -webkit-transform: rotate(-2deg);
}

h1 span{
  animation: textblink linear infinite 2s;
}

h1 span:nth-of-type(2){
  animation: textblink linear infinite 3s;
}


@keyframes textblink {
  78% {
    color: inherit;
    text-shadow: inherit;
  }
  79%{
     color: #333;
  }
  80% {
    
    text-shadow: none;
  }
  81% {
    color: inherit;
    text-shadow: inherit;
  }
  82% {
    color: #333;
    text-shadow: none;
  }
  83% {
    color: inherit;
    text-shadow: inherit;
  }
  92% {
    color: #333;
    text-shadow: none;
  }
  92.5% {
    color: inherit;
    text-shadow: inherit;
  }
}
`

export const About = styled.div`
    position: absolute;
    width: 35%;
    top: 100px;
    right: 100px;
    box-shadow: 6px 2px 22px -7px rgba(0,0,0,0.75);
    -webkit-box-shadow: 6px 2px 22px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 2px 22px -7px rgba(0,0,0,0.75);

    .fakeButtons {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid #000;
    position: relative;
    // top: 6px;
    left: 6px;
    background-color: #ff3b47;
    border-color: #9d252b;
    display: inline-block;
    }

    .fakeMinimize {
    left: 11px;
    background-color: #ffc100;
    border-color: #9d802c;
    }

    .fakeZoom {
    left: 16px;
    background-color: #00d742;
    border-color: #049931;
    }

    .fakeMenu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        height: 25px;
        background-color: #bbb;
        margin: 0 auto;
        text-align: center;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;

        div{
            font-family: 'Source Code Pro', sans-serif;
            color: #4c4c4c;
        }
    }

    .fakeScreen {
    background-color: #151515;
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    }

    h1{
      font-size: 14px;
      font-family: monospace;
      font-weight: normal;
    }

    p {
    position: relative;
    text-align: left;
    font-size: 14px;
    font-family: monospace;
    color: #fff;
    }

    span {
    color: #fff;
    font-weight: bold;
    }

     input {
            background: transparent;
            border: none;
            color: #fff;
            cursor: default;
            font-family: monospace;
            font-size: 14px;
            padding: 0;
            caret-shape: underscore;

            
            &:focus {
               border: none;
               outline: none;
            }         
         }

        input > span {
          animation: blink 1s step-end infinite;
          border-bottom: 2px solid white;
        }

        @keyframes blink {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #fff;
          }
        }

.color1 {
  color: #9CD9F0;
}

.color2 {
  color: #CDEE69;
  
}

.color3 {
  color: #E09690;
}

.color4 {
  color: #9690E0;
}

// .line1 {
//   color: #9CD9F0;
// }

// .line2 {
//   color: #CDEE69;
// }

// .line3 {
//   color: #E09690;
// }

// .line4 {
//   color: #9690E0;
// }
// .line5 {
//   color: #3FFF92;
// }
// .line6 {
//   color: #EFA310;
// }
// .line7 {
//   color: #EF105C;
// }

// .line8 {
//   color: #F6F109;
// }
`
