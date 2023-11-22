export function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}

export function getCurrentDay() {
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  const currentDayName = daysOfWeek[currentDayIndex];
  return currentDayName;
}
export function getDataTime() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Tháng được đánh số từ 0-11, cộng thêm 1 và đảm bảo đủ 2 chữ số.
  const day = String(currentDate.getDate()).padStart(2, "0"); // Đảm bảo đủ 2 chữ số.

  const formattedTime = `${year}/${month}/${day}`;
  return formattedTime;
}
export function getTime() {
  const currentDate = new Date();
  let hour = currentDate.getHours();
  const minute = String(currentDate.getMinutes()).padStart(2, "0");
  const formattedTime = `${hour}:${minute}`; // Đảm bảo đủ 2 chữ số.
  return formattedTime;
}
export const validateDate = (_, value) => {
  if (value && !/^(\d{4})\/(\d{2})\/(\d{2})$/.test(value)) {
    return Promise.reject(
      new Error("Vui lòng nhập định dạng ngày tháng YYYY/MM/DD!")
    );
  }
  return Promise.resolve();
};

//Tình Tổng Lợi Nhuận Và Gộp Hai Thời Gian Lại Với Nhau Để Vẽ Biểu Đồ
export const sumArrayDate = (dataDocAll) => {
  const dataAll = {};
  dataDocAll.map((dataMap) =>
    dataMap.oderProducts.map((dataMap2) => {
      dataMap2.oders.map((dataMap3) => {
        // Kiểm tra nếu ngày đã tồn tại trong đối tượng dataAll hay chưa
        if (dataAll[dataMap2.date] === undefined) {
          // Nếu không tồn tại, tạo một entry mới với profit ban đầu
          dataAll[dataMap2.date] = dataMap3.profit;
        } else {
          // Nếu tồn tại, cộng profit vào tổng profit hiện tại
          dataAll[dataMap2.date] += dataMap3.profit;
        }
      });
    })
  );
  const convertData = Object.keys(dataAll);
  return convertData.map((dataMap) => {
    return {
      year: dataMap,
      value: Math.round(dataAll[dataMap]),
    };
  });
};

