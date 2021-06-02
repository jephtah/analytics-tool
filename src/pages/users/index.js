import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Wrapper from '../../components/wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../_actions'
import Pagination from '../../components/pagination'
// import { MdSearch } from 'react-icons/md'

function users () {
  const [searchStr, setSearchStr] = useState('')
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  /* useEffect(() => {
    dispatch(userActions.getAll())
    if (searchStr) {
      dispatch(userActions.getSearch(searchStr))
    }
  }, [searchStr]) */

  useEffect(() => {
    const timer = setTimeout(() => {
      searchStr ? dispatch(userActions.getSearch(searchStr)) : dispatch(userActions.getAll())
    }, 1000)
    return () => clearTimeout(timer)
  }, [searchStr])

  let allUsers
  let totalUsers
  let cursors
  console.log(users.users)

  if (users.users) {
    allUsers = users.users.users ? users.users.users : users.users.results
    totalUsers = users.users.totalUsers ? users.users.totalUsers : users.users.totalSearch
    cursors = users.users.cursors
  }

  const forwardClick = () => {
    dispatch(userActions.getPaginated(cursors.after))
  }
  const backClick = () => {
    dispatch(userActions.getPaginated(cursors.before))
  }

  console.log(cursors)
  let pagination
  if (cursors) {
    if (cursors.hasNext) {
      pagination = <Pagination hasNext={cursors.hasNext} forwardClick={() => forwardClick()}/>
    }
    if (cursors.hasPrevious) {
      pagination = <Pagination hasNext={cursors.hasPrevious} backwardClick={() => backClick()}/>
    }
    if (cursors.hasNext && cursors.hasPrevious) {
      pagination = <> <Pagination hasNext={cursors.hasNext} forwardClick={() => forwardClick()}/> <Pagination hasPrevious={cursors.hasPrevious} backwardClick={() => backClick()}/> </>
    }
  }

  return (
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
                                <span className="cursor-pointer text-xl">&#10247;</span>
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
              <span className="text-xs">Showing 4 of 256 entries</span>
              <div className="flex">
                {pagination}
              </div>
            </div>
        </Wrapper>
  )
}

/* <div  >
                <div className="flex mt-4 w-1/2" >
                <button className="mr-6 w-40 flex gap-x-6 justify-center bg-blue-500 py-3 font-bold text-xl">Previous</button>
                <button className="w-40 flex gap-x-6 justify-center bg-blue-500 py-3 font-bold text-xl">Next</button>
              </div>
*/
export default users
