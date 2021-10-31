import React , {useEffect} from "react";
import { useForm, useStep } from "react-hooks-helper";




import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import Step10 from "./Step10";
import Step11 from "./Step11";
import Step12 from "./Step12";
import Step13 from "./Step13";
import Step14 from "./Step14";
import Step15 from "./Step15";
import Step16 from "./Step16";
import Step17 from "./Step17";
import Step18 from "./Step18";


const steps = [
    { id: "step1" },
    { id: "step2" },
    { id: "step3" },
    { id: "step4" },
    { id: "step5" },
    { id: "step6" },
    { id: "step7" },
    { id: "step8" },
    { id: "step9" },
    { id: "step10" },
    { id: "step11" },
    { id: "step12" },
    { id: "step13" }, 
    { id: "step14" },
    { id: "step15" },
    { id: "step16" },
    { id: "step17" },
    { id: "step18" },
 
    
];



const devis = ({ service , name , email}) => {


     useEffect(() => {
       const test = ()=>{
           console.log(name , email)
       }
       test()
         
     }, [])

    const defaultData = {
        activity: "",
        sector:"",
        email: "",
        firstname:"",
        lastname:"",
        phone:"",
        score1: "",
        score2: "",
        score3: "",
        score4: "",
        score5: "",
        score6: "",
        score7: "",
        score8: "",
        score9: "",
        score10: "",
        score11: "",
        score12: "",
        score13: "",
        score14: "",
        GlobalComplexity:"",
        Pricingmaturity:"",
        hr : "",
        tool:"",
        data:"",
        organization : "",
        process : ""

        
    };
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;

   

    const props = { formData, setForm, navigation , service };


    switch (id) {
        case "step1":
            return <Step9 {...props } />;
        case "step2":
            return <Step18 {...props } />;
        case "step3":
            return <Step2 {...props} />;
        case "step4":
            return <Step3 {...props} />;


      case "step5":
          return <Step4 {...props} />;
        
      case "step6":
          return <Step5 {...props} />;

     case "step7":
            return <Step6 {...props} />;

    case "step8":
           return <Step7 {...props} />;


    case "step9":
            return <Step8 {...props} />;


    case "step10":
          return <Step9 {...props} />;
          case "step11":
            return <Step10 {...props} />; 
            case "step12":
            return <Step11 {...props} />; 
            case "step13":
            return <Step12 {...props} />; 
            case "step14":
            return <Step13 {...props} />; 
            case "step15":
            return <Step14 {...props} />;
            case "step16":
            return <Step15 {...props} />;


            case "step17":
            return <Step16 {...props} />;

            case "step18":
            return <Step17 {...props} />;
            

            

        default:
            return null;
    }
};

export default devis;
