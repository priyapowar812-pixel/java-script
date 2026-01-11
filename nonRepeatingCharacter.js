const gfg = "geeksforgeeks";
const len = gfg.length;

// function nonRepeatingChar(gfg) {
//     for(let i=0; i< len; i++){
//         let a =gfg.slice(i+1 , len)
//         if(!a.includes(gfg[i]))
//             return gfg[i];
//     }
//     return null;
// }



function nonRepeatingChar(gfg) {
    let charOccur = {};
    for(let ch of gfg){
        if(charOccur.hasOwnProperty(ch)){
            charOccur[ch] +=1;
        } else {
            charOccur[ch] = 1;
        }
    }

    // for(let ch of gfg){
    //     if(charOccur[ch] === 1){
    //         return ch;
    //     }
    // }
    // return null;


}



console.log("first nonRepeatingCharacter is" , nonRepeatingChar(gfg));
