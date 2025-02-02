interface SinhVien {
    maSV: string;
    tenSV: string;
}
  interface MonHoc {
    maMH: string;
    tenMH: string;
}
  function taoSinhVien(): SinhVien & MonHoc {
    let sinhVien: SinhVien & MonHoc = {
        maSV: "SV001",
        tenSV: "Thế Cường",
        maMH: "MATH001",
        tenMH: "Toán học",
    };
    return sinhVien;
}
let svMonHoc = taoSinhVien();
console.log(svMonHoc.maSV); // Kết quả: "SV001"
console.log(svMonHoc.tenSV); // Kết quả: "Thế Cường"
console.log(svMonHoc.maMH); // Kết quả: "MATH001"
console.log(svMonHoc.tenMH); // Kết quả: "Toán học"