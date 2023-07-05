// Khai báo mảng lưu trữ các từ
let tuDien = [];

// Hàm để thêm từ vào từ điển
function themTu() {
    let tuAnh = prompt("Nhập từ tiếng Anh:");
    let nghiaViet = prompt("Nhập nghĩa tiếng Việt:");
    let tu = { tuAnh: tuAnh, nghiaViet: nghiaViet };
    tuDien.push(tu);
    console.log("Đã thêm từ vào từ điển.");
}

// Hàm để hiển thị tất cả các từ trong từ điển
function hienThiTu() {
    if (tuDien.length === 0) {
        console.log("Từ điển trống.");
    } else {
        console.log("Các từ có trong từ điển:");
        for (let tu of tuDien) {
            console.log(tu.tuAnh + ": " + tu.nghiaViet);
        }
    }
}

// Hàm để tìm kiếm từ trong từ điển
function timKiemTu() {
    let tuCanTim = prompt("Nhập từ tiếng Anh cần tìm:");
    let found = false;
    for (let tu of tuDien) {
        if (tu.tuAnh === tuCanTim) {
            console.log("Nghĩa tiếng Việt của từ \"" + tu.tuAnh + "\" là: " + tu.nghiaViet);
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("Không tìm thấy từ trong từ điển.");
    }
}

// Hàm chính để chạy chương trình
function main() {
    while (true) {
        console.log("----- TỪ ĐIỂN ANH-VIỆT -----");
        console.log("1. Thêm từ");
        console.log("2. Hiển thị từ");
        console.log("3. Tìm kiếm từ");
        console.log("4. Thoát");
        let luaChon = prompt("Nhập lựa chọn của bạn:");
        if (luaChon === "1") {
            themTu();
        } else if (luaChon === "2") {
            hienThiTu();
        } else if (luaChon === "3") {
            timKiemTu();
        } else if (luaChon === "4") {
            console.log("Cảm ơn đã sử dụng từ điển!");
            break;
        } else {
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    }
}

// Gọi hàm chính để chạy chương trình
main();
