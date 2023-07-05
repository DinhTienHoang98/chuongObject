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

showMenu();
function showMenu() {
    const menu = `=== QUẢN LÝ SINH VIÊN ===
0. làm sạch giao diện cosole.log
1. kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
2. kiểm tra xem có sinh viên nào xếp loại giỏi không?
3. lọc ra các sinh viên xếp loại giỏi
4. tìm 1 sinh viên xếp loại giỏi
5. cộng cho mỗi sinh viên 1 điểm toán
6. thêm thuộc tính tổng điểm 3 môn
7. tính tổng điểm của các sinh viên
8. tính điểm trung bình của các sinh viên
9. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
10. Thoát

Nhập thao tác lựa chọn:`;
    var options = prompt(menu);
    main(options);
}

function main(options) {
    switch (options) {
        case '0':
            console.clear();
            showMenu();
            break;
        case '1':
            if (isUpNormal(students)) {
                console.log('Tất cả sinh viên đều có các môn trên điểm trung bình');
            } else {
                console.log('Không phải tất cả sinh viên đều có các môn trên điểm trung bình');
            }
            showMenu();
            break;
        case '2':
            if (haveGoodStudent(students)) {
                console.log('có sinh viên xếp loại giỏi');
            } else {
                console.log('không có sinh viên nào xếp loại giỏi');
            }
            showMenu();
            break;
        case '3':
            display(filterGoodStudents(students));
            showMenu();
            break;
        case '4':
            console.log(findGoodStudent(students));
            showMenu();
            break;
        case '5':
            addOneMath(students);
            display(students);
            showMenu();
            break;
        case '6':
            addPropertySum(students);
            display(students);
            showMenu();
            break;
        case '7':
            console.log("Tổng điểm của các sinh viên: ", countTotalScore(students));
            showMenu();
            break;
        case '8':
            console.log("Điểm trung bình của các sinh viên: ", (countTotalScore(students) / students.length).toFixed(2));
            showMenu();
            break;
        case '9':
            sortStudents(students);
            display(students);
            showMenu();
            break;
        case '10':
            exit();
            break;
        default:
            alert("Vui lòng nhập đúng thao tác lựa chọn!");
            showMenu();
    }
}

// 1. Hàm kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? (biết điểm trung bình là 5)
function isUpNormal(arrStudents) {
    for (const student of arrStudents) {
        if (!(student.toan >= 5 && student.ly >= 5 && student.hoa >= 5)) {
            return false;
        }
    }
    return true;
}

// 2. Hàm kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)
function haveGoodStudent(arrStudents) {
    for (const student of arrStudents) {
        if ((student.toan >= 8 && student.ly >= 8 && student.hoa >= 8)) {
            return true;
        }
    }
    return false;
}

// 3. Hàm lọc ra các sinh viên xếp loại giỏi
function filterGoodStudents(arrStudents) {
    var listStudents = [];
    for (const student of arrStudents) {
        if ((student.toan >= 8 && student.ly >= 8 && student.hoa >= 8)) {
            listStudents.push(student);
        }
    }
    return listStudents;
}

// 4. Hàm tìm 1 sinh viên xếp loại giỏi
function findGoodStudent(arrStudents) {
    for (const student of arrStudents) {
        if ((student.toan >= 8 && student.ly >= 8 && student.hoa >= 8)) {
            return student;
        }
    }
}

// 5. Hàm cộng cho mỗi sinh viên 1 điểm toán
function addOneMath(arrStudents) {
    for (const student of arrStudents) {
        student.toan < 10 ? student.toan += 1 : '';
    }
}

// 6. Hàm thêm thuộc tính tổng điểm 3 môn
function addPropertySum(arrStudents) {
    for (const student of arrStudents) {
        student.sum = student.toan + student.ly + student.hoa;
    }
}

// 7. Hàm tính tổng điểm của các sinh viên
function countTotalScore(arrStudents) {
    var sum = 0;
    for (const student of arrStudents) {
        sum += student.sum;
    }
    return sum;
}

//9. Hàm sắp xếp danh sách sinh viên theo tổng điểm tăng dần
function sortStudents(arrStudents) {

    var size = arrStudents.length;

    for (var i = 0; i < size - 1; i++) {
        for (var j = 0; j < size - i - 1; j++) {
            if (arrStudents[j].sum > arrStudents[j + 1].sum) {
                var temp = arrStudents[j];
                arrStudents[j] = arrStudents[j + 1];
                arrStudents[j + 1] = temp;
            }
        }
    }
}

// 10. Thoát
function exit() {
    console.log('Good bye!!!');
}

// Hàm hiển thị danh sách sinh viên
function display(arrStudents) {
    console.log('=== DANH SÁCH SINH VIÊN ===');
    for (const el of arrStudents) {
        for (const key in el) {
            console.log(key + ": " + el[key]);
        }
        console.log("================");
    }
}