import React, { useState,useEffect } from 'react';
import axios from "axios";
import Chart from 'chart.js/auto';
const Graph2 = () => {
    const [data,setData]=useState([]);
    
    useEffect(() => {
        const fetchAndPlotData = async () => {
            try {
                const response = await axios.get("http://localhost:3002/api/data");
                setData(response.data);
            } catch (error) {
                console.error('Error fetching plot data:', error);
            }
        };

        fetchAndPlotData();
    }, []);
    useEffect(() => {
        if (data.length === 0) return;
        
        const ctx = document.getElementById('graph2');
        new Chart(ctx, {
            type: 'line',
            options: {
                animation: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                
                elements: {
                    point: {
                        radius: 0, // Set point radius to 0 to remove points
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Time (seconds)', 
                            color: 'white'// Title for the x-axis
                        },
                        ticks: {
                            stepSize: 50,
                            color: 'white', // Set the interval between ticks to 50
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)' // Set grid line color to white with opacity
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Throughput',
                            color: 'white' // Title for the y-axis
                        },
                        ticks: {
                            
                            color: 'white', 
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)' // Set grid line color to white with opacity
                        }
                    }
                },
            },
            data: {
                labels: data.map(row => row.x),
                datasets: [{
                    label: 'Acquisitions by year',
                    data: data.map(row => row.y),
                    borderColor: 'white', // Line color
                    borderWidth: 1,
                    backgroundColor: 'rgba(255, 255, 255,0)' 
                }]
            }
        });
    }, [data]);
  return (
    
        <div className='shadow shadow-lg  border border-white-700 w-100 p-10 mt-5 ml-5 h-50  rounded '>
        <div className='text-teal-500'>Throughput 2 vs Time</div>
        <canvas id="graph2"  width="1000" height="300"></canvas>
        </div>
    
  )
}

export default Graph2
