
export default function seasonOrder(array, season){
    let response;
    if(season === 'ALL'){
       response = array.filter((c) => c.Activities.length > 0)
       if(response){
           return response
       }else{
           return [];
       }
    }

    response = []
    let parsedSeason = season.toLowerCase();
    
    array.forEach((c) =>{ 
        c.Activities.forEach((a) => {
            if(a.season === parsedSeason){
                response.push(c)
            }
        })
    })

    if(!response.length){
        return []
    }else{
        return response
    }
}