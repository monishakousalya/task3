import React from 'react';
import {connect} from 'react-redux';
import {
    Card, CardText, CardBody,
    CardTitle,
    Progress
} from 'reactstrap';
import './RecordItems.css'
import goldMedal from '../assets/gold-medal.svg'
import silverMedal from '../assets/silver-medal.svg'
import bronzeMedal from '../assets/bronze-medal.svg'
import github from '../assets/github-logo.svg'
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/mail.svg'
import back from '../assets/body.jpeg'
import {Container, Row, Col, Table, Button} from 'reactstrap';
import {getRecordsThunk} from "../store";
import {FaSearch} from 'react-icons/fa';
<<<<<<< HEAD
=======
var QRCode = require('qrcode.react'); //For QR Code component taken from https://github.com/zpao/qrcode.react
>>>>>>> c8583d8aafc6b6285b28e30218bf035acfb0705b
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const boys = importAll(require.context('../assets/boys', false, /\.(png|jpe?g|svg)$/));
const girls = importAll(require.context('../assets/girls', false, /\.(png|jpe?g|svg)$/));


var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { back } + ")"
};






class ListRecord extends React.Component {
    constructor(props) {
        super();
        this.state = {
            search : '',
            position: null,
            person: {},
            size: 12
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
        this.setState({"search": event.target.value});
    }

    createView(data, position) {
        this.setState({"position": position, "person": data, "size": 8});
    }
    closeIt = () => {
        this.setState({"size" : 12})
    }


    render() {
        let toppers = [];
        let maxPoints=0; //This will hold the points of the 1st ranker
        for (var i = 0; i < ((this.props.records.Reducer.records.length > 3) ? 3 : this.props.records.Reducer.records.length); i++) {
          maxPoints=this.props.records.Reducer.records[0]["points"]; //Updating the maxPoints to hold the points of the 1st ranker
            if(this.state.search === ''  || (this.props.records.Reducer.records[i]["name"]["first"].toLowerCase().includes(this.state.search.toLowerCase())) ||  (this.props.records.Reducer.records[i]["name"]["last"].toLowerCase().includes(this.state.search.toLowerCase()))) {
                toppers.push(
<<<<<<< HEAD
                    <Col sm="12" md={{size: 4}} key={i}><div class="shadow p-3 mb-5 bg-white rounded">
                       <Card className='h-100'>
					   
=======
                    <Col sm="12" md={{size: 4}} key={i}>
                        <Card className='h-100 hover' id={i} onClick={this.createView.bind(this, this.props.records.Reducer.records[i], i)}>
>>>>>>> c8583d8aafc6b6285b28e30218bf035acfb0705b
                            <div className="text-center">

                                <img src={this.props.records.Reducer.records[i]["photo"]["type"] === 'boys' ? boys[this.props.records.Reducer.records[i]["photo"]["number"] + '.svg'] : girls[this.props.records.Reducer.records[i]["photo"]["number"] + '.svg']}
                                     className="img-fluid rounded-circle toppers" alt="..."/>
                            </div>
                            <CardBody>
                                <CardTitle
                                    className='cardTitle'><b>{i + 1}</b>. {this.props.records.Reducer.records[i]["name"]["first"]} <span className='teamId'> ( Team ID : {this.props.records.Reducer.records[i]["teamId"]} ) </span></CardTitle>
                                {i === 0 ? <div className='text-center'><img alt='medal' src={goldMedal} width='40'/></div> : ''}
                                {i === 1 ? <div className='text-center'><img alt='medal' src={silverMedal} width='40'/></div> : ''}
                                {i === 2 ? <div className='text-center'><img alt='medal' src={bronzeMedal} width='40'/></div> : ''}
                                <br />
                                <div className="progressBar">
                                  <Progress striped  value={this.props.records.Reducer.records[i]["points"]} max={maxPoints} />
                                </div>
                                <CardText
                                    className='cardTitle cardPoint'>{this.props.records.Reducer.records[i]["points"]}</CardText>
                            </CardBody>
							
							
                        </Card></div>
                    </Col>)
            }
        }
        let others = [];
        for (i = 3; i < ((this.props.records.Reducer.records.length > 3) ? this.props.records.Reducer.records.length : 3); i++) {
            if(this.state.search === ''  || (this.props.records.Reducer.records[i]["name"]["first"].toLowerCase().includes(this.state.search.toLowerCase())) ||  (this.props.records.Reducer.records[i]["name"]["last"].toLowerCase().includes(this.state.search.toLowerCase()))) {

                others.push(
                      <Row key={i} className="list hover" onClick={this.createView.bind(this, this.props.records.Reducer.records[i], i)}>
                        <Col className="">
                          <img src={this.props.records.Reducer.records[i]["photo"]["type"] === 'boys' ? boys[this.props.records.Reducer.records[i]["photo"]["number"] + '.svg'] : girls[this.props.records.Reducer.records[i]["photo"]["number"] + '.svg']} height="80px" class="rounded-circle align-self-start mr-3" />
                        </Col>
                        <Col className="list-text">
                          <h5>{i+1}. {this.props.records.Reducer.records[i]["name"]["first"]}</h5> ( Team ID : {this.props.records.Reducer.records[i]["teamId"]} )
                        </Col>
                        <Col className="list-text">
                          <h5 className="list-text">{this.props.records.Reducer.records[i]["points"]}</h5>
                        </Col>
                      </Row>
                )
            }
        }
		
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

        return (
	

            <Row>
                <Col sm='12' md='12'>

                        <div className="container search">
						 <div class="row">
    <div class="col">
      
                            <div className="row">
                                <div className="col-md-12">
                                    <div id="custom-search-input">
                                        <div className="input-group col-md-12">
                                            <input type="text" className="form-control input-lg"
                                                   placeholder="Search by Name" value={this.state.search} onChange={this.handleChange}/>
                                            <span className="input-group-btn">
                        <button className="btn btn-info btn-lg" type="button">
                            <FaSearch/>
                        </button>
                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
    </div>
    <div class="col">
     
                            <div className="row">
                                <div className="col-md-12">
                                    <div id="custom-search-input">
                                        <div className="input-group col-md-12">
                                            <input type="number" className="form-control input-lg"
                                                   placeholder="Search by Id" value={this.state.search} onChange={this.handleChange}/>
                                            <span className="input-group-btn">
                        <button className="btn btn-info btn-lg" type="button">
                            <FaSearch/>
                        </button>
                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
    </div>
  </div>
						
						
						
						
						
						
                           
							
							
							
							
							
                        </div>

                </Col>
                <Col sm="12" md={{size: this.state.size}}>
                    <Container className="topList">
                        <Row>
                            {toppers}
                        </Row>
                        <Row className='otherRow'>
                                <Container>
                                {others}
                              </Container>
                        </Row>
                    </Container>
                </Col>
                {this.state.size === 8 ? (
                    <Col sm="12" md={{size: 4}} className='sizeClass' id={this.state.position}>
                        <Button color="link buttonView" onClick={this.closeIt}>Close</Button>
                        <div className="text-center">
                            <img src={this.state.person["photo"]["type"] === 'boys' ? boys[this.state.person["photo"]["number"] + '.svg'] : girls[this.state.person["photo"]["number"] + '.svg']} className="img-fluid rounded-circle view" alt="..."/>
                        </div>
                        <CardTitle
                            className='cardTitle'>{this.state.person["name"]["first"]} {this.state.person["name"]["last"]}</CardTitle>

                        {this.state.position === 0 ?
                            <div className='text-center'><img  alt='medal' src={goldMedal} width='40'/></div> : ''}
                        {this.state.position === 1 ?
                            <div className='text-center'><img alt='medal' src={silverMedal} width='40'/></div> : ''}
                        {this.state.position === 2 ?
                            <div className='text-center'><img alt='medal' src={bronzeMedal} width='40'/></div> : ''}
                        <br />
                        <div className="progressBar">
                          <Progress striped  value={this.state.person["points"]} max={maxPoints} />
                        </div>
                        <CardText className='cardTitle cardPoint'>{this.state.person["points"]}</CardText>
                        <Container>
                            <Row className='Social'>
                                <Col sm='4' md='4'>
                                    <div className='text-center'>
                                        <a href={this.state.person["social"].github}>
                                            <img className="align-self-start mr-3" src={github}
                                                 alt="Generic placeholder" width='30px' height='30px'/>
                                        </a>
                                    </div>

                                </Col>
                                <Col sm='4' md='4'>
                                    <div className='text-center'>
                                        <a href={this.state.person["social"].linkedin}>
                                            <img className="align-self-start mr-3" src={linkedin}
                                                 alt="Generic placeholder" width='30px' height='30px'/>
                                        </a>
                                    </div>

                                </Col>
                                <Col sm='4' md='4'>
                                    <div className='text-center'>
                                        <a href={"mailto:" + this.state.person["email"]}>
                                            <img className="align-self-start mr-3" src={mail}
                                                 alt="Generic placeholder" width='30px' height='30px'/>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Container>

                            <h5><b> Team Id</b> : {this.state.person["teamId"]}</h5>
                            <h5><b> Year of Study</b> : {this.state.person["year"]}</h5>
                            <h5> <b> About </b>: {this.state.person["about"]}</h5>

                        </Container>
                        <Container> {/* Implementing QR Code here. It will show Name, TeamID, Year of Study, Points, Github Link, LinkedIn Link and Email of the user */}
                          <center>
                            <QRCode value={"Name: " + this.state.person["name"]["first"] + this.state.person["name"]["last"] + "\n\nTeam Id: " + this.state.person["teamId"] + "\n\nYear of Study: " + this.state.person["year"] + "\n\nPoints: " + this.state.person["points"] + "\n\nGitHub Link: " + this.state.person["social"].github + "\n\nLinkedIn Link: " + this.state.person["social"].linkedin + "\n\nEmail: " + this.state.person["email"] } />
                          </center>
                        </Container>
                    </Col>
                ) : ''}

            </Row>
        )
    }
}

const mapState = state => ({
        records: state
})

const mapDispatch = dispatch => {
    dispatch(getRecordsThunk())
    return {}
}
export default connect(mapState, mapDispatch)(ListRecord);
