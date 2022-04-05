import React from 'react';

const Container = (props) => {
    return (
        <section className='py-5 container'>
            <div className='row justify-content-center'>
                {props.children}
            </div>
        </section>
    );
};

export default Container;