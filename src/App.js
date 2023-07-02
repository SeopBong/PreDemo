import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import './ContainerPart/MainBanner.js';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import SecondPart from './ContainerPart/components/SecondPart';
import ThirdPart from './ContainerPart/components/ThirdPart';
import FivePart from './ContainerPart/components/FivePart';
import FiveAdd from './ContainerPart/components/FiveAdd';

function App(props) {
  const aboutWod_0 = "비전검사기로 어떤 것을 할 수 있나요?";
  const aboutWod_1 = "비전검사는 제품을 촬영하여 영상분석기술을 이용해 검사하는 장비로\n 사람 눈으로 구분이 가능한 모든 불량부터 사람눈으로 어려운 정밀 불량까지 모두 검출할 수 있습니다";
  const reect_1 = 1;


  let [navbarColor, setNavbarColor] = useState('dark'); // 네비게이션 바 색상 상태
  let color =  useEffect(() => {
    let handleScroll = () => {
      // 스크롤 위치에 따라 색상 변경
      if (window.scrollY > 0) {
        setNavbarColor('dark');
      } else {
        setNavbarColor('white');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


/***********************************************************************************************************************************************/
  return (
    <div className="App">
      <Navbar bg={navbarColor} variant={navbarColor} fixed='top'>
        <Container>
          <Navbar.Brand className='brand-brand' 
           href="#home">N E W P H A S E</Navbar.Brand>
          <Nav className="me-auto" >    
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">FEATURE</Nav.Link>
            <Nav.Link href="#features">PROCESS</Nav.Link>
            <Nav.Link href="#features">PRICING</Nav.Link>
            <Nav.Link href="#features">REVIEW</Nav.Link>
            <Nav.Link href="#features">CONTECT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <div className='onerlay'>
        <div className='player-wrapper'>
      <ReactPlayer 
      url={"https://youtu.be/UxpjpxLi-Qg"}
      width="30vw"
      height="30vh"
        loop={true}x
        playing={true}
        muted={true}
      controls={false}
    />
    </div>
    <div className='main-texting'>
    <h1><span style={{color:'yellow'}}>인력관리</span> 아직도 고민하고 계세요?</h1>
    <h3>최고의 <span style={{color:'yellow'}}>노예</span>들로 이루어진 팀을 지원해겠습니다</h3>
    <h3>황홀한 <span style={{color:'red'}}>퀄리티</span>를 느껴보세요!</h3>
    </div>
      </div>


      <div className='onerlay-2' style={{ whiteSpace: 'pre-line' }}>
      <h2>{aboutWod_0}</h2>
      <p>{aboutWod_1}</p> 
      
      <div className='onerlay-2-skills'>
        <SecondPart text="요소1" />
        <SecondPart text="요소2" />
        <SecondPart text="요소3" />
      </div>
      <div className='onerlay-3'>
        <ThirdPart />
      </div>
      <div className='overlay-4-skills'>
        <FivePart text='아이콘1' />
        <FivePart text='아이콘2' />
      </div>
      <FiveAdd />

      </div>
      <div>
        
      </div>
      
    </div>
  );
}


export default App;
