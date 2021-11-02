import Progress from 'react-progressbar';
import { useState , useEffect } from 'react';
function Step2( {formData, navigation}) {

    const [optionColor, setoptionColor] = useState("")
    const { previous, next } = navigation;
    const choices = [ 'I use Dynamic pricing' , 'Each transaction',
                          'Each month', '4xyear' , 'Twice a year','Once a year' , 'I DONT KNOW']

    const choice = ['>5M', '2M TO 5M' , '1M TO 2M' ,'500K TO 1M' , '100k TO 100K' , '100K TO 500K' , '4K TO 10K' ,'2K TO 4K' ,'500 To 2k','0 To 500' , 'I DONT KNOW']
    


    const reverse = (array1)=>{
        const array2 =[]
        for(let i = 0 ; i<=array1.length ; i++){
             array2[i]=array1[array1.length-i]

        }
        return array2
    }


    const choice_invers = reverse(choices)
  


   
    
    

    const values= [0 , 8 , 15 , 21 , 28 , 35, 43  ]
    const [colors, setcolors] = useState(Array(11).fill("black"))
    const [barStyle, setBatstyle]=useState(Array(44).fill("w-14 mt-4 rounded-3xl border-t-2 border-white font-bold"))
    const [score, setscore] = useState(11)


    const changeColor = (index)=>{
        
        var newcolors = ["black","black","black","black","black","black","black","black","black","black","black"]

        for(let i=0;i<=10 ; i++){
            if(newcolors[i]=="blue-700 text-xl"){
                newcolors[i]="black"
            }
        }
         newcolors[index]="blue-700   font-bold"
         setcolors(newcolors)
    

        

         
         
    }



    useEffect(() => {
   
        if(formData.score2==1){
            
            next() 
        }
       
   }, [])

    const showvalue = (index)=>{
        
         
           var newstyles= Array(44).fill("w-14 mt-4 rounded-3xl border-t-2 border-white font-bold")

           for(let i=0; i<=43 ; i++){
                if(newstyles[i]=="bar_option"){
                    newstyles[i]=""
                }
        }
        for(let i=43 ; i>index ; i-- ){
            if(i>40){
                newstyles[i]="w-14 mt-4 rounded-3xl border-t-2 border-blue-500 font-bold"

            }else if (i<=40  && i>30){
                newstyles[i]="w-14 mt-4 rounded-3xl border-t-2 border-blue-400 font-bold"
            }else if (i<=30  && i>20){
                newstyles[i]="w-14 mt-4 rounded-3xl border-t-2 border-blue-300 font-bold"
            }else if (i<=20  && i>10){
                newstyles[i]="w-14 mt-4 rounded-3xl border-t-2 border-green-300 font-bold"
            }else if (i<=20  && i>10){
                newstyles[i]="w-14 mt-4 rounded-3xl border-t-2 border-green-300 font-bold"
            }else if (i<=10  && i>5){
                newstyles[i]="w-14 mt-4 rounded-3xl border-t-2 border-green-400 font-bold"
            }else{
                newstyles[i]="w-14 mt-4 rounded-3xl border-t-2 border-green-500 font-bold"

            }
           
        }
        newstyles[index]="bar_option"
        setBatstyle(newstyles)

   
        switch (index){
            case 0 :
                changeColor(0)
                setscore(10)
                break;
             case 4 :
                  changeColor(1)
                  setscore(9)
                  break;

           case 9:
                   changeColor(2)
                   setscore(8)
                   break;
            
           case  13 :
                 
                 changeColor(4)
                 setscore(7)
                 break;
          
          case 17 :
                 
                 changeColor(4)
                 setscore(6)

                 break;

          case 21 :
                 
                  changeColor(5)
                  setscore(5)

                  break;

          case  28 :

                  changeColor(6)
                  setscore(4)
                  break

                  
          case 35 :
                changeColor(7)
                setscore(3)
                break
          
          case 41 :
                changeColor(8)
                setscore(2)
                break
          
          case 39 :
              changeColor(9)
              setscore(1)

              break

              case 43 :
                  changeColor(10)
                  setscore(0)
   
                  break
              
            
        }

      
        
        
         
        
    }


    const showBar = (index)=>{
    

        switch (index){
            case 1 :
              
                showvalueReverse(0)
                setscore(0)
                break;
             case 2 :
                 
                  showvalueReverse(8)
                  setscore(1)
                  break;
    
           case 3:
                 
                   showvalueReverse(15)
                   setscore(2)
                   break;
            
           case  4 :
                 
                 
                 showvalueReverse(21)
                 setscore(3)
                 break;
          
          case 5 :
                 
          
                 showvalueReverse(28)
                 setscore(4)
    
                 break;
    
          case 6:
                 
               
                  showvalueReverse(35)
                  setscore(5)
    
                  break;
    
          case  7 :
    
                 
                  showvalueReverse(43)
                  setscore(6)
                  break
    
                  
          case 8 :
              
                showvalueReverse(30)
                setscore(7)
                break
          
          case 9 :
              
                showvalueReverse(34)
                setscore(8)
                break
          
          case 10 :
           
              showvalueReverse(39)
              setscore(9)
    
              break
    
              case 11 :
                  
                  showvalueReverse(43)
                  setscore(10)
    
                  break
              
            
        }
        
    }
    


    const showvalueReverse = (index)=>{
        
        var newstyles= Array(44).fill("w-14 mt-4 rounded-3xl border-t-2 border-white font-bold")

        for(let i=0; i<=43 ; i++){
             if(newstyles[i]=="bar_option"){
                 newstyles[i]=""
             }
     }
     for(let i=0 ; i<index ; i++ ){
         if(i>40){
             newstyles[i]="w-14 mt-4 rounded-3xl border-t-2 border-green-500 font-bold"

         }else if (i<=40  && i>30){
             newstyles[i]="w-14 mt-4 rounded-3xl border-t-2 border-green-400 font-bold"
         }else if (i<=30  && i>20){
             newstyles[i]="w-14 mt-4 rounded-3xl border-t-2 border-green-300 font-bold"
         }else if (i<=20  && i>10){
             newstyles[i]="w-14 mt-4 rounded-3xl border-t-2 border-blue-300 font-bold"
         }else if (i<=20  && i>10){
             newstyles[i]="w-14 mt-4 rounded-3xl border-t-2 border-blue-300 font-bold"
         }else if (i<=10  && i>5){
             newstyles[i]="w-14 mt-4 rounded-3xl border-t-2 border-blue-400 font-bold"
         }else{
             newstyles[i]="w-14 mt-4 rounded-3xl border-t-2 border-blue-500 font-bold"

         }
        
     }
     newstyles[index]="bar_option"
     setBatstyle(newstyles)


     switch (index){
         case 0 :
             changeColor(1)
             setscore(0)
             break;
          case 8 :
               changeColor(2)
               setscore(1)
               break;

        case 15:
                changeColor(3)
                setscore(2)
                break;
         
        case  21:
              
              changeColor(4)
              setscore(3)
              break;
       
       case 17 :
              
              changeColor(5)
              setscore(4)

              break;

       case 21 :
              
               changeColor(4)
               setscore(5)

               break;

       case  28 :

               changeColor(5)
               setscore(6)
               break

               
       case 35 :
             changeColor(6)
             setscore(7)
             break
       
       case 43 :
             changeColor(7)
             setscore(8)
             break
   
           
         
     }
  
   
     
     
      
     
 }

 const showBarV = (index)=>{
    

    switch (index){
        case 0 :
            showvalue(0)
            setscore(10)
            break

        case 1 :
          
            showvalue(4)
            setscore(9)
            break;
         case 2 :
             
              showvalue(9)
              setscore(8)
              break;

       case 3:
             
               showvalue(14)
               setscore(7)
               break;
        
       case  4 :
             
             
             showvalue(19)
             setscore(6)
             break;
      
      case 5 :
             
      
             showvalue(23)
             setscore(5)

             break;

      case 6:
             
           
              showvalue(28)
              setscore(4)

              break;

      case  7 :

             
              showvalue(30)
              setscore(3)
              break

              
      case 8 :
          
            showvalue(34)
            setscore(2)
            break
      
      case 9 :
          
            showvalue(39)
            setscore(1)
            break
      
      case 10 :
       
          showvalue(43)
          setscore(0)

          break

          case 11 :
              
              showvalue(43)
              setscore(0)

              break
          
        
    }
    
}
 
    

    return (
        <div className="w-full mt-16">

        <h1 className="  hidden xl:flex absolute text-lg text-blue-700   px-12 py-7 w-10/12 " >Pricing Maturity Test</h1>
        <hr className=" hidden xl:flex w-10/12 ml-14 absolute top-16 px-2 border-t-2 border-white " />
        

        <div className=" px-12 relative xl:top-20 ">
        <span className="text-blue-700 ">21%</span>
          
          <Progress  color="#304EE8" completed={21}  className="rounded-3xl" />
          
        </div>
        <h1 className="  home_title md:text-xl  px-12 py-7 w-10/12 relative xl:top-20  text-[13px] " >In B2B how often do you change your price for an avg client?</h1>
         


        
         
       
         


          <div className="  xl:block  flex  mx-auto  ">

          <div className="xl:hidden px-10  absolute  xl:px-28   xl:justify-around xl:relative h-[100px]   top-36">
          {
                        Array(29).fill("s").map((value,index)=>(
                           
                                values.includes(index)?(
                                    <div className="w-[1em]">

                                    
                            <hr className={` ${barStyle[index]}  w-14 border-t-2 font-bold  hover:border-blue-700 hover:w-[80px]  hover:font-extrabold  hover:relative hover:right-3  text-center  xl:-rotate-90 cursor-pointer     mt-[7.2px]   rounded-3xl   `} onClick={()=>{showvalue(index)}} />
                                                                    
                            </div>

                                ):(
                                    <div className="w-[1em]">
                                  
                                    <hr className={` ${barStyle[index]}  xl:-rotate-90        mt-[7.2px]   rounded-3xl border-t-5  `}  />
                                                     
                                    </div>

                                )
                            
                           
                            
                        ))
                    }
          </div>


          <div className="xl:flex px-10 hidden  absolute  xl:px-28   xl:justify-around xl:relative h-[100px]   top-36">
          {
                        Array(44).fill("s").reverse().map((value,index)=>(
                           
                                values.includes(index)?(
                                    <div className="w-[1em]">


                                    
                            <hr className={` ${barStyle[index]}   w-14 border-t-2 font-bold  hover:border-blue-700 hover:w-[80px]  hover:font-extrabold  hover:relative hover:right-3  text-center  xl:-rotate-90 cursor-pointer     mt-[7.2px]   rounded-3xl   `} onClick={()=>{showvalueReverse(index)}} />
                                                                    
                            </div>

                                ):(
                                    <div className="w-[1em]">
                                    
                                  
                                    <hr className={` ${barStyle[index]}  xl:-rotate-90        mt-[7.2px]   rounded-3xl border-t-5  `}  />
                                                     
                                    </div>

                                )
                            
                           
                            
                        ))
                    }
          </div>

          

          <div className=" xl:hidden md:ml-10 flex flex-col    absolute left-44 xl:left-7 xl:px-12   xl:relative  xl:top-44 xl:w-11/12 top-[120px]  md:h-[400px] h-[300px]  xl:mx-auto xl:ml-0  justify-between ">
             {


                 choices.map((choice , index)=>(
                     <h1 className={`option_text text-${colors[index]} hover:text-blue-700   hover:font-bold  cursor-pointer  ` }   onClick={()=>{showBarV(index)}} >{choice}</h1>
                 ))
             }
          </div>

          
          <div className=" hidden ml-10 xl:flex absolute  xl:right-3  xl:px-[10px] xl:bottom-72  xl:w-full   xl:mx-auto xl:ml-0 xl:justify-between ">
             {
                choice_invers.map((choice , index)=>(
                     <h1 className={`option_text text-${colors[index]} hover:text-blue-700   hover:font-bold cursor-pointer ` }   onClick={()=>{showBar(index)}} >  {choice}</h1>
                 ))
             }
          </div>
      
      
        
          </div>
       
        <div className="flex w-10/12 md:w-6/12 mx-auto justify-between  xl:left-96 absolute left-5 md:left-28 bottom-4  ">

            <button className="text-green-700  opacity-75 hover:opacity-100 " onClick={previous}>
                Back
            </button>
            <button className="btn_next z-50 w-28 rounded-2xl  text-white text-xl font-bold  bg-blue-700 py-1 " onClick={()=>{
                if(score!=11){
                    formData.score4=score
                    next()
                }else{
                    alert('Please chose a value!')
                }
                
            }}>
                Next
            </button>
        </div>

        </div>
    )
}

export default Step2
