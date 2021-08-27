// A. Problem Solving (30’) (Nhiều cách giải càng tốt)
// 1. Cho một mảng các chuỗi, viết chương trình trả về mảng mới chứa các chuỗi có độ dài lớn nhất.
let arr = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];
let getMaxLengthArray = (ipar) => {
let maxLength = ipar[0].length;
for (let item of ipar) {
if (item.length > maxLength) {
        maxLength = item.length;
}
}
  
return ipar.filter((item) => item.length === maxLength);
};
  
  
  console.log(getMaxLengthArray(arr));

// 2. Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
// Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

let arr123 = [60, 40, 55, 75, 64];
let alternatingSum = (arr) => {
let r1 = [];
let r2 = [];
  
for (let i = 0; i < arr.length; i += 1) {
if (i % 2 === 0) {
r1.push(arr[i]);
} else {
r2.push(arr[i]);
}}
return [
r1.reduce((a, b) => a + b, 0),
r2.reduce((a, b) => a + b, 0)
];
};
  
let arrInput = [60, 40, 55, 75, 64];
console.log(alternatingSum(arr123));

// B. Code Challenge (60’)

const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; (1)
const hexBtn = document.querySelector('.hexBtn'); (2)
const bodyBcg = document.querySelector('body'); (3)
const hex = document.querySelector('.hex'); (4)

hexBtn.addEventListener('click', getHex); (5)

function getHex() {
    let hexCol = '#'; (6)
    for(let i = 0; i < 6; i++) { (7)
        let random = Math.floor(Math.random()*hexNumbers.length); (8)
        hexCol += hexNumbers[random]; (9)
    }
    bodyBcg.style.backgroundColor = hexCol; (10)
    hex.innerHTML = hexCol; (11)
}