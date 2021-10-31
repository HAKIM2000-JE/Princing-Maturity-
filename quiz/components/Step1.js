import Banner from "./Banner"
import {useState} from "react"
import Fade from 'react-reveal/Fade'

function Step1({formData , navigation}) {
    const { previous, next } = navigation;

    const [sector, setsector] = useState("SELECT YOUR SECTOR OF ACTIVITY")

   const handlchange = (e)=>{
        setsector(e.target.value)
       
    }



    return (
      

        <div className="w-full mt-16 h-[650px] ">
        <main className="home_container bg-blue-700 w-full mx-auto  h-full  rounded-xl ">
        <h1 className=" home_title text-5xl text-white px-12 py-5 w-1/3 " >PRICING MATURITY TEST</h1>

        <Fade delay={500} bottom>
        <p className=" home_text text-white text-lg px-16 md:py-5 py-3 "  >WHAT IS YOUR SECTOR OF ACTIVITY ?</p>


        </Fade>
        <Fade delay={700} bottom>
        


<div className="select ml-16  ">
     <select className="text-center"  value={sector} onChange={handlchange} >
    
       <option value={sector}>{sector}</option>
       <option value="Automotive">Automotive</option>
       <option value="Bank & insurance" >Bank & insurance</option>
       <option value="Chemistry & Materials">Chemistry & Materials</option>
       <option value="Aircraft construction & defense">Aircraft construction & defense</option>
       <option value="B2B distribution">B2B distribution</option>
       <option value="Consumer goods & Retail">Consumer goods & Retail</option> 
       <option value="Media and entertainment">Media and entertainment</option> 
       <option value="Industry">Industry</option>
       <option value="Pharmacy and medical">Pharmacy and medical</option>
       <option value="B2B services">B2B services</option>
       <option value="Software">Software</option>
       <option value="Passenger transport">Passenger transport</option>
       <option value="Transport and logistics">Transport and logistics</option>
     
       
      
     
      
       
     </select>
</div> 
        </Fade>
        


        <div className="flex w-6/12 mx-auto justify-between  xl:left-96 absolute left-28 bottom-4 ">

        <button className= " opacity-0 text-white  ">
            Back
          </button>

          
          <button className=" btn_start w-28 rounded-2xl text-blue-600 text-xl font-bold bg-white py-1  " onClick={()=>{
            formData.sector=sector

             if(formData.sector=="SELECT YOUR SECTOR OF ACTIVITY"){
                alert('Please choose a Scetor')
             }else{
              
              next()

             }
             
          }} >
            Start
          </button>
     
         
        </div>
        
     </main>
            
        </div>
            
        
    )
}

export default Step1
