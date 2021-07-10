import React from 'react'
import { Component } from 'react'

class Register extends Component {

    state = {
        name: '',
        eamil: '',
        password: '',
        confirmPassword: '',
        error: {}
    }
    // Handel the event and we using this into our onChange event
    changeHandler = event => {
        this.setState({
            [event.target.name]: [event.target.value]
        })
    }
    submitHandler = event => {
        event.preventDefault()
    }
    render() {
        let { name, email, password, confirmPassword, error } = this.state
        return (
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <h1 className='text-center display-4 '>Register Hare</h1>
                    <form onSubmit={this.submitHandler} >
                        <div className='form-group m-3'>
                            <label htmlFor='name'>Name: </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Your name..'
                                name='name'
                                id='name'
                                value={name}
                                onChange={this.changeHandler}
                            />
                        </div>

                        <div className='form-group m-3'>
                            <label htmlFor='email'>Email: </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Your email..'
                                name='email'
                                id='email'
                                value={email}
                                onChange={this.changeHandler}
                            />
                        </div>

                        <div className='form-group m-3'>
                            <label htmlFor='password'>password: </label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Enter Your password..'
                                name='password'
                                id='password'
                                value={password}
                                onChange={this.changeHandler}
                            />
                        </div>

                        <div className='form-group m-3'>
                            <label htmlFor='confirmPassword'>confirm Password: </label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Enter Your confirm password..'
                                name='confirmPassword'
                                id='confirmPassword'
                                value={confirmPassword}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <button className='btn btn-success m-3'>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Register
