import Header from '../header';
import Footer from '../footer';
import styles from "./wrapper.module.scss";
import LeftBar from "../Sidebar/leftBar";

const Index = ({ children }) => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1 flex overflow-y-hidden text-gray-500">
                <div className="flex bg-white-300-mobicure flex-col py-5 justify-between items-center h-full">
                <div className="sidebar text-black flex-none w-60 flex flex-col text-sm justify-between leading-extra-loose">
                    {/* <div className={styles.background}> */}
                    <ul className="mx-4 mt-20">
                        <li>
                            <a href="#" className="flex items-center mx-4  group">
                            <img src="/home.svg" className="w-7 h-5"></img>
                                <span className="ml-4">Home</span>
                            </a>

                        </li>

                        <li>
                            <a href="#" className="flex items-center mx-4 mt-4 group">
                            <img src="/manage.svg" className="w-7 h-5"></img>
                                <span className="ml-4">Manage</span>
                            </a>

                        </li>
                        <li>
                            <a href="#" className="flex items-center mx-4 mt-4 group">
                            <img src="/sessions.svg" className="w-7 h-5"></img>
                                <span className="ml-4">Sessions</span>
                            </a>

                        </li>
                    </ul>
                    </div>
                    <div className="text-center">
                        <span className="text-xs text-gray-400" >myPaddi Analytical Tool</span>
                    </div>
                </div>
                <div className="flex flex-col content-spotify flex-1 bg-gray-200 p-8 overflow-y-auto">
                    <div className="flex pb-8 justify-center">
                       <Header />
                    </div>
                    <div className="pb-32">
                        {children}
                    </div>
                </div>
                <div className="sidebar  bg-white-400 flex-none w-80 flex flex-col justify-between sidebar-spotify overflow-y-auto bg-white-300-mobicure">
                    <LeftBar />
                </div>
            </div>

        </div>
    )
}

export default Index;
