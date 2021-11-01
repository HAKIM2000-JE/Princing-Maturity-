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
      pointRadius: 10,
      
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

      <div className="  h-full mt-16 grid place-items-center">

      <div className="container relative   ">
      <h1 className=" mx-auto home_title text-3xl text-blue-700 text-center  font-bold px-12 py-7 md:w-1/3 w-3/4 " >RESULTS</h1>
      <h1 className=" mx-auto home_title text-2xl text-blue-700 text-center     w-3/4 " >PRICING MATURITY TEST</h1>
     
      <div className=" md:w-8/12 w-full md:flex   mx-auto relative xl:left-52  bottom-[100px] md:mr-52 ml-5 md:ml-0  md:px-50   justify-around  " >

      <div className="  grid place-items-center h-[100vh]  px-20 ">
      
      <div className=" hidden xl:block absolute bottom-[40px] left-[20px]  mr-44">

      
      <Image src={graph} height={680} width={390}  />
      </div>


     
      <Scatter data={data} className="    h-[350px] relative right-[80px] bottom-1 "  options={{responsive:true,maintainAspectRatio: false,scales: {
        x: {
          title: {
            display: true,
            text: 'Pricing Complexity'
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
            text: 'Pricing Maturity'
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

      
     
    
    
      <div className="mt-28 "  >
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
       /
      <div className="   xl:px-72  xl:flex block justify-between  h-9 absolute top-[90vh]  mx-auto  mt-2 ">



      {
        formData.Pricingmaturity >= 100?(
          <div className=" text-[12px] mr-14 w-64 ">
             <h1 className="text-indigo-500">PRICING LEADER /
             TREND SETTER</h1>
             <p className="mt-5 ">YOU ARE A MARKET DRIVER, YOU
             INVEST MORE THAN EXPECTED TO
             ANTICIPATE MARKET DEVELOPMENT
             YOU CREATE A NEW PRACTICES THAT
             ARE COPIED BY INVENTOR</p>
          </div>



        ): (formData.Pricingmaturity > 100 &&  formData.Pricingmaturity>= 15 && formData.GlobalComplexity<30) ? (
          <div className=" text-[12px] ml-14 w-64">
             <h1 className="text-green-500">INNOVATION ZONE</h1>
             <p className="mt-5 ">YOU ARE A PRICING LEADER IN ONE
             STEP FURTHER IN PRICE AND
             INNOVATION YOU UNDERSTAND PRICE
             AND CHALLENGES AND BEST
             ANTICIPATE UPCOMING</p>
          </div>
        ):  (formData.Pricingmaturity <50 && formData.GlobalComplexity>70) ? (
          <div className="">
          


       <div className=" text-[12px] ml-14 w-64 ">
       <h1 className="text-red-500">DANGER ZONE</h1>
       <p className="mt-5 ">YOUR ATTENTION TO PRICING COULD
       SERIOUSLY HARM YOUR PERFORMANCE
       CONTACT AN EXPERT TO REGAIN CONTROL
       OF YOUR PRICING</p>
    </div>
     
          </div>
        ):(formData.Pricingmaturity <=25 && formData.GlobalComplexity<=50 && formData.GlobalComplexity>=50)?(
          
          <div className=" text-[12px] ml-14 w-64">
          <h1 className="text-yellow-500">WARNING ZONE</h1>
          <p className="mt-5 ">THE ATTENTION YOU PAY FOR
          PRICING IS NOT SUFFICIENT AND
          OPTIMIZED MANAGEMENT OF YOUR
          PRICING WOULD ALLOW YOU TO
          GAIN IN PERFORMANCE
          </p>
       </div>
   
       
       
        ):(
          <div className=" text-[12px] ml-14  w-64 ">
          <h1 className="text-blue-500">COMFORT ZONE</h1>
          <p className="mt-5 ">DO YOU HAVE THE CORRECT TOOLS AND
          RESOURCES TO FACE TODAY’S PRICING
          NEEDS ANY CHANGE IN YOUR MARKET
          PRICE IN PRACTICES COULD HOW TO
          BALANCE YOUR CURRENT SITUATION</p>
       </div>

        )

        
      }
          
          

        
        
      </div>
      
      </div>




     

     
      </div>
       
    )
}

export default Step17
