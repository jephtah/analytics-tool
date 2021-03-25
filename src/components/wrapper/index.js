import Header from '../header';
import Footer from '../footer';
import styles from "./wrapper.module.scss";
import LeftBar from "../Sidebar/leftBar";

const Index = ({ children }) => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1 flex overflow-y-hidden text-sm text-gray-400">
                <div className="sidebar bg-white-300-mobicure flex-none w-60 flex flex-col justify-between font-semibold leading-extra-loose py-10">
                    {/* <div className={styles.background}> */}
                    <ul className="mx-4">
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
                    {/* </div> */}

                </div>
                <div className="flex flex-col content-spotify flex-1 bg-gray-200 p-8 overflow-y-auto">
                    <div className="flex pb-8 justify-center">
                       <Header /> 
                    </div>
                    <div >
                        {children}
                    </div> 
                </div>
                <div className="sidebar  bg-white-400 flex-none w-80 flex flex-col justify-between   bg-white-300-mobicure">
                    <LeftBar />
                </div>
            </div>
            <div className="flex justify-center bg-white-300-mobicure">
                <Footer />
            </div>

        </div>
    )
}

export default Index;
