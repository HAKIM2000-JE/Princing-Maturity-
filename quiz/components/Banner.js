import Link from "next/link"

function Banner() {
    return (
        <div className="w-screen mt-16 h-screen">
        <main className="home_container bg-blue-700 w-11/12 mx-auto  h-5/6   rounded-xl ">
        <h1 className=" home_title text-5xl text-white px-12 py-7 w-1/3 " >PRICING MATURITY TEST</h1>
         
        <p className=" home_text text-white text-lg px-16 py-7" >WHAT IS YOUR SECTOR OF ACTIVITY ?</p>


        <div className="select ml-16 ">
             <select className="text-center" >
          
               <option value="1">Automobile</option>
               <option value="2" >Banque & Assurance</option>
               <option value="3">Chimie & Materiaux</option>
               <option value="4">Construction</option>
               <option value="5">Construction aéronautique & défense</option>
               <option value="6">Distribution B2B</option>
               <option value="7">Grande consomation & Retail</option>
               <option value="8">Industrie</option>
               <option value="9">Loisir , voyage , vacances</option>
               
              
             
              
               
             </select>
        </div>


        <div className="flex w-6/12 mx-auto justify-between    mt-56 ">

        <button className="text-white opacity-30 ">
            Back
          </button>

          <Link href="/quiz">
          <button className=" btn_start w-28 rounded-2xl text-blue-600 text-xl font-bold bg-white py-1 ">
            Start
          </button>
          </Link>
         
        </div>
        
     </main>
            
        </div>
    )
}

export default Banner
