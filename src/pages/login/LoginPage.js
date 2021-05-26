import React, { useState, useEffect } from 'react'
// import { Link, useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { userActions } from '../../_actions'

export default function login (props) {
  const [secret, setSecret] = useState('')
  const [submitted, setSubmitted] = useState(false)
  // const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch()
  // const location = useLocation();

  // const history = useHistory();

  let username
  let password

  const checkSecret = (secret) => {
    if (secret === '12345678') {
      return { username: 'test_admin', password: '123456' }
    } else {
      return { username: 'wrong', password: 'wrong' }
    }
  }

  // reset login status
  useEffect(() => {
    // dispatch(userActions.logout());
  }, [])

  function handleChange (e) {
    setSecret(e.target.value)

    console.log(secret)
    // console.log(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()

    const { username, password } = checkSecret(secret)
    setSubmitted(true)
    if (username && password) {
      // get return url from location state or default to dashboard page
      const { from } = location.state || { from: { pathname: '/' } }
      dispatch(userActions.login(username, password, props.history))
    }
  }

  return (
        <div className='flex h-full'>
           <div className='flex flex-col bg-blue-800 justify-center justify-items-auto h-screen items-center text-white text-5xl w-2/4'>
                MyPaddi Analytics Dashboard
           </div>
            <div className='flex flex-col items-center justify-center align-middle text-xl justify-items-auto w-2/4'>
                <form name="form" onSubmit={handleSubmit}>

                    <div className='flex flex-col justify-center items-center'>
                        <label className='mb-3 text-xl'>ADMIN: </label>
                        <input type="password" placeholder='enter secret' name={secret} value={secret} onChange={handleChange} className='p-2 w-80 text-md border-blue-700 bg-gray-300 rounded h-10 flex' />

                        <button className='py-2 px-6 bg-blue-800 text-sm text-white mt-2 rounded'>Login</button>

                    </div>
                </form>
            </div>

        </div>
  )
}
