$(function () {
    $('.change-flying').on('click', function (event) {
        var id = $(this).data('id');
        var newFlying = $(this).data('newlanding');

        var newFlyingState = {
            landed: newFlying
        };

        $.ajax('/api/bees/' + id, {
            type: 'PUT',
            data: newFlyingState
        }).then(
            function () {
                console.log('changed flying to', newFlying);

                location.reload();
            }
        );
    });


    $('.create-form').on('submit', function (event) {

        event.preventDefault();
        var newBee = {
            name: $("#name").val().trim(),
            landed: $("#landed")
        };


        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBee
        }).then(function () {
            console.log('created new bee')
            // Reload the page to get the updated list
            location.reload();
        });
    })

});