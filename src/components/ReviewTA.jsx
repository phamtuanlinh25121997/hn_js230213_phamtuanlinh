import React, { useState } from 'react'
import Navbar from './Navbar'
import Search from './Search'
import './ReviewTA.css'
import ReviewContent from './ReviewContent'

function ReviewTA() {
    const [counts,setCounts] = useState (0)
    return (
        <div className='review'>
            <Navbar/>
            <Search 
            count={counts}
            setCount={setCounts}
            />
            <ReviewContent/>
        </div>
    )
}

export default ReviewTA