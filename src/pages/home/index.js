import React, { useEffect } from 'react'
import Wrapper from "../../components/wrapper";
import styles from "./home.module.css";
import { useDispatch, useSelector } from "react-redux"
import { getHomeData } from "../../_reducers/home.reducer"
import { config } from "../../_config/index"
import { Token, fetchData } from "../../_constants/user.constants"

const { testUrl } = config
let url  = `${testUrl}/admin/home/`

const index = () => {

    const dispatch = useDispatch()
    const commentState = useSelector(state => state.reducer.home.comments)
    const signUpState = useSelector(state => state.reducer.home.signups)
    console.log(Object.keys(signUpState))
    const topicState = useSelector(state => state.reducer.home.topics)
    
    let { comments_today, total_comments, total_comments_monthAgo, total_comments_weekAgo, total_comments_yearAgo } = commentState
    let { total_users, users_online, total_signups_today, total_signups_weekAgo, total_signups_monthAgo, total_signups_yearAgo} = signUpState
    let { total_topics, topics_today, total_topics_weekAgo, total_topics_monthAgo, total_topics_yearAgo} = topicState

    useEffect(() => {
        dispatch(fetchData("GET", url, Token, getHomeData ))
    }, [dispatch])

    
    return (
        <Wrapper>
            <div className="flex flex-col items-center w-full justify-center">
                <div className="flex justify-between w-10/12">
                    <div className="w-72 h-40 px-10 py-6 text-lg rounded-lg bg-white-300-mobicure text-gray-900">
                        <div className="text-base">Total Users</div>
                        <div className="flex justify-between items-center pt-2">
                            <span className="text-3xl ">{total_users}</span>
                            <img src="/total-users.svg" className="w-12 h-11" alt="total-users"/>
                        </div>
                        <div className="flex py-4 text-xs justify-start items-center">
                            <span className="text-green-600 font-medium">+2.5%</span>
                        </div>
                    </div>
                    <div className="w-72 h-40 px-10 py-6 text-lg rounded-lg bg-white-300-mobicure text-gray-900 ml-6">
                        <div className="text-base">Zone Topics</div>
                        <div className="flex justify-between items-center pt-2">
                            <span className="text-3xl ">{total_topics}</span>
                            <img src="/zone-topics.svg" className="w-12 h-11" alt="total-users"/>
                        </div>
                        <div className="flex py-4 text-xs justify-start items-center">
                            <span className="text-gray-500">Sort By</span>
                            <div className="flex">
                                <span className="text-red-500 ml-5">Month</span>
                                <img src="/arrow-down-red.svg" className="ml-1" />
                            </div>
                        </div>
                    </div>
                    <div className="w-72 h-40 px-10 py-6 text-lg rounded-lg bg-white-300-mobicure text-gray-900 ml-6">
                        <div className="text-base">Sign ups</div>
                        <div className="flex justify-between items-center pt-2">
                            <span className="text-3xl ">{total_signups_yearAgo}</span>
                            <img src="/sign-ups.svg" className="w-12 h-11" alt="total-users"/>
                        </div>
                        <div className="flex py-4 text-xs justify-start items-center">
                            <span className="text-gray-500">Sort By</span>
                            <div className="flex">
                                <span className="text-green-500 ml-5">Month</span>
                                <img src="/arrow-down.svg" className="ml-1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 w-10/12 h-80 p-8 rounded-2xl bg-white-300-mobicure text-gray-900">
                    <div className="flex justify-between max-w-full">
                        <div className="text-lg">Active Users</div>
                        <div className="flex items-center ">
                            <div><img src="/calendar.svg "></img></div>
                            <div><span className="text-sm mx-3 text-blue-900">Last 30 Days</span></div>
                            <div><img src="/arrow-down-blue.svg"></img></div>
                        </div>
                    </div>
                    <div className=" text-blue-800 text-2xl pt-2 w-82 h-full">
                        <img src="/graph.svg" />

                    </div>

                </div>
                <div className="mt-12 w-10/12 h-96 rounded-lg text-gray-900 flex justify-between">
                   <div className="bg-white-300-mobicure rounded-2xl w-2/4 h-full p-6">
                    <div className="flex justify-between">
                        <div className="text-lg">
                            Shop Orders
                        </div>
                        <div className="flex text-xs items-center">
                            <span className="text-gray-400">Sort By</span>
                            <div className="flex">
                                <span className="text-green-500 ml-5">Week</span>
                                <img src="/arrow-down.svg" className="ml-2" />
                            </div>
                        </div>
                    </div>
                    <div className="text-blue-600 pt-2 font-semibold text-3xl">
                            98,425K
                    </div>
                    <div className=" text-blue-800 text-2xl pt-2 w-82 h-full">
                        <img src="/chart.svg" />

                    </div>
                   </div>
                   <div className="w-2/4 h-full ml-8">
                    <div className="bg-white-300-mobicure rounded-2xl h-48 p-6">
                    <div className="flex justify-between">
                        <div className="text-lg font-medium">
                            User Distribution
                        </div>
                        <div className="flex text-xs items-center">
                            <span className="text-gray-400">Select City</span>
                            <div className="flex">
                                <span className="text-red-500 ml-5">Lagos</span>
                                <img src="/arrow-down-red.svg" className="ml-2" />
                            </div>
                        </div>
                    </div>

                    </div>
                    <div className="bg-white-300-mobicure rounded-2xl h-44 mt-3 p-6">
                    <div className="flex justify-between">
                        <div className="text-lg font-medium">
                            User Online
                        </div>
                        <div className="flex text-xs items-center">
                            <span className="text-gray-400">{users_online} </span>
                            <div className="flex">
                                <span className="text-green-500 ml-5">{`of ${total_users}`}</span>
                            </div>
                        </div>
                    </div>

                    </div>

                   </div>

                </div>
                <div className="mt-12 w-10/12 h-full px-12 py-8 rounded-2xl bg-white-300-mobicure text-gray-900 ">
                    <div className="flex justify-between max-w-full">
                        <div className="text-lg font-semibold text-gray-700">Shop order history</div>
                        <div className="flex items-center ">
                            <div><img src="/calendar.svg "></img></div>
                            <div><span className="text-sm mx-3 text-blue-900">Last 30 Days</span></div>
                        </div>
                    </div>
                    <div className="w-full border-t-2 mt-2 flex flex-col">
                        <div className="flex justify-between py-4 px-12 items-center">
                            <div>
                                <img src="/order.svg" className="w-10 h-10"></img>
                            </div>
                            <div className="text-lg flex flex-col">
                                <span className="text-lg">Black Rider</span>
                                <span className="text-xs text-gray-500">November 20th 2015 by 2:00pm</span>
                            </div>
                            <div className="text-sm font-medium">Benin</div>
                            <div className="text-green-500 text-lg font-semibold">N35,000</div>
                        </div>
                        <div className="flex justify-between py-4 px-12 items-center">
                            <div>
                                <img src="/order.svg" className="w-10 h-10"></img>
                            </div>
                            <div className="text-lg flex flex-col">
                                <span className="text-lg">Big Tipper</span>
                                <span className="text-xs text-gray-500">September 12th 2020 at 11:56 AM</span>
                            </div>
                            <div className="text-sm font-medium">Lagos</div>
                            <div className="text-green-500 text-lg font-semibold">N35,000</div>
                        </div>
                        <div className="flex justify-between py-4 px-12 items-center">
                            <div>
                                <img src="/order.svg" className="w-10 h-10"></img>
                            </div>
                            <div className="text-lg flex flex-col">
                                <span className="text-lg">Blue Flame</span>
                                <span className="text-xs text-gray-500">September 12th 2020 at 11:56 AM</span>
                            </div>
                            <div className="text-sm font-medium">Abuja</div>
                            <div className="text-green-500 text-lg font-semibold">N35,000</div>
                        </div>
                        <div className="flex justify-between py-4 px-12 items-center">
                            <div>
                                <img src="/order.svg" className="w-10 h-10"></img>
                            </div>
                            <div className="text-lg flex flex-col">
                                <span className="text-lg">Diamond girl</span>
                                <span className="text-xs text-gray-500">September 12th 2020 at 11:56 AM</span>
                            </div>
                            <div className="text-sm font-medium">Abia</div>
                            <div className="text-green-500 text-lg font-semibold">N35,000</div>
                        </div>
                        <div className="flex justify-between py-4 px-12 items-center">
                            <div>
                                <img src="/order.svg" className="w-10 h-10"></img>
                            </div>
                            <div className="text-lg flex flex-col">
                                <span className="text-lg">Bank Transfer</span>
                                <span className="text-xs text-gray-500">September 12th 2020 at 11:56 AM</span>
                            </div>
                            <div className="text-sm font-medium">Lagos</div>
                            <div className="text-green-500 text-lg font-semibold">N35,000</div>
                        </div>
                    </div>

                </div>
            </div>
        </Wrapper>
    )
};

export default index;
