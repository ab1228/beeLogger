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
            landed: 
        };
    })

});