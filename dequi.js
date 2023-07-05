// 1. Xác định điểm dừng
// 2. Logic handle => Tạo ra điểm dừng

function coutDown(number) {
    if (number > 0) {
        console.log(number);
        return coutDown(number - 1);
    }
    return number;
};
// coutDown(5);
// Tạo 1 function loop
function loop(start, end, cb) {
    if (start < end) {
        cb(start);
        return loop(start + 1, end, cb);
    }
}
Array = ['hoang', 'thanh', 'chau'];
loop(0, Array.length, function (index) {
    console.log(Array[index]);
});
// hàm tính giai thừa 4 (4*3*2*1)
// cách 1 :
function giaiThua(number) {
    var output = 1;
    for (var i = number; i > 0; i--) {
        output = output * i;
    }
    return output;
}
console.log(giaiThua(5));

// cách 2 :  dùng đệ qui
function giaiThua1(number) {
    if (number > 0) {
        return number * giaiThua1(number - 1);
    }
    return 1;
}
console.log(giaiThua1(5));