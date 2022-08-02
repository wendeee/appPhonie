let inputByUser = document.querySelector('.telInput')

let logoDiv = document.querySelector('.logo')

let iLogo = document.querySelector('.logo')

let newLogo = new Image()


let valueOfInput;


// Network initials
 const networkInitials = {
    mtnPrefix : ['0803', '0806', '0703', '0706', '0810', '0813', '0814', '0816', '0903', '0906'], 
    airtelPrefix : ['0802', '0808', '0812', '0701', '0902', '0907', '0901', '0708' ],
    gloPrefix : ['0805', '0807', '0811', '0705', '0815', '0905'],
    smilePrefix : ['0702'],
    _9mobilePrefix : ['0809', '0817', '0818', '0908', '0909']
};

 //Logos
const logos = {
    mtn : "images/mtn.png",
    airtel: "images/airtel.png",
    glo: "images/glo.png",
    smile: 'images/smile.png',
    _9mobile: 'images/9mobile.png'
}


/*
Add an event listener that triggers when length
of input is equal to the network prefix.
Display the logo according to the network the number matches.
*/
inputByUser.addEventListener('input',(e) => {
   valueOfInput = e.target.value;
   if(valueOfInput.length> 3){
    logoDiv.style.display = 'flex'
    iterateNetworkInitials()
   }
   else if(valueOfInput.length < 4){
    logoDiv.style.display = 'none'
   }   
})


//Loop through the network object and access the values of each property

function iterateNetworkInitials(){
    for(let i in networkInitials){
        for(let j of networkInitials[i]){
         if(j.includes(valueOfInput))
            {
                appendNetworkLogo(i)
            }
        }
      }
}


//Append network logo accordingly
function appendNetworkLogo(networkPrefix){
    
    if(networkPrefix==='mtnPrefix'){newLogo.src = logos.mtn; iLogo.append(newLogo)}
    else if(networkPrefix==='airtelPrefix'){newLogo.src = logos.airtel; iLogo.append(newLogo)}
    else if(networkPrefix === 'gloPrefix'){newLogo.src = logos.glo; iLogo.append(newLogo)}
    else if(networkPrefix === 'smilePrefix'){newLogo.src = logos.smile; iLogo.append(newLogo)}
    else if(networkPrefix === '_9mobilePrefix'){newLogo.src = logos._9mobile; iLogo.append(newLogo)}
    return
}
   
