import { Link } from 'react-router-dom'

// STYLING
import './style.scss'
export default function Home() {
  return (
    <div className="main mt-5">
      <div className="card" data-state="#about">
        <div className="card-header">
          <div
            className="card-cover"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)`,
            }}
          ></div>
          <img
            className="card-avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d4be06127363957.614091b9a6589.jpg"
            alt="avatar"
          />
          <h1 className="card-fullname text-dark">William Rocheald</h1>
          <h2 className="card-jobtitle text-dark">UI Developer</h2>
        </div>
        <div className="card-main">
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">ABOUT</div>
              <p className="card-desc">
                Whatever tattooed stumptown art party sriracha gentrify hashtag
                intelligentsia readymade schlitz brooklyn disrupt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
