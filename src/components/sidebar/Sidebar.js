import './Sidebar.css';
import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap'
import { connect } from "react-redux";
import routes from '../route';

import namaSurahLogo from '../../img/namaSurah.png'
import ibnuKatsirLogo from '../../img/logoIbnuKatsir.png';


class Sidebar extends Component {

  render() {
    return (
    
      <div>

        <div className="sidebar">
          <div className="mt-5 text-center">
          <img src={ibnuKatsirLogo} alt="ibnuKatsirLogo" width="80" height="63" />
          </div>
          <div className="mt-4 text-center" style={{ fontSize:22, fontWeight:"bold" }}>
            Surah
          </div>
          <div className="list-surah mt-2">
            <Link to="/ibnukatsir/al-fatihah" onClick={this.props.url1}>
              <div>
                <div style={{ fontSize:18, color:'black'}}>Al-Fatihah</div>
                <sup style={{ fontSize:12, color:' rgb(54, 68, 29)'}}><b>Mekkah - 7 Ayat</b></sup>
              </div>
            </Link>
            <Link to="/ibnukatsir/al-baqarah" onClick={this.props.url2}>
              <div style={{ fontSize:18, color:'black'}}>Al-Baqarah</div>
              <sup style={{ fontSize:12, color:' rgb(54, 68, 29)'}}><b>Madinah - 286 Ayat</b></sup>
            </Link>
            <Link to="/ibnukatsir/al-baqarah" onClick={this.props.url2}>
              <div style={{ fontSize:18, color:'black'}}>Ali 'Imran</div>
              <sup style={{ fontSize:12, color:' rgb(54, 68, 29)'}}><b>Madinah - 200 Ayat</b></sup>
            </Link>
            <Link to="/ibnukatsir/al-baqarah" onClick={this.props.url2}>
              <div style={{ fontSize:18, color:'black'}}>An-Nisa'</div>
              <sup style={{ fontSize:12, color:' rgb(54, 68, 29)'}}><b>Madinah - 176 Ayat</b></sup>
            </Link>
            <Link to="/ibnukatsir/al-baqarah" onClick={this.props.url2}>
              <div style={{ fontSize:18, color:'black'}}>Al-Ma'idah</div>
              <sup style={{ fontSize:12, color:' rgb(54, 68, 29)'}}><b>Madinah - 120 Ayat</b></sup>
            </Link>
            <Link to="/ibnukatsir/al-baqarah" onClick={this.props.url2}>
              <div style={{ fontSize:18, color:'black'}}>Al-An'am</div>
              <sup style={{ fontSize:12, color:' rgb(54, 68, 29)'}}><b>Madinah - 165 Ayat</b></sup>
            </Link>
            <Link to="/ibnukatsir/al-baqarah" onClick={this.props.url2}>
              <div style={{ fontSize:18, color:'black'}}>Al-A'raf</div>
              <sup style={{ fontSize:12, color:' rgb(54, 68, 29)'}}><b>Madinah - 206 Ayat</b></sup>
            </Link>
            <Link to="/ibnukatsir/al-baqarah" onClick={this.props.url2}>
              <div style={{ fontSize:18, color:'black'}}>Al-Anfal</div>
              <sup style={{ fontSize:12, color:' rgb(54, 68, 29)'}}><b>Madinah - 75 Ayat</b></sup>
            </Link>
            <Link to="/ibnukatsir/al-baqarah" onClick={this.props.url2}>
              <div style={{ fontSize:18, color:'black'}}>At-Taubah</div>
              <sup style={{ fontSize:12, color:' rgb(54, 68, 29)'}}><b>Madinah - 129 Ayat</b></sup>
            </Link>
            <Link to="/ibnukatsir/al-baqarah" onClick={this.props.url2}>
              <div style={{ fontSize:18, color:'black'}}>Yunus</div>
              <sup style={{ fontSize:12, color:' rgb(54, 68, 29)'}}><b>Mekah - 109 Ayat</b></sup>
            </Link>
            <Link to="/ibnukatsir/al-baqarah" onClick={this.props.url2}>
              <div style={{ fontSize:18, color:'black'}}>Hud</div>
              <sup style={{ fontSize:12, color:' rgb(54, 68, 29)'}}><b>Mekah - 123 Ayat</b></sup>
            </Link>
            <Link to="/ibnukatsir/al-baqarah" onClick={this.props.url2}>
              <div style={{ fontSize:18, color:'black'}}>Yusuf</div>
              <sup style={{ fontSize:12, color:' rgb(54, 68, 29)'}}><b>Mekah - 111 Ayat</b></sup>
            </Link>
            <Link to="/ibnukatsir/al-baqarah" onClick={this.props.url2}>
              <div style={{ fontSize:18, color:'black'}}>Ar-Ra'd</div>
              <sup style={{ fontSize:12, color:' rgb(54, 68, 29)'}}><b>Mekah - 43 Ayat</b></sup>
            </Link>
            <Link to="/ibnukatsir/al-baqarah" onClick={this.props.url2}>
              <div style={{ fontSize:18, color:'black'}}>Ibrahim</div>
              <sup style={{ fontSize:12, color:' rgb(54, 68, 29)'}}><b>Mekah - 52 Ayat</b></sup>
            </Link>
          </div>  
        </div>

        {/* content */}
        <div className='content'>
            <Row>
              <Col>
                <div className="mt-1">
                <img src={namaSurahLogo} alt="namaSurahLogo" width="300" height="66" />
                  <div className='text-image-cetner' style={{ fontSize:18 }}><b>
                  {routes.map((route, index) =>(
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.ayat}
                    />
                  ))}</b>
                  </div>
                </div>
              </Col>
            </Row>
            {routes.map((route, index) =>(
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.dataTafsir}
                />
            ))}
        </div>
      </div>
      
    );
  }
}

const data = state => {
  return{
      url : state.url
  }
}

const urlChanger = dispatch => {
  return {
    url1: () => dispatch({ type: "URL_1" }),
    url2: () => dispatch({ type: "URL_2" }),
  }
}

export default connect (data, urlChanger)(Sidebar);