const searchBar = document.getElementById("searchil");
const searchBar2 = document.getElementById("searchilce")
const button = document.querySelector(".searchBut")
const ikis = document.querySelector(".ikis")
let nobetci5 = document.querySelector(".nobetci5")
let nobetci2 = document.querySelector(".nobetci2")
let nobetci1 = document.querySelector(".nobetci1")
let nobetci3 = document.querySelector(".nobetci3")
let nobetci6 = document.querySelector(".nobetci6")

let nobetci4 = document.querySelector(".nobetci4")
let ili = document.querySelector(".ili")
let ipi = document.querySelector(".ipi")

let ilkbir = document.querySelector(".ilkbir")

let ilkiki = document.querySelector(".ilkiki")

let ilkuc = document.querySelector(".ilkuc")

let ikincibir = document.querySelector(".ikincibir")

let ikinciiki = document.querySelector(".ikinciiki")

let ikinciuc = document.querySelector(".ikinciuc")


let aa = document.querySelector(".aa")
const pho1 = document.querySelector(".pho1")
const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(searchBar2.value,searchBar.value)
 
}
const setq = () => {
    getResult(searchBar2.value,searchBar.value)
}
const getResult = (sehirName,ilName) => {
    fetch(`https://api.collectapi.com/health/dutyPharmacy?ilce=${sehirName}&il=${ilName}`, {
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 79j6gJJfmWpkG17t4Os5AO:2SOCxw83rRJwBexqkwEbA4"
        }}).then(res => res.json())
        .then(displayResult)
      
}

const displayResult = (sonuc) => {
    let name1 = document.querySelector('.name1');
    let name2 = document.querySelector('.name2');
    let name3 = document.querySelector('.name3');
    let name4 = document.querySelector('.name4');
    let name5 = document.querySelector('.name5');
    let name6 = document.querySelector('.name6');
    let dist1 = document.querySelector('.dist1');
    let address1 = document.querySelector('.address1');
    let phone1 = document.querySelector('.pho1');
    let dist2 = document.querySelector('.dist2');
    let address2 = document.querySelector('.address2');
    let phone2 = document.querySelector('.pho2');
    let dist3 = document.querySelector('.dist3');
    let address3 = document.querySelector('.address3');
    let phone3 = document.querySelector('.pho3');
    let dist4 = document.querySelector('.dist4');
    let address4 = document.querySelector('.address4');
    let phone4 = document.querySelector('.pho4');
    let dist5 = document.querySelector('.dist5');
    let address5 = document.querySelector('.address5');
    let phone5 = document.querySelector('.pho5');
    let dist6 = document.querySelector('.dist6');
    let address6 = document.querySelector('.address6');
    let phone6 = document.querySelector('.pho6');
    console.log(sonuc)
    if(sonuc.result.length == 1){
        nobetci1.style.display = "none"
        nobetci3.style.display = "none"
         nobetci2.style.backgroundColor = "#ffe4c4"
        name2.innerHTML = `${sonuc.result[0].name.split(" ")[0]} Eczanesi`     
        dist2.innerHTML = `${sonuc.result[0].dist}, ${searchBar.value}`
        address2.innerHTML = `${sonuc.result[0].address}`
        phone2.innerHTML = `+90 ${sonuc.result[0].phone}`
        searchBar2.value = ""
        searchBar.value = ""
        phone2.href = `tel:+90${sonuc.result[0].phone}`
           
    }else if(sonuc.result.length == 2){
     

         
        nobetci2.style.display  = "none"
        aa.style.width = "45vw"
        ikis.style.width = "45vw"
        name1.innerHTML = `${sonuc.result[0].name.split(" ")[0]} Eczanesi`     
        dist1.innerHTML = `${sonuc.result[0].dist}, ${searchBar.value}`
        address1.innerHTML = `${sonuc.result[0].address}`
        phone1.innerHTML = `+90 ${sonuc.result[0].phone}`
        name3.innerHTML = `${sonuc.result[1].name.split(" ")[0]} Eczanesi`
        dist3.innerHTML = `${sonuc.result[1].dist}, ${searchBar.value}`
        address3.innerHTML = `${sonuc.result[1].address}`
        phone3.innerHTML = `+90 ${sonuc.result[1].phone}`
        searchBar2.value = ""
        searchBar.value = ""
        phone1.href = `tel:+90${sonuc.result[0].phone}`
            phone3.href = `tel:+90${sonuc.result[1].phone}`
           

    }else if(sonuc.result.length == 3){
        name1.innerHTML = `${sonuc.result[0].name.split(" ")[0]} Eczanesi`     
        dist1.innerHTML = `${sonuc.result[0].dist}, ${searchBar.value}`
        address1.innerHTML = `${sonuc.result[0].address}`
        phone1.innerHTML = `+90 ${sonuc.result[0].phone}`
        name2.innerHTML = `${sonuc.result[1].name.split(" ")[0]} Eczanesi`
        dist2.innerHTML = `${sonuc.result[1].dist}, ${searchBar.value}`
        address2.innerHTML = `${sonuc.result[1].address}`
        phone2.innerHTML = `+90 ${sonuc.result[1].phone}`
        name3.innerHTML = `${sonuc.result[2].name.split(" ")[0]} Eczanesi`
        dist3.innerHTML = `${sonuc.result[2].dist}, ${searchBar.value}`
        address3.innerHTML = `${sonuc.result[2].address}`
        phone3.innerHTML = `+90 ${sonuc.result[2].phone}`
        searchBar2.value = ""
        searchBar.value = ""
        phone1.href = `tel:+90${sonuc.result[0].phone}`
            phone2.href = `tel:+90${sonuc.result[1].phone}`
            phone3.href = `tel:+90${sonuc.result[2].phone}`
           
    }else if(sonuc.result.length == 4){
        ili.style.backgroundColor = "#ffe4c4"
        name1.innerHTML = `${sonuc.result[0].name.split(" ")[0]} Eczanesi`     
        dist1.innerHTML = `${sonuc.result[0].dist}, ${searchBar.value}`
        address1.innerHTML = `${sonuc.result[0].address}`
        phone1.innerHTML = `+90 ${sonuc.result[0].phone}`
        name2.innerHTML = `${sonuc.result[1].name.split(" ")[0]} Eczanesi`
        dist2.innerHTML = `${sonuc.result[1].dist}, ${searchBar.value}`
        address2.innerHTML = `${sonuc.result[1].address}`
        phone2.innerHTML = `+90 ${sonuc.result[1].phone}`
        name3.innerHTML = `${sonuc.result[2].name.split(" ")[0]} Eczanesi`
        dist3.innerHTML = `${sonuc.result[2].dist}, ${searchBar.value}`
        address3.innerHTML = `${sonuc.result[2].address}`
        phone3.innerHTML = `+90 ${sonuc.result[2].phone}`
        name4.innerHTML = `${sonuc.result[3].name.split(" ")[0]} Eczanesi`
        dist4.innerHTML = `${sonuc.result[3].dist}, ${searchBar.value}`
        address4.innerHTML = `${sonuc.result[3].address}`
         
         
         
        phone4.innerHTML = `+90 ${sonuc.result[3].phone}`
            phone1.href = `tel:+90${sonuc.result[0].phone}`
            phone2.href = `tel:+90${sonuc.result[1].phone}`
            phone3.href = `tel:+90${sonuc.result[2].phone}`
            phone4.href = `tel:+90${sonuc.result[3].phone}`
            searchBar2.value = ""
        searchBar.value = ""
        }else if(sonuc.result.length == 5){
     nobetci5.style.display = "none"
     ili.style.width = "45vw"
     ipi.style.width = "45vw"
             ikis.style.backgroundColor = "#ffe4c4" 
        ili.style.backgroundColor = "#ffe4c4" 
        ipi.style.backgroundColor = "#ffe4c4" 

        name1.innerHTML = `${sonuc.result[0].name.split(" ")[0]} Eczanesi`     
        dist1.innerHTML = `${sonuc.result[0].dist}, ${searchBar.value}`
        address1.innerHTML = `${sonuc.result[0].address}`
        phone1.innerHTML = `+90 ${sonuc.result[0].phone}`
        name2.innerHTML = `${sonuc.result[1].name.split(" ")[0]} Eczanesi`
        dist2.innerHTML = `${sonuc.result[1].dist}, ${searchBar.value}`
        address2.innerHTML = `${sonuc.result[1].address}`
        phone2.innerHTML = `+90 ${sonuc.result[1].phone}`
        name3.innerHTML = `${sonuc.result[2].name.split(" ")[0]} Eczanesi`
        dist3.innerHTML = `${sonuc.result[2].dist}, ${searchBar.value}`
        address3.innerHTML = `${sonuc.result[2].address}`
        phone3.innerHTML = `+90 ${sonuc.result[2].phone}`
        name4.innerHTML = `${sonuc.result[3].name.split(" ")[0]} Eczanesi`
        dist4.innerHTML = `${sonuc.result[3].dist}, ${searchBar.value}`
        address4.innerHTML = `${sonuc.result[3].address}`
        phone4.innerHTML = `+90 ${sonuc.result[3].phone}`
        name6.innerHTML = `${sonuc.result[4].name.split(" ")[0]} Eczanesi`
        dist6.innerHTML = `${sonuc.result[4].dist}, ${searchBar.value}`
        address6.innerHTML = `${sonuc.result[4].address}`
        phone6.innerHTML = `+90 ${sonuc.result[4].phone}`

        searchBar2.value = ""
        searchBar.value = ""
        phone1.href = `tel:+90${sonuc.result[0].phone}`
            phone2.href = `tel:+90${sonuc.result[1].phone}`
            phone3.href = `tel:+90${sonuc.result[2].phone}`
            phone4.href = `tel:+90${sonuc.result[3].phone}`
        phone6.href = `tel:+90${sonuc.result[4].phone}`

    }else if(sonuc.result.length == 6){
        ikis.style.backgroundColor = "#ffe4c4" 
        ikincibir.style.backgroundColor= "#ffe4c4" 
        ikinciiki.style.backgroundColor = "#ffe4c4" 
        ikinciuc.style.backgroundColor= "#ffe4c4" 
        name1.innerHTML = `${sonuc.result[0].name.split(" ")[0]} Eczanesi`     
        dist1.innerHTML = `${sonuc.result[0].dist}, ${searchBar.value}`
        address1.innerHTML = `${sonuc.result[0].address}`
        phone1.innerHTML = `+90 ${sonuc.result[0].phone}`
        name2.innerHTML = `${sonuc.result[1].name.split(" ")[0]} Eczanesi`
        dist2.innerHTML = `${sonuc.result[1].dist}, ${searchBar.value}`
        address2.innerHTML = `${sonuc.result[1].address}`
        phone2.innerHTML = `+90 ${sonuc.result[1].phone}`
        name3.innerHTML = `${sonuc.result[2].name.split(" ")[0]} Eczanesi`
        dist3.innerHTML = `${sonuc.result[2].dist}, ${searchBar.value}`
        address3.innerHTML = `${sonuc.result[2].address}`
        phone3.innerHTML = `+90 ${sonuc.result[2].phone}`
        name4.innerHTML = `${sonuc.result[3].name.split(" ")[0]} Eczanesi`
        dist4.innerHTML = `${sonuc.result[3].dist}, ${searchBar.value}`
        address4.innerHTML = `${sonuc.result[3].address}`
        phone4.innerHTML = `+90 ${sonuc.result[3].phone}`
        name5.innerHTML = `${sonuc.result[4].name.split(" ")[0]} Eczanesi`
        dist5.innerHTML = `${sonuc.result[4].dist}, ${searchBar.value}`
        address5.innerHTML = `${sonuc.result[4].address}`
        phone5.innerHTML = `+90 ${sonuc.result[4].phone}`
        name6.innerHTML = `${sonuc.result[5].name.split(" ")[0]} Eczanesi`
        dist6.innerHTML = `${sonuc.result[5].dist}, ${searchBar.value}`
        address6.innerHTML = `${sonuc.result[5].address}`
        phone6.innerHTML = `+90 ${sonuc.result[5].phone}`
        searchBar2.value = ""
        searchBar.value = ""    
        phone1.href = `tel:+90${sonuc.result[0].phone}`
            phone2.href = `tel:+90${sonuc.result[1].phone}`
            phone3.href = `tel:+90${sonuc.result[2].phone}`
            phone4.href = `tel:+90${sonuc.result[3].phone}`
            phone5.href = `tel:+90${sonuc.result[4].phone}`
            phone6.href = `tel:+90${sonuc.result[5].phone}`
    }
    
}

searchBar2.addEventListener("keypress",setQuery)
button.addEventListener("click",setq)

   