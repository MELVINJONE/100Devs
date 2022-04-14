document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value
  console.log(choice);
  const url = `https://api.nasa.gov/planetary/apod?api_key=Dt6kUnBI1ut2wbrnjGHzI42YPguPd3bkQ1eI3YGQ&date=${choice}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      if (data.media_type == 'image') {
        document.querySelector('img').src = data.hdurl
        document.querySelector('h2').innerText = data.explanation
      } else if (data.media_type === 'video') {
        document.querySelector('img').iframe = data.hdurl
        document.querySelector('h2').innerText = data.explanation
      }
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

