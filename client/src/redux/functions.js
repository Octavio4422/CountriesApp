export default function orderorder(array, way){
    if(way === 'ASCENDENTE' || way === "DESCENDENTE" ){
        let response = array.sort((a, b) => {
            if (a.name < b.name) {
              return way === 'ASCENDENTE' ? -1 : 1;
            }
            if (a.name > b.name) {
              return way === 'ASCENDENTE' ? 1 : -1;
            }
            return 0;
          });
        return response
    }

    if(way === 'POPULATIONMX' || way === "PUPULATIONMN" ){
        let response = array.sort((a, b) => {
            if (a.population < b.population) {
              return way === 'POPULATIONMX' ? 1 : -1;
            }
            if (a.population > b.population) {
              return way === 'POPULATIONMX' ? -1 : 1;
            }
            return 0;
          });
        return response
    }
    else{
        way = way.charAt(0).toUpperCase() + way.slice(1).toLowerCase();
        return array.filter((c) => c.region === way)
    }
}