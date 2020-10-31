    //For coffee chart image zoom
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");

    if(img != null)
    {
      img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
      }
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    var closeModal = function() {
     modal.style.display = "none";
    } 


    //Discount Modal pop-up on load
    setTimeout(function(){
      $("#discountModal").modal();
   }, 1000);


   