
//test functions
function showDiv(){
$('.noneLeft').text('No Students Left.').css('color','red')
}

function reset() {

}


function randomFn() {
  return Math.round(Math.random() * 10)
}



$(document).ready(function() {



  var randomNum = randomFn();
  var $xhr = $.getJSON("https://api.unsplash.com/photos/?client_id=c8cb856e48667f11dd504c2db4541cd1eeb02a1da21d9e2835ab0040dbc823e3");
  $xhr.done(function(data) {
    if ($xhr.status !== 200) {
      return;
      //set default background-image
      $('body').css('background-color', 'pink');

    }
    var image = data[randomNum]['urls']['regular']

    $('body').css('background-image', 'url(' + image + ')')



  })



  var cohort = $('#cohort').val();
  var call = $('#call');
  var nameArr = (JSON.parse(localStorage.getItem('nameArr'))) || []; //access nameArr on reload
  var name = $('.name').val();
  var selectedArr = (JSON.parse(localStorage.getItem('selectedArr'))) || []; //access nameArr on reload

  var setup = $('#setup');

(function(){
  savedNames = nameArr //adding the stored nameArr to the input fields on reload
  $('.name').each(function(i) {
    $(this).val(savedNames[i])
    console.log($(this));
  })
})()


if(selectedArr.length>0){
  $('#call').attr('disabled',false);
}
console.log(selectedArr)


  setup.click(function() {


    $('#call').removeAttr('disabled'); //enables cold call button
    $('.name').each(function() {
      nameArr.push($(this).val()); //adds inputs to array
    })
    for (var i = 0; i < nameArr.length; i++) {
      if (nameArr[i] !== '') {
        selectedArr.push(nameArr[i], nameArr[i], nameArr[i]) //adds three of each name
        console.log(selectedArr);

      }
    }

    localStorage.setItem("nameArr", JSON.stringify(nameArr))
    localStorage.setItem('selectedArr', JSON.stringify(selectedArr))

  });




  call.click(function(event) {
    var random = Math.floor(Math.random() * selectedArr.length);

    var selectedItem = selectedArr[random] //element that is picked
    localStorage.setItem("nameArr", JSON.stringify(nameArr)) //set nameArr to local storage
    $('.chosen').text('Cold Call: ' + selectedItem).css('background-color', 'green')
    selectedArr.splice(random, 1);
    localStorage.setItem('selectedArr', JSON.stringify(selectedArr)) //set selectedArr to local storage

    if (selectedItem === undefined) {
      showDiv();
      $('.chosen').text('Cold Call: ' + 'No students present').css('background-color', 'red')

    }



  })





  $('#reset').click(function(){
    $('#call').attr('disabled',true)
    $('.chosen').text('Cold Call: reset ').css('background-color', 'green')
    nameArr=[];
    selectedArr=[];
    $('.name').each(function() {
      $(this).val('')
      console.log($(this));
    })
    localStorage.setItem('nameArr', JSON.stringify(nameArr))
    localStorage.setItem('selectedArr',JSON.stringify([]))

    console.log(localStorage);
  })









});
