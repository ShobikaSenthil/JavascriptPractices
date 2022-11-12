const promise1 = () =>
{
    return new Promise((resolve,reject) =>
    {
        resolve(1);
    })
}

const promise2 = () =>
{
   return new Promise((resolve,reject) =>
    {
        resolve(2);
    })
}
const promise3 = () =>
{
    return new Promise((resolve,reject) =>
    {
        resolve(3);
    })
}
const promise4 = () =>
{
    return new Promise((resolve,reject) =>
    {
        resolve(4);
    })
}
const promise5 = () =>
{
    return new Promise((resolve,reject) =>
    {
        resolve(5);
    })
}


// Promises using then and catch
promise1().then((data)=>
{
    console.log(data);
    promise2().then((data)=>
    {
        console.log(data);
        promise3().then((data)=>
        {
            console.log(data);
            promise4().then((data)=>
            {
                console.log(data);
                promise5().then((data)=>
                {
                    console.log(data);
                })
                .catch((err)=>
                {
                    console.log(err);
                })
            })
            .catch((err)=>
            {
                console.log(err);
            })
        })
        .catch((err)=>
        {
            console.log(err); 
        })
    })
    .catch((err)=>
    {
        console.log(err);
    })
})
.catch((err)=>
{
    console.log(err);
})

//Promise Array
const promiseArray = [promise1(),promise2(),promise3(),promise4(),promise5()];


// Promise All
Promise.all(promiseArray).then((data)=>
    {
        console.log("All");
    })
    .catch((err)=>
    {
        console.log("Not All");
    })

// Promise Any
// Promise.any(promiseArray).then((data)=>
// {
//     console.log("Any");
// }).catch((err)=>
// {
//     console.log("Not Any");
// })

// // Promise AllSettled
// Promise.allSettled(promiseArray).then((data)=>
// {
//     console.log("All settled");
// }).catch((err)=>
// {
//     console.log(err);
// })


