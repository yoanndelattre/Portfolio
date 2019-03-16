import React from 'react'

// css
import './NotFound.css'

const NotFound = () => (
  <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>404</h1>
			</div>
			<h2>Oops! This Page Could Not Be Found</h2>
			<p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
			<a href="/">Go To Homepage</a>
      <a target="blank" href="https://github.com/yoanndelattre/Portfolio/issues">Report a Problem</a>
		</div>
	</div>
)

export default NotFound