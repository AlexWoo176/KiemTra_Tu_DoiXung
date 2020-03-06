function insertData() {
    let arr = [];
    let value = document.getElementById('inp_data').value;
    for (let i = value.length - 1; i >= 0; i--) {
        arr.push(value[i]);
    }
    if (checkFunction(arr)) {
        document.getElementById('display').innerHTML=value+" "+ "là 1 từ đối xứng";
    } else {
        document.getElementById('display').innerHTML=value+' '+"không phải là một từ dối xứng";
    }
}
function checkFunction(data) {
    let value = document.getElementById('inp_data').value;
    for (let i = 0; i < value.length; i++) {
        if (value[i] != data[i]) {
            return false;
        }
    }
    return  true;
}
