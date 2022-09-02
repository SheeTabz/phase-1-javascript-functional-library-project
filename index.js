function myEach(collection, callback) {
    if(Array.isArray(collection)){
        for(let item of collection ){
            callback(item);
          
        }
    }else{
        for(let item in collection){
            callback(item)
        }
    }
return collection; 


}

// function myMap(collection, callback){
//     let arrCollection = []
//     let objCollection = {}
//     if(Array.isArray(collection)){
//         for(item of collection){
//             arrCollection.push( callback(item))
//             return arrCollection
//         }
//     }
//     else{
//         for(item in collection){
//             objCollection[item] = callback(item)
//             return objCollection
//         }
//     }

// }


class Student{
    constructor(name, age, year){
        this.name = name;
        this.age= age
        this.year = year;
        this.favFood = []
    }
    calc = () => {
        return `${this.name} was born in the year ${this.year}`}

    addFood = (food) => {
        return this.favFood.push(food)
    }  
    loopThroughFood = () => {
        this.favFood.forEach(food => {
            console.log(`${this.name} loves ${food}`)})
    }
}
let she = new Student("Tabz", 20, "2022")
she.addFood("Ugali")
she.addFood("Rice")
she.addFood("Chicken")
she.loopThroughFood()
console.log(she.favFood)
console.log(she.calc())