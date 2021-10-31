import { Scatter } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";
import {point} from "../public/images/point.png"

import Image from 'next/image'


import graph from "../public/images/graph.1-01.png"


function Step17({formData}) {

    const data = {
  labels: ["0","50%", "100%"],
  datasets: [
    {

      label: '',
     
      
    
      data: [{
        y: formData.GlobalComplexity,
        x: formData.Pricingmaturity,
        
      }],
      
      fill: true,
      backgroundColor: "#304EE8",
      borderColor: "#304EE8"
    },
    
  ]
};


const Radardata = {
   
    labels: [
    "Human ressources",
    "Data",
    "Tools",
    "Organization",
    "Process & dashboards",
    
    
  ],
  datasets: [
   
    {
      label: 'Pricing profile need',
            data: [formData.hr, formData.data, formData.tool, formData.organization, formData.process],
            fill: true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: "transparent",
            pointRadius: 1,
            
        },

        {
          label: 'Lead Princing Status',
                data: [formData.score10*10, formData.score11*10, formData.score12*10, formData.score13*10, formData.score14*10],
                fill: true,
                borderColor: '#304EE8',
                backgroundColor: "transparent",
                pointRadius: 1,
                
            }
      ]
}




    return (

      <div className="  h-full grid place-items-center">

      <div className="container relative  bottom-16">
      <h1 className=" mx-auto home_title text-3xl text-blue-700 text-center  font-bold px-12 py-7 w-1/3 " >RESULTS</h1>
      <h1 className=" mx-auto home_title text-2xl text-blue-700 text-center     w-3/4 " >PRICING MATURITY TEST</h1>
     
      <div className=" w-10/12 md:flex  relative bottom-[100px]  px-5  justify-between" >

      <div className="  relative  h-[900px] mt-36    ">
      
      <div className=" relative bottom-[95px] right-[20px] ">
      <Image src={graph} height={650} width={420}  />
      </div>
      
      <Scatter data={data} className="  absolute h-[350px]   top-0 "  options={{responsive:true,maintainAspectRatio: false,scales: {
        x: {
          title: {
            display: true,
            text: 'Pricing Maturity'
          },
          min: 0,
          max: 100,
          ticks: {
            // forces step size to be 50 units
            stepSize: 50,
            callback: function(value, index, values) {
              return   value +' %' ;
          }
          }
        },
        y: {
          title: {
            display: true,
            text: 'Pricing Complexity'
          },
          min: 0,
          max: 125,
          ticks: {
            // forces step size to be 50 units
            stepSize: 25,

            callback: function(value, index, values) {
              return   value +' %' ;
          }
          }
        }
      }}} />
     
      
      </div>

      
     
    
    
      <div className="mt-28"  >
      <Radar data={Radardata} options={{responsive:true,scales: {
        r: {
          ticks: {
            
            callback: function(value, index, values) {
              return   value +' %' ;
          }
          }
        }
      }}}  />
      </div>
          
      </div>
       
      <div className=" w-full px-20  xl:flex block justify-between  h-9 absolute top-[90vh]  mx-auto  mt-2 ">
          <div className=" text-[10px] mr-14 ">
             <h1 className="text-indigo-500">PRICING LEADER /
             TREND SETTER</h1>
             <p className="mt-5 ">YOU ARE A MARKET DRIVER, YOU
             INVEST MORE THAN EXPECTED TO
             ANTICIPATE MARKET DEVELOPMENT
             YOU CREATE A NEW PRACTICES THAT
             ARE COPIED BY INVENTOR</p>
          </div>


          <div className=" text-[10px] mr-14 ">
             <h1 className="text-green-500">INNOVATION ZONE</h1>
             <p className="mt-5 ">YOU ARE A PRICING LEADER IN ONE
             STEP FURTHER IN PRICE AND
             INNOVATION YOU UNDERSTAND PRICE
             AND CHALLENGES AND BEST
             ANTICIPATE UPCOMING</p>
          </div>

          <div className=" text-[10px] mr-14 ">
          <h1 className="text-blue-500">COMFORT ZONE</h1>
          <p className="mt-5 ">DO YOU HAVE THE CORRECT TOOLS AND
          RESOURCES TO FACE TODAY’S PRICING
          NEEDS ANY CHANGE IN YOUR MARKET
          PRICE IN PRACTICES COULD HOW TO
          BALANCE YOUR CURRENT SITUATION</p>
       </div>

       <div className=" text-[10px] mr-14 ">
       <h1 className="text-yellow-500">WARNING ZONE</h1>
       <p className="mt-5 ">THE ATTENTION YOU PAY FOR
       PRICING IS NOT SUFFICIENT AND
       OPTIMIZED MANAGEMENT OF YOUR
       PRICING WOULD ALLOW YOU TO
       GAIN IN PERFORMANCE
       </p>
    </div>

    <div className=" text-[10px] mr-14 ">
    <h1 className="text-red-500">DANGER ZONE</h1>
    <p className="mt-5 ">YOUR ATTENTION TO PRICING COULD
    SERIOUSLY HARM YOUR PERFORMANCE
    CONTACT AN EXPERT TO REGAIN CONTROL
    OF YOUR PRICING</p>
 </div>
        
      </div>
      </div>




      <div className="">

      <h1 className=" mx-auto home_title text-3xl text-blue-700 text-center  font-bold px-12 py-7 w-1/3 " >Information</h1>

      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
      aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
      commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
      feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
      .feugait nulla facilisi
      Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
      aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
      .commodo consequat
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
      aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit</p>
      </div>


     
      </div>
       
    )
}

export default Step17
