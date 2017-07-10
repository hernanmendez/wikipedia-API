document.getElementsByTagName('button')[0].onclick = function(){
    var input = document.getElementsByTagName('input')[0].value;
    var url='https://en.wikipedia.org/w/api.php?action=opensearch&search='+input+'&format=json&origin=*';
    function callback(data) {
        data = data.data;
        document.getElementById('holder').innerHTML='';
        for(let i=0;i<data[1].length;i++){
            var div = document.createElement('div');
            var anchor = document.createElement('a');
            var text = document.createElement('p');
            anchor.innerHTML = data[1][i];
            anchor.href = data[3][i];
            text.innerHTML = data[2][i];
            div.appendChild(anchor);
            div.appendChild(text);
            document.getElementById('holder').appendChild(div);
        }
    }
    axios.get(url).then(callback).catch(function(){alert('ERROR')});
}