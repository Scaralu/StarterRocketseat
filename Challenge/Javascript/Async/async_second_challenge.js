var inputElement = document.querySelector('div#app input[type=text]');
var buttonElement = document.querySelector('div#app button');
var containerElement = document.querySelector('div#list');
var list = document.createElement('ul');

buttonElement.onclick = searchRepo;

function searchRepo() {
    var inputValue = inputElement.value;
    inputElement.value = '';

    console.log(inputValue)

    axios.get('https://api.github.com/users/'+inputValue+'/repos')
        .then(function (response) {
            list.innerHTML = '';

            for (let i = 0; i < response.data.length; i++) {
                var repoName = response.data[i].name;
                var repoFullName = response.data[i].full_name;

                var listElement = document.createElement('li');

                var linkElement = document.createElement('a');
                linkElement.href = 'https://github.com/' + repoFullName;

                var textElement = document.createTextNode('Repository Name: ' + repoName);
                linkElement.appendChild(textElement);
                listElement.appendChild(linkElement);
                list.appendChild(listElement);
            }

            containerElement.appendChild(list);

            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}


