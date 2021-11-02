import Progress from 'react-progressbar';
import { useState , useEffect } from 'react';
function Step4( {formData, navigation}) {

    
    const { previous, next } = navigation;
    const [shap, setshap] = useState("hidden")
    const [shaposition, setshaposition] = useState("top-64")

    const [divposition, setdivposition] = useState("bottom-[280px]")

    const [istwo, setistwo] = useState("hidden")
    const [isthree, setisthree] = useState("hidden")
    const [isfour, setisfour] = useState("hidden")


    const [font1, setfont1] = useState("")
    const [font2, setfont2] = useState("")
    const [font3, setfont3] = useState("")
    const [font4, setfont4] = useState("")

    const [score, setscore] = useState(11)



 
    
   
useEffect(() => {


    

   
     if(formData.score2==1 ){
         
         next() 
     }
    
}, [])

  
    const [colors, setcolors] = useState(Array(11).fill("black"))
    const [barStyle, setBatstyle]=useState(Array(22).fill("w-14 mt-4 rounded-3xl border-t-2 border-blue-700"))
    const [borderColor, setBorderColor]=useState(Array(11).fill("border-white"))



    const showshap = (index)=>{
  
        const temp = Array(11).fill("border-white")
      
        setshap("block")
        if(index==8 || index==7){
            setshaposition("top-48")
            setdivposition("bottom-72")
            setistwo('block')
            setisthree("hidden")
           
            setisfour("hidden")
            setfont1("")
            setfont2("font-bold z-40")
            setfont3("")
            setfont4("")
            removeselect()
            uptoselect([7,8,9])
   
            temp[7]="border-green-400"
            temp[8]="border-green-400"
                
  


        }else if (index<=6 && index>=3){
            setshaposition("top-9")
            setdivposition("bottom-72")
            setistwo('block')
            setisthree("block")
            setisfour("block")

            setfont1("")
            setfont2("")
            setfont3("font-bold z-40")
            setfont4("")
            uptoselect(3)
          
            removeselect()
            uptoselect([3,4,5,6,7])

            temp[3]="border-green-400"
            temp[4]="border-green-400"
                
            temp[5]="border-green-400"
            temp[6]="border-green-400"
                
            
                
            

        }else if(index<=2){
            setshaposition("bottom-20")
            setdivposition("bottom-72")
            setistwo("block")
            setisthree("block")
            setisfour("hidden")
            setfont1("")
            setfont2("")
            setfont3("")
            setfont4("font-bold z-40")

            uptoselect(10)


            removeselect()
            uptoselect([0,1,2,3])


            temp[0]="border-green-400"
            temp[1]="border-green-400"
            temp[2]="border-green-400"
        
                
     
            
           
          
            


        }else if(index>8){
            setshaposition("top-64")
            setdivposition("bottom-[280px]")
            setisthree("hidden")
            setistwo("hidden")
            setisfour("hidden")
            setfont1("font-bold z-40")
            setfont2("")
            setfont3("")
            setfont4("")
           
            removeselect()
            uptoselect([9])
            temp[9]="border-green-400"
            

        }
     
       setBorderColor(temp)
    }

   

    const showLargeShap =(index)=>{



      
        const temp = Array(11).fill("border-white")
        
        
         

      
        setshap("block")
        if(index==0){

            setfont1("font-bold z-40")
            setfont2("")
            setfont3("")
            setfont4("")

            removeselect()
            uptoselect([0,1])
            temp[0]="border-green-400"
          
        }else if (index==1 || index==2 ){
            setfont1("")
            setfont2("font-bold z-40")
            setfont3("")
            setfont4("")

            removeselect()
            uptoselect([1 ,2,3])
            temp[1]="border-green-400"
            temp[2]="border-green-400"
        }else if (index >2 && index<7){
            setfont1("")
            setfont2("")
            setfont3("font-bold z-40")
            setfont4("")

            removeselect()
            uptoselect([3 , 4 , 5 , 6 , 7])
            temp[3]="border-green-400"
            temp[4]="border-green-400"

            temp[5]="border-green-400"
            temp[6]="border-green-400"
            

        }else{
            setfont1("")
            setfont2("")
            setfont3("")
            setfont4("font-bold z-40")
            removeselect()
            uptoselect([7 , 8 , 9 , 10 ])
            temp[7]="border-green-400"
            temp[8]="border-green-400"

            temp[9]="border-green-400"
            
        }
      
        setBorderColor(temp)
        
    }


    const  uptoselect  = (values)=>{
        var newstyles= Array(22).fill("w-14 mt-4 rounded-3xl border-t-2 border-blue-700")
        for( let i =0 ; i<=values.length ;i++){

            newstyles[values[i]]="barToslect"
           

        }
        
        setBatstyle(newstyles)

    }

   const removeselect = ()=>{
    var newstyles= Array(22).fill("w-14 mt-4 rounded-3xl border-t-2 border-blue-700")
    
    setBatstyle(newstyles)

   }

    const showvalue = (index)=>{
     
        var newstyles= Array(22).fill("w-14 mt-4 rounded-3xl border-t-2 border-blue-700")
        switch(index){
            case(0):
               newstyles[1]="barToslect"
               showLargeShap(0)
               break

            case(1):
               newstyles[0]="barToslect"
               showLargeShap(0)
              
               break

            case(2):
               newstyles[1]="barToslect"
               newstyles[3]="barToslect"
               showLargeShap(2)

               break

            case(3):
            newstyles[1]="barToslect"
            newstyles[2]="barToslect"
            showLargeShap(2)

               
               break

             case(4):
              
               newstyles[3]="barToslect"
               newstyles[5]="barToslect"
               newstyles[6]="barToslect"
               newstyles[7]="barToslect"
               break

            case(5):
            
               newstyles[3]="barToslect"
               newstyles[4]="barToslect"
               newstyles[6]="barToslect"
               newstyles[7]="barToslect"
               break

            case(6):
            newstyles[3]="barToslect"
            newstyles[4]="barToslect"
            newstyles[5]="barToslect"
            newstyles[7]="barToslect"
            
            break
            
            case(7):
            newstyles[3]="barToslect"
            newstyles[4]="barToslect"
            newstyles[5]="barToslect"
            newstyles[6]="barToslect"
            showLargeShap(6)
            
            break
            
            case(8):
            newstyles[7]="barToslect"
            newstyles[9]="barToslect"
            newstyles[10]="barToslect"
            
            break


            case(9):
            newstyles[8]="barToslect"
            newstyles[10]="barToslect"
            newstyles[7]="barToslect"
            showLargeShap(8)
            
            break

            case(10):
            newstyles[8]="barToslect"
            newstyles[9]="barToslect"
            newstyles[7]="barToslect"
            showLargeShap(9)
            
            break

            
            
         
            
            
            

            
        }
        for(let i=0;i<=0 ; i++){
         if(newstyles[i]=="bar_option_mlti"){
             newstyles[i]=""
         }
     }
     
     newstyles[index]="bar_option_mlti"

     if([0,1,3,7,10].includes(index)){
        newstyles[index]="bar_option_mlti_large"
       
     }else{

        
       

     }

        
     
            

      
     
     setBatstyle(newstyles)




     

     setscore(10-index)
     

     
        
 }



 const showvalueSmall = (index)=>{
     
    var newstyles= Array(22).fill("w-14 mt-4 rounded-3xl border-t-2 border-blue-700")
    switch(index){
        case(0):
           newstyles[1]="barToslect"
            showshap(0)
           break

        case(1):
           newstyles[0]="barToslect"
           showshap(0)
          
           break

        case(2):
           newstyles[1]="barToslect"
           newstyles[3]="barToslect"
           showshap(2)

           break

        case(3):
        newstyles[1]="barToslect"
        newstyles[2]="barToslect"
        showshap(2)

           
           break

         case(4):
          
           newstyles[3]="barToslect"
           newstyles[5]="barToslect"
           newstyles[6]="barToslect"
           newstyles[7]="barToslect"
           break

        case(5):
        
           newstyles[3]="barToslect"
           newstyles[4]="barToslect"
           newstyles[6]="barToslect"
           newstyles[7]="barToslect"
           break

        case(6):
        newstyles[3]="barToslect"
        newstyles[4]="barToslect"
        newstyles[5]="barToslect"
        newstyles[7]="barToslect"
        
        break
        
        case(7):
        newstyles[3]="barToslect"
        newstyles[4]="barToslect"
        newstyles[5]="barToslect"
        newstyles[6]="barToslect"
        showshap(6)
        
        break
        
        case(8):
        newstyles[7]="barToslect"
        newstyles[9]="barToslect"
        newstyles[10]="barToslect"
        
        break


        case(9):
        newstyles[8]="barToslect"
        newstyles[10]="barToslect"
        newstyles[7]="barToslect"
        showshap(8)
        
        break

        case(10):
        newstyles[8]="barToslect"
        newstyles[9]="barToslect"
        newstyles[7]="barToslect"
        showshap(9)
        
        break

        
        
     
        
        
        

        
    }
    for(let i=0;i<=0 ; i++){
     if(newstyles[i]=="bar_option_mlti"){
         newstyles[i]=""
     }
 }
 
 

 if([0,1,3,7,10].includes(index)){
    newstyles[index]="bar_option_mlti_large"
   
 }else{
    newstyles[index]="bar_option_mlti"
 }




    
 
        

  
 
 setBatstyle(newstyles)




 

 setscore(10-index)
 

 
    
}

    return (
        <div className=" w-full overflow-y-hidden mt-16">

        <h1 className="hidden xl:flex absolute text-lg text-blue-700   px-12 py-7 w-10/12 " >Pricing Maturity Test</h1>
        <hr className=" hidden xl:flex w-10/12 ml-14 absolute top-16 px-2 border-t-2 border-white " />
        

        <div className=" px-12 relative xl:top-20 ">
        <span className="text-blue-700 ">18%</span>
          
          <Progress  color="#304EE8" completed={18}  className="rounded-3xl" />
          
        </div>
        <h1 className=" home_title md:text-xl  px-12 py-7 w-10/12 relative xl:top-20  text-[13px]   " >IN B2B HOW DO YOU DIFFERENTIATE PRICE PER CLIENT?</h1>
         


        
         


          <div className="xl:w-full xl:block  flex  mx-auto  ">

          <div className="px-10  top-36 xl:justify-between xl:hidden xl:relative  xl:left-5 ">
          {
                        Array(10).fill("s").map((value,index)=>(
                            <div className="   ">
                             
                            <div className="flex ">
                             <span  className="option_number absolute left-2 mt-2 xl:hidden  cursor-pointer "  onClick={()=>{showvalueSmall(index)}} >{10-index}</span>
                             {
                                index==0 || index==3 || index==7 || index==9 ?(
                            <hr className={` ${barStyle[index]}  w-20 mt-4 rounded-3xl border-t-2  xl:rotate-90 border-blue-700   bar_option_hover     z-40 `} onClick={()=>{showvalueSmall(index)}} />


                                ):(
                            <hr className={` ${barStyle[index]}  w-7 mt-4  bar_option_hover      xl:rotate-90  rounded-3xl border-t-2 border-blue-700 z-40  `} onClick={()=>{showvalueSmall(index)}} />

                                )
                             }
                               
                            </div>
                            <div className="relative top-1 flex flex-col   justify-between  h-5  cursor-pointer z-40 " onClick={()=>showshap(index)}>
                            <hr className={` border-t-[3px] w-5 xl:mt-3 xl:rotate-90  ${borderColor[index]} ` }/>
                            <hr className={` border-t-[3px] w-5 xl:mt-3 xl:rotate-90  ${borderColor[index]} `}  />
                            <hr className={` border-t-[3px] w-5 xl:mt-3 xl:rotate-90  ${borderColor[index]} `}  />
                            <hr className={` border-t-[3px] w-5 xl:mt-3 xl:rotate-90  ${borderColor[index]} `}  />
                            
                            </div>
                          
                            </div>
                            
                        ))
                    }


                    
          </div>

          <div className=" hidden xl:flex px-10 h-56  mx-auto xl:w-11/12 xl:justify-between xl:relative absolute  top-20    xl:left-5  ">
          {
                        Array(11).fill("s").map((value,index)=>(

                            <div className="">
                            <div className="">
                            <span  className="option_number relative bottom-2 right-2  cursor-pointer " onClick={()=>{ showLargeShap(index) ;showvalue(index)}}  >{index}</span>
                            {

                                index==0 || index==1 || index==3 || index==7 || index==10 ?(
                                    <hr className={` ${barStyle[index]} w-20  xl:-rotate-90   mt-3 xl:mt-0 relative xl:right-10 top-10  rounded-3xl border-t-5 border-blue-700  z-40 `} onClick={()=>{showvalue(index)}}  />

                                ):(
                                    <hr className={` ${barStyle[index]} w-7  xl:rotate-90   mt-3 xl:mt-0 relative xl:right-5 top-3   rounded-3xl border-t-5 border-blue-700 z-40  `} onClick={()=>{showvalue(index)}}  />

                                )

                            }

                            </div>
                            {
                                index!=10 ?(
                                    <div className="relative top-1 flex   w-54 justify-between  h-5  cursor-pointer z-40 " onClick={()=> showLargeShap(index)}>
                            <hr className={ `border-t-[3px] w-3  xl:rotate-90   ${borderColor[index]}` } />
                            <hr className={ `border-t-[3px] w-3  xl:rotate-90   ${borderColor[index]}` } />
                            <hr className={ `border-t-[3px] w-3  xl:rotate-90   ${borderColor[index]}` } />
                            <hr className={ `border-t-[3px] w-3  xl:rotate-90   ${borderColor[index]}` }/>
                            <hr className={ `border-t-[3px] w-3  xl:rotate-90   ${borderColor[index]}` }/>
                            <hr className={ `border-t-[3px] w-3  xl:rotate-90   ${borderColor[index]}` } />
                            <hr className={ `border-t-[3px] w-3  xl:rotate-90   ${borderColor[index]}` } />
                            <hr className={ `border-t-[3px] w-3  xl:rotate-90   ${borderColor[index]}` } />
                            <hr className={ `border-t-[3px] w-3  xl:rotate-90   ${borderColor[index]}` }/>
                            
                            
                            
                            
                            
                            </div>

                                ):(<></>)
                            }
                            
                            </div>
                            
                        ))
                    }
          </div>
          <div className=" xl:hidden ml-10 absolute flex  xl:flex-row xl:w-10/12 xl:absolute xl:top-72  flex-col justify-around md:left-28  left-16     ">
             

                
             
          <h1 className={`option_paragraph    position relative bottom-2 md:w-56  w-44    ${font4} ` }  > All the customers have the same price of a given product at a certain location at a certain time (expect loyalti program or discounts)  </h1>
          <h1 className={`option_paragraph position relative top-2  md:w-56  w-44 xl:left-9  ${font3}  ` }  > Part of the business is not differentiated by client and part of the business is based on negociated prices  </h1>
          <h1 className={`option_paragraph position relative top-7 xl:top-2 xl:left-28   md:w-56  w-44 ${font2} ` }  > Most of my client have personnalized pricing through contract or quotation to reflects their specific profiles </h1>
          <h1 className={`option_paragraph   position relative top-2 xl:left-9  md:w-56  w-44 ${font1} ` }  > I DONT KNOW </h1>
           
             
          </div>


          <div className=" hidden xl:flex ml-10 absolute   xl:flex-row  xl:w-10/12   xl:absolute xl:top-72  flex-col justify-around       ">
             

          <h1 className={`option_paragraph   position relative top-2 xl:left-9 ${font1} ` }  > I DONT KNOW </h1>
          <h1 className={`option_paragraph position relative top-10 xl:top-2 right-5  w-36 ${font2} ` }  > Most of my client have personnalized pricing through contract or quotation to reflects their specific profiles </h1>
          
          <h1 className={`option_paragraph position relative top-2  w-56 xl:left-2   ${font3}  ` }  > Part of the business is not differentiated by client and part of the business is based on negociated prices  </h1>
         
          <h1 className={`option_paragraph    position relative top-2 w-56 left-5   ${font4} ` }  > All the customers have the same price of a given product at a certain location at a certain time (expect loyalti program or discounts)  </h1>
        
           
             
          </div>


        
        
          </div>
       
        <div className="flex w-10/12 md:w-6/12 mx-auto justify-between  xl:left-96 absolute left-5 md:left-28   bottom-4 ">

            <button className="text-green-700  opacity-75 hover:opacity-100 " onClick={previous}>
                Back
            </button>
            <button className="btn_next z-50 w-28 rounded-2xl  text-white text-xl font-bold  bg-blue-700 py-1 " onClick={()=>{
                if(score!=11){
                    formData.score3=11-score

                    next()
                    
                }else{
                    alert('Please chose a value!')
                }
            }}>
                Next
            </button>
        </div>
        <div className={` ${shap} px-10  w-full relative  xl:hidden ${shaposition}     `}>
        <div className={`bg-[#c8e7e5] h-10    w-[350px]  relative    ${divposition}  z-0 opacity-40 `}></div>
       
          <div className={` ${istwo} bg-[#c8e7e5] h-10    w-[350px]  relative    ${divposition}  z-0 opacity-40 `}></div>


       
        <div className={`  ${isthree} bg-[#c8e7e5] h-10    w-[350px]  relative    ${divposition}  z-0 opacity-40 `}></div>

        <div className={`  ${isfour} bg-[#c8e7e5] h-10    w-[350px]  relative    ${divposition}  z-0 opacity-40 `}></div>

      
                  
                 

        </div>


        <div className="">

        {
            font4=="font-bold z-40"?(
                <div className=" hidden xl:block bg-[#c8e7e5] w-[340px] h-[200px]  top-56 z-0 opacity-40 absolute  left-[910px]  "></div>
            
            

            ): font3=="font-bold z-40"?(
                <div className="hidden xl:block bg-[#c8e7e5] w-[460px] h-[200px]  top-56 z-0 opacity-40 absolute  left-[450px]  "></div>
            
               

            ):font2=="font-bold z-40"?(
                <div className="hidden xl:block bg-[#c8e7e5] w-[220px] h-[200px]  top-56 z-0 opacity-40 absolute  left-[230px]  "> </div>
            
               

            ):font1=="font-bold z-40"?(
                <div className=" hidden xl:block bg-[#c8e7e5] w-[110px] h-[200px]  top-56 z-0 opacity-40 absolute  left-[120px]  "></div>
            

            ):(
                <></>
            )
        }
            


          


            
          


            
            
        </div>
        

       




      
        
        
        </div>
    )
}

export default Step4
