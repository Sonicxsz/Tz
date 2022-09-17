export function transformData(data){
    let count = 0
    const newData = [];
    for(let i = 0; i < data.length; i++){
        if(data[i].specializedSubjects.length === 10){
          newData.push(data[i])
          count += 1
          
        }
        if(count === 5){
          return newData
        } 
    }
    
  }

