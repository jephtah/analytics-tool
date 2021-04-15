import React from 'react'

const index = () => {
    return (
        <div className="flex justify-between w-10/12">
            <div className="flex-1">
                <span className="text-2xl text-gray-700"> Dashboard</span>
                <span className="text-sm ml-4">myPaddi Analytical tool</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm text-gray-700"> mypaddi_admin</span>
                <img src="/admin.svg" className="w-6 h-8 ml-2"></img>
            </div>
        </div>
    )
}

export default index
