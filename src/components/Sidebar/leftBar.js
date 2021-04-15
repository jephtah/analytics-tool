import styles from "./sidebar.module.scss";

const index = () => {
    return (
        <div className="p-2 bg-white-300-mobicure pb-32">
            <div>
                <input className="w-full h-14 rounded-xl bg-gray-200 px-6" placeholder="Search here..." />
            </div>
            <div className="px-2">
                <div className="flex mt-6 justify-between  w-full ">
                    <div className="text-lg font-medium text-black">
                        Most Used <br /> Keywords
                    </div>
                    <div className="flex flex-1 items-center pt-8 ml-14">
                        <div className="text-gray-400 text-xs">Sort By</div>
                        <div className="flex">
                            <span className="text-green-500 ml-5 text-xs">Month</span>
                            <img src="/arrow-down.svg" className="ml-2" />
                        </div>
                    </div>
                </div>
              <div className="flex">


                  <div className={styles.content}>
                      <p className={styles.contentHeading}>January 2nd, 04:35 AM</p>
                      <span>
                        Illum omnis quo illum nisi. Nesciunt est accusamus.
                        Blanditiis nisi quae eum nisi similique.
                        Modi consequuntur totam
                    </span>
                      <p className={styles.contentHeading}>January 2nd, 04:35 AM</p>
                      <span>
                        Illum omnis quo illum nisi. Nesciunt est accusamus.
                        Blanditiis nisi quae eum nisi similique.
                        Modi consequuntur totam
                    </span>

                      <p className={styles.contentHeading}>January 2nd, 04:35 AM</p>
                      <span>
                        Illum omnis quo illum nisi. Nesciunt est accusamus.
                        Blanditiis nisi quae eum nisi similique.
                        Modi consequuntur totam
                    </span>
                  </div>
              </div>
            </div>
            <div>
               <div className="flex justify-between w-full mt-16 px-2">
                   <div className="text-lg text-black ">
                       Most <br />Engaged topic
                   </div>
                   <div className="flex flex-1 items-center pt-8 ml-4">
                       <div className="text-gray-400 text-xs">Sort By</div>
                       <div className="flex">
                           <span className="text-green-500 ml-5 text-xs">Month</span>
                           <img src="/arrow-down.svg" className="ml-2" />
                       </div>
                   </div>
               </div>
                <div className="bg-white w-64 h-56 rounded-2xl mt-10 p-6 flex flex-col justify-between">
                    <div className="flex">
                        <img src="/avatar.jpg" />
                        <div className="flex flex-col ml-3">
                            <span className="text-black ">Jons Sena</span>
                            <span className="text-xs">2 days ago</span>
                        </div>
                    </div>
                    <div className="mt-8 text-xs text-gray-600 flex-1">
                        Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta
                    </div>
                    <div className="flex justify-end items-center">
                        <img src="/018-left-arrow.svg" className="mr-6"/>
                        <img src="/030-right-arrow.svg"/>
                    </div>
                </div>
            </div>
            <div>
            <div className="flex justify-between items-center mt-16 px-2">
                <div className="text-lg text-black">
                    Most <br />Followed topic
                </div>
                <div className="flex flex-1 items-center pt-8 ml-4">
                    <div className="text-gray-400 text-xs">Sort By</div>
                    <div className="flex">
                        <span className="text-green-500 ml-5 text-xs">Month</span>
                        <img src="/arrow-down.svg" className="ml-2" />
                    </div>
                </div>
            </div>
            <div className="bg-white w-64 h-56 rounded-2xl mt-10 p-6 flex flex-col justify-between ">
                <div className="flex">
                    <img src="/placeholder.jpg" />
                    <div className="flex flex-col ml-3">
                        <span className="text-black ">kevin Hunt</span>
                        <span className="text-xs">2 days ago</span>
                    </div>
                </div>
                <div className="mt-8 text-xs text-gray-600 flex-1 ">
                    Ab architecto provident ex accusantium deserunt. Aut aspernatur deleniti sit maiores ut id cum accusamus. Beatae n
                </div>
                <div className="flex justify-end items-center">
                    <img src="/018-left-arrow.svg" className="mr-6"/>
                    <img src="/030-right-arrow.svg"/>
                </div>
            </div>
            </div>
    </div>
    )
}

export default index;
