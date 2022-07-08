import styled from 'styled-components'


export const Container = styled.main`
font-family: 'Sacramento', cursive;
    #section1{
       background-image: linear-gradient(to bottom, #e80386 0%,#ff36a8 49%,#ff42ae 100%);
    background-color: #ff3fac;    
    }

    #section2{
        background-color: #00b7d5;
      
            .avatar{
                width: 400px;
                height: 400px;
                left: 50%;
                transform: translate(-50%);
            }

            .glasses{
                width: 95px;
                left: calc(50% + 5px);
                top: 135px;
                transform: translate(-50%);
            }

            .hi{
                width: 20%;
                 top: 20px;
                 right: 10%;
            }

    }
`
export const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

   
`
export const Images = styled.div`

    .top1{
        top: 0%;
        left: 33%;
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
        width: 5%;
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
    transform: translate(-50%, -50%) skew(-5deg) rotate(-2deg);
    -webkit-transform: translate(-50%, -50%) skew(-5deg) rotate(-2deg);
    z-index: 1;
    text-align: center;
    user-select: none;
}

h1{
  font: 400 19vh "Sacramento";
  color: #fee;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff42ae, 0 0 0.5em #ff42ae, 0 0 0.1em #00b7d5, 0 10px 3px #36454F;
}
h1 span{
  animation: blink linear infinite 2s;
}
h1 span:nth-of-type(2){
  animation: blink linear infinite 3s;
}
h1 span:nth-of-type(3){
  animation: blink linear infinite 4s;
}
@keyframes blink {
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
