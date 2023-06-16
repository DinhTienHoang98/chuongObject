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
        hoa: 4,
    },
    {
        id: 7,
        name: "Binh",
        toan: 3,
        ly: 6,
        hoa: 4,
    }
];

function kiemTraDTB() {
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.toan < 5 || student.ly < 5 || student.hoa < 5) {
            return false;
        }
    }
    return true;
};

function kiemTraXepLoai() {
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.toan >= 8 && student.ly >= 8 && student.hoa >= 8) {
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
    console.log('=== DANH SÁCH SINH VIÊN XẾP LOẠI GI ===');
    for (const el of listStudents) {
        for (const key in el) {
            console.log(key + ": " + el[key]);
        }
        console.log("================");
    }
}

function timSVGioi(arr) {
    var check = false;
    for (var student of arr) {
        if (student.toan >= 8 && student.ly >= 8 && student.hoa >= 8) {
            check = true;
            break;
        }
    }
    if (check) {
        console.log('Sinh viên xếp loại giỏi:');
        console.log(student);
    } else {
        console.log('ko có sv giỏi nào');
    }
};

function congDiemToan(arr) {
    for (var n of arr) {
        n.toan++;
    }
    console.log('=== DANH SÁCH SINH VIÊN ===');
    for (const el of arr) {
        for (const key in el) {
            console.log(key + ": " + el[key]);
        }
        console.log("================");
    }
}

function tongDiem3Mon(arr) {
    for (var el of arr) {
        el.Tongdiem = el.toan + el.ly + el.hoa;
    }
    console.log('=== DANH SÁCH SINH VIÊN ===');
    for (var el of arr) {
        for (var key in el) {
            console.log(key + ": " + el[key]);
        }
        console.log("================");
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
    console.log('=== DANH SÁCH SINH VIÊN ===');
    for (var el of arr) {
        for (var key in el) {
            console.log(key + ": " + el[key]);
        }
        console.log("================");
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
    console.log('=== DANH SÁCH SINH VIÊN SAU KHI SẮP XẾP ===');
    for (var el of arr) {
        for (var key in el) {
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
                console.log('Có SV chua đủ diểm Tb')
            };
            break;
        case '2':
            if (kiemTraXepLoai(students)) {
                console.log('có sinh viên xếp loại giỏi');
            } else {
                console.log('không có sinh viên nào xếp loại giỏi');
            }
            break;
        case '3':
            locSV(students);
            break;
        case '4':
            timSVGioi(students);
            break;
        case '5':
            congDiemToan(students);
            break;
        case '6':
            tongDiem3Mon(students);
            break;
        case '7':
            tongDiemSV(students);
            break;
        case '8':
            diemTB(students);
            break;
        case '9':
            sxTangDan(students);
            break;
        case '0':
            console.log('Bạn đã thoát chương trình');
            flag = false;
            break;
        default:
            alert("Vui lòng nhập thao tác lựa chọn!");
    }
} while (flag);