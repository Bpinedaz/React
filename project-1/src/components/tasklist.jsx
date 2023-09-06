import { ListCard } from "./listcard";

export const Tasklist = (props) =>
{
  const {List}= props;

 const handleClikTime=(listname)=>{
 console.log(`check time clicked from from ${listname}`)

  }
    return (
     <ul>    
        {List.map((list)=>
        (<ListCard name={list.name} onchektimeclick={handleClikTime}/>
        ))}   
                
    </ul>
    )
   
}