/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dashboardActions } from '../../_actions'
import Wrapper from '../../components/wrapper'
import styles from './home.module.css'
import { XAxis, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts'
import { barData, lineData, distributionData } from '../../constants'
import { ResponsiveLine } from '@nivo/line'
// import { Chart } from 'chart.js'

const index = () => {
  const dashboardData = useSelector(state => state.dashboardData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dashboardActions.getAll())
  }, [])

  const BarGraph = () => {
    return (
    // eslint-disable-next-line no-tabs
            <ResponsiveContainer>
                <BarChart data={ barData }>
                    <XAxis dataKey="date" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#2563eb"/>
                </BarChart>
            </ResponsiveContainer>
    )
  }

  const MyResponsiveLine = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        enableGridX={false}
        lineWidth={4}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableCrosshair={false}
        useMesh={true}
        legends={[]}
    />
  )

  const data = dashboardData.data
  // console.log(data)

  /* const getDates = (startDate, endDate) => {
        let dates = []
        let currentDate;
        currentDate = startDate;
        const addDays = function(days) {
            let date = new Date(days)
            date.setDate(date.getDate() + days);
            return date
        }

        while( currentDate <= endDate){
            dates.push(currentDate);
            currentDate = addDays.call(currentDate, 5)
        }
        return dates
    }

    const dates = getDates(new Date(2013,10,22), new Date(2013,11,25))
    dates.forEach((date) => {
        console.log(date)
    }) */

  return (
        <Wrapper>
            {
                data
                  ? <div className="flex flex-col items-center w-full justify-center">
                        <div className="flex justify-between w-full">
                            <div className="w-72 h-40 px-10 py-6 text-lg rounded-lg bg-white-300-mobicure text-gray-900">
                                <div className="text-base">Total Users</div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-3xl ">{data.signups.total_users}</span>
                                    <img src="/total-users.svg" className="w-12 h-11" alt="total-users"/>
                                </div>
                                <div className="flex py-4 text-xs justify-start items-center">
                                    <span className="text-green-600 font-medium">+2.5%</span>
                                </div>
                            </div>
                            <div className="w-72 h-40 px-10 py-6 text-lg rounded-lg bg-white-300-mobicure text-gray-900 ml-6">
                                <div className="text-base">Total Topics</div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-3xl ">{data.topics.total_topics}</span>
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
                                    <span className="text-3xl ">{data.signups.total_signups_yearAgo}</span>
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
                        <div className="mt-12 w-full h-80 p-8 rounded-2xl bg-white-300-mobicure text-gray-900">
                            <div className="flex justify-between max-w-full">
                                <div className="text-lg">Active Users</div>
                                <div className="flex items-center ">
                                    <div><img src="/calendar.svg "></img></div>
                                    <div><span className="text-sm mx-3 text-blue-900">Last 30 Days</span></div>
                                    <div><img src="/arrow-down-blue.svg"></img></div>
                                </div>
                            </div>
                            <div className=" text-blue-800 text-2xl pt-2 w-82 h-full">
															<MyResponsiveLine data={lineData}/>
                            </div>

                        </div>
                        <div className="mt-12 w-full h-96 rounded-lg text-gray-900 flex justify-between">
                            <div className="bg-white-300-mobicure rounded-2xl w-full h-full p-6 ">
                                <div className="flex justify-between -mb-4">
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
                                <div className=" text-blue-800 text-2xl w-full h-full">
                                    <BarGraph/>

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
                                            <div className="flex flex">
                                                <span className="text-red-500 ml-5">Lagos</span>
                                                <img src="/arrow-down-red.svg" className="ml-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row w-full h-full items-center'>
																		<div className='transition duration-500 ease-in-out hover:bg-purple-200 mr-4 w-16 h-16 rounded-xl flex justify-center items-center'><img className="w-8 h-8" src='/info.svg'/></div>
																			<div className='w-full h-full flex flex-col justify-center'>
																				<h1 className="pb-2 text-3xl font-extrabold text-black">32,888</h1>
																				<div className="w-96">
																					<ProgressBar bgcolor="#6a1b9a" completed={ (32888 / 81598) * 100} />
																				</div>
																				<span className="text-sm pt-4 text-gray-400"> <span className="font-bold text-black"> 32,888</span> from 81,598</span>
																			</div>
                                    </div>
                                </div>
                                <div className="bg-white-300-mobicure rounded-2xl h-44 mt-3 p-6">
                                    <div className="flex justify-between">
                                        <div className="text-lg font-medium">
                                            User Online
                                        </div>
                                        <div className="flex text-xs items-center">
                                            <span className="text-gray-400">1200 </span>
                                            <div className="flex">
                                                <span className="text-green-500 ml-5">of 81,589</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row w-full h-full items-center'>
																			<div className='transition duration-500 ease-in-out hover:bg-blue-200 mr-4 w-16 h-16 rounded-xl flex justify-center items-center'><img className="w-8 h-8" src='/info-blue.svg'/></div>
																			<div className='w-full h-full flex flex-col justify-center'>
																				<h1 className="pb-2 text-3xl font-extrabold text-black">1200</h1>
																				<div className="w-96">
																					<ProgressBar bgcolor="#0000ff" completed={ (1200 / 81598) * 100} />
																				</div>
																			</div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    <div className="mt-12 w-full h-full px-12 py-8 rounded-2xl bg-white-300-mobicure text-gray-900 ">
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
                        <div className={'flex justify-center mt-10 '}>
                            <div className={`w-40 flex gap-x-6 justify-center rounded-3xl py-3 font-bold text-xl ${styles.button}`}>
                                <h2>Load More</h2>
                                <img src="/078-down-chevron.svg" alt="arrow down"/>
                            </div>
                        </div>
                    </div>
                </div>
                  : <div>Loading...</div>

            }
        </Wrapper>
  )
}
const ProgressBar = (props) => {
  const { bgcolor, completed } = props

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50
    // margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <div style={containerStyles}> <div style={fillerStyles}></div> </div>
  )
}

/* const ProgressBar = props => {
  const { bgcolor, start, end } = props
  const completed = (start / end) * 100
  const containerStyles = {
    height: 15,
    width: '12rem',
    backgroudColor: '#9ca3af',
    borderRadius: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  )
} */

export default index
