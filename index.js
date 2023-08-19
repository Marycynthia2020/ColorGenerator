const colorInput = document.getElementById("color-input")
const colorMode = document.getElementById("color-mode")
const count = document.getElementById('count')
const getColorBtn = document.getElementById("get-color") 
const colorDiv = document.getElementById("color-div")

getColorBtn.addEventListener('click', getColorScheme)

function getColorScheme() {
    
    let colorHtml = ""
    let hexValue = colorInput.value.slice(1)
    if(count.value < 7 && count.value) {
        fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${colorMode.value}&count=${count.value}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.colors)
        for(color of data.colors) {
           colorHtml += `
                <div class="color-hex-div">
                    <img  src ="${color.image.bare}" / >
                    <p>${color.hex.value}</p>
                </div>
            ` 
        }
        colorDiv.innerHTML = colorHtml
        count.value = ""
    })
        
    } else {
        count.value = ''
    }    
}

