let prComments = [
    {name : "Suyog", comment : "needs work"},
    {name : "Anuja", comment : "needs work"},
    {name : "Suyog", comment : "approved"},
    {name : "Tatiana", comment : "needs work"},
    {name : "Mahesh", comment : "needs work"},
    {name : "Arjun", comment : "not specified"},
    {name : "Suresh", comment : "approved"}
]

function isApproved(prComments) {
   let status = groupByUser(prComments);
    let keys = Object.keys(status);
    let count = 0;
    for( let key of keys) {
        if(status[key] === "approved") {
            count++
        }
    }
    if(count >= 2) {
        return true;
    }else {
        return false;
    }


}

function groupByUser(prComments) {
    let approvalStatus = {};

    for( let comment of prComments) {
        approvalStatus[comment.name] = comment.comment;
    }
    return approvalStatus;
}

console.log(isApproved(prComments));