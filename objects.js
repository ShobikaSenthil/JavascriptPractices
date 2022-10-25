const obj={
    1:97,
    name:'Shobika',
    age:21,
    city:"Chennai",
};

console.log("Before adding new properties:");
console.log(obj);



//Adding 

obj.country="India";

const key="mobile";
obj[key]=9898456789;

console.log("After adding new properties:");
console.log(obj);


//Replacing
console.log("After replacing new value:");
obj.city="Coimbatore";
console.log(obj);


//deleting
console.log("After deleting mobile key");
delete obj.mobile;
console.log(obj);


//printing the key 1
console.log(obj[1]);
console.log(obj["age"]);
