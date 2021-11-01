import Banner from "./Banner"
import {useState} from "react"
import Fade from 'react-reveal/Fade'
function Step1({formData , navigation}) {
    const { previous, next } = navigation;

    const [activity, setactivity] = useState("SELECT YOUR  ACTIVITY")

   const handlchange = (e)=>{
        setactivity(e.target.value)
       
    }



    return (
      

        <div className="w-full mt-16 h-[650px] ">
        <main className="home_container bg-blue-700 w-full mx-auto  h-full  rounded-xl ">
        <h1 className=" home_title   text-2xl md:text-5xl text-white px-4 md:px-12 py-5 w-1/3  " >PRICING MATURITY TEST</h1>

        <Fade bottom delay={500}>
        <p className=" home_text text-white  text-md md:text-lg px-5 md:px-16 md:py-5 py-3"  >WHAT IS YOUR   ACTIVITY ?</p>


        </Fade>
         
       


        {
          
            formData.sector == "Automotive"? (
                <div className="select md:ml-16  ml-5 ">


          
             <select className="text-center  w-5/12 text-[12px] md:text-md "  value={activity} onChange={handlchange} >
            
               <option value={activity}>{activity}</option>
               <option value="Automotive supplier">Automotive supplier</option>
               <option value="Car manufacturer" >Car manufacturer</option>
               
             
               
              
             
              
               
             </select>
        </div>


            ): formData.sector == "Bank & insurance"? (

                <div className="select md:ml-16  ml-5 ">


          
                <select className="text-center  w-5/12 text-[12px] md:text-md"  value={activity} onChange={handlchange} >
               
                  <option value={activity}>{activity}</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Banking-Finance" >Banking-Finance</option>
                
                
                  
                 
                
                 
                  
                </select>
           </div>
   
                

            ):  formData.sector == "Chemistry & Materials" ? (

                <div className="select md:ml-16  ml-5 ">


          
                <select className="text-center  w-5/12 text-[12px] md:text-md"  value={activity} onChange={handlchange} >
               
                  <option value={activity}>{activity}</option>
                  <option value="Chemistry & Materials">Chemistry & Materials</option>
                  <option value="Equipment rental" >Equipment rental</option>
                  <option value="Building materials (more or less finished)">Building materials (more or less finished)</option>
                  <option value="Chemistry & Materials" >Construction company</option>
                  
                  
                
                  
                 
                
                 
                  
                </select>
           </div>

            ):  formData.sector == "Aircraft construction & defense" ? (

                <div className="select md:ml-16  ml-5 ">


          
                <select className="text-center  w-5/12 text-[12px] md:text-md"  value={activity} onChange={handlchange} >
               
                  <option value={activity}>{activity}</option>
                  <option value="Aeronautical & defense equipment supplier">Aeronautical & defense equipment supplier</option>
                  <option value="Aircraft & defense manufacturer" >Aircraft & defense manufacturer</option>
                 
                  
                  
                
                  
                 
                
                 
                  
                </select>
           </div>): formData.sector == "B2B distribution" ? (

            <div className="select md:ml-16  ml-5 ">


      
            <select className="text-center  w-5/12 text-[12px] md:text-md"  value={activity} onChange={handlchange} >
           
              <option value={activity}>{activity}</option>
              <option value="B2B distribution">B2B distribution</option>
              <option value="Wholesaler" >Wholesaler</option>
           
            
              
              
            
              
             
            
             
              
            </select>
       </div>): formData.sector == "Consumer goods & Retail" ? (

        <div className="select md:ml-16  ml-5 ">


  
        <select className="text-center  w-5/12 text-[12px] md:text-md"  value={activity} onChange={handlchange} >
       
          <option value={activity}>{activity}</option>
          <option value="Food">Food</option>
          <option value="Drink" >Drink</option>
          <option value="Consumer goods & Retail">Consumer goods & Retail</option>
          <option value="Distributed consumer good" >Distributed consumer good</option>
       
          <option value="Large distribution">Large distribution</option>
          <option value="Specialized distribution" >Specialized distribution</option>
       
          <option value="Online retail">Online retail</option>
          <option value="Restoration" >Restoration</option>
       
          <option value="Luxury">Luxury</option>
          <option value="Beauty / comestic" >Beauty / comestic</option>
       
        
       
       
        
          
          
        
          
         
        
         
          
        </select>
   </div>):formData.sector == "Industry" ? (

    <div className="select md:ml-16  ml-5 ">



    <select className="text-center  w-5/12 text-[12px] md:text-md"  value={activity} onChange={handlchange} >
   
      <option value={activity}>{activity}</option>
      <option value="Industrial products and machinery">Industrial products and machinery</option>
     
   
    
      
      
    
      
     
    
     
      
    </select>
</div>):formData.sector == "Leisure, travel, vacation" ? (

    <div className="select md:ml-16  ml-5 ">



    <select className="text-center  w-5/12 text-[12px] md:text-md"  value={activity} onChange={handlchange} >
   
      <option value={activity}>{activity}</option>
      <option value="Theme parks, museum, cinemas">Theme parks, museum, cinemas</option>
      <option value="Vacation location">Vacation location</option>
     
      <option value="Tour operator">Tour operator</option>
     
      <option value="Tourist activities">Tourist activities</option>
     
      <option value="Hotel">Hotel</option>
      <option value=" Car rental"> Car rental</option>
     
     
   
    
      
      
    
      
     
    
     
      
    </select>
</div>):formData.sector == "Media and entertainment" ? (

    <div className="select md:ml-16  ml-5 ">



    <select className="text-center  w-5/12 text-[12px] md:text-md"  value={activity} onChange={handlchange} >
   
      <option value={activity}>{activity}</option>
      <option value="Classic media (TV, Radio, Press, billboards)">Classic media (TV, Radio, Press, billboards)</option>
      <option value="Online media">Online media</option>
     
      <option value="Media agency">Media agency</option>
    
   
    
      
      
    
      
     
    
     
      
    </select>
</div>):formData.sector == "Pharmacy and medical" ? (

    <div className="select md:ml-16  ml-5 ">



    <select className="text-center  w-5/12 text-[12px] md:text-md"  value={activity} onChange={handlchange} >
   
      <option value={activity}>{activity}</option>
      <option value="Medication">Medication</option>
      <option value="Medical material">Medical material</option>
     
      <option value="Veterinary products">Veterinary products</option>
      <option value="Drugstore">Drugstore</option>
      <option value="Hospitals / Clinics / etc">Hospitals / Clinics / etc</option>
    
   
    
      
      
    
      
     
    
     
      
    </select>
</div>):formData.sector == "B2B services" ? (

    <div className="select md:ml-16  ml-5 ">



    <select className="text-center  w-5/12 text-[12px] md:text-md"  value={activity} onChange={handlchange} >
   
      <option value={activity}>{activity}</option>
      <option value="Consulting & intellectual services">Consulting & intellectual services</option>
      <option value="Interim">Interim</option>
     
      <option value="Real estate developer">Real estate developer</option>
      <option value="EPAHD & home care">EPAHD & home care</option>
      <option value="Real estate agency">Real estate agency</option> 
      <option value="Telecom operator">Telecom operator</option> 
      <option value="Business services (security, cleaning, etc.)">Business services (security, cleaning, etc.)</option> 
      <option value="Services to individuals (gardening, etc.)">Services to individuals (gardening, etc.)</option> 
      <option value="Industrial subcontracting">Industrial subcontracting</option> 
      <option value="Professional vehicle rental">Professional vehicle rental</option> 
      
    
   
    
      
      
    
      
     
    
     
      
    </select>
</div>):formData.sector == "Software" ? (

    <div className="select md:ml-16  ml-5 ">



    <select className="text-center  w-5/12 text-[12px] md:text-md"  value={activity} onChange={handlchange} >
   
      <option value={activity}>{activity}</option>
      <option value="Software">Software</option>
     
     
    
   
    
      
      
    
      
     
    
     
      
    </select>
</div>):
formData.sector == "Passenger transport" ? (

    <div className="select md:ml-16  ml-5 ">



    <select className="text-center  w-5/12 text-[12px] md:text-md"  value={activity} onChange={handlchange} >
   
      <option value={activity}>{activity}</option>
      <option value="Passenger transport (air, rail, etc.)">Passenger transport (air, rail, etc.)</option>
     
     
    
   
    
      
      
    
      
     
    
     
      
    </select>
</div>):formData.sector == "Transport and logistics" ? (

    <div className="select md:ml-16  ml-5 ">



    <select className="text-center  w-5/12 text-[12px] md:text-md"  value={activity} onChange={handlchange} >
   
      <option value={activity}>{activity}</option>
      <option value="Goods transport">Goods transport</option>
      <option value="Logistician">Logistician</option>
     
     
    
   
    
      
      
    
      
     
    
     
      
    </select>
</div>):
(<></>)
        }
        

        <div className="flex w-6/12 mx-auto justify-between  xl:left-96 absolute left-28 bottom-4 ">

        <button className="text-white opacity-30 " onClick={previous}>
            Back
          </button>

          
          <button className=" btn_start w-28 rounded-2xl text-blue-600 text-xl font-bold bg-white py-1  " onClick={()=>{
              
            formData.activity=activity

              if( formData.activity=="SELECT YOUR  ACTIVITY"){
                alert('Please choose an Activity')
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
