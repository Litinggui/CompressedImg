import { ref } from 'vue'

let oldSize = ref<number | undefined>(0)
let newSize = ref<number | undefined>(0)

const myFile = (event: any):void => {
    const file:any = event.target.files[0]
    const imgUrl:string = URL.createObjectURL(file)
    const myImg:any = document.createElement('img')
    
    oldSize.value = parseFloat(( (file?.size || 0) / 1024).toFixed(3))
    myImg.src = imgUrl
    myImg.width = 200
    document.getElementById('myImg')?.append(myImg)
    compressed(imgUrl, 0.1, "image/jpeg")
  }
const compressed = (imgUrl:string ,proportion:number, type:string):void => {
    const img = new Image()
    const canvas = document.createElement('canvas')
    const myImg:any = document.createElement('img')
    let compressedImg = ''
    let ctx = canvas.getContext("2d")

    img.src = imgUrl
    // 图片加载异步回调
    img.onload = function (e) {
        canvas.width = img.width
        canvas.height = img.height
        // canvas 绘制图片
        ctx?.drawImage(img, 0, 0, img.width, img.height);
        // 获取canvas生成图片的路径
        compressedImg = canvas.toDataURL(type, proportion)
        // 获取canvas生成图片的Bolb对象
        canvas?.toBlob((blob) => {
        newSize.value = parseFloat(( (blob?.size || 0) / 1024).toFixed(3)) 
        }, type, proportion)
        myImg.src = compressedImg
        myImg.width = 200
        document.getElementById('compressedImg')?.append(myImg)
    }
}

export {oldSize, newSize, myFile, compressed}