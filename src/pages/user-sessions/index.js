/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { singleSessionActions } from '../../_actions'
import { useRouter } from 'next/router'
import Wrapper from '../../components/wrapper'
import Switch from '@material-ui/core/Switch'

const userSession = () => {
  const router = useRouter()

  const singleSession = useSelector(state => state.singleSession)

  const dispatch = useDispatch()

  useEffect(() => {
    const { query: { username } } = router
    dispatch(singleSessionActions.getSingleSession('vicsoft'))
  }, [])

  let session
  let activeSessions
  let chatSessions
  if (singleSession.singleSession) {
    session = singleSession.singleSession
    chatSessions = session.length
    activeSessions = session.filter(sess => sess.session_state !== 'inactive').length
  }
  console.log(session)
  const sessionsColumns = ['Username', 'Active Session', 'Doctor/Counsellor', 'Date Created', 'End Session']
  const SubscriptionColumns = ['Subscription Type', 'Subscription Amount', 'Subscription Left', 'Purchase Date']

  const handleChange = (with_user, id) => {
    dispatch(singleSessionActions.endSession(with_user, id))
  }

  return (
        <Wrapper>
            <div className="flex flex-col px-5">
                <div className="flex align-baseline items-center just ">
                    <span className="text-black text-xl">User Sessions</span>
                    <input className="w-72 h-11 rounded-xl bg-gray-300 mx-52 px-6 text-xs " placeholder="Search Sessions" />
                </div>
                <div className="flex mt-6 content-center cursor-pointer" onClick={() => router.back() }>
                    <img src="/less-than.svg" alt="left arrow"/>
                    <p className="text-sm pl-2">Back</p>
                </div>
                {session
                  ? <>
                        <div className="flex mt-10">
                            <div className="w-56 h-32 bg-white-300-mobicure rounded-md p-4">
                                <p className="text-blue-600">Sessions</p>
                                <p className="mt-3 text-xs"><span className="text-black">Active Sessions:</span>{activeSessions}</p>
                                <p className="mt-3 text-xs"><span className="text-black">Chat Sessions:</span> {chatSessions}</p>
                            </div>
                            <div className="w-72 h-32 bg-white-300-mobicure rounded-md ml-12 p-4">
                                <p className="text-blue-600">Subscription</p>
                                <p className="mt-3 text-xs"><span className="text-black">Subscription Status: </span> inactive</p>
                                <p className="mt-3 text-xs"><span className="text-black">Coin Balance:</span> 0</p>
                            </div>
                        </div>
                        <div className="mt-16 w-11/12">
                            <p className="text-black text-sm"> Sessions History</p>
							<table className='border-collapse w-full bg-white rounded-xl'>
								<thead>
									<tr>
										{ sessionsColumns.map((cols, key) => (
											<th key={key} className='text-blue-600 text-sm last:text-right p-4 flex-col justify-between'>
												{cols}
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									{
										!session.length && (
											<tr>
												<td colSpan={sessionsColumns.length}>
													<em className='block text-red-400 p-4 w-full text-center'>no data</em>
												</td>
											</tr>
										)
									}
									{
										session.map((row, i) => (
											<tr key={i}>
												<td>{row.with_user.username}</td>
												<td>{row.with_user.verified}</td>
												<td>{row.with_user.membership_type}</td>
												<td>{new Date(row.with_user.created_at).toLocaleDateString('en-US')}</td>
												{row.session_state !== 'inactive'
												  ? (<td> <Switch onChange = {() => handleChange(row.with_user, row.with_user.id)} /> </td>)
												  : (<td><Switch disabled checked/></td>)
												}
											</tr>
										))
									}
								</tbody>
							</table>
                            <div className="h-auto bg-white-300-mobicure mt-4 rounded-md p-4 flex justify-between">
                                <div>
                                    <span className="text-blue-600 text-sm">Username</span>
                                </div>
                                <div>
                                    <span className="text-blue-600 text-sm">Active Session</span>
                                </div>
                                <div>
                                    <span className="text-blue-600 text-sm">Doctor/Counsellor</span>
                                </div>
                                <div>
                                    <span className="text-blue-600 text-sm">Date Created</span>
                                </div>
                                <div>
                                    <span className="text-blue-600 text-sm">End Session</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 w-11/12">
                            <div className="flex justify-between">
                                <p className="text-black text-sm"> Subscriptions History</p>
                                <p className="text-green-600 text-sm"> <span className="text-gray-400">Sort By</span> Week </p>
                            </div>
                            <div className="h-auto bg-white-300-mobicure mt-4 rounded-md p-4 flex justify-between">
                                <div>
                                    <span className="text-blue-600 text-sm">Subscription Type</span>
                                </div>
                                <div>
                                    <span className="text-blue-600 text-sm">Subscription Amount</span>
                                </div>
                                <div>
                                    <span className="text-blue-600 text-sm">Subscription Left</span>
                                </div>
                                <div>
                                    <span className="text-blue-600 text-sm">Purchase Date</span>
                                </div>
                            </div>
                        </div>
                    </>
                  : <div>Loading...</div>

                }

            </div>
        </Wrapper>
  )
}

export default userSession
