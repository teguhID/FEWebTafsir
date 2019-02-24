import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import namaSurahLogo from './img/namaSurah.png';
import ibnuKatsirLogo from './img/logoIbnuKatsir.png';
import noSurahLogo from './img/noSurah.png'

class App extends Component {
  render() {
    return (
      <div>
        <body>
        <div class="sidebar">
          <div className="my-5 text-center">
          <img src={ibnuKatsirLogo} alt="ibnuKatsirLogo" width="80" height="63" />
          </div>
          <div className="mt-5 text-center" style={{ fontSize:22, fontWeight:"bold" }}>
            Surah
          </div>
          <div class="list-surah mt-3">
            <a class="" href="#">
              <text style={{ fontSize:18}}>Al-Fatihah</text><br></br>
              <sup style={{ fontSize:12}}>Mekkah - 7 Ayat</sup>
            </a>
            <a class="" href="#">
              <text style={{ fontSize:18}}>Al-Baqarah</text><br></br>
              <sup style={{ fontSize:12}}>Madinah - 286 Ayat</sup>
            </a>
            <a class="active" href="#">
              <text style={{ fontSize:18}}>Ali 'Imron</text><br></br>
              <sup style={{ fontSize:12}}>Madinah - 200 Ayat</sup>
            </a>
            <a class="" href="#">
              <text style={{ fontSize:18}}>An-Nisa'</text><br></br>
              <sup style={{ fontSize:12}}>Madinah - 176 Ayat</sup>
            </a>
            <a class="" href="#">
              <text style={{ fontSize:18}}>Al-Ma'idah</text><br></br>
              <sup style={{ fontSize:12}}>Madinah - 120 Ayat</sup>
            </a>
            <a class="" href="#">
              <text style={{ fontSize:18}}>Al-An'am</text><br></br>
              <sup style={{ fontSize:12}}>Madinah - 165 Ayat</sup>
            </a>
            <a class="" href="#">
              <text style={{ fontSize:18}}>Al-A'raf</text><br></br>
              <sup style={{ fontSize:12}}>Madinah - 206 Ayat</sup>
            </a>
            <a class="" href="#">Surah</a>
            <a class="" href="#">Surah</a>
            <a class="" href="#">Surah</a>
            <a class="" href="#">Surah</a>
            <a class="" href="#">Surah</a>
            <a class="" href="#">Surah</a>
            <a class="" href="#">Surah</a>
            <a class="" href="#">Surah</a>
            <a class="" href="#">Surah</a>
            <a class="" href="#">Surah</a>
            <a class="" href="#">Surah</a>
            <a class="" href="#">Surah</a>
          </div>  
        </div>
        <div className='content'>
          <Container>
            <Row>
              <p className='mt-1 ml-4'><a href='#'>Home</a> - Ibnu Katsir</p>
            </Row>
            <Row>
              <Col>         
                <img src={namaSurahLogo} alt="namaSurahLogo" width="300" height="66" />
                <div className='text-image-cetner'>nama surah</div>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
              <p style={{ fontSize:20, fontWeight:"bold" }}>Ayat Al-Quran</p>
                <div className='ayat-box'>
                <ListGroup>
                  <ListGroupItem>
                    <p style={{ textAlign:"left", margin:0 }}><b>1</b></p>
                    <p style={{ fontSize:28 }}><b>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</b></p>
                    <p style={{ textAlign:"left", margin:0 }}>
                      <b>bismillāhir-raḥmānir-raḥīm</b><br/>
                      Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem>
                    <p style={{ textAlign:"left", margin:0 }}>No Ayat</p>
                    <p><b>Ayat</b></p>
                    <p style={{ textAlign:"left", margin:0 }}>
                      <b>latin</b><br/>
                      Terjemahan
                    </p>
                  </ListGroupItem>
                </ListGroup>
                </div>
              </Col>
              <Col xs="6">
              <p style={{ fontSize:20, fontWeight:"bold" }}>Tafsir Ibnu Katsir</p>
              <div className='tafsir-box'>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </body>
      </div>
    );
  }
}

export default App;
