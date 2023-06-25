const images = ["1.jpg", "2.jpg", "3.jpg"]; // 랜덤으로 바꾸고 싶은 이미지 배열

const chosenImage = images[Math.floor(Math.random() * images.length)]; // 랜덤으로 이미지 배열 선택
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.style.background = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = "cover";

