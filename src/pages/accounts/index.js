/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Wrapper from '../../components/wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { accountActions } from '../../_actions'
import Modal from '../../components/modal'

function accounts () {
  const [showModal, setShowModal] = useState(false)
  const [showEditAccountModal, setShowEditAccountModal] = useState(false)
  const [showCouponsModal, setShowCouponsModal] = useState(false)
  const [showWarningModal, setShowWarningModal] = useState(false)
  const [searchStr, setSearchStr] = useState('')

  const accounts = useSelector(state => state.accounts)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      searchStr ? dispatch(accountActions.getSearch(searchStr)) : dispatch(accountActions.getAllAccounts())
    }, 1000)
    return () => clearTimeout(timer)
  }, [searchStr])

  // console.log("accounts", accounts.accounts)
  let allAccounts
  let cursors
  let totalSearch

  if (accounts.accounts) {
    allAccounts = accounts.accounts.results ? accounts.accounts.results : accounts.accounts
    cursors = accounts.accounts.cursor ? accounts.accounts.cursor : null
    totalSearch = accounts.accounts.totalSearch ? accounts.accounts.totalSearch : null
  }

  console.log([cursors, totalSearch])

  const displayWarningModal = () => {
    setShowWarningModal(true)
    setShowEditAccountModal(false)
  }

  const dismissWarningModal = () => {
    setShowWarningModal(false)
    setShowCouponsModal(true)
  }

  const displayEditAccountModal = () => {
    setShowEditAccountModal(true)
    setShowModal(false)
  }

  const dismissEditAccountModal = () => {
    setShowEditAccountModal(false)
  }

  const displayEditDeleteModal = () => {
    setShowModal(true)
  }

  const dismissEditDeleteModal = () => {
    setShowModal(false)
  }

  const displayCouponsModal = () => {
    setShowCouponsModal(true)
    setShowModal(false)
  }

  const dismissCouponsModal = () => {
    setShowCouponsModal(false)
  }

  const EditDeleteModal = props => {
    const { visible, cancel, type, size } = props

    return (
            <Modal visible={visible} cancel={cancel} type={type} size={size}>
                <div className="flex flex-col">
                    <button className=" px-6 text-lg text-gray-700 outline-none" onClick={() => displayEditAccountModal()}>Edit</button>
                    <hr className="w-full border-gray-500"/>
                    <button className=" px-6 text-lg text-gray-700 outline-none" onClick={() => displayWarningModal()}>Delete</button>
                </div>
            </Modal>
    )
  }

  const WarningModal = props => {
    const { visible, cancel, type, size } = props

    return (
                <>
                    <Modal visible={visible} className="w-1/2" type={type} size={size}>
                        <div className="flex flex-col justify-center content-center">
                            <h1 className="text-3xl mb-4 text-center font-bold">Warning!</h1>
                            <p className="text-center text-2xl font-semibold">Are you sure you want to delete this coupon?</p>

                            <div className="flex w-full justify-center mt-4">
                                <button onClick={cancel} className="mr-6 p-4 w-48 bg-gray-50 text-blue-700 text-xl border-solid border-2 rounded-lg">Cancel</button>
                                <button className="mr-4 p-4 w-48 bg-blue-600 text-white text-xl border-solid border-2 rounded-lg">Delete Coupon</button>
                            </div>
                        </div>
                    </Modal>

                </>
    )
  }

  const CouponsModal = props => {
    const { visible, cancel, coinTypeOptions, type, size } = props

    return (
            <Modal visible={visible} cancel={cancel} cancelIcon type={type} size={size} className="w-96">
                <div className="w-full">
                    <div className="mx-8">
                        <div className="mb-8">
                            <h1 className="text-4xl text-gray-700">Coupons</h1>
                        </div>
                        <div className="my-6 w-full bg-gray-100 rounded-lg">

                            <div className="p-4">
                                <table className="table-auto w-full border-collapse">
                                    <thead className="">
                                        <tr className="border-b-2 border-solid border-gray-400">
                                            <th className="text-left text-2xl font-light">coupon name</th>
                                            <th className="text-left text-2xl font-light">no. of coupon</th>
                                            <th className="text-left text-2xl font-light">no of coupon used</th>
                                            <th className=""> </th>
                                        </tr>
                                    </thead>
                                    <tbody className="mt-4">
                                        <tr className="">
                                            <td>MYPADDICARES</td>
                                            <td>200</td>
                                            <td>167</td>
                                            <td className="text-red-700 font-bold cursor-pointer" onClick={() => displayWarningModal()}>Delete Coupon</td>
                                        </tr>
                                        <tr>
                                            <td>Alex MyPaddi</td>
                                            <td>50</td>
                                            <td>67</td>
                                            <td className="text-red-700 font-bold cursor-pointer" onClick={() => displayWarningModal()}>Delete Coupon</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-4xl text-gray-700"> Create Coupon</h1>

                        <div className="my-6 flex flex-col">
                            <label className="mb-5 text-2xl text-gray-700"> Coin Type</label>
                            <select name="coin type" className="h-16 text-3xl border-solid border-2 rounded-lg border-blue-400 outline-none" >
                                <option value="select" className="text-2xl text-gray-700 bl-4">Select</option>
                                {
                                    coinTypeOptions
                                      ? coinTypeOptions.map((coinType, key) => {
                                        return <option key={key} value={coinType} className="text2xl text-gray-700 pl-4">{coinType}</option>
                                      })
                                      : null
                                }
                            </select>
                        </div>

                        <div className="my-6 flex flex-col">
                            <label className="mb-5 text-2xl text-gray-700">Coin Type</label>
                            <select name="coin type" className="h-16 border-solid border-2 text-3xl rounded-lg border-blue-400 outline-none">
                                <option value="select"className="text-2xl text-gray-700 pl-4">Select</option>
                                {
                                    coinTypeOptions
                                      ? coinTypeOptions.map((coinTypes, key) => {
                                        return <option key={key} value={coinTypes} className="text-3xl text-gray-700 pl-4 ">{coinTypes}</option>
                                      })
                                      : null
                                }
                            </select>
                        </div>

                        <div className="my-6 flex flex-col">
                            <label className="mb-5 text-2xl text-gray-700">Coupon code (min length 7 - max length 10)</label>
                            <input type="text" maxLength="10" minLength="7" className="h-16 text-3xl border-solid border-2 rounded-lg border-blue-400 pl-4 outline-none"/>
                        </div>

                        <div className="my-6 flex flex-col">
                            <label className="mb-5 text-2xl text-gray-700">Expires in (days)</label>
                            <input type="number" className="h-16 border-solid border-2 rounded-lg border-blue-400 pl-4 outline-none text-3xl"/>
                        </div>

                        <div className="my-6 flex flex-col">
                            <label className="mb-5 text-2xl text-gray-700">How many coupons to generate</label>
                            <input type="number" className="text-3xl h-16 border-solid border-2 rounded-lg border-blue-400 pl-4 outline-none"/>
                        </div>
                    </div>

                    <div className=" flex justify-center mt-4">
                        <button className="p-4 w-48 bg-blue-400 text-white text-xl border-solid border-2 rounded-lg border-blue-400 pl-4">Save Coupon</button>
                    </div>

                </div>
            </Modal>
    )
  }

  const EditAccountModal = props => {
    const [username, setUserName] = useState('')
    const [accountType, setAccountType] = useState([])

    const { visible, cancel, options, cancelIcon, className, type } = props
    return (
            <Modal visible={visible} cancel={cancel} cancelIcon={cancelIcon} className={className} type={type}>
                <h1 className="text-3xl mb-6 text-center text-gray-700">Edit Account</h1>
                <div>
                    <div className="flex flex-col mb-8">
                        <label htmlFor="username" className="text-2xl mb-4 text-gray-500">Change username</label>
                        <input
                            type="text" value={username}
                            onChange={(e) => setUserName(e.currentTarget.value)}
                            className="text-3xl h-16 border-solid border-2 rounded-lg border-gray-400 pl-4 outline-none"
                        />
                    </div>
                    <div className="flex flex-col mb-8">
                        <label htmlFor="Account type" className="text-2xl mb-4 text-gray-500">Accont Type</label>
                        <select name="account type" className="h-16 border-solid border-2 text-2xl rounded-lg pl-4 border-gray-400 outline-none">
                            <option value="select" className="text-2xl text-gray-700 pl-4" disabled>Select</option>
                            {
                                options
                                  ? options.map((option, key) => {
                                    return <option key={key} value={option} className="text-2xl text-gray-700 pl-4" onChange={(e) => setAccountType(e.currentTarget.value)}>{option}</option>
                                  })
                                  : null
                            }
                        </select>
                    </div>
                    <div className=" flex justify-center mt-4">
                        <button
                            className="p-4 w-48 bg-blue-400 text-white text-xl border-solid border-2 rounded-lg border-blue-400 pl-4"
                            onClick={cancel}
                        >
                            Save
                        </button>
                    </div>
                </div>

            </Modal>
    )
  }

  /* const dispatchSearch = () =>
    {
        dispatch(accountActions.getSearch(searchStr))
    }

    const handleSearch = debounce(dispatchSearch()) */
  return (
        <>
            <Wrapper>
                <div className="flex align-baseline items-center just px-5">
                    <span className="text-black text-xl">Accounts</span>
                    <input className="w-72 h-11 rounded-xl bg-gray-300 mx-52 px-6 text-xs" placeholder="Search Accounts"type="text" value={searchStr} onChange={(e) => setSearchStr(e.currentTarget.value)} />
                </div>
                <div className="flex flex-wrap justify-between ">

                    { allAccounts
                      ? allAccounts.map(account =>
                        <div
                            key={account.username} className="bg-white w-52 h-88 rounded-2xl mt-10 p-6 mr-4 flex flex-col justify-between"

                        >
                            <div>
                                <div className="flex justify-between">
                                {account.profile.profile_picture_url !== null
                                  ? <img onClick={() => displayCouponsModal()} src={account.profile.profile_picture_url} width="70" height="50" className="rounded-3xl"/>
                                  : <img onClick={() => displayCouponsModal()} src="/placeholder.svg" width="70" height="70" />}
                                    <span className="cursor-pointer text-xl" onClick={() => displayEditDeleteModal()}>&#10247;</span>
                                </div>
                                <div className="flex flex-col mt-5">
                                    <span className="text-black ">{account.username}</span>
                                    <span className="text-xs mt-2 text-gray-700">Joined: {account.created_at.split('T')[0]}</span>
                                </div>
                            </div>
                            <div className="text-xs flex mt-5">
                                <img src="/box.svg" />
                                <span className="ml-3">{account.membership_type}</span>
                            </div>
                            <div className="text-xs flex mt-3">
                                <img src="/phone.svg" />
                                <span className="ml-3">{account.phone_number}</span>
                            </div>
                            <div className="text-xs flex overflow-x-auto overflow-y-auto mt-3">
                                <img src="/envelope.svg" className="mb-2"/>
                                <span className="ml-3 mb-2">{account.email}</span>
                            </div>
                        </div>
                      )
                      : (<div> Loading... </div>)}
                </div>
                <div className="flex items-center py-6 lg:mt-16">
                    <span className="text-xs">Showing 4 of 256 entries</span>
                    <span className="rounded-xl text-blue-500 ml-3 py-2 px-3 bg-blue-200">1</span>
                    <span className="rounded-xl text-white ml-3 py-2 px-3 bg-blue-500">2</span>
                    <span className="rounded-xl text-white ml-3 py-2 px-3 bg-blue-500">3</span>
                </div>
            </Wrapper>
            <EditDeleteModal
                visible={showModal}
                cancel={dismissEditDeleteModal}
                type='small'
                size="reduced"
            />
            <EditAccountModal
                visible={showEditAccountModal}
                cancel={dismissEditAccountModal}
                options ={['option1', 'option2', 'option3']}
                cancelIcon
                type='main'
            />
            <CouponsModal
                visible={showCouponsModal}
                cancel={dismissCouponsModal}
                cancelIcon
                type='main'
                coinTypeOptions= {['BTC', 'ETH', 'KOBO', 'CENTS']}
                size='default'
            />
            <WarningModal
                cancel={dismissWarningModal}
                visible={showWarningModal}
                type= 'main'
                size= 'reduced'
            />
        </>
  )
}

export default accounts
