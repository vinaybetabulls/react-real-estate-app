import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="form">
                    <form className="form-a">
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <div className="form-group">
                                    <label htmlFor="Type">Username / Email</label>
                                    <input type="text" className="form-control form-control-lg form-control-a" placeholder="Username / Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Type">Password</label>
                                    <input type="password" className="form-control form-control-lg form-control-a" placeholder="Password" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-b">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
