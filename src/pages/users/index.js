import React, { useEffect } from "react"
import Wrapper from "../../components/wrapper";
import { useDispatch, useSelector } from "react-redux"

import { getUsers } from '../../_reducers/users.reducer'
import { config } from "../../_config/index"
import { Token, fetchData } from "../../_constants/user.constants"

const { testUrl } = config
let url = `${testUrl}/admin/manage-users/`

const index = _props => {

    const dispatch =  useDispatch()
    const userState = useSelector(state => state.reducer.users.users)
    const hasError = useSelector(state => state.reducer.hasError)

    useEffect(() => {
        dispatch(fetchData("GET",url, Token, getUsers ))
    }, [dispatch])


    return (
        <Wrapper>
            <div className="w-full px-6">
                <div>
                    <input className="w-1/3 h-14 rounded-xl bg-gray-300  ml-24 p-6" placeholder="Search here..." />
                </div>
                <div className=" grid grid-cols-3  justify-between px-24">
                    {userState.map((user) => {
                        let { id, username, email, phone_number, created_at, updated_at, profile, } = user
                        return(
                            <div >
                                <div className="bg-white w-60 h-72 rounded-2xl mt-10 p-6 flex flex-col justify-between" key={id}>
                                    <div>
                                        <img src="/placeholder.jpg"/>
                                        <div className="flex flex-col mt-5">
                                            <span className="text-black ">{username}</span>
                                            <span className="text-xs mt-2">{created_at}</span>
                                        </div>
                                    </div>
                                    <div className="text-xs flex mt-5">
                                        <img src="/box.svg"/>
                                        <span className="ml-3">{updated_at}</span>
                                    </div>
                                    <div className="text-xs flex mt-3">
                                        <img src="/phone.svg"/>
                                        <span className="ml-3">{phone_number}</span>
                                    </div>
                                    <div className="text-xs flex mt-3">
                                        <img src="/envelope.svg"/>
                                        <span className="ml-3">{email}</span>
                                    </div>
                                </div>     
                            </div>                           
                        )
                    })}
                </div>
                
                <div className="flex items-center py-6 ml-24">
                    <span className="text-xs">Showing 4 of 256 entries</span>
                    <span className="rounded-xl text-blue-500 ml-3 py-2 px-3 bg-blue-200">1</span>
                    <span className="rounded-xl text-white ml-3 py-2 px-3 bg-blue-500">2</span>
                    <span className="rounded-xl text-white ml-3 py-2 px-3 bg-blue-500">3</span>
                </div>
            </div>
        </Wrapper>
    )
}

export default index;
