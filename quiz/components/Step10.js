import Progress from 'react-progressbar';
import {useState} from 'react'

function Step10({formData, navigation}) {
    const { previous, next } = navigation;
    const choices=["I DONT KNOW","CONTRACTUAL PRICE","END OF YEAR REBATE","GEOGRAPHIC PRICE","DESTOCKING DISCOUNT","LOYALTY PROGRAM","SEASONAL PRICE","CHANNEL PRICE"
                   ,"ALL"]
    const [bg, setbg] = useState(Array(9).fill(""))

    const [score, setscore] = useState(0)

    const selected = (index , val)=>{
        const bgs= Array(9).fill("")


        if(val=="I DONT KNOW"){
            bg=[]
            setscore(0)
        }
       else if(val!='ALL' ){
           bg[1]=""
            
            for (let i=1 ; i<9 ; i++){
                bgs[i]=bg[i]

        
            }

            setscore(score+1)

        }else{
                setscore(10)
                for (let i=1 ; i<9 ; i++){
                    bgs[i]="bg-blue-700 text-white font-bold"
    
            
                }
            }
      

        console.log(bgs)
        bgs[index]="bg-blue-700 text-white font-bold"
        setbg(bgs)
        
        
    }
    return (
        <div className="w-full overflow-y-hidden mt-16">
        <h1 className="hidden xl:flex absolute text-lg text-blue-700   px-12 py-7 w-10/12 " >Pricing Maturity Test</h1>
        <hr className="hidden xl:flex w-10/12 ml-14 absolute top-16 px-2 border-t-2 border-white " />
        

        <div className=" px-12 relative xl:top-20 ">
        <span className="text-blue-700 ">50%</span>
          
          <Progress  color="#304EE8" completed={50}  className="rounded-3xl" />
          
        </div>
        <h1 className=" home_title md:text-xl  px-12 py-7 w-10/12 relative xl:top-20  text-[13px]  " >SELECT THE PRICING LEVERS YOU ARE USING:</h1>
         
        

        


        <div className="w-10/12 justify-between  mx-auto text-sm text-blue-700 lg:flex flex-wrap">

           {
               choices.map((val, index)=>(
                <div className={`w-full md:w-64 mt-3 lg:mt-16 px-5 py-1 border-2 text-center  ${bg[index]}  border-blue-700 rounded-3xl hover:bg-blue-700 cursor-pointer hover:text-white hover:font-bold`}
                 onClick={()=>selected(index , val)} > 
                   <p>{val}</p>
                
            </div>

               ))
           }
           
           
        </div>

        <div className="flex w-10/12 md:w-6/12 mx-auto justify-between  xl:left-96 absolute left-5 md:left-28 bottom-4 ">

        <button className="text-green-700  opacity-75 hover:opacity-100 " onClick={previous}>
            Back
        </button>
        <button className="btn_next z-50 w-28 rounded-2xl  text-white text-xl font-bold  bg-blue-700 py-1 "  onClick={()=>{
                if(score>=10){
                    setscore(10)
                    
                    // alert(formData.score9)

                    
                }
                console.log(formData)
                formData.score9=score
                const somme = formData.score1*2 + formData.score2*2 + formData.score3*2 +formData.score4*2 +formData.score5*1 +formData.score6*1 + formData.score7*1 +formData.score8*1 + formData.score9*3
                const avg= somme/140
                formData.GlobalComplexity=avg*100

                next()
            }}>
            Next
        </button>
    </div>
            
        </div>
    )
}

export default Step10
