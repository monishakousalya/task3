import React, { Component } from 'react';
import FormElement1 from './FormElement1';
import './feedback.css'

import {feedback} from '../store'
import * as firebase from "../firebase";

class Feedbackview  extends Component {
    constructor(props) {
        super();
        this.state = {
            fields: {
               name: '',
               feed: ''
            },
            btnState: true
        }
          this.onSubmit = (e) => {
            feedback(this.state.fields.name, this.state.fields.feed)
        }
        this.onChange = (id, field, val) => {
            this.state.fields[field] = val;
            let state  = (this.state.fields.name !== '' && this.state.fields.feed !== '')
           // this.setState({"btnState" : state});
        }

    }
    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.props.history.push('/')
                : '';
        });
    }
    render() {
        return (
		<div class="container">
  <div class="row">
    <div class="col-sm">
      
    </div>
    <div class="col-sm">

	
	
	
	
	
	
	
	
	
	
	
                  <div className='container'>
                <h3 className='heading'>Did This help u...</h3>
                <div className="card-body">
                    <FormElement1  name="name" inputType="name" fullName="Enter your Name" action={this.onChange} />
                      <div class="form-group">
    <label for="exampleFormControlTextarea1">Your FeedBack...</label>
    <textarea class="form-control rounded-0" inputType="feed" id="exampleFormControlTextarea1" rows="10" action={this.onChange}/>
</div>
			
					
				
                  <div align="center">  {this.state.btnState ? <button className="btn btn-outline-success" onClick={this.onSubmit}>Submit</button> : ''}</div>
                </div>
            </div>
    </div>
    <div class="col-sm">
     
	 
	 
	
    </div>
  </div>
</div>

        )
    }
}
export default Feedbackview;
