import React, { Component } from "react";
import SocialShare from '../components/socialShare'
import Barchart from '../components/Barchart'
import Recaman from '../components/Recaman'
import styled from 'styled-components';
import Logo from '../images/BBLogo.png'
import Layout from '../components/layout'
import Prism from 'prismjs';
import "../components/prism.css";




const Wrapper = styled.div`
margin: 0;
padding: 0;
color: #2B2B2B;
@keyframes HeroAnimation {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 3;
    transform: translateY(0);
  }
}
.social {
    text-align: center;
    margin: 0 0 5rem;
}
`
const WrapperHero = styled.div`
background-color: #ffc600;
background-image: linear-gradient(45deg, #ffc600 17%, #faef5e 75%);
text-align: center;
height: 100%;
margin: 0;
padding: 6rem 0;
color: #2B2B2B;
img {
    animation: HeroAnimation;
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}
h1 {
    color: #2B2B2B;
    margin: 0rem 0 5rem;
    font-weight: 900;
    font-size: 70px;
    animation: HeroAnimation;
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}
p {
    margin: 0rem auto 3rem;
    padding: 0 1rem;
    max-width: 800px;
    font-weight: 400;
    font-size: 28px;
    animation: HeroAnimation;
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}
strong { 
    font-weight: 900;
}
a {
    color: #fff;
    background-color: #DE541E;
    font-weight: 900;
    padding: .8rem 2.4rem;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
}
a:hover {
    background-color: #2B2B2B;
    color: #fff;
    border: none;
    box-shadow: 0px 10px 20px rgba(0,0,0,0.5);
    transform: translateY(-9px);
}
@media (max-width: 940px) {
    h1 {
        font-size: 40px;
    }
    p{
        font-size: 20px;
    }
}
`

const WrapperUsage = styled.div`
margin: 5rem auto;
max-width: 800px;
padding: 0 1.5rem;
`
const WrapperGetStart = styled.div`
margin: 5rem auto;
max-width: 800px;
padding: 0 1.5rem;
`
const WrapperHooks = styled.div`
margin: 5rem auto;
max-width: 800px;
padding: 0 1.5rem;
svg {
        width: 800;
        height: 400;
    }
`
const WrapperAnchor = styled.div`
margin: 5rem auto;
max-width: 800px;
padding: 0 1.5rem;
`
const WrapperFooter = styled.div`
background-color: #2B2B2B;
text-align: center;
height: 100%;
padding: 1rem 0;
color: #fff;
display: grid;
align-items: center;
justify-items: center;
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas:
"BU WL YS";
@media (max-width: 940px) {
    grid-template-columns: 1fr;
    grid-template-areas:
"BU"
"WL"
"YS";
}
h2 {
    grid-area: WL;
}
.Built {
    grid-area: BU;
}
.Years {
    grid-area: YS;
    font-size: 14px;
}
p {
    font-size: 18px;
}
`
export default class Demo extends Component  {
    componentDidMount() {
        Prism.highlightAll();
      }
    render() {
        return (
          <Layout>
        <Wrapper>
                <WrapperHero>
                    <h1>D3 BLACKBOX</h1>
                    <img src={Logo} height='300px' alt='hero'/>
                    <p>
                        Take any <strong>D3 </strong>example you find in the wild and wrap it in a
                        React component. Great for quick experiments and meeting
                        deadlines. <span role="img" aria-label='face'>😛</span>
                    </p>
                    <a href="https://github.com/Swizec/d3blackbox">Source code on GitHub
                    </a>
                </WrapperHero>

                <WrapperUsage>
                    <h1>Basic usage</h1>

                    <p>
                        A{" "}
                        <a href="https://cdn.rawgit.com/mbostock/3885304/raw/a91f37f5f4b43269df3dbabcda0090310c05285d/index.html">
                            barchart from D3
                        </a>{" "}
                        docs wrapped in a React component. Takes 2 minutes to do
                        from scratch with any code you find. <span role="img" aria-label='face'>👇</span>
                    </p>
                    <div class="iframe-container">
                    <iframe
                        src="https://codesandbox.io/embed/km3l21y60r"
                        title="This is a unique title"
                        style={{
                            width: 800,
                            height: 500,
                            border: 0,
                            borderRadius: 4,
                            overflow: "hidden",
                        }}
                        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                    />
                    </div>
                    <svg width="300" height="200">
        <Barchart x={10} y={10} width={300} height={200} />
      </svg>
                </WrapperUsage>
                <WrapperGetStart>
                    <h1>Getting Started</h1>
                    <h3>
                        1. Install 
                        <pre>
                        <code className="language-javascript">{'d3blackbox'}</code> and <code className="language-javascript">{'d3'}</code>
                        </pre>
                    </h3>
                    <p>
                        <pre>
                        <code className="language-javascript">{'$ npm install d3blackbox'}</code>
                        </pre>
                    </p>
                    <h3>
                        2. Wrap D3 code in <code className="language-javascript">{'D3blackbox'}</code>
                    </h3>
                    <pre>
                    <code className="language-javascript">
{`
import React from "react";
import D3blackbox from "d3blackbox";
import * as d3 from "d3";
const Barchart = D3blackbox(function(anchor, props, state) {
    const svg = d3.select(anchor.current);
    // the rest of your D3 code
});
export default Barchart;`}
                    </code>
                    </pre>
                    <h3>3. Render your component</h3>
                    <p>
                        <pre>
                        <code className="language-javascript">{`
    <Barchart x={10} y={10} width={300} height={200} />
                        `}</code>
                        </pre>
                    </p>
                    <p>
                    <svg width="300" height="200">
        <Barchart x={10} y={10} width={300} height={200} />
      </svg>
                    </p>

                    <h1>Codesandbox</h1>

                    <p>
                        Here's a Codesandbox example, if you prefer to play around.
                    </p>
                    <div class="iframe-container">
                    <iframe
                        src="https://codesandbox.io/embed/9jm82v2lry"
                        title="This is a unique title"
                        style={{
                            width: 800,
                            height: 500,
                            border: 0,
                            borderRadius: 4,
                            overflow: "hidden"
                        }}
                        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                    />
                    </div>
                </WrapperGetStart>
                <WrapperAnchor>
                    <h1>Use different anchor component</h1>
                    <p>
                        By default D3blackbox wraps your D3 render method in a
                        &lt;g&gt; element. You can change that with the{" "}
                        <code>component</code> prop.
                    </p>
                    <pre>
                    <code className="language-javascript">{`
    <Barchart component="div" />
                        `}</code>
                        </pre>
                    <p>Make sure your renderer knows how to handle that.</p>
                    <p/>
                </WrapperAnchor>
                <WrapperHooks>
                    <h1>Use with React hooks</h1>
                    <p>
                        React Hooks are still in alpha, but I know you're gonna ask.
                        Yes, there's a hooks version <code>useD3</code>.
                    </p>
                    <p>
                    <svg width="350" height="300" viewBox="0 0 760 500"
  preserveAspectRatio="xMidYMid meet">
                            <Recaman x={150} y={150} width={350} height={300} />
                        </svg>
                    </p>
                    <pre>
                <code className="language-javascript">
                {`
import { useD3 } from "d3blackbox";
function renderSomeD3(anchor) {
    d3.select(anchor);
    // ...
}
const MyD3Component = ({ x, y }) => {
    const refAnchor = useD3(anchor => renderSomeD3(anchor));
    return <g ref={refAnchor} transform={\`translate(\${x}, \${y})\`} />;
};
                `}</code>
                </pre>
                    <p>
                        Think of that <code className="language-javascript">{'renderSomeD3'}</code> call as a render
                        prop. Use it to pass any props into your D3 render function
                        as
                    </p>
                </WrapperHooks>
                <div className='social'>
                    <h1>Share!</h1>
                    <SocialShare/>
                </div>
                <WrapperFooter>
                    <h2>With love <span role="img" aria-label="sheep">❤️</span></h2>
                    <p className='Built'>
                        Built by <a href="https://swizec.com">Swizec</a><br />
                        Cheers <span role="img" aria-label="sheep">❤️</span>
                    </p>
                    <p className='Years'>
                        It only took me 2 years to get around to opensourcing this.
                        <span role="img" aria-label="sheep">😅</span>
                    </p>
                </WrapperFooter>
            </Wrapper>
          </Layout>
        );
    }
}
