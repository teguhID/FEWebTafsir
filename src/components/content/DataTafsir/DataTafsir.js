import React, { Component } from 'react'
import axios from 'axios'
import { Link, Element } from 'react-scroll'
import { Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import namaSurahLogo from '../../../img/noSurah.png'

class DataTafsir extends Component{

    state = {
        dataTafsir:[]
    }
    
    componentDidMount(){
        axios.get(this.props.url)
        .then(res => {
            const dataTafsir = res.data
            this.setState({ dataTafsir });
        })
    }

    render(){
        return(
            <div>   
                <Row>
                {/* box ayat */}
                    <Col>
                    <p style={{ fontSize:17 }}><b>Ayat Al-Quran</b></p>
                        <div className='ayat-box'>
                        {this.state.dataTafsir.map(dataTafsir_ =>
                            <div>
                                <br/>
                                <p style={{ textAlign:"left", margin:0 }}><b> {dataTafsir_.noAyat} </b></p>
                                <a href="" style={{ textDecoration:'none', color: 'black' }}><Link activeClass="active" to={dataTafsir_.noAyat} smooth={true} duration={400} containerId="main"><p className='ayat-font'>{dataTafsir_.ayat}</p></Link></a>
                                <p style={{ textAlign:"left", margin:0, color:'rgb(59, 59, 59)'}}>
                                <b> {dataTafsir_.latin} </b><br/>
                                {dataTafsir_.terjemahan}
                                </p>
                            </div> 
                        )} 
                        </div>
                    </Col>

                    {/* box tafsir */}
                    <Col>
                    <p style={{ fontSize:17 }}><b>Tafsir Ibnu Katsir</b></p>
                        <Element id="main" style={{position: "relative", overflowY: "scroll"}}>
                        <div className='tafsir-box'>
                        {this.state.dataTafsir.map(dataTafsir_ =>
                            <Element name={dataTafsir_.noAyat}>
                                <p><b>{dataTafsir_.tafsirIbnuKatsir}</b>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                </p>
                            </Element>
                        )}
                        </div>
                        </Element>
                    </Col>
                </Row>
            </div>
        )
    }
}

const data = state => {
    return{
        url : state.url
    }
}

export default connect(data)(DataTafsir)
