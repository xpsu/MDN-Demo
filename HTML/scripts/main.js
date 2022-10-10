// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'Hello World!'

// 点击图片切换图片路径
let myImage = document.querySelector('img')
myImage.addEventListener('click', function() {
  let mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/firefox2.jpg')
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png')
  }
})

// 设置个性欢迎语
let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
  let myName = prompt('请输入你的名字')
  if (!myName) {
    setUserName()
  } else {
    localStorage.setItem('name', myName)
    myHeading.textContent = `${myName} ，欢迎您`
  }
}

if (!localStorage.getItem('name')) {
  setUserName()
} else {
  let storeName = localStorage.getItem('name')
  myHeading.textContent = `${storeName} ，欢迎您`
}

myButton.addEventListener('click', function () {
  setUserName()
})
