import './Sidebar.css';
import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap'
import { connect } from "react-redux";
import routes from '../route';

import namaSurahLogo from '../../img/namaSurah.png'
import ibnuKatsirLogo from '../../img/logoIbnuKatsir.png';


class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [ {to:"/ibnukatsir/al-fatihah" ,onClick:this.props.url1, title:'Al-Fatihah', note:'Mekkah - 7 Ayat'},
              {to:"/ibnukatsir/al-baqarah" ,onClick:this.props.url2, title:'Al-Baqarah', note:'Madinah - 286 Ayat'},
              {to:"/ibnukatsir/ali-`imran" ,onClick:this.props.url3, title:'Ali `Imran', note:'Madinah - 200 Ayat'},
              {to:"/ibnukatsir/an-nisa`" ,onClick:this.props.url4, title:'An-Nisa`', note:'Madinah - 176 Ayat'},
              {to:"/ibnukatsir/al-ma`idah" ,onClick:this.props.url5, title:'Al-Ma`idah', note:'Madinah - 120 Ayat'},
              {to:"/ibnukatsir/al-an`am" ,onClick:this.props.url6, title:'Al-An`am', note:'Mekah - 165 Ayat'},
              {to:"/ibnukatsir/al-a`raf" ,onClick:this.props.url7, title:'Al-A`raf', note:'Mekah - 206 Ayat'},
              {to:"/ibnukatsir/al-anfal" ,onClick:this.props.url8, title:'Al-Anfal', note:'Madinah - 75 Ayat'},
              {to:"/ibnukatsir/at-taubah" ,onClick:this.props.url9, title:'AT-Taubah', note:'Madinah - 129 Ayat'},
              {to:"/ibnukatsir/yunus" ,onClick:this.props.url10, title:'Yunus', note:'Mekah - 109 Ayat'},
              {to:"/ibnukatsir/hud" ,onClick:this.props.url11, title:'Hud', note:'Mekah - 123 Ayat'},
              {to:"/ibnukatsir/yusuf" ,onClick:this.props.url12, title:'Yusuf', note:'Mekah - 111 Ayat'},
              {to:"/ibnukatsir/ar-ra`d" ,onClick:this.props.url13, title:'Ar-Ra`d', note:'Madinah - 43 Ayat'},
              {to:"/ibnukatsir/ibrahim" ,onClick:this.props.url14, title:'Ibrahim', note:'Mekah - 52 Ayat'},
              {to:"/ibnukatsir/al-hijr" ,onClick:this.props.url15, title:'Al-Hijr', note:'Mekah - 99 Ayat'},
              {to:"/ibnukatsir/an-nahl" ,onClick:this.props.url16, title:'An-Nahl', note:'Mekah - 128 Ayat'},
              {to:"/ibnukatsir/al-isra`" ,onClick:this.props.url17, title:'Al-Isra`', note:'Mekah - 111 Ayat'},
              {to:"/ibnukatsir/al-kahf" ,onClick:this.props.url18, title:'Al-Kahf', note:'Mekah - 110 Ayat'},
              {to:"/ibnukatsir/maryam" ,onClick:this.props.url19, title:'Maryam', note:'Mekah - 98 Ayat'},
              {to:"/ibnukatsir/ta-ha" ,onClick:this.props.url20, title:'Ta-Ha', note:'Mekah - 135 Ayat'},
              {to:"/ibnukatsir/al-anbiya" ,onClick:this.props.url21, title:'Al-Anbiya', note:'Mekah - 112 Ayat'},
              {to:"/ibnukatsir/al-hajj" ,onClick:this.props.url22, title:'Al-Hajj', note:'Madinah - 78 Ayat'},
              {to:"/ibnukatsir/al-mu`minun" ,onClick:this.props.url23, title:'Al-Mu`minun', note:'Mekah - 118 Ayat'},
              {to:"/ibnukatsir/an-nur" ,onClick:this.props.url24, title:'An-Nur', note:'Madinah - 64 Ayat'},
              {to:"/ibnukatsir/al-furqan" ,onClick:this.props.url25, title:'Al-Furqan', note:'Mekah - 77 Ayat'},
              {to:"/ibnukatsir/asy-syu`ara`" ,onClick:this.props.url26, title:'Asy-Syu`ara`', note:'Mekah - 227 Ayat'},
              {to:"/ibnukatsir/an-naml" ,onClick:this.props.url27, title:'An-Naml', note:'Mekah - 93 Ayat'},
              {to:"/ibnukatsir/al-qasas" ,onClick:this.props.url28, title:'Al-Qasas', note:'Mekah - 88 Ayat'},
              {to:"/ibnukatsir/al-`ankabut" ,onClick:this.props.url29, title:'An-`Ankabut', note:'Mekah - 69 Ayat'},
              {to:"/ibnukatsir/ar-rum" ,onClick:this.props.url30, title:'Ar-Rum', note:'Mekah - 60 Ayat'},
              {to:"/ibnukatsir/luqman" ,onClick:this.props.url31, title:'Luqman', note:'Mekah - 34 Ayat'},
              {to:"/ibnukatsir/as-sajdah" ,onClick:this.props.url32, title:'As-Sajdah', note:'Mekah - 30 Ayat'},
              {to:"/ibnukatsir/al-ahzab" ,onClick:this.props.url33, title:'Al-Ahzab', note:'Madinah - 73 Ayat'},
              {to:"/ibnukatsir/Saba`" ,onClick:this.props.url34, title:'Saba`', note:'Mekah - 54 Ayat'},
              {to:"/ibnukatsir/Fatir" ,onClick:this.props.url35, title:'Fatir', note:'Mekah - 45 Ayat'},
            ]
    };
  }

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
            {this.state.list.map(lists => (
              <Link to={lists.to} onClick={lists.onClick}>
                <div>
                  <div style={{ fontSize:18, color:'black'}}>{lists.title}</div>
                  <sup style={{ fontSize:12, color:' rgb(54, 68, 29)'}}><b>{lists.note}</b></sup>
                </div>
              </Link>
            ))}
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
    url3: () => dispatch({ type: "URL_3" }),
    url4: () => dispatch({ type: "URL_4" }),
    url5: () => dispatch({ type: "URL_5" }),
    url6: () => dispatch({ type: "URL_6" }),
    url7: () => dispatch({ type: "URL_7" }),
    url8: () => dispatch({ type: "URL_8" }),
    url9: () => dispatch({ type: "URL_9" }),
    url10: () => dispatch({ type: "URL_10" }),
    url11: () => dispatch({ type: "URL_11" }),
    url12: () => dispatch({ type: "URL_12" }),
    url13: () => dispatch({ type: "URL_13" }),
    url14: () => dispatch({ type: "URL_14" }),
    url15: () => dispatch({ type: "URL_15" }),
    url16: () => dispatch({ type: "URL_16" }),
    url17: () => dispatch({ type: "URL_17" }),
    url18: () => dispatch({ type: "URL_18" }),
    url19: () => dispatch({ type: "URL_19" }),
    url20: () => dispatch({ type: "URL_20" }),
    url21: () => dispatch({ type: "URL_21" }),
    url22: () => dispatch({ type: "URL_22" }),
    url23: () => dispatch({ type: "URL_23" }),
    url24: () => dispatch({ type: "URL_24" }),
    url25: () => dispatch({ type: "URL_25" }),
    url26: () => dispatch({ type: "URL_26" }),
    url27: () => dispatch({ type: "URL_27" }),
    url28: () => dispatch({ type: "URL_28" }),
    url29: () => dispatch({ type: "URL_29" }),
    url30: () => dispatch({ type: "URL_30" }),
    url31: () => dispatch({ type: "URL_31" }),
    url32: () => dispatch({ type: "URL_32" }),
    url33: () => dispatch({ type: "URL_33" }),
    url34: () => dispatch({ type: "URL_34" }),
    url35: () => dispatch({ type: "URL_35" }),
    url36: () => dispatch({ type: "URL_36" }),
    url37: () => dispatch({ type: "URL_37" }),
    url38: () => dispatch({ type: "URL_38" }),
    url39: () => dispatch({ type: "URL_39" }),
    url40: () => dispatch({ type: "URL_40" }),
    url41: () => dispatch({ type: "URL_41" }),
    url42: () => dispatch({ type: "URL_42" }),
    url43: () => dispatch({ type: "URL_43" }),
    url44: () => dispatch({ type: "URL_44" }),
    url45: () => dispatch({ type: "URL_45" }),
    url46: () => dispatch({ type: "URL_46" }),
    url47: () => dispatch({ type: "URL_47" }),
    url48: () => dispatch({ type: "URL_48" }),
    url49: () => dispatch({ type: "URL_49" }),
    url50: () => dispatch({ type: "URL_50" }),
    url51: () => dispatch({ type: "URL_51" }),
    url52: () => dispatch({ type: "URL_52" }),
    url53: () => dispatch({ type: "URL_53" }),
    url54: () => dispatch({ type: "URL_54" }),
    url55: () => dispatch({ type: "URL_55" }),
    url56: () => dispatch({ type: "URL_56" }),
    url57: () => dispatch({ type: "URL_57" }),
    url58: () => dispatch({ type: "URL_58" }),
    url59: () => dispatch({ type: "URL_59" }),
    url60: () => dispatch({ type: "URL_60" }),
    url61: () => dispatch({ type: "URL_61" }),
    url62: () => dispatch({ type: "URL_62" }),
    url63: () => dispatch({ type: "URL_63" }),
    url64: () => dispatch({ type: "URL_64" }),
    url65: () => dispatch({ type: "URL_65" }),
    url66: () => dispatch({ type: "URL_66" }),
    url67: () => dispatch({ type: "URL_11" }),
    url68: () => dispatch({ type: "URL_12" }),
    url69: () => dispatch({ type: "URL_13" }),
    url70: () => dispatch({ type: "URL_14" }),
    url71: () => dispatch({ type: "URL_71" }),
    url72: () => dispatch({ type: "URL_72" }),
    url73: () => dispatch({ type: "URL_73" }),
    url74: () => dispatch({ type: "URL_74" }),
    url75: () => dispatch({ type: "URL_75" }),
    url76: () => dispatch({ type: "URL_76" }),
    url77: () => dispatch({ type: "URL_77" }),
    url78: () => dispatch({ type: "URL_78" }),
    url79: () => dispatch({ type: "URL_79" }),
    url80: () => dispatch({ type: "URL_80" }),
    url81: () => dispatch({ type: "URL_81" }),
    url82: () => dispatch({ type: "URL_82" }),
    url83: () => dispatch({ type: "URL_83" }),
    url84: () => dispatch({ type: "URL_84" }),
    url85: () => dispatch({ type: "URL_85" }),
    url86: () => dispatch({ type: "URL_86" }),
    url87: () => dispatch({ type: "URL_87" }),
    url88: () => dispatch({ type: "URL_88" }),
    url89: () => dispatch({ type: "URL_89" }),
    url90: () => dispatch({ type: "URL_90" }),
    url91: () => dispatch({ type: "URL_91" }),
    url92: () => dispatch({ type: "URL_92" }),
    url93: () => dispatch({ type: "URL_93" }),
    url94: () => dispatch({ type: "URL_94" }),
    url95: () => dispatch({ type: "URL_95" }),
    url96: () => dispatch({ type: "URL_96" }),
    url97: () => dispatch({ type: "URL_97" }),
    url98: () => dispatch({ type: "URL_98" }),
    url99: () => dispatch({ type: "URL_99" }),
    url100: () => dispatch({ type: "URL_100" }),
    url101: () => dispatch({ type: "URL_101" }),
    url102: () => dispatch({ type: "URL_102" }),
    url103: () => dispatch({ type: "URL_103" }),
    url104: () => dispatch({ type: "URL_104" }),
    url105: () => dispatch({ type: "URL_105" }),
    url106: () => dispatch({ type: "URL_106" }),
    url107: () => dispatch({ type: "URL_107" }),
    url108: () => dispatch({ type: "URL_108" }),
    url109: () => dispatch({ type: "URL_109" }),
    url110: () => dispatch({ type: "URL_110" }),
    url111: () => dispatch({ type: "URL_111" }),
    url112: () => dispatch({ type: "URL_112" }),
    url113: () => dispatch({ type: "URL_113" }),
    url114: () => dispatch({ type: "URL_114" }),
  }
}

export default connect (data, urlChanger)(Sidebar);