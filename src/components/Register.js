import React, { useState } from 'react'
import { register } from '../logic/UserFunctions'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const  Register = () => {

const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [street, setStreet] = useState('')
const [city, setCity] = useState('')
const [zipCode, setZipCode] = useState('')
const [country, setCountry] = useState('')
const [level, setLevel] = useState('')
const [image, setImage] = useState()
const [role, setRole] = useState('')

const [data, setData] = useState()



let navigate = useNavigate()

  const createUser = (e) => {
    e.preventDefault()

    const newUser = 
    { // creates new object with name,email, password
      username: username, // using useStates
      first_name: firstName,
      last_name: lastName,
      street: street,
      city: city,
      zip_code: zipCode,
      country: country,
      email: email,
      password: password,
      level: level, 
      image: image,
      role: role
    }

  
      const formData = new FormData()
      formData.append('username', username)
      formData.append('image', image)
      formData.append('first_name', firstName)
      formData.append('last_name', lastName)
      formData.append('street', street)
      formData.append('city', city)
      formData.append('zip_code', zipCode)
      formData.append('country', country)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('level', level)
      formData.append('role', role)

      axios.post('http://localhost:8000/auth/register', formData, {
        headers : {
          'content-type' : 'multipart/form-data'
        }
      })
      .then(response => {
        console.log(response)
        setData(response.data)
        navigate('/login')
      })
      .catch(err => console.log(err))


      // register(newUser).then(res => { // calls the register function from UserFunctions.js and passes newUser as argument
      //   navigate(`/login`) // then navigates to login
      // })

    }

    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form onSubmit={createUser}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input
                  type="firstName"
                  className="form-control"
                  name="firstName"
                  placeholder="Your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="lastName"
                  className="form-control"
                  name="lastName"
                  placeholder="Your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="street">Street</label>
                <input
                  type="street"
                  className="form-control"
                  name="street"
                  placeholder="Address"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="city"
                  className="form-control"
                  name="city"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">Zip code</label>
                <input
                  type="zipCode"
                  className="form-control"
                  name="zipCode"
                  placeholder="ZIP code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  type="country"
                  className="form-control"
                  name="country"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="level">Level</label>
                <input
                  type="level"
                  className="form-control"
                  name="level"
                  placeholder="Your level"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <input
                  type="text"
                  className="form-control"
                  name="role"
                  placeholder="Your role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>

            </form>
            {data && (
        <>
        {/* <h1>{data.nameFile}</h1> */}
        {/* <img width={'200px'} src={`http://localhost:8000/api/users${data.image}`} alt={data.image}/>  */}
        </> 
      )}

          </div>
        </div>
      </div>
    )
  }

export default Register