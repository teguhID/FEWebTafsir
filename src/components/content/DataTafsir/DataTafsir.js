import React, { Component } from 'react'
import axios from 'axios'
import { Link, Element } from 'react-scroll'
import { Row, Col } from 'reactstrap'
import { connect } from 'react-redux'

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
                    <p style={{ fontSize:17, fontWeight:"bold"}}>Ayat Al-Quran</p>
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
                    <p style={{ fontSize:17, fontWeight:"bold" }}>Tafsir Ibnu Katsir</p>
                        <Element id="main" style={{position: "relative", overflowY: "scroll"}}>
                        <div className='tafsir-box'>
                        {this.state.dataTafsir.map(dataTafsir_ =>
                            <Element name={dataTafsir_.noAyat}>
                                <b>{dataTafsir_.tafsirIbnuKatsir}</b>  
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
