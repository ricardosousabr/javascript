var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function btn () {
  for (i = 0; i < array.length; ++i){
    var result = array[i] % 2;
    if (i < 16) {
      console.log(result)
    }
  }
}