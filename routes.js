const express = require('express');
const router = express.Router();

router.get('/getAllIpAddress',(req,res) => {
    const inputString = req.query.input;
    const len = inputString.length;
    if(len > 12 || isNaN(inputString))
    res.status(500).json({
        message: "Error",
        "data": "Enter a valid input string"
    });

    const result = [];

    //Considering valid ip into 4 parts like p1.p2.p3.p4
    for(let i=1; i<4 && i<len ; i++){
        let p1 = inputString.substring(0,i);
        if(!isValidPart(p1))
        continue;
        for(let j=1; j<4 && (i+j)<len ; j++){
            let p2 = inputString.substring(i,i+j);
            if(!isValidPart(p2))
            continue;
            for(let k=1; k<4 && (i+j+k)<len ; k++){
                let p3 = inputString.substring(i+j,i+j+k);
                let p4 = inputString.substring(i+j+k);
                if(!isValidPart(p3) || !isValidPart(p4))
                continue;
                result.push(`${p1}.${p2}.${p3}.${p4}`);
            }
        }
    }
    res.status(200).json({
        message: "Success",
        "data": result
    })
});

//Checking if the part of the ip address is valid or not
const isValidPart = (part) => {
    if(part.length > 3  || (part.length> 1 && part.startsWith('0')))
    return false
    val = Number(part);
    return (val >= 0 && val <=255);
}


module.exports = router;
