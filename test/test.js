const array = ["test","test2"]
const obj = {
    name:"test",
}
obj.test = () => console.log(array)
console.log(obj.name) 
obj.test()