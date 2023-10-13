    var open = document.getElementById("open-menu");
    var close = document.getElementById("close-menu");
    var slide = document.getElementById("slide-in");

    open.onclick = function () {
        slide.classList.add("active-menu");
    }

    close.onclick = function (){
        slide.classList.remove("active-menu");
    }

    // contact form submission

    $(document).ready(function (event) {
        $("#btn-submit-form").click(function (event) {
            
            var formData = {
                contact_person: $("#contact_person").val(),
                contact_number: $("#contact_number").val(),
                transmission_type: $("#transmission_type").val(),
                no_kms: $("#no_kms").val(),
                email: $("#email").val(),
                notes: $("#notes").val(),
                vehicle_make: $("#vehicle_make").val(),
                fuel_type: $("#fuel_type").val(),
                vehicle_problems: $("#vehicle_problems").val()
            };
            
            $.ajax({
                type: "POST",
                url: "./mailer/mailer.php",
                data: formData,
                dataType: "json",
                encode: true,
            }).done(function (data) {
        
                if (!data.success) {
                    if (data.errors.contact_person) {
                        $(".message-handler").html(
                            '<div class="alert alert-danger text-center">' + data.errors.contact_person + "</div>"
                        );
                    }
        
                    if (data.errors.contact_number) {
                        $(".message-handler").html(
                            '<div class="alert alert-danger text-center">' + data.errors.contact_number + "</div>"
                        );
                    }
            
                    if (data.errors.transmission_type) {
                        $(".message-handler").html(
                            '<div class="alert alert-danger text-center">' + data.errors.transmission_type + "</div>"
                        );
                    }
            
                    if (data.errors.no_kms) {
                        $(".message-handler").html(
                            '<div class="alert alert-danger text-center">' + data.errors.no_kms + "</div>"
                        );
                    }
                    if (data.errors.email) {
                        $(".message-handler").html(
                            '<div class="alert alert-danger text-center">' + data.errors.email + "</div>"
                        );
                    }
        
                    if (data.errors.vehicle_make) {
                        $(".message-handler").html(
                            '<div class="alert alert-danger text-center">' + data.errors.vehicle_make + "</div>"
                        );
                    }
            
                    if (data.errors.fuel_type) {
                        $(".message-handler").html(
                            '<div class="alert alert-danger text-center">' + data.errors.fuel_type + "</div>"
                        );
                    }
            
                    if (data.errors.vehicle_problems) {
                        $(".message-handler").html(
                            '<div class="alert alert-danger text-center">' + data.errors.vehicle_problems + "</div>"
                        );
                    }
                } else {
                    $('#contact-form')[0].reset();
                    $(".message-handler").html(
                        '<div class="alert alert-success text-center">' + data.msg + "</div>"
                    );
                }
            })
            .fail(function (data) {
                $(".message-handler").html(
                    '<div class="alert alert-success">Could not reach server, please try again later.</div>'
                );
            });
      
            event.preventDefault();
        });
    });