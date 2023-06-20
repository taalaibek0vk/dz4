// 1
const button = document.querySelector('.btn-second')
const box = document.querySelector('.box')

button.onclick = () => {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "peoples.json")
  xhr.setRequestHeader("Content-type", "application/json")
  xhr.send()
  xhr.onload = () => {
    const peoples = JSON.parse(xhr.response)
    peoples.forEach(i => {
      const card = document.createElement('div')
      card.innerHTML = `
      <div class='card'>
        <h2>Name: ${i.name}</h2>
        <p>age: ${i.age}</p>
      </div>`
      box.append(card)
    })
    console.log(peoples)
  }
}


// 2
// const btn = document.querySelector('.btn')
// btn.onclick = () => {
//   const request = new XMLHttpRequest()
//   request.open("GET", "cars.json")
//   request.setRequestHeader("Content-type", "application/json")
//   request.send()
//   request.onload = () => {
//     const data = JSON.parse(request.response)
//     console.log(data);
//   }
// }