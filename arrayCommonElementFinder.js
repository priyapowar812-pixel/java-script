const fifthStd = ['priya','supriya','rahul','ramesh'];
const sixthStd = ['anita','rahul','suresh','priya'];

let len1 = fifthStd.length;
let len2 = sixthStd.length;

let commonElements = [];
for(let i =0; i<len1; i++)
{
    for (let j=0; j<len2; j++)
    {
        if(fifthStd[i] === sixthStd[j])
        {
            commonElements.push(fifthStd[i]);
        }
    }
}

console.log("Common elements between fifth and sixth standard are:", commonElements);