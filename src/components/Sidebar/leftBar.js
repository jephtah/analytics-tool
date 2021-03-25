const index = () => {
    return (
        <div className="p-4">
            <div>
                <img src="/search.svg" alt="search icon"/>
            </div>
            <div className="flex justify-between items-center mt-6 px-2">
                <div className="text-lg text-black">
                    Most<br />Used Keywords
                </div>
                <div className="flex flex-1 items-center pt-8 ml-2">
                    <div className="text-gray-400 text-xs">Sort By</div>
                    <div className="flex">
                        <span className="text-green-500 ml-5 text-xs">Month</span>
                        <img src="/arrow-down.svg" className="ml-2" />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6 px-2">
                <div className="text-lg text-black">
                    Most <br />Engaged Topic
                </div>
                <div className="flex flex-1 items-center pt-8 ml-4">
                    <div className="text-gray-400 text-xs">Sort By</div>
                    <div className="flex">
                        <span className="text-green-500 ml-5 text-xs">Month</span>
                        <img src="/arrow-down.svg" className="ml-2" />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6 px-2">
                <div className="text-lg text-black">
                    Most <br />Followed Topic
                </div>
                <div className="flex flex-1 items-center pt-8 ml-4">
                    <div className="text-gray-400 text-xs">Sort By</div>
                    <div className="flex">
                        <span className="text-green-500 ml-5 text-xs">Month</span>
                        <img src="/arrow-down.svg" className="ml-2" />
                    </div>
                </div>
            </div>
    </div>
    )
}

export default index;