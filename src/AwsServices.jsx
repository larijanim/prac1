import React,{ useState,useEffect } from "react";

const AwsServices=()=>{
    
   const data=[
    {
    id: "u123",
    title: "Amazon EC2",
    description: "Resizable compute capacity in the Cloud.",
    link: "https://aws.amazon.com/ec2/",
    type: "12-month-free"
    },
    {
    id: "u124",
    title: "Amazon S3",
    description: "Secure, durable, and scalable object storage infrastructure.",
    link: "https://aws.amazon.com/s3/",
    type: "12-month-free"
    },
    // More objects here...
    ]; 
    const debouncex=(f,d)=>{
        let timeoutid;
        return (...arg)=>{
          clearTimeout(timeoutid);
          timeoutid=setTimeout(()=>{f.apply(this,arg)},d)
        }
    }
    

    const CardItem = (z) => {  return <div style={{
        display: 'flex', /* Ensure card content is flex-aligned */
        flexDirection: 'column', /* Arrange content vertically */
        padding: '1rem',
        margin: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        /* ...other card styles */
      }}><p>{z.props.title}</p><p>{z.props.id}</p><p>{z.props.description}</p><a href={z.props.link}>Link</a></div> };
    
    const [filter, setFilter]=useState("");
    const [awsInfo,setAwsInfo]=useState(data);
    
    useEffect(()=>{
        setAwsInfo(data);
        if (filter){
            setAwsInfo(awsInfo);
        }
    
 
  },[filter]);

  const debouncFilter=debouncex((newFilter)=>{setFilter(newFilter);},500);
 const filterHandler=(event)=>{
   // debouncFilter(event.target.value);
   setFilter(event.target.value);
    console.log(filter);
    const x=data.filter((item)=>item.title.toLowerCase().includes(filter.toLocaleLowerCase()))
    setAwsInfo(x);
 };

    return(<><input type='text' value={filter} onChange={(e)=>filterHandler(e)}/>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>{awsInfo && awsInfo.map((item)=>(<React.Fragment key={item.id}><CardItem props={item}/> </React.Fragment>))}</div>


</>)}
export default AwsServices;
/*At AWS we have a set of services available for customers to start using them without spending any money!

Let’s imagine we have information regarding these services authored in different environments but in the end,
we have a list of APIs that expose that information in JSON format.

For instance, this is an example of some AWS services available for free during a 12-month period.
*/
/*
The assignment is to create a UI component capable of rendering those items in cards and allow filtering capabilities.
*/