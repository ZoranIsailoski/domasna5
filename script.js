//Prva Zadaca

function LandscapeOrPortrait(width,height){
    if(width < height){
        return `This dimension is for a portrait`
    }
    else if(width > height){
        return `This dimension is for a landscape`
    };
}

console.log(LandscapeOrPortrait(1080, 1920));

//Vtora Zadaca

function SpeedLimits(speed){
    let PenaltyPoint = 0
    if(speed > 120){
        return `License suspended`
    }
    else if(speed > 50){
        if(speed+5){
            PenaltyPoint++
        }
        return `Speed limit Crossed, Penalty Points is ${PenaltyPoint}`
    }
    else (speed < 50);{
        return `Safe driving`
    };
}

console.log(SpeedLimits(65))


