// Promise Async and Await
const P1 = async () => {
    return new Promise((resolve, reject) => {
      resolve(1);
    });
  };

  const P2 = async () => {
    return new Promise((resolve, reject) => {
      resolve(2);
    });
  };
  const P3 = async () => {
    return new Promise((resolve, reject) => {
      resolve(3);
    });
  };
  const P4 = async () => {
    return new Promise((resolve, reject) => {
      resolve(4);
    });
  };

  const P5 = async () => {
    return new Promise((resolve, reject) => {
      resolve(5);
    });
  };

const runPromises = async() =>
{
    const p1 = await P1().catch((err)=> null);
    console.log(p1);
    if(!p1)
    {
        return "P1 failed";
    }

    const p2 = await P2().catch((err)=> null);
    console.log(p2);
    if(!p2)
    {
        return "P2 failed";
    }

    const p3 = await P3().catch((err)=> null);
    console.log(p3);
    if(!p3)
    {
        return "P3 failed";
    }

    const p4 = await P4().catch((err)=> null);
    console.log(p4);
    if(!p4)
    {
        return "P4 failed";
    }

    const p5 = await P5().catch((err)=> null);
    console.log(p5);
    if(!p5)
    {
        return "P5 failed";
    }
    return "Done";
}
runPromises();


const promiseArray = [P1(),P2(),P3(),P4(),P5()];


const promiseAll = async() => {
    const result1 = await Promise.all([promiseArray]).catch((err)=>console.log(err));
    console.log(result1);
}

const promiseAny = async() => {
    const result2 = await Promise.any([promiseArray]).catch((err)=>console.log(err));
    console.log(result2);
}

const promiseAllSettled = async() => {
    const result3= await Promise.allSettled([promiseArray]).catch((err)=>console.log(err));
    console.log(result3);
}

promiseAll();
// promiseAny();
// promiseAllSettled();