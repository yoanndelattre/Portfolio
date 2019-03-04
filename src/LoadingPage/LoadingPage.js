import React from 'react'
import ReactLoading from 'react-loading'

// css
import './LoadingPage.css'

const LoadingPage = () => (
    <div className="loadingpage">
        <ReactLoading
            type="spin"
            color="#fff"
            width={'10%'}
        />
    </div>
)

export default LoadingPage