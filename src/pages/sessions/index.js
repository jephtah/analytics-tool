import React, {useState, useEffect } from "react"
import Wrapper from "../../components/wrapper";
import { useDispatch, useSelector } from "react-redux"
import { sessionActions } from '../../_actions';
import Switch from '@material-ui/core/Switch';




function sessions () {

    let  sessions  = useSelector(state => state.sessions);
    const dispatch =  useDispatch()

    const [state, setState] = useState({
        checkedA: true,
        checkedB: false,
      });

    useEffect(() => {
        dispatch(sessionActions.getAllSessions())
    }, [])

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

     sessions = sessions.sessions;


    let session_items

     if(sessions) {
          session_items = sessions.users;
     }

    return (
        <Wrapper>
            
            <div className="flex align-baseline items-center just px-5">
                <span className="text-black text-xl"> Chat Sessions</span>
                <input className="w-72 h-11 rounded-xl bg-gray-300 mx-52 px-6 text-xs" placeholder="Search sessions" />
            </div>
            <div className="flex flex-wrap items-center ">

                { session_items ? session_items.map(session_item =>
                    <div className="bg-white w-48 h-72 rounded-2xl mt-10 p-6 mr-4 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between">
                                <img src="/placeholder.svg" />
                               {session_item.session_state == 'active'?
                                <Switch
                                checked={state.checkedA}
                                color="primary"
                                onChange={handleChange}
                                name="checkedB"
                                inputProps={{ 'aria-label': 'disabled checkbox' }}
                            /> :  <Switch
                                    checked={state.checkedB}
                                    color="primary"
                                    onChange={handleChange}
                                    name="checkedB"
                                    inputProps={{ 'aria-label': 'disabled checkbox' }}
                            />
                        }
                            </div>

                            <div className="flex flex-col mt-5">
                                <span className="text-black ">{session_item.with_user} </span>
                                <span className="text-xs mt-2">
                                    {session_item.session_state == "active" ? <>Active State: Yes</> : <>Active State: No</> }</span>
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
                ): (<div className="flex items-center text-2xl mt-10"> Fetching User Sessions...</div>)}
            </div>
            <div className="flex items-center py-6">
                <span className="text-xs">Showing 4 of 256 entries</span>
                <span className="rounded-xl text-blue-500 ml-3 py-2 px-3 bg-blue-200">1</span>
                <span className="rounded-xl text-white ml-3 py-2 px-3 bg-blue-500">2</span>
                <span className="rounded-xl text-white ml-3 py-2 px-3 bg-blue-500">3</span>
            </div>
        </Wrapper>
    )
}

export default sessions ;


