import Progress from 'react-progressbar';
import Fade from 'react-reveal/Fade'
import axios from 'axios';
import {useState} from 'react'
function Step16( {formData, navigation}) {
  const { previous, next } = navigation;
    const [firstname, setfirsname] = useState("")
    const [lastname, setlastname] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")


     const  handlfirstname = (e)=>{
         setfirsname(e.target.value)

     }

     const  handlastname = (e)=>{
         setlastname(e.target.value)

     }

     const  handlphone = (e)=>{
         setphone(e.target.value)

     }


     const  handlemail = (e)=>{
         setemail(e.target.value)

     }


     
    const sendData = ()=>{
      axios(
          {
              url: "https://pricing-maturity.herokuapp.com//answers/client/save",
              method: "POST",
              data: formData
          }
      ).then((res) => {
          console.log('Data has been sent', res)
          go("submit")
      }).catch((e) => {
          console.log('Internal server Error' , e)
      })
      
  }

 


    return (
     
        <div className="h-full w-full mt-16">
        
        <div className=" px-12  ">
        <span className="text-blue-700">100%</span>
          
          <Progress  color="#304EE8" completed={100}  className="rounded-3xl" />
          
        </div>
        <Fade delay={500} bottom>
        <main className="home_container mt-5 bg-blue-700 w-full mx-auto  h-[92%]  rounded-xl ">
        <h1 className=" home_title text-5xl text-white mx-auto text-center  py-7 w-1/3 " >FORM</h1>
         
           <div className="w-8/12 lg:w-5/12 mx-auto relative  top-14 text-sm">

           <div className="lg:flex justify-between">
           <input type="text" value={firstname} onChange={handlfirstname}  className="w-full mt-2 md:mr-2 mx-auto bg-white outline-none text-center  px-2 py-3 rounded-3xl "  placeholder="FIRST NAME "  />
           <input type="text" value={lastname} onChange={handlastname} className="w-full mt-2 mx-auto bg-white outline-none text-center px-2 py-3 rounded-3xl "  placeholder="LAST NAME" />
           </div>
           
           <input type="text" value={phone} onChange={handlphone} className="w-full mt-4 mx-auto bg-white outline-none  text-center px-2 py-3 rounded-3xl " placeholder="PHONE NUMBER"  />
             <input type="text" value={email} onChange={handlemail} className="w-full mt-4 mx-auto bg-white outline-none text-center  px-2 py-3 rounded-3xl " placeholder="EMAIL ADRESSE"  />
           </div>

        <div className="flex w-5/12 mx-auto justify-between    mt-44 ">

       
          <button className=" btn_start w-11/12 md:8/12 xl:3/12 md:relative  xl:left-5 left-20  rounded-2xl text-blue-600 text-xl font-bold bg-white py-1 " onClick={()=>{
             

               const Pricing = formData.score10*3 +  formData.score11*2 + formData.score12*3 +  formData.score13*2 + formData.score14*2


               formData.Pricingmaturity=(Pricing/120 )*100
               
              //  alert('Global Complexity : ' + formData.GlobalComplexity + " %" + "pricing Maturity : " + formData.Pricingmaturity +" %")
              const hr = formData.score1*3 +  formData.score2*1 + formData.score3*3 +  formData.score4*2 + formData.score5*3 + formData.score6*3 +  formData.score7*2 + formData.score8*1 + formData.score9*2



              const data =    formData.score2*3 + formData.score3*1 + formData.score8*2 
              const tool =   formData.score1*2 + formData.score3*2 + formData.score4*3 + formData.score5*3 + formData.score6*3 + formData.score7*3 + formData.score8*3 +formData.score9*2
              const  organization =  formData.score1*3 + formData.score2*3 + formData.score3*3 + formData.score4*1 + formData.score5*1 + formData.score6*1 + formData.score7*3 + formData.score8*2+ formData.score9*1 
              const process = formData.score1*2 + formData.score2*0 + formData.score3*2 + formData.score4*1 + formData.score5*3 + formData.score6*3 + formData.score7*2 + formData.score8*3+ formData.score9*3

              formData.hr= (hr/200)*100
              formData.data= (data/60)*100
              formData.tool= (tool/210)*100
               formData.process = (process/190)*100
              formData.organization= (organization/180)*100

              formData.lastname=lastname
              formData.phone=phone
              formData.firstname=firstname
              formData.email=email

              

              console.log(formData)
              sendData()
              next()
          }} >
            See my result
          </button>
        </div>
        
     </main>
        </Fade>
        
            
        </div>
            
        
    )
}

export default Step16
