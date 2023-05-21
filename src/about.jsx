import React from 'react'

const About = (props) => {
    return (
        <>
            <div className='alert alert-warning alert-dismissible fade show' role='alert'>
                
                <h4 className='alert-heading'>{props.name}</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>

                <p className='mb-0'>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
        </>
    )
}
export default About;
