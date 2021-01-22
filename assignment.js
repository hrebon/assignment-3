function kilometerToMeter(kilo){
    if(kilo < 0)
    {
        return 'wrong Input';
    }
    var meter = kilo * 1000;
    return meter; 
}
var resultForMeter = kilometerToMeter(10);
console.log(resultForMeter);

function budgetCalculator(watch,phone, laptop){
    if(watch<0)
    {
        return 'worng input';
    }
    else if(phone<0)
    {
        return 'wrong input';
    }
    else if(laptop<0)
    {
        return 'wrong input';
    }
    else
    {
        var totalmoneyWatch = watch * 50;
        var totalmoneyPhone = phone * 100;
        var totalmoneyLaptop = laptop * 500;
        var totalamount = totalmoneyWatch + totalmoneyPhone + totalmoneyLaptop;
        return totalamount; 
    }
}
var totalcost = budgetCalculator(1,1,1);
console.log(totalcost);


function hotelCost(day){
    if(day<0){
        return 'worng input';
    }
    else if(day<=10)
    {
        var cost = day * 100;
        return cost;
    }
    else if(day<=20)
    {
        var firstday = 10 * 100;
        var daytwo = day - 10;
        var anotherCost = daytwo * 80;
        var totalCost = anotherCost + firstday;
        return totalcost;
    }
    else
    {
        var firstday = 10 * 100;
        var secondday = 10 * 80; 
        var daythree = day - 20;
        var Costofdaytow = daythree * 50;
        var totalcostdaytow = firstday + secondday + Costofdaytow;
        return totalcostdaytow;
        
    }
}
var allday = hotelCost(21);
console.log(allday);

function megaFriend(names){
    var bigname = 0;
    for(var i=0;i<names.length;i++)
    {
        if(Number(names[i])){
            return 'worng output';
        }
        //var allfriends = names[i];
        //var friends = allfriends.length;
        if(names[i].length >= bigname) 
        {
            bigname = names[i].length;
            var largename = names[i];
            
        }        
    }
        return largename;
    
}

var names = ["Habibur","sakib Al hasan","Rahim","karima","Mirajul Islam"];
var friendname = megaFriend(names);
console.log(friendname);

