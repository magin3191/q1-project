

// var nameArr=[]
// var selectedArr=[];
// var holderArr=[];
// var savedNames;

$(document).ready(function() {

// JSON.parse(localStorage.getItem('cohort'))

  var randomNum = Math.round(Math.random() * 10);
  var $xhr = $.getJSON("https://api.unsplash.com/photos/?client_id=c8cb856e48667f11dd504c2db4541cd1eeb02a1da21d9e2835ab0040dbc823e3");
  $xhr.done(function(data) {
    if ($xhr.status !== 200) {
      return;
    }
    var image = data[randomNum]['urls']['regular']
    // console.log(data);
    // console.log(data[randomNum]['urls']['regular']);
    $('body').css('background-image', 'url(' + image + ')')



  })



  var cohort = $('#cohort').val();
  var call = $('#call');
  var nameArr =JSON.parse(localStorage.getItem('nameArr'))||[];
  var name = $('.name').val();
  var selectedArr=(JSON.parse(localStorage.getItem('selectedArr')))||[];
  var setup = $('#setup');
  // var holderArr=[];

  // var savedNames;

  setup.click(function() {
    $('#call').removeAttr('disabled'); //enables cold call button
    $('.name').each(function() {
      nameArr.push($(this).val());
    })
    for (var i = 0; i < nameArr.length; i++) {
      if (nameArr[i] !== '') {
        selectedArr.push(nameArr[i], nameArr[i], nameArr[i]) //adds three of each name
        // console.log(selectedArr);
        // holderArr.push(nameArr[i]);
        // console.log(nameArr);

        // console.log(holderArr,'this is holderArr');//stores names to be added to input fields upon load

      }
    }
    // console.log(selectedArr)


  });




  call.click(function(event) {
    var random = Math.floor(Math.random() * selectedArr.length);

    // $('#call').attr('disabled', 'false');
    var selectedItem = selectedArr[random] //element that is picked
    // console.log(selectedItem);
    $('.chosen').text('Cold Call: ' + selectedItem).css('background-color', 'green')
    selectedArr.splice(random, 1)
    localStorage.setItem('selectedArr',JSON.stringify(selectedArr))
    if (selectedItem === undefined) {

      alert('No students present');

      $('.chosen').text('Cold Call: ' + 'No students present').css('background-color', 'red')
        // event.stopImmediatePropigation();
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

    localStorage.setItem("nameArr",JSON.stringify(nameArr));//adds names to storage
    // console.log(nameArr)
    // console.log(savedNames)
    // localStorage.setItem('holder',JSON.stringify(holderArr));//holderArr set to storage
// console.log(holderArr)
    $('.savedCohort').text('Saved: '+ $('#cohort').val());//the value of the input field
    localStorage.setItem('cohort',JSON.stringify($('#cohort').val()))//cohort input field value
    localStorage.setItem('selectedArr',JSON.stringify(selectedArr));//array of names
    // $('.name').each(function(){
    //   localStorage.setItem('names',JSON.stringify($(this).val()));
    //   console.log(JSON.stringify($(this).val()),'names')
    // })
     //saving saved names


  })

    // console.log(JSON.parse(localStorage.getItem('selectedArr')))



function appendCohort(){

  $('.savedCohort').text('Saved: '+(JSON.parse(localStorage.getItem('cohort'))))

}
appendCohort()


  $('.savedCohort').click(function(){
    $(this).toggleClass("colorChange");
    $('#call').attr('disabled', 'true');
    savedNames=nameArr


$('.name').each(function(i){
$(this).val(savedNames[i])
})


console.log(nameArr)
// console.log(savedNames)




;

    $('#call').removeAttr('disabled');
    // console.log(selectedArr)
    // console.log(holderArr)//add holderArr to name inputs


  })




















});
