export const ListCard = (props)=>
{    const {name,onchektimeclick}=props;
    function handleClik()
    {        console.log(`time for ${name}`)
              onchektimeclick(name)
    }

    return(

        <ul>
            <div>
            <h3>{name} <button 
            onClick={handleClik}>  
            Edit</button>
            <button 
            onClick={handleClik}>  
            Delete</button></h3>
            </div>
            
        </ul>
  




    )




}