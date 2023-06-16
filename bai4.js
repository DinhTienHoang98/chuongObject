// Khi chọn 1: Nhập 1 quân bài và thêm vào danh sách
// Khi chọn 2: Nhập mảng các quân bài và thêm vào danh sách
// Khi chọn 3: Sắp xếp các quân bài theo hệ số tăng dần
// Khi chọn 4: Sắp xếp các quân bài theo hệ số giảm dần
// Khi chọn 5: Hiển thị danh sách các quân bài
// Khi chọn 0: Thoát khỏi hệ thống và in ra dòng chữ: "Goodbye!"

const danhSachQuanBai = [
    {
        id: 1,
        name: 'Ba bích', // Tên quân bài, ví dụ: Năm cơ, Sáu bích...
        exp: 3, //Hệ số quân bài (từ 1 đến 13)
        point: 1 // Điểm của quân bài (từ 1 đến 4)
    },
    {
        id: 2,
        name: 'Năm rô',
        exp: 5,
        point: 3
    },
    {
        id: 3,
        name: 'Bốn cơ',
        exp: 4,
        point: 4
    }
];
function nhapQuanbai() {
    var ID = prompt('Nhập Id');
    var check = false;
    for (var key of danhSachQuanBai) {
        if (key.id == ID) {
            check = true;
            break;
        }
    }
    if (!check) {
        var name = prompt('Nhập tên quân bài');
        var exp = prompt('Nhập exp');
        var point = prompt('Nhập point');
        var bien = { id: ID, name: name, exp: exp, point: point };
        danhSachQuanBai.push(bien);
        console.log('Thêm quân bài thành công');
    } else {
        alert('Id đã có trong danh sách ');
    }
}
function nhapMangQB() {
    var soluong = prompt('Nhập số lượng mảng quân bài');
    for (var i = 1; i <= soluong; i++) {
        alert('Nhập thông tin cho quân bài thứ: ' + i)
        var id = prompt(`Nhập id quân bài`)
        var name = prompt(`Nhập tên quân bài`);
        var exp = prompt(`Nhập hệ số quân bài`);
        var point = prompt(`Nhập point quân bài`);
        var bien = { id: id, name: name, exp: exp, point: point };
        danhSachQuanBai.push(bien);
        console.log('Thêm quân bài thành công');
    }
}

function sxTangDan() {
    var len = danhSachQuanBai.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (danhSachQuanBai[j].exp > danhSachQuanBai[j + 1].exp) {

                var temp = danhSachQuanBai[j];
                danhSachQuanBai[j] = danhSachQuanBai[j + 1];
                danhSachQuanBai[j + 1] = temp;
            }
        }
    }
    console.log('Danh sách quân bài đã được sắp xếp theo hệ số tăng dần !');
};

function sxGiamDan() {
    var len = danhSachQuanBai.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (danhSachQuanBai[j].exp < danhSachQuanBai[j + 1].exp) {
                var temp = danhSachQuanBai[j];
                danhSachQuanBai[j] = danhSachQuanBai[j + 1];
                danhSachQuanBai[j + 1] = temp;
            }
        }
    }
    console.log('Danh sách quân bài đã được sắp xếp theo hệ số giảm dần !');
}
function hienThi() {
    for (var el of danhSachQuanBai) {
        for (var key in el) {
            console.log(key + ' : ' + el[key]);
        }
        console.log('============');
    }
}
var menu = `== CHƯƠNG TRÌNH ==
1. Nhập 1 quân bài
2. Nhập mảng các quân bài
3. Sắp xếp các quân bài theo hệ số tăng dần
4. Sắp xếp các quân bài theo hệ số giảm dần
5. Hiển thị danh sách các quân bài
0. Thoát !!!

Nhập thao tác lựa chọn:`;
var flag = true;
do {
    var input = prompt(menu);
    switch (input) {
        case '1':
            nhapQuanbai();
            break;
        case '2':
            nhapMangQB();
            break;
        case '3':
            sxTangDan();
            break;
        case '4':
            sxGiamDan();
            break;
        case '5':
            hienThi();
            break;
        case '0':
            console.log('Bạn đã thoát chương trình');
            flag = false;
            break;
        default:
            alert("Vui lòng nhập thao tác lựa chọn!");
    }
} while (flag);