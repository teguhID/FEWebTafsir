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
              {to:"/ibnukatsir/at-taubah" ,onClick:this.props.url9, title:'At-Taubah', note:'Madinah - 129 Ayat'},
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
              {to:"/ibnukatsir/Ya-Sin" ,onClick:this.props.url36, title:'Ya-Sin', note:'Mekah - 83 Ayat'},
              {to:"/ibnukatsir/As-Saffat" ,onClick:this.props.url37, title:'As-Saffat', note:'Mekah - 182 Ayat'},
              {to:"/ibnukatsir/Sad" ,onClick:this.props.url38, title:'Sad', note:'Mekah - 88 Ayat'},
              {to:"/ibnukatsir/Az-Zumar" ,onClick:this.props.url39, title:'Az-Zumar', note:'Mekah - 75 Ayat'},
              {to:"/ibnukatsir/Ghafir" ,onClick:this.props.url40, title:'Ghafir', note:'Mekah - 85 Ayat'},
              {to:"/ibnukatsir/Fussilat" ,onClick:this.props.url41, title:'Fussilat', note:'Mekah - 54 Ayat'},
              {to:"/ibnukatsir/Asy-Syura" ,onClick:this.props.url42, title:'Asy-Syura', note:'Mekah - 53 Ayat'},
              {to:"/ibnukatsir/Az-Zukhruf" ,onClick:this.props.url43, title:'Az-Zukhruf', note:'Mekah - 89 Ayat'},
              {to:"/ibnukatsir/Ad-Dukhan" ,onClick:this.props.url44, title:'Ad-Dukhan', note:'Mekah - 59 Ayat'},
              {to:"/ibnukatsir/Al-Jasiyah" ,onClick:this.props.url45, title:'Al-Jasiyah', note:'Mekah - 37 Ayat'},
              {to:"/ibnukatsir/Al-Ahqaf" ,onClick:this.props.url46, title:'Al-Ahqaf', note:'Mekah - 35 Ayat'},
              {to:"/ibnukatsir/Muhammad" ,onClick:this.props.url47, title:'Muhammad', note:'Madinah - 38 Ayat'},
              {to:"/ibnukatsir/Al-Fath" ,onClick:this.props.url48, title:'Al-Fath', note:'Madinah - 29 Ayat'},
              {to:"/ibnukatsir/Al-Hujurat" ,onClick:this.props.url49, title:'Al-Hujurat', note:'Madinah - 18 Ayat'},
              {to:"/ibnukatsir/Qaf" ,onClick:this.props.url50, title:'Qaf', note:'Mekah - 45 Ayat'},

              {to:"/ibnukatsir/Az-Zariyat" ,onClick:this.props.url51, title:'Az-Zariyat', note:'Mekkah - 60 Ayat'},
              {to:"/ibnukatsir/At-Tur" ,onClick:this.props.url52, title:'At-Tur', note:'Mekah - 60 Ayat'},
              {to:"/ibnukatsir/An-Najm" ,onClick:this.props.url53, title:'An-Najm', note:'Mekah - 62 Ayat'},
              {to:"/ibnukatsir/Al-Qamar" ,onClick:this.props.url54, title:'Al-Qamar', note:'Mekah - 55 Ayat'},
              {to:"/ibnukatsir/Ar-Rahman" ,onClick:this.props.url55, title:'Ar-Rahman', note:'Mekah - 78 Ayat'},
              {to:"/ibnukatsir/al-Waqi`ah" ,onClick:this.props.url56, title:'Al-Waqi`ah', note:'Mekah - 96 Ayat'},
              {to:"/ibnukatsir/Al-Hadid" ,onClick:this.props.url57, title:'Al-Hadid', note:'Madinah - 29 Ayat'},
              {to:"/ibnukatsir/Al-Mujadilah" ,onClick:this.props.url58, title:'Al-Mujadilah', note:'Madinah - 22 Ayat'},
              {to:"/ibnukatsir/Al-Hasyr" ,onClick:this.props.url59, title:'Al-Hasyr', note:'Madinah - 24 Ayat'},
              {to:"/ibnukatsir/Al-Mumtahanah" ,onClick:this.props.url60, title:'Al-Mumtahanah', note:'Mekah - 13 Ayat'},
              {to:"/ibnukatsir/As-Saff" ,onClick:this.props.url61, title:'As-Saff', note:'Madinah - 14 Ayat'},
              {to:"/ibnukatsir/Al-Jumu`ah" ,onClick:this.props.url62, title:'Al-Jumu`ah', note:'Madinah - 11 Ayat'},
              {to:"/ibnukatsir/Al-Munafiqun" ,onClick:this.props.url63, title:'Al-Munafiqun', note:'Madinah - 11 Ayat'},
              {to:"/ibnukatsir/At-Taghabun" ,onClick:this.props.url64, title:'At-Taghabun', note:'Madinah - 18 Ayat'},
              {to:"/ibnukatsir/At-Talaq" ,onClick:this.props.url65, title:'At-Talaq', note:'Madinah - 12 Ayat'},
              {to:"/ibnukatsir/At-Tahrim" ,onClick:this.props.url66, title:'At-Tahrim', note:'Madinah - 12 Ayat'},
              {to:"/ibnukatsir/Al-Mulk" ,onClick:this.props.url67, title:'Al-Mulk', note:'Mekah - 30 Ayat'},
              {to:"/ibnukatsir/Al-Qalam" ,onClick:this.props.url68, title:'Al-Qalam', note:'Mekah - 52 Ayat'},
              {to:"/ibnukatsir/Al-Haqqah" ,onClick:this.props.url69, title:'Al-Haqqah', note:'Mekah - 52 Ayat'},
              {to:"/ibnukatsir/Al-Ma`arij" ,onClick:this.props.url70, title:'Al-Ma`arij', note:'Mekah - 44 Ayat'},
              {to:"/ibnukatsir/Nuh" ,onClick:this.props.url71, title:'Nuh', note:'Mekah - 28 Ayat'},
              {to:"/ibnukatsir/Al-Jinn" ,onClick:this.props.url72, title:'Al-Jinn', note:'Mekah - 28 Ayat'},
              {to:"/ibnukatsir/Al-Muzzammil" ,onClick:this.props.url73, title:'Al-Muzzammil', note:'Mekah - 20 Ayat'},
              {to:"/ibnukatsir/Al-Muddassir" ,onClick:this.props.url74, title:'Al-Muddassir', note:'Mekah - 56 Ayat'},
              {to:"/ibnukatsir/Al-Qiyamah" ,onClick:this.props.url75, title:'Al-Qiyamah', note:'Mekah - 40 Ayat'},
              {to:"/ibnukatsir/Al-Insan" ,onClick:this.props.url76, title:'Al-Insan', note:'Madinah - 31 Ayat'},
              {to:"/ibnukatsir/Al-Mursalat" ,onClick:this.props.url77, title:'Al-Mursalat', note:'Mekah - 50 Ayat'},
              {to:"/ibnukatsir/An-Naba`" ,onClick:this.props.url78, title:'An-Naba`', note:'Mekah - 40 Ayat'},
              {to:"/ibnukatsir/An-Nazi`at" ,onClick:this.props.url79, title:'An-Nazi`at', note:'Mekah - 46 Ayat'},
              {to:"/ibnukatsir/`Abasa" ,onClick:this.props.url80, title:'`Abasa', note:'Mekah - 42 Ayat'},
              {to:"/ibnukatsir/At-Takwir" ,onClick:this.props.url81, title:'At-Takwir', note:'Mekah - 29 Ayat'},
              {to:"/ibnukatsir/Al-Infitar" ,onClick:this.props.url82, title:'Al-Infitar', note:'Mekah - 19 Ayat'},
              {to:"/ibnukatsir/Al-Muthaffifiin" ,onClick:this.props.url83, title:'Al-Muthaffifiin', note:'Mekah - 36 Ayat'},
              {to:"/ibnukatsir/Al-Insyiqaq" ,onClick:this.props.url84, title:'Al-Insyiqaq', note:'Mekah - 25 Ayat'},
              {to:"/ibnukatsir/Al-Buruj" ,onClick:this.props.url85, title:'Al-Buruj', note:'Mekah - 22 Ayat'},
              {to:"/ibnukatsir/At-Tariq" ,onClick:this.props.url86, title:'At-Tariq', note:'Mekah - 17 Ayat'},
              {to:"/ibnukatsir/Al-A`la" ,onClick:this.props.url87, title:'Al-A`la', note:'Mekah - 19 Ayat'},
              {to:"/ibnukatsir/Al-Ghasyiyah" ,onClick:this.props.url88, title:'Al-Ghasyiyah', note:'Mekah - 26 Ayat'},
              {to:"/ibnukatsir/Al-Fajr" ,onClick:this.props.url89, title:'Al-Fajr', note:'Mekah - 30 Ayat'},
              {to:"/ibnukatsir/Al-Balad" ,onClick:this.props.url90, title:'Al-Balad', note:'Mekah - 20 Ayat'},
              {to:"/ibnukatsir/Asy-Syams" ,onClick:this.props.url91, title:'Asy-Syams', note:'Mekah - 15 Ayat'},
              {to:"/ibnukatsir/Al-Lail" ,onClick:this.props.url42, title:'Al-Lail', note:'Mekah - 21 Ayat'},
              {to:"/ibnukatsir/Ad-Duha" ,onClick:this.props.url93, title:'Ad-Duha', note:'Mekah - 11 Ayat'},
              {to:"/ibnukatsir/Al-Insyirah" ,onClick:this.props.url94, title:'Al-Insyirah', note:'Mekah - 8 Ayat'},
              {to:"/ibnukatsir/At-Tin" ,onClick:this.props.url95, title:'At-Tin', note:'Mekah - 8 Ayat'},
              {to:"/ibnukatsir/Al-`Alaq" ,onClick:this.props.url96, title:'Al-`Alaq', note:'Mekah - 19 Ayat'},
              {to:"/ibnukatsir/Al-Qadr" ,onClick:this.props.url97, title:'Al-Qadr', note:'Mekah - 5 Ayat'},
              {to:"/ibnukatsir/Al-Bayyinah" ,onClick:this.props.url98, title:'Al-Bayyinah', note:'Madinah - 8 Ayat'},
              {to:"/ibnukatsir/Az-Zalzalah" ,onClick:this.props.url99, title:'Az-Zalzalah', note:'Madinah - 8 Ayat'},
              {to:"/ibnukatsir/Al-`Adiyat" ,onClick:this.props.url100, title:'Al-`Adiyat', note:'Mekah - 11 Ayat'},

              {to:"/ibnukatsir/Al-Qari`ah" ,onClick:this.props.url101, title:'Al-Qari`ah', note:'Mekah - 11 Ayat'},
              {to:"/ibnukatsir/At-Takasur" ,onClick:this.props.url102, title:'At-Takasur', note:'Mekah - 8 Ayat'},
              {to:"/ibnukatsir/Al-`Asr" ,onClick:this.props.url103, title:'Al-`Asr', note:'Mekah - 3 Ayat'},
              {to:"/ibnukatsir/Al-Humazah" ,onClick:this.props.url104, title:'Al-Humazah', note:'Mekah - 9 Ayat'},
              {to:"/ibnukatsir/Al-Fil" ,onClick:this.props.url105, title:'Al-Fil', note:'Mekah - 5 Ayat'},
              {to:"/ibnukatsir/Quraisy" ,onClick:this.props.url106, title:'Quraisy', note:'Mekah - 4 Ayat'},
              {to:"/ibnukatsir/Al-Ma`un" ,onClick:this.props.url107, title:'Al-Ma`un', note:'Mekah - 7 Ayat'},
              {to:"/ibnukatsir/Al-Kausar" ,onClick:this.props.url108, title:'Al-Kausar', note:'Mekah - 3 Ayat'},
              {to:"/ibnukatsir/Al-Kafirun" ,onClick:this.props.url109, title:'Al-Kafirun', note:'Mekah - 6 Ayat'},
              {to:"/ibnukatsir/An-Nasr" ,onClick:this.props.url110, title:'An-Nasr', note:'Mekah - 3 Ayat'},
              {to:"/ibnukatsir/Al-Lahab" ,onClick:this.props.url111, title:'Al-Lahab', note:'Mekah - 5 Ayat'},
              {to:"/ibnukatsir/Al-Ikhlas" ,onClick:this.props.url112, title:'Al-Ikhlas', note:'Madinah - 4 Ayat'},
              {to:"/ibnukatsir/Al-Falaq" ,onClick:this.props.url113, title:'Al-Falaq', note:'Madinah - 5 Ayat'},
              {to:"/ibnukatsir/An-Nas" ,onClick:this.props.url114, title:'An-Nas', note:'Mekah - 6 Ayat'},
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