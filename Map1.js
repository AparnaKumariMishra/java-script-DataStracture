let map=new Map();
let maxcount=7;
let onecount=0,twocount=0,threecount=0,fourcount=0,fivecount=0,sixcount=0;

bool=true;
while(bool)
{
    let ran=Math.floor(Math.random()*6+1)
    switch(ran)
    {
        case 1:
            if(onecount==maxcount)
            {
                bool=false;
            }
            else
            {
                onecount++;
            }
            break;
        case 2:
            if(twocount==maxcount)
            {
                bool=false;
            }
            else
            {
                twocount++;
            }
            break;
        case 3:
            if(threecount==maxcount)
            {
                bool=false;
            }
            else
            {
                threecount++;
            }
            break;
        case 4:
            if(fourcount==maxcount)
            {
                bool=false;
            }
            else
            {
                fourcount++;
            }
            break;
        case 5:
            if(fivecount==maxcount)
            {
                bool=false;
            }
            else
            {
                fivecount++;
            }
            break;
        case 6:
            if(sixcount==maxcount)
            {
                bool=false;
            }
            else
            {
                sixcount++;
            }
            break;
    }
}
map.set(1,onecount);
map.set(2,twocount);
map.set(3,threecount);
map.set(4,fourcount);
map.set(5,fivecount);
map.set(6,sixcount);

let mint=Math.min(...map.values());
let maxt=Math.max(...map.values());

function getKey(value) 
{
    return [...map].find(([key, val]) => val == value)
}

console.log("Maximum Times Is:"+ getKey(maxt));
console.log("Minimum Times Is:"+ getKey(mint));
