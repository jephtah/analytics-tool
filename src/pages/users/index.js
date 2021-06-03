/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Wrapper from '../../components/wrapper'
import Modal from '../../components/modal'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../_actions'
import { EditDeletePopOver, WarningModal } from '../accounts'
import Pagination from '../../components/pagination'
// import { MdSearch } from 'react-icons/md'

function users () {
  const [searchStr, setSearchStr] = useState('')
  const [showEditDeleteModal, setShowEditDeleteModal] = useState(false)
  const [showWarningModal, setShowWarningModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)

  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      searchStr ? dispatch(userActions.getSearch(searchStr)) : dispatch(userActions.getAll())
    }, 1000)
    return () => clearTimeout(timer)
  }, [searchStr])

  let allUsers
  let totalUsers
  let cursors

  if (users.users) {
    allUsers = users.users.users ? users.users.users : users.users.results
    totalUsers = users.users.totalUsers ? users.users.totalUsers : users.users.totalSearch
    cursors = users.users.cursors
  }

  const handleDelete = () => {
    console.log('This is has been deleted')
    setShowWarningModal(false)
  }

  const displayEditDeleteModal = (event, user) => {
    setShowEditDeleteModal(true)
    setAnchorEl(event.currentTarget)
    setCurrentUser(user)
  }

  const dismissEditDeleteModal = () => {
    setShowEditDeleteModal(false)
    setAnchorEl(null)
  }

  const displayWarningModal = () => {
    setShowWarningModal(true)
  }

  const dismissWarningModal = () => {
    setShowWarningModal(false)
  }

  const displayEditModal = () => {
    setShowEditModal(true)
  }

  const dismissEditModal = () => {
    setShowEditModal(false)
  }

  const forwardClick = () => {
    searchStr === '' ? dispatch(userActions.getPaginated(cursors.after)) : dispatch(userActions.getSearch(searchStr, cursors.after))
  }
  const backClick = () => {
    searchStr === '' ? dispatch(userActions.getPaginated(cursors.before)) : dispatch(userActions.getSearch(searchStr, cursors.before))
  }

  let pagination
  if (cursors) {
    if (cursors.hasNext) {
      pagination = <Pagination hasNext={cursors.hasNext} forwardClick={() => forwardClick()}/>
    }
    if (cursors.hasPrevious) {
      pagination = <Pagination hasPrevious={cursors.hasPrevious} backwardClick={() => backClick()}/>
    }
    if (cursors.hasNext && cursors.hasPrevious) {
      pagination = <> <Pagination hasNext={cursors.hasNext} forwardClick={() => forwardClick()}/> <Pagination hasPrevious={cursors.hasPrevious} backwardClick={() => backClick()}/> </>
    }
  }

  return (
    <>
      <Wrapper>
            <div className="flex">
                <input className="w-72 h-14 rounded-2xl bg-gray-300 px-6" value={searchStr} placeholder="Search here..." type="text" onChange={(e) => setSearchStr(e.currentTarget.value)} />
                {/* <MdSearch className="absolute" /> */}
            </div>
            <div className="flex flex-wrap justify-between ">

                { allUsers
                  ? allUsers.map((user, key) =>
                    <div key={key} className="bg-white w-48 h-80 rounded-2xl mt-10 p-6 mr-4 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between">
                                <Link href="/user-sessions"><img src="/placeholder.svg" className="cursor-pointer"/></Link>
                                <span className="cursor-pointer text-xl"onClick={(event) => displayEditDeleteModal(event, user)}>&#10247;</span>
                            </div>
                            <div className="flex flex-col mt-5">
                                <span className="text-black ">{user.username}</span>
                                <span className="text-xs mt-2 text-gray-400">Joined: {user.created_at.split('T')[0]}</span>
                            </div>
                        </div>
                        <div className="text-xs flex mt-5">
                            <img src="/box.svg" />
                            <span className="ml-3">{user.verified ? 'Verified' : 'Not Verified'} </span>
                        </div>
                        <div className="text-xs flex mt-3">
                            <img src="/phone.svg" />
                            <span className="ml-3">{user.phone_number}</span>
                        </div>
                        <div className="text-xs flex mt-3 overflow-auto">
                            <img className="mb-3"src="/envelope.svg" />
                            <span className="ml-3 mb-3">{user.email}</span>
                        </div>
                    </div>
                  )
                  : (<div> Loading... </div>)}
            </div>
            <div className="flex flex-col lg:mt-16 py-6">
              <span className="text-xs">Showing 4 of {totalUsers} entries</span>
              <div className="flex">
                {pagination}
              </div>
            </div>
        </Wrapper>
        <EditDeletePopOver
          onClose= {dismissEditDeleteModal}
          open={showEditDeleteModal}
          anchorEl={anchorEl}
          editFunction = {displayEditModal}
          deleteFunction = {displayWarningModal}
        />
        <WarningModal
          cancel={dismissWarningModal}
          visible={showWarningModal}
          type='main'
          handleDelete = {handleDelete}
        />
        <EditUserModal
          visible={showEditModal}
          cancel={dismissEditModal}
          cancelIcon
          type='main'
          user= {currentUser}
        />
    </>
  )
}

const EditUserModal = props => {
  const { visible, cancel, cancelIcon, className, type, value, onChange, saveFunction, user } = props
  const memberTtype = user ? user.membership_type : ''
  return (
            <Modal visible={visible} cancel={cancel} cancelIcon={cancelIcon} className={className} type={type}>
                <h1 className="text-3xl mb-6 text-center text-gray-700">Edit User Membership</h1>
                <div>
                    <div className="flex flex-col mb-8">
                        <label htmlFor="username" className="text-2xl mb-4 text-gray-500">Membership Type</label>
                        <input
                            type="text"
                            onChange={onChange} value={memberTtype}
                            className="text-3xl h-16 border-solid border-2 rounded-lg border-gray-400 pl-4 outline-none"
                        />
                    </div>
                    <div className=" flex justify-center mt-4">
                        <button
                            className="p-4 w-48 bg-blue-400 text-white text-xl border-solid border-2 rounded-lg border-blue-400 pl-4"
                            onClick={saveFunction}
                        >
                          Save
                        </button>
                    </div>
                </div>

            </Modal>
  )
}
export default users
