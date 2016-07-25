function getFirstSelector(thing){
  return document.querySelector(thing)
};

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var list = document.querySelectorAll('.ranked-list')

    for (var i = 0 ; i < list.length ; i++) { // get  a list of elements
      var item = list[i].children

        for (a = 0 ; a < item.length ; a++){ // iterate through, convert to an integer, and add 'n' to each number
           var thing = parseInt(item[a].innerHTML) + n
           item[a].innerHTML = thing
        } // closes individual number loop
    } // closes list loop
}; // closes function

function deepestChild(){
  var layer =  document.getElementById('grand-node')
  var nextLayer = layer.getElementsByTagName('div')

    for (var i = 0 ; i < nextLayer.length ; i++){
      if (nextLayer[i].children.length === 0){
        return nextLayer[i]
      }
    }
};
