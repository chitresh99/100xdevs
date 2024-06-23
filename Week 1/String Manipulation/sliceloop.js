function cutit(str, startindex, endindex) {
    let newstr = " ";
    for (let i = 0; i < str.length; i++) {
        if (i >= startindex && i < endindex) {
            newstr = newstr + str[i];
        }
    }
    return newstr;
}

const value = "chitresh";
console.log(cutit(value,2,5));