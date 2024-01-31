import { useState ,createContext,useContext} from "react"
const languages=['js','python']
const MainSection=(props)=>{
    const {lg,setIndex}=props;
    const handleClick=()=>{  
          setIndex((lg)=>(lg+1)%languages.length);
    }
    return(<><div><p>fav language:{languages[lg]}</p>
<button onClick={handleClick}>toggle language</button></div></>)}

//step1: create context
const MyContext=createContext();
//step2: create provider
const MyProvider=({children})=>{
    const [param, setParam]=useState(0);
    //step3
    const handleParam=()=>{
        setParam((lgIndex)=>(lgIndex+1)%languages.length);
    }
    return(<MyContext.Provider value={{param , handleParam}}>{children}</MyContext.Provider>)}
//step4
    const MainSection2=()=>{
           const { param, handleParam } = useContext(MyContext);
           return(<><div><p>fav language-Context-api version:{languages[param]}</p>
           <button onClick={handleParam}>toggle language-Context API version</button></div></>)}

const  ContextAPISample=()=>{
        //step5
        const [langIndex,setLangIndex]=useState(0)
        return(<><MainSection lg={langIndex} setIndex={setLangIndex}/>
        <MyProvider>
        <MainSection2 />
        </MyProvider></>)}
export default ContextAPISample;