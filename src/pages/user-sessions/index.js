import React, {  useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { sessionActions } from "../../_actions"
import { useRouter } from "next/router" 
import Wrapper from "../../components/wrapper";

const user_session = () => {

    const router = useRouter()

    let session = useSelector(state => state.sessions);
    const dispatch = useDispatch()

   

    return (
        <Wrapper>
            <div className="flex flex-col px-5">
                <div className="flex align-baseline items-center just ">
                    <span className="text-black text-xl">User Sessions</span>
                    <input className="w-72 h-11 rounded-xl bg-gray-300 mx-52 px-6 text-xs " placeholder="Search Sessions" />
                </div>
                <div className="flex mt-6 content-center cursor-pointer" onClick={() =>router.back() }>
                    <img src="/less-than.svg" alt="left arrow"/>
                    <p className="text-sm pl-2">Back</p>
                </div>
                <div className="flex mt-10">
                    <div className="w-56 h-32 bg-white-300-mobicure rounded-md p-4">
                        <p className="text-blue-600">Sessions</p>
                        <p className="mt-3 text-xs"><span className="text-black">Active Sessions:</span> 0</p>
                        <p className="mt-3 text-xs"><span className="text-black">Chat Sessions:</span> 0</p>
                    </div>
                    <div className="w-72 h-32 bg-white-300-mobicure rounded-md ml-12 p-4">
                        <p className="text-blue-600">Subscription</p>
                        <p className="mt-3 text-xs"><span className="text-black">Subscription Status: </span> inactive</p>
                        <p className="mt-3 text-xs"><span className="text-black">Coin Balance:</span> 0</p>
                    </div>
                </div>

                <div className="mt-16 w-11/12">
                    <p className="text-black text-sm"> Sessions History</p>
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
            </div>
        </Wrapper>
    )
}

export default user_session
