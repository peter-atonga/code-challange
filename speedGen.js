//I have the defined the variables which remain fixed
const speedLim=70;
const kmPerDemirit=5;


function speedChecker(){
    let speed =prompt('ENTER YOUR CURRENT SPEED');
    speed=Number(speed);

    if(isNaN(speed) || speed<0){
        console.log('WARNING !!!! BE SERIOUS AND INPUT THE CORRECT SPEED');
        alert('WARNING !!!! BE SERIOUS AND INPUT THE CORRECT SPEED')
        return;
    }
    if (speed<=speedLim){
        console.log('OK');
        alert('OK')
    }
    else{
        calcDemerits(speed);
    }

}
function calcDemerits(speed){
    let speedExceed=speed-speedLim;
    let demeritPoints=Math.ceil(speedExceed/kmPerDemirit);
    if(demeritPoints<12){
        console.log(`You have : ${demeritPoints} POINTS`);
        alert(` You have the : ${demeritPoints} POINTS`);
    }
    else{
        console.log(`LICENCE SUSPENDED ,POINTS: ${demeritPoints}`);
        alert(`LICENCE SUSPENDED ,POINTS: ${demeritPoints}`);
    }
}

speedChecker();