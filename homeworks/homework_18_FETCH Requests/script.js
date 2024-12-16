const img = document.querySelector('#morty')
const nameCharacter = document.querySelector('#charakter-name')
const statusCharacter = document.querySelector('#status')
const originName = document.querySelector ('#originName')
    fetch("https://rickandmortyapi.com/api/character")
      // первым .then() дожидаемся 'сырых' данных и преобразуем их в JS объект с помощью .json()
      .then(res => res.json())
      // в data уже придут обработанные данные готовые к использованию
      .then(data => {
        
        console.log(data.results[1]);

        img.src = data.results[1].image
        nameCharacter.textContent = data.results[1].name
        statusCharacter.textContent = data.results[1].status
        originName.textContent = data.results[1].origin.name

        
      });
    