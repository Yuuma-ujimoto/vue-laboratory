const MasterData = [
    1,
]

// リロードすると追加された値は破棄されるー＞Vuexと似た挙動
export const addData = function () {

    let Data = JSON.parse(localStorage.getItem("Data"))
    if (!Data){
        Data = MasterData
    }
    console.log(Data)
    Data.push(Data[Data.length - 1] + 1)
    localStorage.setItem("Data",JSON.stringify(Data))
}

export const getData = function (){
    return localStorage.getItem("Data")
}