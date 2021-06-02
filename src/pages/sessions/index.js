import React, { useState, useEffect } from 'react'
import Wrapper from '../../components/wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { sessionActions } from '../../_actions'
import Switch from '@material-ui/core/Switch'
import Pagination from '../../components/pagination'

function sessions () {
  let sessions = useSelector(state => state.sessions)
  const dispatch = useDispatch()

  const [state, setState] = useState({
    checkedA: true,
    checkedB: false
  })
  const [searchStr, setSearchStr] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      searchStr ? dispatch(sessionActions.getSearch(searchStr)) : dispatch(sessionActions.getAllSessions())
    }, 1000)
    return () => clearTimeout(timer)
  }, [searchStr])

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }
  sessions = sessions.sessions

  let sessionItem
  let cursors
  let totalSessions

  if (sessions) {
    sessionItem = sessions.users ? sessions.users : sessions.results
    cursors = sessions.cursors
    totalSessions = sessions.totalSessions ? sessions.totalSessions : sessions.totalSearch
  }

  const forwardClick = () => {
    dispatch(sessionActions.getPaginated(cursors.after))
  }
  const backClick = () => {
    dispatch(sessionActions.getPaginated(cursors.before))
  }

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

            <div className="flex align-baseline items-center just px-5">
                <span className="text-black text-xl"> Chat Sessions</span>
                <input value={searchStr} className="w-72 h-11 rounded-xl bg-gray-300 mx-52 px-6 text-xs" placeholder="Search sessions" onChange={(e) => setSearchStr(e.currentTarget.value)}/>
            </div>
            <div className="flex flex-wrap items-center ">

                { sessionItem
                  ? sessionItem.map((sessionItem, key) =>
                    <div key={key} className="bg-white w-48 h-72 rounded-2xl mt-10 p-6 mr-4 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between">
                                <img src="/placeholder.svg" />
                               {sessionItem.session_state === 'active'
                                 ? <Switch
                                checked={state.checkedA}
                                color="primary"
                                onChange={handleChange}
                                name="checkedB"
                                inputProps={{ 'aria-label': 'disabled checkbox' }}
                            />
                                 : <Switch
                                    checked={state.checkedB}
                                    color="primary"
                                    onChange={handleChange}
                                    name="checkedB"
                                    inputProps={{ 'aria-label': 'disabled checkbox' }}
                            />
                        }
                            </div>

                            <div className="flex flex-col mt-5">
                                <span className="text-black ">{sessionItem.with_user} </span>
                                <span className="text-xs mt-2">
                                    {sessionItem.session_state === 'active' ? <>Active State: Yes</> : <>Active State: No</> }</span>
                            </div>
                        </div>
                        <div className="text-xs flex mt-5">
                            <img src="/box.svg" />
                            <span className="ml-3">03 March 2021  09:59AM</span>
                        </div>
                        <div className="text-xs flex mt-3">
                            <img src="/phone.svg" />
                            <span className="ml-3">+2349075858063</span>
                        </div>
                        <div className="text-xs flex mt-3">
                            <img src="/envelope.svg" />
                            <span className="ml-3">ritabota@gmail.com</span>
                        </div>
                    </div>
                  )
                  : (<div className="flex items-center text-2xl mt-10"> Fetching User Sessions...</div>)}
            </div>
            <div className="flex flex-col mt-6 py-6">
              <span className="text-xs">Showing 4 of 256 entries</span>
              <div className="flex">
                {pagination}
              </div>
            </div>
        </Wrapper>
  )
}

export default sessions
