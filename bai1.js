// Bài tập 1: Viết chương trình mô phỏng từ điển Anh Việt
// Khi chọn 1: Nhập thông tin các từ (gồm 2 thuộc tính: từ tiếng Anh và nghĩa tiếng Việt) từ bàn phím.
// Khi chọn 2: Hiển thị thông tin các từ đã nhập.
// Khi chọn 3: Nhập vào một từ tiếng Anh bất kỳ, tìm kiếm trong từ điển, nếu có thì in nghĩa tiếng Việt của từ đó.
//             Nếu không có thì in ra không tìm thấy.
// Khi chọn 4: Thoát khỏi chương trình và in ra dòng chữ "Cảm ơn đã sử dụng từ điển!"


function nhapTu() {
    var ELG = prompt('Nhập từ tiếng Anh: ');
    var check = false;
    for (var n of tuDien) {
        if (n.English === ELG) {
            check = true;
            break;
        }
    }

    if (!check) {
        var VIE = prompt('Nhập từ tiếng việt: ');
        var Ob = {
            English: ELG,
            VietNam: VIE
        }
        tuDien.push(Ob);
        alert("Đã thêm từ vào từ điển.");
    } else {
        alert('Đã có từ trong từ điển')
    }
};
function hienThiTu() {
    if (tuDien.length === 0) {
        console.log('Từ điển trống');
    } else {
        console.log("Các từ có trong từ điển:");
        for (var tu of tuDien) {
            console.log(tu.English + ': ' + tu.VietNam);
        }
    }
};
function dichTu() {
    var tuCanDich = prompt('Nhập từ cần dịch: ');
    var check = false;
    for (var tu of tuDien) {
        if (tu.English === tuCanDich) {
            console.log("Nghĩa tiếng Việt của từ \"" + tu.English + "\" là: " + tu.VietNam);
            check = true;
            break;
        }
    }
    if (!check) {
        console.log("Không tìm thấy từ trong từ điển.");
    }
};
var tuDien = [];
var menu = `== TỪ ĐIỂN ANH VIỆT ==
1. Thêm từ:
2. Xuất từ:
3. Dịch từ:
4. Thoát:

Nhập thao tác lựa chọn:`;
var flag = true;
do {
    var input = prompt(menu);
    switch (input) {
        case '1':
            nhapTu();
            break;
        case '2':
            hienThiTu();
            break;
        case '3':
            dichTu();
            break;
        case '4':
            console.log("Cám ơn đã sử dụng từ điển!");
            flag = false;
            break;
        default:
            alert("Vui lòng nhập thao tác lựa chọn!");
    }
} while (flag);