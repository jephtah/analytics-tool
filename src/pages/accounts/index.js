import React, { useEffect, useState } from "react"
import Wrapper from "../../components/wrapper";
import { useDispatch, useSelector } from "react-redux";
import { accountActions } from "../../_actions";
import Modal from "../../components/modal"


function accounts () {

    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    let  accounts  = useSelector(state => state.accounts);
    const dispatch =  useDispatch()

    useEffect(() => {
        dispatch(accountActions.getAllAccounts())
    }, [])


    // console.log("accounts", accounts.accounts)
    accounts = accounts.accounts

    const displayEditModal = () => 
    {
        setShowEditModal(true)
    }

    const dismissEditModal = () =>
    {
        setShowEditModal(false)
    }

    const displayDeleteModal = () => 
    {
        setShowDeleteModal(true)
    }

    const dismissDeleteModal = () =>
    {
        setShowDeleteModal(false)
    }

    const displayEditDeleteModal = () => 
    {
        setShowModal(true)
    }

    const dismissEditDeleteModal = () =>
    {
        setShowModal(false)
    }

    const EditDeleteModal = props => 
    {
        const {visible, cancel, routes } = props
        //const [route1, route2] = routes

        return (
            <Modal visible={visible} cancel={cancel} className="">
                <div>
                    <div onClick={console.log("I clicked the edit button")}>
                        Edit
                    </div>
                    <hr/>
                    <div onClick={console.log("i clicked on the delete button")}>
                        Delete
                    </div>
                </div>
            </Modal>
        )
    }

    const EditModal = props => 
    {
        const [username, setUserName] = useState("")
        const [accountType, setAccountType] = useState([])
 
        const { visible, cancel, options } = props
        return (
            <Modal visible={visible} cancel={cancel}>
                <h1>Edit Account</h1>
                <div>
                    <div>
                        <label for="username">Change username</label>
                        <input type="text" value={username} onChange={() => setUserName(value)}/>
                    </div>
                    <div>
                        <label for="Account type">Accont Type</label>
                        <select name="account type">
                            <option value="select" disabled>Select</option>
                            {
                                options ?
                                options.map((option, key) => 
                                {
                                    return <option key={key} value={option} onChange={() => setAccountType(value)}>{option}</option>
                                }) : null
                            }
                        </select>
                    </div>
                    <button>save</button>
                </div>
                
            </Modal>
        )
    }


    return (
        <>
            <Wrapper>
                <div className="flex align-baseline items-center just px-5">
                    <span className="text-black text-xl">Accounts</span>
                    <input className="w-72 h-11 rounded-xl bg-gray-300 mx-52 px-6 text-xs" placeholder="Search Accounts" />
                </div>
                <div className="flex flex-wrap justify-between ">

                    { accounts ? accounts.map(account =>
                        <div key={account.username} className="bg-white w-52 h-88 rounded-2xl mt-10 p-6 mr-4 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between">
                                {account.profile.profile_picture_url !== null ? <img src={account.profile.profile_picture_url} width="70" height="50" className="rounded-3xl"/>
                                    : <img src="/placeholder.svg" width="70" height="70" />}
                                    <span className="cursor-pointer text-xl" onClick={() => displayEditDeleteModal()}>&#10247;</span>
                                </div>
                                <div className="flex flex-col mt-5">
                                    <span className="text-black ">{account.username}</span>
                                    <span className="text-xs mt-2 text-gray-400">Joined: {account.created_at.split('T')[0]}</span>
                                </div>
                            </div>
                            <div className="text-xs flex mt-5">
                                <img src="/box.svg" />
                                <span className="ml-3">{account.membership_type}</span>
                            </div>
                            <div className="text-xs flex mt-3">
                                <img src="/phone.svg" />
                                <span className="ml-3">{account.phone_number}</span>
                            </div>
                            <div className="text-xs flex overflow-x-auto overflow-y-auto mt-3">
                                <img src="/envelope.svg" className="mb-2"/>
                                <span className="ml-3 mb-2">{account.email}</span>
                            </div>
                        </div>
                    ): (<div> Loading... </div>)}
                </div>
                <div className="flex items-center py-6 lg:mt-16">
                    <span className="text-xs">Showing 4 of 256 entries</span>
                    <span className="rounded-xl text-blue-500 ml-3 py-2 px-3 bg-blue-200">1</span>
                    <span className="rounded-xl text-white ml-3 py-2 px-3 bg-blue-500">2</span>
                    <span className="rounded-xl text-white ml-3 py-2 px-3 bg-blue-500">3</span>
                </div>
            </Wrapper>
            <EditDeleteModal
                visible={showModal}
                cancel={dismissEditDeleteModal}
                route={() => displayEditModal()}
            />
            <EditModal
                visible={showEditModal}
                cancel={dismissEditModal}
                options ={["option1", "option2", "option3"]}
            />
        </>
    )
}

export default accounts ;


