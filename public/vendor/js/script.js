var counter = 0;
$(document).on('click','#bt2', function () {
 
    $('#address').after('<div class="form-row" id="address' + (counter) + '"><div class="col-sm-12  mt-5"><button id="bt2" class="btn btn-info btn-sm float-right " >add<span class="glyphicon glyphicon-plus"></span> </button> <button id="rb" class="btn btn-info btn-sm float-right mx-2" >remove<span class="glyphicon glyphicon-minus"></span> </button><h4  class="display-5 ">Address info</h4>  </div><div class="col-sm-6 "><input type="text" class="form-control mt-2" placeholder="First name"><input type="email" class="form-control mt-2" placeholder="example@email.com"><input type="text" class="form-control mt-2" placeholder="Phone"><input type="text" class="form-control mt-2" placeholder="Website"></div><div class=" col-sm-6"><input type="text" class="form-control mt-2" placeholder="Last name"> <input type="text" class="form-control mt-2" placeholder="mobile">  <input type="text" class="form-control mt-2" placeholder="fax"></div></div>');
   });

$(document).on('click','#bt3', function () {
   
    $('#profession').after('<div class="form-row" id="profession' + (counter) + '"><div class="col-sm-12 mt-5"><button id="bt3" class="btn btn-info btn-sm float-right" >Add+ <span class="glyphicon glyphicon-plus"></span> </button><button id="rb" class="btn btn-info btn-sm float-right mx-2" >remove<span class="glyphicon glyphicon-minus"></span> </button> <h4 class="display-6">Professional Details</h4></div><div class="col-sm-6 "><input type="text" class="form-control mt-2" placeholder="Experience in Years"><input type="email" class="form-control mt-2" placeholder="Current Job Title"><input type="text" class="form-control mt-2" placeholder="Expected Salary"></div><div class="col-sm-6"><input type="text" class="form-control mt-2" placeholder="Highest Qualification Hold"> <input type="text" class="form-control mt-2" placeholder="Current Employer"></div></div>');
   });
$(document).on('click', '#rb', function(){
    $('#address' + counter).remove();
});
$(document).on('click', '#rb', function(){
    $('#profession' + counter).remove();
});

