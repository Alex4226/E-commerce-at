const getDataObject = async () => {
    const serverResponse = await fetch(`https://fakestoreapi.com/products`);
    const data = await serverResponse.json();
    return data;
};

export const getRating = (x) => {
    if(x === Math.floor(x))
        return x + ".0";
    return x;
};

export const getPrice = (x) => {
    if(x === Math.floor(x))
        return x + ".00";
    if(x * 10 === Math.floor(x * 10))
        return x + "0";
    return x;
};


export default getDataObject;