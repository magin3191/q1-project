$(document).ready(function() {

JSON.parse(localStorage.getItem('cohort'))

  var randomNum = Math.round(Math.random() * 10);
  var $xhr = $.getJSON("https://api.unsplash.com/photos/?client_id=c8cb856e48667f11dd504c2db4541cd1eeb02a1da21d9e2835ab0040dbc823e3");
  $xhr.done(function(data) {
    if ($xhr.status !== 200) {
      return;
    }
    var image = data[randomNum]['urls']['regular']
    console.log(data);
    console.log(data[randomNum]['urls']['regular']);
    $('body').css('background-image', 'url(' + image + ')')



  })



  var cohort = $('#cohort').val();
  var call = $('#call');
  var nameArr = [];
  var name = $('.name').val();
  var selectedArr = [];
  var setup = $('#setup');




  setup.click(function() {
    $('#call').removeAttr('disabled'); //enables cold call button
    $('.name').each(function() {
      nameArr.push($(this).val());
    })
    for (var i = 0; i < nameArr.length; i++) {
      if (nameArr[i] !== '') {
        selectedArr.push(nameArr[i], nameArr[i], nameArr[i]) //adds three of each name
      }
    }
    // console.log(selectedArr)


  });




  call.click(function() {
    var random = Math.floor(Math.random() * selectedArr.length);
    $('#setup').attr('disabled', 'true');
    var selectedItem = selectedArr[random] //element that is picked
    console.log(selectedItem);
    $('.chosen').text('Cold Call: ' + selectedItem).css('background-color', 'green')
    selectedArr.splice(random, 1)
    console.log(selectedArr);
    if (selectedItem === undefined) {
      alert('No students present');
      $('.chosen').text('Cold Call: ' + 'No students present').css('background-color', 'red')


    }


  })

  $('#reset').click(function() {
    location.reload()

  })

  // function randomNumm(){
  //   return Math.round(Math.random()*10)
  // }
  // console.log(randomNumm()); functions generate a new random
  // console.log(randomNumm());


  $('#save').click(function(event){
    event.preventDefault();


    $('.savedCohort').text('Saved: '+ $('#cohort').val());//the value of the input field
    localStorage.setItem('cohort',JSON.stringify($('#cohort').val()))//cohort input field value
    localStorage.setItem('selectedArr',JSON.stringify(selectedArr));//array of names
    $('.name').each(function(){
      localStorage.setItem('names',JSON.stringify($(this).val()));
      console.log(JSON.stringify($(this).val()))
    })


  })
    // console.log(JSON.parse(localStorage.getItem('selectedArr')))



function appendCohort(){

  $('.savedCohort').text('Saved: '+(JSON.parse(localStorage.getItem('cohort'))))

}
appendCohort()


  $('.savedCohort').click(function(){

    selectedArr =(JSON.parse(localStorage.getItem('selectedArr')));

    $('#call').removeAttr('disabled');
    console.log(selectedArr)


  })

  // JSON.parse(localStorage.getItem('nameInput',JSON.stringify($('.name').each(function() {
  // ($(this).val());
  // }))))



















});
