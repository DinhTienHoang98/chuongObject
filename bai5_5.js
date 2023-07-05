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

// Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? (5 điểm)
function kiemTraDiemTrungBinh() {
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.toan < 5 || student.ly < 5 || student.hoa < 5) {
            return false;
        }
    }
    return true;
}

// Kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)
function kiemTraXepLoaiGioi() {
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.toan >= 8 && student.ly >= 8 && student.hoa >= 8) {
            return true;
        }
    }
    return false;
}

// Lọc ra các sinh viên xếp loại giỏi và in ra
function locSinhVienXepLoaiGioi(arr) {
    var listStudents = [];
    for (const std of arr) {
        if ((std.toan >= 8 && std.ly >= 8 && std.hoa >= 8)) {
            listStudents.push(std);
        }
    }
    console.log(listStudents);
}

// Tìm 1 sinh viên xếp loại giỏi
function timSinhVienXepLoaiGioi() {
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.toan >= 8 && student.ly >= 8 && student.hoa >= 8) {
            console.log('Sinh viên xếp loại giỏi:');
            console.log(student);
            return;
        }
    }
    console.log('Không tìm thấy sinh viên xếp loại giỏi.');
}

// Cộng cho mỗi sinh viên 1 điểm toán
function congDiemToan() {
    for (let i = 0; i < students.length; i++) {
        students[i].toan += 1;
    }

    console.log('Đã cộng 1 điểm toán cho mỗi sinh viên.');
    console.log(students);
}

// Thêm thuộc tính tổng điểm 3 môn
function themThuocTinhTongDiem() {
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        student.tongDiem = student.toan + student.ly + student.hoa;
    }

    console.log('Đã thêm thuộc tính tổng điểm cho mỗi sinh viên.');
    console.log(students);
}

// Tính tổng điểm của các sinh viên
function tinhTongDiem() {
    let tongDiem = 0;

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        tongDiem += student.toan + student.ly + student.hoa;
    }

    console.log('Tổng điểm của các sinh viên là:', tongDiem);
}

// Tính điểm trung bình của các sinh viên (làm tròn 2 chữ số thập phân)
function tinhDiemTrungBinh() {
    let tongDiem = 0;

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        tongDiem += student.toan + student.ly + student.hoa;
    }

    const diemTrungBinh = (tongDiem / (students.length * 3)).toFixed(2);

    console.log('Điểm trung bình của các sinh viên là:', diemTrungBinh);
}

// Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
function sapXepTheoTongDiem() {
    students.sort(function (a, b) {
        return (a.toan + a.ly + a.hoa) - (b.toan + b.ly + b.hoa);
    });

    console.log('Danh sách sinh viên đã được sắp xếp theo tổng điểm tăng dần:');
    console.log(students);
}

// Chọn chức năng
var menu = `=== QUẢN LÝ SINH VIÊN ===
    'Chọn một chức năng:'
    '1. Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?'
    '2. Kiểm tra xem có sinh viên nào xếp loại giỏi không?'
    '3. Lọc ra các sinh viên xếp loại giỏi và in ra'
    '4. Tìm 1 sinh viên xếp loại giỏi'
    '5. Cộng cho mỗi sinh viên 1 điểm toán'
    '6. Thêm thuộc tính tổng điểm 3 môn'
    '7. Tính tổng điểm của các sinh viên'
    '8. Tính điểm trung bình của các sinh viên (làm tròn 2 chữ số thập phân'
    '9. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần'
    '0. Thoát khỏi chương trình'

    Nhập thao tác lựa chọn:`;

var flag = true;
do {
    const chon = parseInt(prompt(menu));
    switch (chon) {
        case 1:
            const coDiemTrungBinh = kiemTraDiemTrungBinh();
            console.log('Tất cả sinh viên có các môn trên điểm trung bình:', coDiemTrungBinh);
            break;
        case 2:
            const coSinhVienXepLoaiGioi = kiemTraXepLoaiGioi();
            console.log('Có sinh viên xếp loại giỏi:', coSinhVienXepLoaiGioi);
            break;
        case 3:
            locSinhVienXepLoaiGioi(students);
            break;
        case 4:
            timSinhVienXepLoaiGioi();
            break;
        case 5:
            congDiemToan();
            break;
        case 6:
            themThuocTinhTongDiem();
            break;
        case 7:
            tinhTongDiem();
            break;
        case 8:
            tinhDiemTrungBinh();
            break;
        case 9:
            sapXepTheoTongDiem();
            break;
        case 0:
            console.log('Goodbye!');
            flag = false;
            break;
        default:
            console.log('Lựa chọn không hợp lệ. Vui lòng chọn lại.');
    }
} while (flag);
