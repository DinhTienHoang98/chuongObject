// Khi chọn 1: Nhập đội bóng tham gia World Cup.
// Khi chọn 2: Hiển thị thông tin các đội bóng đã nhập
// Khi chọn 3: Nhập vào id và hiển thị thông tin đội bóng có id đó. Nếu không có thì thông báo "Không tìm thấy"
// Khi chọn 4: Nhập vào id và xóa thông tin đội bóng có id đó. Nếu không có thì thông báo "Không tìm thấy đội bóng nào để xóa".
// Khi chọn 0: Thoát khỏi hệ thống và in ra dòng chữ: "Goodbye!"

const danhSachDoiBong = [
    {
        id: 1,
        ten: 'Brazin',
        huanLuyenVien: 'Tite',
        soLanVoDich: 15
    },
    {
        id: 2,
        ten: 'Đức',
        huanLuyenVien: 'Hansi Flick',
        soLanVoDich: 10
    },
    {
        id: 3,
        ten: 'Pháp',
        huanLuyenVien: 'Deschamps',
        soLanVoDich: 12
    }
];

function nhapDoiBong() {
    var id = prompt("Nhập ID của đội bóng: ");
    var ten = prompt("Nhập tên của đội bóng: ");
    var huanLuyenVien = prompt("Nhập huấn luyện viên của đội bóng: ");
    var soLanVoDich = prompt('Nhập số lần đội bóng vô địch: ');
    var doibong = { id: id, ten: ten, huanLuyenVien: huanLuyenVien, soLanVoDich: soLanVoDich }
    danhSachDoiBong.push(doibong);
    console.log("Đã thêm đội bóng vào danh sách.");
};
function hienThiDoiBong() {
    console.log('Danh sách đội bóng là: ');
    for (var el of danhSachDoiBong) {
        for (var key in el) {
            console.log(key + ' : ' + el[key]);
        }
        console.log('===================');
    }
};
function timDoiBong() {
    var idCanTim = prompt('Nhập ID của đội bóng cần tìm: ');
    var check = false;
    for (var el of danhSachDoiBong) {
        if (el.id == idCanTim) {
            console.log('Thông tin đội bóng bạn cần tìm với id ' + idCanTim + ' là: ');
            console.log('Tên: ' + el.ten);
            console.log('Huấn luyện viên: ' + el.huanLuyenVien);
            console.log('Số lần vô địch: ' + el.soLanVoDich);
            check = true;
            break;
        }
    }
    if (!check) {
        alert("Không tìm thấy đội bóng trong danh sách.");
    }
};
function xoaDoiBong() {
    var idCanXoa = prompt('Nhập ID của đội bóng cần xóa: ');
    var check = false;
    for (var i = 0; i < danhSachDoiBong.length; i++) {
        if (danhSachDoiBong[i].id == idCanXoa) {
            danhSachDoiBong.splice(i, 1);
            console.log("Đã xóa đội bóng khỏi danh sách.");
            check = true;
            break;
        }
    }
    if (!check) {
        console.log("Không tìm thấy đội bóng trong danh sách.");
    }
}

var menu = `== Tham dự World Cup ==
1. Nhập dữ liệu
2. Xuất dữ liệu
3. Tìm thông tin
4. Xóa thông tin đội bóng
5. Thoát !!!

Nhập thao tác lựa chọn:`;
var flag = true;
do {
    var input = prompt(menu);
    switch (input) {
        case '1':
            nhapDoiBong();
            break;
        case '2':
            hienThiDoiBong();
            break;
        case '3':
            timDoiBong();
            break;
        case '4':
            xoaDoiBong();
            break;
        case '5':
            console.log('Bạn đã thoát chương trình');
            flag = false;
            break;
        default:
            alert("Vui lòng nhập thao tác lựa chọn!");
    }
} while (flag);