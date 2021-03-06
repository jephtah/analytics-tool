import React, { useEffect } from "react"
import Wrapper from "../../components/wrapper";
import { useDispatch, useSelector } from "react-redux"
import { userActions } from '../../_actions';
import { MdSearch } from "react-icons/md";




function users () {

  const  users  = useSelector(state => state.users);
    const dispatch =  useDispatch()

    useEffect(() => {
        dispatch(userActions.getAll())
    }, [])


    const all_users = users.users


     return (
        <Wrapper>
            <div className="flex">
                <input className="w-72 h-14 rounded-2xl bg-gray-300 px-6" placeholder="Search here..." />
                {/* <MdSearch className="absolute" /> */}
            </div>
            <div className="flex flex-wrap justify-between ">

                { all_users ? all_users.map(user =>
                    <div className="bg-white w-48 h-80 rounded-2xl mt-10 p-6 mr-4 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between">
                                <img src="/placeholder.svg" />
                                <span className="cursor-pointer text-xl">&#10247;</span>
                            </div>
                            <div className="flex flex-col mt-5">
                                <span className="text-black ">{user.username}</span>
                                <span className="text-xs mt-2 text-gray-400">Joined: {user.created_at.split('T')[0]}</span>
                            </div>
                        </div>
                        <div className="text-xs flex mt-5">
                            <img src="/box.svg" />
                            <span className="ml-3">{user.verified ? "Verified" : "Not Verified"} </span>
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
                ): (<div> Loading... </div>)}
            </div>
                <div className="flex items-center lg:mt-16 py-6">
                    <span className="text-xs">Showing 4 of 256 entries</span>
                    <span className="rounded-xl text-blue-500 ml-3 py-2 px-3 bg-blue-200">1</span>
                    <span className="rounded-xl text-white ml-3 py-2 px-3 bg-blue-500">2</span>
                    <span className="rounded-xl text-white ml-3 py-2 px-3 bg-blue-500">3</span>
            </div>
        </Wrapper>
    )
}

export default users ;


