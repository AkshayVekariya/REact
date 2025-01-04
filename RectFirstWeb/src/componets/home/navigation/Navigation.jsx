import './Navigation.css'

function Navigation() {
  return (
    <nav>
      <div className='nav-container'>
        <h1>iLanding</h1>
        <ol>
          <li> <a href="#">Home</a></li>
          <li><a  href="#">About</a></li>
          <li><a  href="#">feature</a></li>
          <li><a  href="#">services</a></li>
          <li><a  href="#">pricing</a></li>
          <li><a  href="#">dropdown</a></li>
          <li><a  href="#">contact</a></li>
        </ol>
        <button className='classic-btn'>Get started</button>
      </div>
  </nav>
  )
}

export default Navigation