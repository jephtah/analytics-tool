import React, { useEffect, useState } from 'react'
import Wrapper from '../../components/wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { zoneActions } from '../../_actions/zone.actions'

const index = _props => {
  const [searchStr, setSearchStr] = useState('')
  const zones = useSelector(state => state.zones)
  const dispatch = useDispatch()

  let timeRef

  useEffect(() => {
    clearTimeout(timeRef)
    timeRef = setTimeout(() => {
      dispatch(zoneActions.getAll())
      // dispatch(zoneActions.getSearch(searchStr))
    }, 1000)
  }, [searchStr])

  let postData

  if (zones.zones) {
    postData = zones.zones.posts
  }

  console.log('Here', postData)

  return (
        <Wrapper>
            <div className="flex mt-12 w-full">
                <div>
                    <div className="flex items-center">
                        <img src="/071-alert-1.svg"/>
                        <span className="ml-3 text-black">The Zone Topics</span>
                    </div>
                    <div className="flex mt-14">
                    <div className="flex flex-col h-80 w-64 bg-white rounded-xl mt-4 items-center py-4">

                        <ul>
                            <li className="bg-blue-500 px-8 flex text-white items-center  rounded-xl py-3 text-sm">
                                <img src="/plus-sign.svg" className="w-3"/>
                                <span className="ml-3">Create Topic</span>
                            </li>
                            <li className="flex px-8 rounded-xl mt-8 text-sm">
                                <img src="/alert-blue.svg" className="w-4"/>
                                <span className="ml-3 text-blue-500">Topic Visibility</span>
                            </li>
                            <li className="flex px-8 rounded-xl mt-8 text-sm">
                                <img src="/pin-topic.svg" className="w-4"/>
                                <span className="ml-3 ">Pin Topic</span>
                            </li>
                            <li className="flex px-8  rounded-xl mt-8 text-sm">
                                <img src="/delete.svg" className="w-4"/>
                                <span className="ml-3 ">Delete Post</span>
                            </li>
                            <li className="flex px-8 rounded-xl mt-8 text-sm">
                                <img src="/dots.svg" className="w-4"/>
                                <span className="ml-3 ">Edit Post</span>
                            </li>

                        </ul>

                    </div>
                    </div>
                </div>
                    {/* start of right */}
                    <div className="ml-12">
                        <div className="flex justify-between">
                            <div>
                                <input className="w-72 h-14 rounded-2xl bg-gray-300 px-6" placeholder="Search here..." value={searchStr} onChange={(e) => setSearchStr(e.currentTarget.value) } />
                            </div>

                            <div className="rounded-2xl bg-gray-300 px-8 py-4 flex justify-between">
                                <span className="mr-6">Newest</span>
                                <img src="/078-down-chevron.svg"/>
                            </div>
                        </div>
                        { postData
                          ? postData.map((post, key) =>
                            <div key={key} className="flex-1 bg-white rounded-2xl h-20 px-6 mt-4 mt-10">
                            <div>
                                <span className="text-xs ml-9 "> {post.created_at}</span>
                            </div>
                            <div className="flex mt-1">
                                <img src="/090-uncheck-mark-1.svg"/>
                                <span className="ml-3 text-sm text-black">{post.title}</span>
                            </div>
                        </div>
                          )
                          : <div className="flex-1 bg-white rounded-2xl h-20 px-6 mt-4">
                        <div>
                            <span className="text-xs ml-9"> January 24th, 2021 04:25 PM</span>
                        </div>
                        <div className="flex mt-1">
                            <img src="/090-check-mark-1.svg"/>
                            <span className="ml-3 text-sm text-black">Illum omnis quo illum nisi. Nesciunt est accusamus. Blanditiis nisi quae eum nisi similique. Modi consequuntur totam</span>
                        </div>
                    </div> }

{/*
                        <div className="flex-1 bg-white rounded-2xl h-20 px-6 mt-4">
                            <div>
                                <span className="text-xs ml-9 "> January 24th, 2021 04:25 PM</span>
                            </div>
                            <div className="flex mt-1">
                                <img src="/090-uncheck-mark-1.svg"/>
                                <span className="ml-3 text-sm text-black">Illum omnis quo illum nisi. Nesciunt est accusamus. Blanditiis nisi quae eum nisi similique. Modi consequuntur totam</span>
                            </div>
                        </div>
                        <div className="flex-1 bg-white rounded-2xl h-20  px-6 mt-4">
                            <div>
                                <span className="text-xs ml-9 "> January 24th, 2021 04:25 PM</span>
                            </div>
                            <div className="flex mt-1">
                                <img src="/090-check-mark-1.svg"/>
                                <span className="ml-3 text-sm text-black">Illum omnis quo illum nisi. Nesciunt est accusamus. Blanditiis nisi quae eum nisi similique. Modi consequuntur totam</span>
                            </div>
                        </div>
                        <div className="flex-1 bg-white rounded-2xl h-20 px-6 mt-4">
                            <div>
                                <span className="text-xs ml-9 "> January 24th, 2021 04:25 PM</span>
                            </div>
                            <div className="flex mt-1">
                                <img src="/090-uncheck-mark-1.svg"/>
                                <span className="ml-3 text-sm text-black">Illum omnis quo illum nisi. Nesciunt est accusamus. Blanditiis nisi quae eum nisi similique. Modi consequuntur totam</span>
                            </div>
                        </div>
                        <div className="flex-1 bg-white rounded-2xl h-20  px-6 mt-4">
                            <div>
                                <span className="text-xs ml-9 "> January 24th, 2021 04:25 PM</span>
                            </div>
                            <div className="flex mt-1">
                                <img src="/090-uncheck-mark-1.svg"/>
                                <span className="ml-3 text-sm text-black">Illum omnis quo illum nisi. Nesciunt est accusamus. Blanditiis nisi quae eum nisi similique. Modi consequuntur totam</span>
                            </div>
                        </div> */}
                        <div className="flex justify-between mt-8 items-center">
                            <div className="rounded-xl bg-blue-500 px-12 py-4 text-white">
                                Save Changes
                            </div>
                            <div className="flex items-center">
                                <span className="text-xs">Showing 4 of 256 entries</span>
                                <span className="rounded-xl text-blue-500 ml-3 py-2 px-3 bg-blue-200">1</span>
                                <span className="rounded-xl text-white ml-3 py-2 px-3 bg-blue-500">2</span>
                                <span className="rounded-xl text-white ml-3 py-2 px-3 bg-blue-500">3</span>
                            </div>
                        </div>
                    </div>

                </div>

        </Wrapper>
  )
}

export default index
