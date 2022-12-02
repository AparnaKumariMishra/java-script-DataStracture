MAX_COUNT  = 50;
count = 0;
let JanCount = 0,FebCount = 0,MarchCount = 0,AprilCount = 0,MayCount = 0,JuneCount = 0,JulyCount = 0,AugustCount = 0,SeptCount = 0,OctCount = 0,NovCount = 0,DecCount = 0;
while(true)
{
        if(count == MAX_COUNT)
        {
            break;
        }
        let randomBirthMonth = Math.floor(Math.random() * 12 + 1);
        switch (randomBirthMonth) 
        {
            case 1:
                JanCount++;
                break;
            case 2:
                FebCount++;
                break;
            case 3:
                MarchCount++;
                break;
            case 4:
                AprilCount++;
                break;
            case 5:
                MayCount++;
                break;
            case 6:
                JuneCount++;
                break;
            case 7:
                JulyCount++;
                break;
            case 8:
                AugustCount++;
                break;
            case 9:
                SeptCount++;
                break;
            case 10:
                OctCount++;
                break;
            case 11:
                NovCount++;
                break;
            case 12:
                DecCount++;
                break;
            default:
                break;
        }
        count++;
    }
    let MapOfBirhDayMonths = new Map();
    MapOfBirhDayMonths.set(1,JanCount);
    MapOfBirhDayMonths.set(2,FebCount);
    MapOfBirhDayMonths.set(3,MarchCount);
    MapOfBirhDayMonths.set(4,AprilCount);
    MapOfBirhDayMonths.set(5,MayCount);
    MapOfBirhDayMonths.set(6,JuneCount);
    MapOfBirhDayMonths.set(7,JulyCount);
    MapOfBirhDayMonths.set(8,AugustCount);
    MapOfBirhDayMonths.set(9,SeptCount);
    MapOfBirhDayMonths.set(10,OctCount);
    MapOfBirhDayMonths.set(11,NovCount);
    MapOfBirhDayMonths.set(12,DecCount);

    console.log(MapOfBirhDayMonths);
