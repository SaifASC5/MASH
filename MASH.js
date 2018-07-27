function mash(){
    return "You will live in a "  + getHome() + ", and you will have " + getChildrenCount() +  "kids!";

}
console.log(mash());

function getHome(){
   const places = ["mansion", "apartment", "Shack", "House"];
   const randomvalue = Math.floor(Math.random() * 4);
   return places[randomvalue]; 
}

console.log(getHome());  

function getChildrenCount(){
    const num = Math.random();
    const temp100 = num * 100
    const final = Math.floor(temp100)
    console.log(final);
}

getChildrenCount()