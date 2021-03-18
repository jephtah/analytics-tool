import Header from '../header';
import Footer from '../footer';
import styles from "./wrapper.module.scss";
import LeftBar from "../Sidebar/leftBar";

const Index = ({ children }) => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1 flex overflow-y-hidden text-sm text-gray-400">
                <div className="sidebar bg-white-300-mobicure flex-none w-60 flex flex-col justify-between font-semibold">
                    {/* <div className={styles.background}> */}
                    <ul className="mt-12 mx-4">
                        <li>
                            <a href="#" className="flex items-center mx-4  group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28.573" height="20.714" viewBox="0 0 28.573 22.714">
                                <g fill="#5d83f6">
                                    <path d="M209.373 123.825a1.116 1.116 0 0 0-1.418-.133c-1.67 1.138-10.047 6.863-10.947 7.763a3.348 3.348 0 0 0 4.735 4.736c.9-.9 6.624-9.277 7.763-10.947a1.116 1.116 0 0 0-.133-1.419zm-9.208 10.787a1.116 1.116 0 0 1-1.579-1.578c.35-.346 2.728-2.042 5.654-4.076-2.034 2.926-3.73 5.304-4.075 5.654z" opacity="0.9" transform="translate(-185.089 -119.536)"/>
                                    <path d="M5.147 71.977l-1.378.672a12 12 0 0 1-.752-10.143l1.579.757a1.116 1.116 0 1 0 .965-2.013L4 60.5a12.07 12.07 0 0 1 9.168-5.721v1.679a1.116 1.116 0 0 0 2.232 0v-1.68a11.916 11.916 0 0 1 3.838 1.011 1.116 1.116 0 1 0 .918-2.035A14.275 14.275 0 0 0 2.421 74.717a1.116 1.116 0 0 0 1.417.383l2.288-1.116a1.116 1.116 0 1 0-.979-2.006z" opacity="0.6" transform="translate(0 -52.499)"/>
                                    <path d="M395.544 192.151a1.116 1.116 0 1 0-2.035.918 12.015 12.015 0 0 1-.48 10.826l-1.439-.685a1.116 1.116 0 1 0-.96 2.015l2.344 1.116a1.116 1.116 0 0 0 1.408-.387 14.253 14.253 0 0 0 1.161-13.8z" transform="translate(-368.23 -183.737)"/>
                                </g>
                            </svg>
                                <span className="ml-4">Home</span>
                            </a>
                            
                        </li>
                        
                        <li>
                            <a href="#" className="flex items-center mx-4 mt-4 group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="29.388" height="14.658" viewBox="0 0 25.388 14.658">
                                <path fill="#5d83f6" d="M41.2 7.329L28.506 0 15.813 7.329l12.694 7.329zm0 0" opacity="0.7" transform="translate(-15.813)"/>
                            </svg>
                                <span className="ml-4">Manage</span>
                            </a>
                            
                        </li>
                        <li>
                            <a href="#" className="flex items-center mx-4 mt-4 group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="31.568" height="20.544" viewBox="0 0 31.568 30.544">
                                <path fill="#4d79f6" d="M.512 44.65l14.943 8.07a.681.681 0 0 0 .331.086.7.7 0 0 0 .331-.086l14.942-8.07a1.1 1.1 0 0 0 .51-1 1.078 1.078 0 0 0-.542-.97l-14.944-7.169a.677.677 0 0 0-.6 0L.543 42.682a1.08 1.08 0 0 0-.543.97 1.1 1.1 0 0 0 .512.998zm15.273-7.011l12.7 6.093-12.7 6.857-12.7-6.857z" transform="translate(0 -35.441)"/>
                                <path fill="#4d79f6" d="M.512 127.229l15.273 8.249 15.273-8.249a1.18 1.18 0 0 0 .443-1.394.787.787 0 0 0-1.1-.558l-14.611 7.892-14.616-7.892a.788.788 0 0 0-1.1.558 1.18 1.18 0 0 0 .438 1.394z" opacity="0.9" transform="translate(-.001 -113.427)"/>
                                <path fill="#4d79f6" d="M.512 159.627l15.273 8.249 15.273-8.249a1.179 1.179 0 0 0 .443-1.393.787.787 0 0 0-1.1-.558l-14.611 7.892-14.616-7.892a.788.788 0 0 0-1.1.558 1.179 1.179 0 0 0 .438 1.393z" opacity="0.6" transform="translate(-.001 -141.58)"/>
                                <path fill="#4d79f6" d="M.512 192.031l15.273 8.249 15.273-8.249a1.179 1.179 0 0 0 .443-1.393.788.788 0 0 0-1.1-.558l-14.611 7.892-14.616-7.893a.788.788 0 0 0-1.1.558 1.18 1.18 0 0 0 .438 1.394z" opacity="0.3" transform="translate(-.001 -169.736)"/>
                            </svg>

                                <span className="ml-4">Sessions</span>
                            </a>
                            
                        </li>
                    </ul>
                    {/* </div> */}

                </div>
                <div className="flex flex-col flex-1 bg-gray-200 p-12 overflow-y-auto">
                    <div className="flex pb-8">
                       <Header /> 
                    </div>
                    <div >
                        {children}
                    </div> 
                </div>
                <div className="sidebar content-spotify bg-white-400 flex-none w-60 flex flex-col justify-between  font-semibold bg-white-300-mobicure">
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
