import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import TrafficIcon from '@mui/icons-material/Traffic';
import SettingsIcon from '@mui/icons-material/Settings';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LayersIcon from '@mui/icons-material/Layers';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const SIdebar = () => {
    const refreshpage=()=>{
        window.location.reload();
    }
  return (
    <div>
    <div className='flex flex-col flex-wrap  bg-gray-700 shadow w-70 mt-0 rounded shadow-lg items-center'>
        <div className='border border-white mt-2 rounded text-teal-500 h-10 flex items-center w-60'>
            <span className='ml-5'>Main</span>
            <CloseIcon style={{ color: 'white' }} className='ml-20 hover:scale-125 transition-transform duration-300 cursor-pointer'/>
            <ArrowDropDownIcon  style={{ color: 'white' }} className='ml-1 hover:scale-125 transition-transform duration-300 cursor-pointer'/>
        </div>
        <div className='border border-white mt-2 rounded text-teal-500 h-10 flex items-center w-60 '>
            <AssignmentTurnedInIcon className='ml-2 hover:scale-125 transition-transform duration-300 cursor-pointer' style={{ color: 'white' }}/>
            <span className='ml-5 '>Testplan</span>
        </div>
        <div className='flex flex-col text-teal-500 items-start border border-white h-20 w-60 rounded mt-4'>
            <div className='mt-1.5 p-0'>
                <LayersIcon style={{ color: 'white' }} className='ml-1.5 hover:scale-125 transition-transform duration-300 cursor-pointer'/>
                <span className='ml-4'> TestCase Type</span>
                

            </div>
            <div className='border  border-gray-100 ml-2 text-sm  rounded mt-2'>
                <span className='ml-1 text-sm'>Range vs Rate</span>
                <CloseIcon style={{ color: 'white' }} className='ml-10 hover:scale-125 transition-transform duration-300 cursor-pointer'/>
                <ArrowDropDownIcon  style={{ color: 'white' }} className='ml-1 hover:scale-125 transition-transform duration-300 cursor-pointer'/>
            </div>
        </div>

        <div className='flex flex-col text-teal-500 items-start border border-white h-20 w-60 rounded mt-4'>
            <div className='mt-1.5 p-0'>
                <FormatListBulletedIcon style={{ color: 'white' }} className='ml-1.5 hover:scale-125 transition-transform duration-300 cursor-pointer'/>
                <span className='ml-4'> Modules</span>
                

            </div>
            <div className='border  border-gray-100 ml-2 text-sm text-sm rounded mt-2'>
                <span className='ml-2'>iperf3</span>
                <CloseIcon style={{ color: 'white' }} className='ml-20 hover:scale-125 transition-transform duration-300 cursor-pointer'/>
                <ArrowDropDownIcon  style={{ color: 'white' }} className='ml-1 hover:scale-125 transition-transform duration-300 cursor-pointer'/>
            </div>
        </div>
        <div className='border border-white mt-2 rounded text-teal-500 h-10 flex items-center w-60 '>
            <SettingsIcon className='ml-2 hover:scale-125 transition-transform duration-300 cursor-pointer' style={{ color: 'white' }}/>
            <span className='ml-5 '>Iperf setting </span>
        </div>
        <div className='border border-white mt-2 rounded text-teal-500 h-10 flex items-center w-60 '>
            <TrafficIcon className='ml-2 hover:scale-125 transition-transform duration-300 cursor-pointer' style={{ color: 'white' }}/>
            <span className='ml-5 '>Traffic pairs</span>
        </div>
        <div className='flex flex-col text-teal-500 items-start border border-white  w-60 rounded mt-4'>
            <div className='mt-1.5 p-0'>
                <TrendingUpIcon style={{ color: 'white' }} className='ml-1.5 hover:scale-125 transition-transform duration-300 cursor-pointer'/>
                <span className='ml-4'> Attenuator</span>
                

            </div>
            <div className='flex '>
                <div className='border  border-gray-100 ml-2 text-sm  rounded mt-2'>
                    <span className='ml-2'>atten2</span>
                    <CloseIcon style={{ color: 'white' }} className='ml-10 hover:scale-125 transition-transform duration-300 cursor-pointer'/>
                    <ArrowDropDownIcon  style={{ color: 'white' }} className='ml-1 hover:scale-125 transition-transform duration-300 cursor-pointer'/>
                    
                </div>
                <div className='border border-white w-8 ml-2 h-7 mt-2 rounded flex items-center '>
                    <SettingsIcon className='ml-1 hover:scale-125 transition-transform duration-300 cursor-pointer' style={{ color: 'white' }}/>

                </div>
            </div>
            <div className='ml-3 mt-1'>
                Select Attenuator
            </div>
            <div className='flex border border-whites rounded  ml-2 mb-2 w-50'>
                <span className='ml-3'>Select...</span>
                <ArrowDropDownIcon  style={{ color: 'white' }} className='ml-20  hover:scale-125 transition-transform duration-300 cursor-pointer'/>

            </div>
        </div>
        <div className='border border-white mt-2 mb-2 rounded text-teal-500 h-10 flex items-center w-60 '>
            <AdsClickIcon className='ml-2 hover:scale-125 transition-transform duration-300 cursor-pointer' style={{ color: 'white' }}/>
            <span className='ml-5 '>Turntable</span>
        </div>
        <div className='flex flex-col pb-3'>
            <div className='flex items-start mt-10'>
                <button  onClick={refreshpage} className='border border-white text-teal-500 rounded  hover:font-bold cursor-pointer w-20'>
                    Update
                </button>
                <div className='ml-3 border border-white text-teal-500 rounded  hover:font-bold cursor-pointer w-20'>
                    Save
                </div>
            </div>
            <div className='ml-8 mt-4 border border-white text-teal-500 rounded  hover:font-bold cursor-pointer w-20'>
                Clear
            </div>
        </div>
    </div>
    </div>
  )
}

export default SIdebar
