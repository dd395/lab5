$(document).ready(function(){
    $("form").submit(enterName);





    function enterName(event) {
        //prevent form from flashing and resetting
        event.preventDefault();
        var rank = $("input[name=rank]:checked").val();
        var firstName = $("#fname").val();
        var lastName = $("#lname").val();

        var greeting =`Hello, ${rank} ${firstName} ${lastName}`;







        $("#output").text(greeting);


    }
});