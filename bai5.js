// Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? (biết điểm trung bình là 5)

// Kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)

// Lọc ra các sinh viên xếp loại giỏi và in ra

// Tìm 1 sinh viên xếp loại giỏi

// Cộng cho mỗi sinh viên 1 điểm toán

// Thêm thuộc tính tổng điểm 3 môn

// Tính tổng điểm của các sinh viên

// Tính điểm trung bình của các sinh viên (làm tròn 2 chữ số thập phân)

// Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
const students = [
    {
        id: 1,
        name: "Dinh",
        toan: 5,
        ly: 6,
        hoa: 7
    },
    {
        id: 2,
        name: "Nam",
        toan: 10,
        ly: 8,
        hoa: 5,
    },
    {
        id: 3,
        name: "Tan",
        toan: 3,
        ly: 5,
        hoa: 5,
    },
    {
        id: 4,
        name: "Hung",
        toan: 9,
        ly: 7,
        hoa: 7,
    },
    {
        id: 5,
        name: "Tri",
        toan: 9,
        ly: 8,
        hoa: 9,
    },
    {
        id: 6,
        name: "Anh",
        toan: 9,
        ly: 10,
        hoa: 9,
    },
    {
        id: 7,
        name: "Binh",
        toan: 3,
        ly: 6,
        hoa: 9,
    }
];

function kiemTraDTB() {
    for (var sinhvien of students) {
        if (sinhvien.toan < 5 || sinhvien.ly < 5 || sinhvien.hoa < 5) {
            return false;
        }
    }
    return true;
};

function kiemTraXepLoai() {
    for (var sinhvien of students) {
        if (sinhvien.toan >= 8 && sinhvien.ly >= 8 && sinhvien.hoa >= 8) {
            return true;
        }
    }
    return false;
};

function locSV(arr) {
    var listStudents = [];
    for (const student of arr) {
        if ((student.toan >= 8 && student.ly >= 8 && student.hoa >= 8)) {
            listStudents.push(student);
        }
    }
    return listStudents;
}

function timSVGioi(arr) {
    var check = false;
    var listStudents = [];
    for (var student of arr) {
        if (student.toan >= 8 && student.ly >= 8 && student.hoa >= 8) {
            listStudents.push(student);
            check = true;
            break;
        }
    }
    if (check) {
        console.log('Sinh viên xếp loại giỏi:');
        for (var n of listStudents) {
            for (var key in n) {
                console.log(key + ' : ' + n[key]);
            }
        }
    } else {
        console.log('ko có sv giỏi nào');
    }

};

function congDiemToan(arr) {
    for (const student of arr) {
        student.toan < 10 ? student.toan++ : '';
    }
}

function tongDiem3Mon(arr) {
    for (var el of arr) {
        el.Tongdiem = el.toan + el.ly + el.hoa;
    }
}

function tongDiemSV(arr) {
    var sum = 0;
    for (var el of arr) {
        sum += el.Tongdiem;

    }
    console.log('Tổng điểm của các SV là : ' + sum);
}

function diemTB(arr) {
    for (var el of arr) {
        el.DiemTB = ((el.toan + el.ly + el.hoa) / 3).toFixed(2);
    }
}

function sxTangDan(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - i - 1; j++) {

            if (arr[j].Tongdiem > arr[j + 1].Tongdiem) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
// Hàm hiển thị danh sách sinh viên
function display(student) {
    console.log('=== DANH SÁCH SINH VIÊN ===');
    for (const el of student) {
        for (const key in el) {
            console.log(key + ": " + el[key]);
        }
        console.log("================");
    }
}
var menu = `=== QUẢN LÝ SINH VIÊN ===
1. kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
2. kiểm tra xem có sinh viên nào xếp loại giỏi không?
3. lọc ra các sinh viên xếp loại giỏi
4. tìm 1 sinh viên xếp loại giỏi
5. cộng cho mỗi sinh viên 1 điểm toán
6. thêm thuộc tính tổng điểm 3 môn
7. tính tổng điểm của các sinh viên
8. tính điểm trung bình của các sinh viên
9. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
0. Thoát

Nhập thao tác lựa chọn:`;
var flag = true;
do {
    var input = prompt(menu);
    switch (input) {
        case '1':
            if (kiemTraDTB(students)) {
                console.log('Tất cả Sv đều đủ điểm Tb');
            } else {
                console.log('Có SV chưa đủ diểm Tb')
            };
            break;
        case '2':
            kiemTraXepLoai(students)
            if (dem > 1) {
                console.log('có' + dem + ' sinh viên xếp loại giỏi');
            } else {
                console.log('không có sinh viên nào xếp loại giỏi');
            }
            break;
        case '3':
            display(locSV(students));

            break;
        case '4':
            timSVGioi(students);
            break;
        case '5':
            congDiemToan(students);
            display(students);
            break;
        case '6':
            tongDiem3Mon(students);
            display(students);
            break;
        case '7':
            tongDiemSV(students);
            break;
        case '8':
            diemTB(students);
            display(students);
            break;
        case '9':
            sxTangDan(students);
            display(students);
            break;
        case '0':
            console.log('Bạn đã thoát chương trình');
            flag = false;
            break;
        default:
            alert("Vui lòng nhập thao tác lựa chọn!");
    }
} while (flag);