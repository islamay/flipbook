
const widthRatio = 21
const heightRatio = 29.7

let n = 1
let width = widthRatio
let height = heightRatio

while (width < window.innerWidth && height < window.innerHeight) {
    width = widthRatio * n
    height = heightRatio * n
    n++
}

width = widthRatio * (n - 2)
height = heightRatio * (n - 2)

$('#flipbook').turn({
    display: 'single',
    width,
    height
})