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
    dispatch(singleSessionActions.getSingleSession(username))
  }, [])

  let session
  let activeSessions
  let chatSessions
  let subscriptionData
  if (singleSession.singleSession) {
    session = singleSession.singleSession || []
    chatSessions = session.length
    activeSessions = session.filter(sess => sess.session_state !== 'inactive').length
    subscriptionData = []
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
                                <p className="mt-3 text-xs"><span className="text-black">Active Sessions:</span>{activeSessions || 'unavailable' }</p>
                                <p className="mt-3 text-xs"><span className="text-black">Chat Sessions:</span> {chatSessions || 'unavailable' }</p>
                            </div>
                            <div className="w-72 h-32 bg-white-300-mobicure rounded-md ml-12 p-4">
                                <p className="text-blue-600">Subscription</p>
                                <p className="mt-3 text-xs"><span className="text-black">Subscription Status: </span> inactive</p>
                                <p className="mt-3 text-xs"><span className="text-black">Coin Balance:</span> 0</p>
                            </div>
                        </div>
                        <div className="mt-16 w-11/12">
                            <p className="text-black text-sm"> Sessions History</p>
							<table className='border-collapse w-full bg-white rounded-xl mt-4'>
								<thead>
									<tr>
										{ sessionsColumns.map((cols, key) => (
											<th key={key} className='text-blue-600 text-sm text-center p-4 flex-col justify-between last:pr-4 first: pl-4'>
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
												<td className='px-0 py-4 align-middle text-center transition ease-out delay-300 border-t-2 border-solid border-gray-300'>{row.with_user.username}</td>
												<td className='px-0 py-4 align-middle text-center transition ease-out delay-300 border-t-2 border-solid border-gray-300'>{row.with_user.verified}</td>
												<td className='px-0 py-4 align-middle text-center transition ease-out delay-300 border-t-2 border-solid border-gray-300'>{row.with_user.membership_type}</td>
												<td className='px-0 py-4 align-middle text-center transition ease-out delay-300 border-t-2 border-solid border-gray-300'>{new Date(row.with_user.created_at).toLocaleDateString('en-US')}</td>
												{row.session_state !== 'inactive'
												  ? (<td className='px-0 py-4 align-middle text-center pr-4 transition ease-out delay-300 border-t-2 border-solid border-gray-300'> <Switch onChange = {() => handleChange(row.with_user, row.with_user.id)} /> </td>)
												  : (<td className='px-0 py-4 align-middle text-center pr-4 transition ease-out delay-300 border-t-2 border-solid border-gray-300'><Switch disabled checked/></td>)
												}
											</tr>
										))
									}
								</tbody>
							</table>
                        </div>
                        <div className="mt-16 w-11/12">
                            <div className="flex justify-between">
                                <p className="text-black text-sm"> Subscriptions History</p>
                                <p className="text-green-600 text-sm"> <span className="text-gray-400">Sort By</span> Week </p>
                            </div>
                            <table className='border-collapse w-full bg-white rounded-xl mt-4'>
								<thead>
									<tr>
										{ SubscriptionColumns.map((cols, key) => (
											<th key={key} className='text-blue-600 text-sm text-center p-4 flex-col justify-between last:pr-4 first: pl-4'>
												{cols}
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									{
										!subscriptionData.length && (
											<tr>
												<td colSpan={sessionsColumns.length}>
													<em className='block text-red-400 p-4 w-full text-center'>no data</em>
												</td>
											</tr>
										)
									}
									{
										subscriptionData.map((row, i) => (
											<tr key={i}>
												<td className='px-0 py-4 align-middle text-center transition ease-out delay-300 border-t-2 border-solid border-gray-300'>{row.subscriptiontype}</td>
												<td className='px-0 py-4 align-middle text-center transition ease-out delay-300 border-t-2 border-solid border-gray-300'>{row.subscriptionAmount}</td>
												<td className='px-0 py-4 align-middle text-center transition ease-out delay-300 border-t-2 border-solid border-gray-300'>{row.subscriptionLeft}</td>
												<td className='px-0 py-4 align-middle text-center transition ease-out delay-300 border-t-2 border-solid border-gray-300'>{new Date(row.with_user.created_at).toLocaleDateString('en-US')}</td>
												<td className='px-0 py-4 align-middle text-center pr-4 transition ease-out delay-300 border-t-2 border-solid border-gray-300'>{row.purchaseDate}</td>
											</tr>
										))
									}
								</tbody>
							</table>
                        </div>
                    </>
                  : <div>Loading...</div>

                }

            </div>
        </Wrapper>
  )
}

export default userSession
