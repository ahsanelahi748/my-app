import React from 'react'
import Button from 'react-bootstrap/Button';
import './App.css';
import Form from 'react-bootstrap/Form';

function TopBar({toggleMenu}) {
  return (
    <div className='topBarContainer'>
      <i onClick={toggleMenu} id='menuIcon' class="fa-solid fa-bars"></i>
      <Form.Control className='searchInput' type="text" placeholder="Search here..." />
      <div className='buttons-container'>
        <Button id='subscribe-btn' variant="primary">Subscribe</Button>
        <Button variant="outline-primary" id='login-btn'>
          <i id='login-icon' class="fa-regular fa-circle-user"></i>
          Login</Button>
        <div>
          <i class="fa-regular fa-circle-user login-btn-mobile"></i>
        </div>
      </div>
    </div>
  )
}

const videos = [
  {
    thumnail: "http://colinrivas.show/storage/2023/07/My-project-1-32-334x191.jpg",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
    length: '01:23',
    views: 122,
    days: 3
  }
]

for (let i = 0; i < 10; i++) {
  const element = videos[0];
  videos.push(element);
}

function App() {

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleMenu = () => {
    setDrawerOpen(prev => !prev);
  }

  return (
    <div className="App">
      <TopBar toggleMenu={toggleMenu}/>
      <div className='main-container'>
        <div className='sidebar'>
          {drawerOpen && <div class={`drawer ${drawerOpen}`}>
            <ul>
              <li><a href="#"><i class="fa-solid fa-house"></i> Start</a></li>
              <li><a href="#"><i class="fa-solid fa-user" style={{ marginRight: '17px' }}></i>Interviews</a></li>
              <li><a href="#"><i class="fa-solid fa-fire"></i> Most Viewed</a></li>
            </ul>
          </div>}
        </div>
        <div id='videos-container'>
          {videos.map((video) => (
            <div className='video-container'>
              <div className='thumbnail-container'>
                <span className='text'>{video.length}</span>
                <img src={video.thumnail} alt='thumbnail' />
              </div>
              <p>{video.description}</p>
              <div className='video-stats-container'>
                <span>{video.views} views</span>
                <span>{video.days} days</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
