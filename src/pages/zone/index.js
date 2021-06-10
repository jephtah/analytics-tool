/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Wrapper from '../../components/wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { zoneActions } from '../../_actions/zone.actions'
import Pagination from '../../components/pagination'
import { WarningModal } from '../accounts'
import Modal from '../../components/modal'
import Checkbox from '@material-ui/core/Checkbox'

const index = _props => {
  const [searchStr, setSearchStr] = useState('')
  const [currentPost, setCurrentPost] = useState('')
  const [showWarningModal, setShowWarningModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  // const [checkedItems, setCheckedItems] = useState(postData ? new Array(postData.length).fill(false) : [])

  const zones = useSelector(state => state.zones)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      searchStr ? dispatch(zoneActions.getSearch(searchStr, { hasNext: cursors.after, hasPrevious: cursors.before })) : dispatch(zoneActions.getAll())
    }, 1000)
    return () => clearTimeout(timer)
  }, [searchStr])

  let postData
  let cursors
  let totalPosts

  if (zones.zones) {
    // postData = zones.zones.posts
    postData = zones.zones.posts ? zones.zones.posts : zones.zones.results
    cursors = zones.zones.cursors
    totalPosts = zones.zones.totalPosts ? zones.zones.totalPosts : zones.zones.totalSearch
  }

  /* if (currentPost) {
    setCurrentSlug(currentPost.slug)
  } else {
    setCurrentSlug(null)
  } */
  let currentSlug = null
  currentSlug = currentPost?.slug

  const forwardClick = () => { dispatch(zoneActions.getPaginated({ hasNext: cursors.after })) }
  const backClick = () => { dispatch(zoneActions.getPaginated({ hasPrevious: cursors.before })) }

  const displayEditModal = (_event, _post) => {
    setShowEditModal(true)
  }

  const dismissEditModal = () => {
    setShowEditModal(false)
    setCurrentPost(null)
  }

  const handleSave = (slug, title, content) => {
    dispatch(zoneActions.updateZone(slug, title, content))
    setShowEditModal(false)
    setTimeout(() => {
      dispatch(zoneActions.getAll())
    }, 2000)
  }

  const handleDelete = () => {
    dispatch(zoneActions.deleteZone(currentSlug))
    setShowWarningModal(false)
    setTimeout(() => {
      dispatch(zoneActions.getAll())
    }, 4000)
  }

  const displayWarningModal = () => {
    setShowWarningModal(true)
  }

  const dismissWarningModal = () => {
    setShowWarningModal(false)
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
                                <li className="flex px-8  rounded-xl mt-8 text-sm" onClick ={() => displayWarningModal()}>
                                    <img src="/delete.svg" className="w-4"/>
                                    <span className="ml-3 ">Delete Post</span>
                                </li>
                                <li className="flex px-8 rounded-xl mt-8 text-sm">
                                    <img src="/dots.svg" className="w-4"/>
                                    <span className="ml-3" onClick={displayEditModal}>Edit Post</span>
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
                          ? postData.map((post, key) => {
                            return (
                                    <div key={key} className="flex-1 bg-white rounded-2xl  px-6 mt-4 mt-10">
                                        <div>
                                            <span className="text-xs ml-9 "> {new Date(post.created_at).toLocaleString()}</span>
                                        </div>
                                        <div className="flex align-center h-full w-full pb-1 mt-1">
                                            <Checkbox checked={post.slug === currentPost?.slug} onChange={() => setCurrentPost(p => p === post ? null : post)} />
                                            <span className="ml-3 text-center text-xl text-black">{post.content}</span>
                                        </div>
                                    </div>
                            )
                          })
                          : <div className="flex-1 bg-white rounded-2xl h-20 px-6 mt-4">
                                <div>
                                    <span className="text-xs ml-9"> January 24th, 2021 04:25 PM</span>
                                </div>
                                <div className="flex mt-1">
                                    <img src="/090-check-mark-1.svg"/>
                                    <span className="ml-3 text-sm text-black">Illum omnis quo illum nisi. Nesciunt est accusamus. Blanditiis nisi quae eum nisi similique. Modi consequuntur totam</span>
                                </div>
                            </div>

                        }

                        <div className="flex justify-between mt-8 items-center">
                            <div className="rounded-xl bg-blue-500 px-12 py-4 text-white">
                                Save Changes
                            </div>
                        </div>
                        <div className="flex flex-col mt-6">
                            <span className="text-xs">Showing 4 of {totalPosts} entries</span>
                            <div className="flex">
                                {pagination}
                            </div>
                        </div>
                    </div>

                </div>
        </Wrapper>
        {
          currentSlug && currentPost &&
          <>
            <WarningModal
              cancel={dismissWarningModal}
              visible={showWarningModal}
              type='main'
              handleDelete = {handleDelete}
            />
            <EditPostModal
            visible={showEditModal}
            cancel={dismissEditModal}
            cancelIcon
            type='main'
            post={currentPost}
            slug={currentSlug}
            saveFunction={ handleSave}
          />
          </>

        }

      </>
  )
}

const EditPostModal = props => {
  const { visible, cancel, cancelIcon, className, type, saveFunction, post, slug } = props
  const [content, setContent] = useState(post.content)
  const handleChange = (event) => {
    setContent(event.currentTarget.value)
  }
  return (
            <Modal visible={visible} cancel={cancel} cancelIcon={cancelIcon} className={className} type={type}>
                <h1 className="text-3xl mb-6 text-center text-gray-700">Edit Post</h1>
                <div>
                    <div className="flex flex-col mb-8">
                        <label className="text-2xl mb-4 text-gray-500">Content</label>
                        <textarea type='text' value={content} name='content' onChange={(event) => handleChange(event)} className="text-2xl max-h-44 border-solid border-2 rounded-lg border-gray-400 pl-4 outline-none"/>
                    </div>
                    <div className=" flex justify-center mt-4">
                        <button
                            className="p-4 w-48 bg-blue-400 text-white text-xl border-solid border-2 rounded-lg border-blue-400 pl-4"
                            onClick={() => saveFunction(slug, post.title, content)}
                        >
                          Save
                        </button>
                    </div>
                </div>

            </Modal>
  )
}

export default index
