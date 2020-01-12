import React, { Component } from 'react';
import axios from 'axios';

export default class AddNewProperty extends Component {
    constructor(props) {
        super(props)
        this.state = {
            propertyLocation: '',
            propertyDescription: '',
            squareFeet: '',
            bedRooms: '',
            bathRooms: '',
            price: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.addProperty = this.addProperty.bind(this)
    }
    handleChange(ev) {
        console.log(ev)
        this.setState( {
            [ev.target.name] : ev.target.value
        })
    }
    addProperty(ev) {
        ev.preventDefault();
        axios.post('http://localhost:4500/addProperty', this.state)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="container">
                <div className="col-sm-12 section-t8">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="form-a contactForm">
                                <div id="sendmessage">Your message has been sent. Thank you!</div>
                                <div id="errormessage"></div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <input type="text" name="propertyLocation" className="form-control form-control-lg form-control-a" placeholder="Property Location" data-rule="minlen:4" data-msg="Please enter at least 4 chars" value={this.state.propertyLocation} onChange={this.handleChange} />
                                            <div className="validation"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <input name="propertyDescription" type="text" className="form-control form-control-lg form-control-a" placeholder="Property Description" data-rule="email" data-msg="Please enter a valid email" value={this.state.propertyDescription} onChange={this.handleChange} />
                                            <div className="validation"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <input type="number" name="price" className="form-control form-control-lg form-control-a" placeholder="Price" data-msg="Please enter at least 8 chars of subject" value={this.sprice} onChange={this.handleChange} />
                                            <div className="validation"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <input type="number" name="squareFeet" className="form-control form-control-lg form-control-a" placeholder="Area" data-msg="Please enter at least 8 chars of subject" value={this.state.squareFeet} onChange={this.handleChange} />
                                            <div className="validation"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <input type="number" name="bedRooms" className="form-control form-control-lg form-control-a" placeholder="Bed Rooms" data-msg="Please enter at least 8 chars of subject" value={this.state.bedRooms} onChange={this.handleChange} />
                                            <div className="validation"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <input type="number" name="bathRooms" className="form-control form-control-lg form-control-a" placeholder="Bath Rooms" data-msg="Please enter at least 8 chars of subject" value={this.state.bathRooms} onChange={this.handleChange} />
                                            <div className="validation"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="click" onClick={this.addProperty} className="btn btn-a">Add Property</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
