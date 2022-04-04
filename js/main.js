$(document).ready(function(){
    $('#insert').click(function(){
        var image_name = $('#file').val();
        if(image_name == '')
        {
            alert("الرجاء اختيار صورة");
            return false;
        }
        else
        {
            var extension = $('#file').val().split('.').pop().toLowerCase();  
          if(jQuery.inArray(extension,['gif','png','jpg','jpeg']) == -1)
            {
               alert('صيفة الصورة غير صحيحة');
               $('#file').val('');
               return false;
           }
        }
    })
 });
        const one = document.getElementById("file");
        const one2 = document.getElementById("b_file");
        const one3 = document.getElementById("t_file");
         one2.addEventListener("click",function()
         {
             one.click();
         });
  function showImage(src,target) {
            var fr =new FileReader();
            fr.onload = function(e) { target.src = this.result; };
            src.addEventListener("change",function() {
            fr.readAsDataURL(src.files[0]);
            });
    }

var src = document.getElementById("file");
var target = document.getElementById("target");
showImage(src,target);
function profile()
{
    var before =document.getElementById("b_file");
    var after =document.getElementById("target");
    var cont =document.getElementById("photo-container");
    cont.style.display="block";
    after.style.display="block";
    before.style.display="none";
}
function profiler()
{
    var before =document.getElementById("b_file");
    var after =document.getElementById("target");
    var cont =document.getElementById("photo-container");
    cont.style.display="none";
    after.style.display="none";
    before.style.display="block";
 
}

$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("show");
  });
  /* construct manually */
  var bar1 = new ldBar("#myItem1");
  /* ldBar stored in the element */
  var bar2 = document.getElementById('myItem1').ldBar;
  bar1.set(100);




