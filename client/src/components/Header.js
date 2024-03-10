import React from 'react'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
const Header = () => {
  return (
    <div className='flex bg-gray-700 flex-wrap shadow-lg pl-40'>
        
        <div className='flex flex-wrap h-12 items-center  '>
            <a href= "/Dashboard" className='text-teal-500 hover:font-bold '>Dashboard</a>
            <a href= "/Commandline" className='text-teal-500 hover:font-bold ml-4'>Commandline</a>
            <a href= "/Instruments" className='text-teal-500 hover:font-bold ml-4'>Instruments</a>
            <a href= "/Reports" className='text-teal-500 hover:font-bold ml-4'>Reports</a>
            <a href= "/Testgen" className='text-teal-500 hover:font-bold ml-4'>Testgen</a>
            <a href= "/TestStatus" className='text-teal-500 hover:font-bold ml-40'>Test Status:</a>

        </div>
        <div className='flex  ml-20 pl-20 items-center flex-wrap'>
            <SmartDisplayIcon style={{ color: 'white', fontSize: 35 }} className="icon hover:scale-125 transition-transform  duration-300 cursor-pointer" />
            <StopCircleRoundedIcon style={{ color: 'white', fontSize: 35 }} className="icon hover:scale-125 transition-transform  duration-300 cursor-pointer ml-4 "/>
            <div className="flex ml-4 items-center border border-white rounded px-2 py-1">
                <ArticleRoundedIcon style={{ color: 'white', fontSize: 35 }} className="icon hover:scale-125 transition-transform  duration-300 cursor-pointer mr-2" />
                <span className="text-white  transition-colors  duration-300 cursor-pointer">Report</span>
            </div>

        </div>

    </div>
  )
}

export default Header
