import React from 'react';
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className="home__info">
                <div>
                    <span className='info__title'>Name:</span>
                    <span>Ramesh Prakash</span>
                </div>
                <div>
                    <span className='info__title'>Organization:</span>
                    <span>Bal Vikas</span>
                </div>
                <div>
                    <span className='info__title'>Designation:</span>
                    <span>Cluster Coordinator</span>
                </div>
            </div>
            <div className='home__cover'>
                <img src="https://i1.wp.com/www.giveindia.org/blog/wp-content/uploads/education.jpg?fit=984%2C656&ssl=1" alt="" />
            </div>
        </div>
    )
}

export default Home;
