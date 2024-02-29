
let english = document.getElementById("eng");
let math = document.getElementById("math");
let dataStructure = document.getElementById("d-structure");
let compProgramming = document.getElementById("comp-p");
let webProgramming = document.getElementById("w-prog");
let average= document.getElementById("ave-grade");
let totals;
 




english.addEventListener('keyup', function(){
     totals =Number(english.value) + Number(math.value) + Number(dataStructure.value) + Number(compProgramming.value) +Number(webProgramming.value);

    document.getElementById("total").value=totals;
    average.value = totals/5;
    
})

webProgramming.addEventListener('keyup', function(){
    totals =Number(english.value) + Number(math.value) + Number(dataStructure.value) + Number(compProgramming.value) +Number(webProgramming.value);

    document.getElementById("total").value=totals;
    average.value = totals/5;
    
})

compProgramming.addEventListener('keyup', function(){
     totals =Number(english.value) + Number(math.value) + Number(dataStructure.value) + Number(compProgramming.value) +Number(webProgramming.value);

    document.getElementById("total").value=totals;
    average.value = totals/5;
    
})

math.addEventListener('keyup', function(){
    totals =Number(english.value) + Number(math.value) + Number(dataStructure.value) + Number(compProgramming.value) +Number(webProgramming.value);

    document.getElementById("total").value=totals;
    average.value = totals/5;
})

dataStructure.addEventListener('keyup', function(){
    totals =Number(english.value) + Number(math.value) + Number(dataStructure.value) + Number(compProgramming.value) +Number(webProgramming.value);

    document.getElementById("total").value=totals;
    average.value = totals/5;
    
})



