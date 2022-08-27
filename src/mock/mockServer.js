import Mock from "mockjs"
/*
* floors and recommends modules
* */
import floors from "./floors.json"
import  recommends from "./recommends.json"

//recommends port
Mock.mock('/mock/recommends',{
    code:200,
    data:recommends
})
//floors port
Mock.mock('/mock/floors',{
    code:200,
    data:floors
})
