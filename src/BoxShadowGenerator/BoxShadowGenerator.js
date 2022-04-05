import React, {useState} from 'react';
import Container from '../Container';
import styled, {css} from 'styled-components';
import './BoxShadowGenerator.css';

const BoxShadowGenerator = () => {

    const [boxShadow, setBoxShadow] = useState({
        boxColor: '#000000',
        inset: false,
        x: 0,
        y: 0,
        blurRadius: 0,
        spreadRadius: 0,
        opacity: 0.75
    });

    let Box = styled.div`
        ${props => props.otherStyle && css`
            background-color: ${boxShadow.boxColor};
            height: 440px;
            display: flex;
            justify-content: center;
            align-items: center;
        `}
        box-shadow: ${boxShadow.inset ? `inset` : ``}
                    ${`${boxShadow.x}px`}
                    ${`${boxShadow.y}px`}
                    ${`${boxShadow.blurRadius}px`}
                    ${`${boxShadow.spreadRadius}px`}
                    rgba(0, 0, 0, ${`${boxShadow.opacity}`});
    `;
    
    const shadowVal = Box.componentStyle.rules;

    const shadowMap = shadowVal.map((item) => {
        return item;
    });
    console.warn(shadowMap);

    return (
        <Container>
            <div className='col-md-6'>
                <Box className='col-9 m-auto' otherStyle></Box>
                <div className='bg-white border p-1 m-4 d-flex'>
                    <p className='text-dark'>
                        -webkit-{shadowMap} <br/>
                        -moz-{shadowMap} <br/>
                        {shadowMap}
                    </p>
                    <button className='btn btn-outline-primary justify-content-center ms-3 copyCss'>
                        Copy
                    </button>
                </div>
            </div>
            <div className='col-md-5'>
                <div className='row g-3'>
                    <div className='col-12'>
                        <label htmlFor="boxColor" className="form-label">Box Color</label>
                        <input type="color"
                               className="form-control form-control-color"
                               id="boxColor"
                               value={boxShadow.boxColor}
                               onChange={(event) => setBoxShadow({...boxShadow, boxColor: event.target.value})}
                        />
                    </div>
                    <div className="form-check col-12 ms-2">
                        <input className="form-check-input"
                               type="checkbox"
                               id="inset-outset"
                               onChange={(event) => setBoxShadow({...boxShadow, inset: !boxShadow.inset})}
                               checked={boxShadow.inset ? true : false} />
                        <label className="form-check-label" htmlFor="inset-outset">
                            Inset
                        </label>
                    </div>
                    <div className='col-12'>
                        <label htmlFor="horizontalLeangth" className="form-label">Horizontal Leangth</label>
                        <input type="range"
                               className="form-range"
                               id="horizontalLeangth"
                               min="-200"
                               max="200"
                               value={boxShadow.x}
                               onChange={(event) => setBoxShadow({...boxShadow, x: event.target.value})}
                        />
                    </div>
                    <div className='col-12'>
                        <label htmlFor="verticalLeangth" className="form-label">Vertical Leangth</label>
                        <input type="range"
                               className="form-range"
                               id="verticalLeangth"
                               min="-200"
                               max="200"
                               value={boxShadow.y}
                               onChange={(event) => setBoxShadow({...boxShadow, y: event.target.value})}
                        />
                    </div>
                    <div className='col-12'>
                        <label htmlFor="blurRadius" className="form-label">Blur Radius</label>
                        <input type="range"
                               className="form-range"
                               id="blurRadius"
                               min="0"
                               max="300"
                               value={boxShadow.blurRadius}
                               onChange={(event) => setBoxShadow({...boxShadow, blurRadius: event.target.value})}
                        />
                    </div>
                    <div className='col-12'>
                        <label htmlFor="spreadRadius" className="form-label">Spread Radius</label>
                        <input type="range"
                               className="form-range"
                               id="spreadRadius"
                               min="0"
                               max="200"
                               value={boxShadow.spreadRadius}
                               onChange={(event) => setBoxShadow({...boxShadow, spreadRadius: event.target.value})}
                        />
                    </div>
                    <div className='col-12'>
                        <label htmlFor="opacity" className="form-label">Opacity</label>
                        <input type="range"
                               className="form-range"
                               id="opacity"
                               min="0"
                               max="1"
                               step="0.01"
                               value={boxShadow.opacity}
                               onChange={(event) => setBoxShadow({...boxShadow, opacity: event.target.value})}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BoxShadowGenerator;