$(document).ready(function(){

  var randomNum=Math.round(Math.random()*10);
  console.log(randomNum)
  var $xhr = $.getJSON("https://api.unsplash.com/photos/?client_id=c8cb856e48667f11dd504c2db4541cd1eeb02a1da21d9e2835ab0040dbc823e3");
    $xhr.done(function(data) {
      if ($xhr.status !== 200) {
        return;
      }
      var image = data[randomNum]['urls']['raw']
      console.log(data);
      console.log(data[randomNum]['urls']['raw']);

      //set image as background-image






    })



var cohort=$('#cohort').val();
var call=$('#call');
var nameArr=[];
var name= $('.name').val();
var selectedArr=[];
var setup=$('#setup');
const seatingMemory={};


setup.click(function(){
  $('#call').removeAttr('disabled');//enables cold call button
  $('.name').each(function(){
    nameArr.push($(this).val());
  })
  for(var i=0;i<nameArr.length;i++){
    if(nameArr[i]!==''){
      selectedArr.push(nameArr[i],nameArr[i],nameArr[i])//adds three of each name
    }
  }
  console.log(selectedArr)


});

// $('.col-lg-12').click(function(){
//   this.input.show()
// })






call.click(function(){
var random = Math.floor(Math.random() * selectedArr.length);
      var selectedItem=selectedArr[random]//element that is picked
      console.log(selectedItem);
      $('.chosen').text('Cold Call: '+ selectedItem);
      selectedArr.splice(random,1)
      console.log(selectedArr);
      if(selectedItem===undefined){
        alert('all students left');

      }


    })

    $('#reset').click(function(){
    // reset/refresh button
    })

// function saveSettings(){
//   localStorage.setItem("class", JSON.stringify(cohort));
//   console.log(getItem('class'))
//
// }


























});
