// Khi chọn 1: Hiện thị tất cả sinh viên trong danh sách.
// Khi chọn 2: Nhập mới 1 sinh viên và thêm vào danh sách.
// Khi chọn 3: Sửa 1 sinh viên trong danh sách theo id nhập vào.
// Khi chọn 4: Xóa 1 sinh viên trong danh sách theo id nhập vào.

const students = [
    {
        id: 1,
        name: "Dinh",
        address: "hue"
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        address: "hue"
    },
    {
        id: 5,
        name: "Tri",
        address: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        address: "hue"
    },
    {
        id: 7,
        name: "Binh",
        address: "da nang"
    }
];
function xemDanhSach() {
    console.log('Danh sách sinh viên là: ');
    for (var el of students) {
        for (var key in el) {
            console.log(key + ' : ' + el[key]);
        }
        console.log("=========");

    }
};
function themSV() {
    var id = prompt("Nhập ID của sinh viên: ");
    var name = prompt("Nhập tên của sinh viên: ");
    var address = prompt("Nhập địa chỉ của sinh viên: ");
    var sinhVien = { id: id, name: name, address: address };
    students.push(sinhVien);
    console.log("Đã thêm sinh viên vào danh sách.");
};
function suaSV() {
    var idCanSua = prompt('Nhập ID của sinh viên cần sửa: ');
    var check = false;
    // for (var i = 0; i < students.length; i++) {
    //     if (students[i].id == idCanSua) {
    //         var tenMoi = prompt("Nhập tên mới của sinh viên:");
    //         var dcMoi = prompt("Nhập địa chỉ mới của sinh viên:");
    //         students[i].name = tenMoi;
    //         students[i].address = dcMoi;
    //         console.log("Đã sửa thông tin sinh viên.");
    //         check = true;
    //         break;
    //     }
    // }
    for (var sua of students) {
        if (sua.id == idCanSua) {
            var nameNew = prompt("Nhập tên mới của sinh viên: ", sua.name);
            var addressNew = prompt("Nhập địa chỉ mới của sinh viên: ", sua.address);
            sua.name = nameNew;
            sua.address = addressNew;
            console.log("Đã sửa thông tin sinh viên.");
            check = true;
            break;
        }
    }
    if (!check) {
        console.log("Không tìm thấy sinh viên trong danh sách.");
    }
};
function xoaSV() {
    var idCanXoa = prompt('Nhập ID của sinh viên cần xóa: ');
    var check = false;
    for (var i = 0; i < students.length; i++) {
        if (students[i].id == idCanXoa) {
            students.splice(i, 1);
            console.log("Đã xóa sinh viên khỏi danh sách.");
            check = true;
            break;
        }
    }
    if (!check) {
        console.log("Không tìm thấy sinh viên trong danh sách.");
    }
}

var menu = `== QUẢN LÝ SINH VIÊN ==
1. Xem danh sách sinh viên:
2. Thêm sinh viên:
3. Sửa sinh viên:
4. Xóa sinh viên:
5. Thoát.

Nhập thao tác lựa chọn:`;
var flag = true;
do {
    var input = prompt(menu);
    switch (input) {
        case '1':
            xemDanhSach();
            break;
        case '2':
            themSV();
            break;
        case '3':
            suaSV();
            break;
        case '4':
            xoaSV();
            break;
        case '5':
            console.log('Bạn đã thoát chương trình');
            flag = false;
            break;
        default:
            alert("Vui lòng nhập thao tác lựa chọn!");
    }
} while (flag);