import styled from 'styled-components'


export const Container = styled.main`
    #section1{
        background-color: #ff3fac;       
    }

    #section2{
        background-color: #00b7d5;
        model-viewer {
            height: 600px;
            width: 600px;
            position: absolute;
            top: 0;
            left: 0;
            border: none;
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
        width: 14%;
        top: 10%;
        left: 43%;
        // filter: blur(0.5px);
        // -webkit-filter: blur(0.5px);
        z-index: 2;
    }

    .top3{
        width: 7%;
        top: 18%;
        left: 61%;
        z-index: 1;
    }

    .top4{
        width: 15%;
        top: 5%;
        left: 60%;
        z-index: 1;
    }

    .top5{
        top: 0%;
        right: 8%;
        width: 18%;
        z-index: 1;
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
        top: 5%;
        left: 27%;
        width: 15%;
        filter: blur(3px);
        -webkit-filter: blur(3px);
        z-index: 1;
    }

    .top9{
        top: 5%;
        right: 2%;
        width: 15%;
        transform: rotate(60deg);
        filter: blur(2px);
        -webkit-filter: blur(2px);
    }

    .top10{
        top: 20%;
        right: 5%;
        width: 15%;
         filter: blur(2px);
        -webkit-filter: blur(2px);
    }

    .top11{
        top: -5%;
        left: 15%;
        width: 15%;
        transform: rotate(150deg);
        filter: blur(2px);
        -webkit-filter: blur(2px);
        z-index: 0;
    }

    .top12{
        top: -10%;
        left: 0%;
        width: 8%;
    }
    
    .top13{
        top: 10%;
        left: 6%;
        width: 5%;
    }

    .top14{
        top: -5%;
        left: 10%;
        width: 5%;
    }

    .top15{
        top: 2%;
        left: 10%;
        width: 4%;
    }

    .top16{
        top: 5%;
        right: 10%;
        width: 4%;
    }

    .top17{
        top: 2%;
        right: 10%;
        width: 4%;
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
        width: 23%;
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
        width: 15%;
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
        width: 15%;
    }


    .bottom6{
        position: absolute;
        bottom: 5%;
        left: 10%;
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
        left: 2%;
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
        width: 15%;
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
    text-transform: uppercase;
    font-family: Exo;
    
    h1 {
    font-size: 5rem;
    font-weight: 200;
    font-style: italic;
    color: #fff;
    padding: 20px;
    border: 0.4rem solid #fff;
    border-radius: 2rem;
    text-transform: uppercase;
    animation: flicker 1.5s infinite alternate;     
    }

    h1::-moz-selection {
    background-color: #08f;
    color: #f40;
    }

    h1::selection {
    background-color: #08f;
    color: #f40;
    }

    h1:focus {
    outline: none;
    }

    /* Animate neon flicker */
    @keyframes flicker {
        
        0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        
            text-shadow:
                -0.2rem -0.2rem 1rem #fff,
                0.2rem 0.2rem 1rem #fff,
                0 0 2rem #f40,
                0 0 4rem #f40,
                0 0 6rem #f40,
                0 0 8rem #f40,
                0 0 10rem #f40;
            
            box-shadow:
                0 0 .5rem #fff,
                inset 0 0 .5rem #fff,
                0 0 2rem #08f,
                inset 0 0 2rem #08f,
                0 0 4rem #08f,
                inset 0 0 4rem #08f;        
        }
        
        20%, 24%, 55% {        
            text-shadow: none;
            box-shadow: none;
        }    
    }
`
