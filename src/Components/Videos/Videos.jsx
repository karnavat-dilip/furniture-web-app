import React from 'react'
import Breadcrumbs from '../Breadcrumbs'
import './Videos.css'
import video1 from '../../Assets/video1.mp4'
import video2 from '../../Assets/video2.mp4'

function Videos() {
    return (
        <div>
            <Breadcrumbs title='Videos' />
            <section className='m-top53px'>
                <div className='container'>

                    <video width="400" height="400" controls>
                        <source src={video1} type="video/mp4" />
                        Your browser does not support HTML video.
                    </video>
                    <video width="400" height="400" controls>
                        <source src={video2} type="video/mp4" />
                        Your browser does not support HTML video.
                    </video>

                </div>
            </section>
        </div>
    )
}

export default Videos
