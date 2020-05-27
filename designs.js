//define constants
const table = document.querySelector("#pixelCanvas");
const button = document.querySelector("#button");
let isEmpty = true;

//toggle button to create/reset board
button.addEventListener("click", function () {
    if (isEmpty) {
        event.preventDefault();
        makeGrid();
    } else {
        document.querySelectorAll('tr').remove();
    }
    isEmpty = !isEmpty;
})

//make the grid
function makeGrid() {

    const height = document.querySelector("#inputHeight").value;
    const width = document.querySelector("#inputWidth").value;

    // rows
    for (i = 0; i < height; i++) {
        const row = document.createElement('tr');
        //cells
        for (j = 0; j < width; j++) {
            const cells = document.createElement('td', '/td');
            row.appendChild(cells);
        }
        table.appendChild(row);
    }

    //add color
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
