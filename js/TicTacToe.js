var TicTacToe = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
];
// Tic Tac Toe feature
// function for onclick on each cell
$(document).ready(function(){
    $(".tictactoebox").click(function(){
        // Checks if element already been clicked
        if($(this).attr("value") == "set")
        {
            return;
        }

        // Check if we are going for X or O
        value = $("#tictactoePointer").attr("value");

        // Changes the element to X or O, depends on what is set
        $(this).css("background-image", "url(img/Transparent_" + value + ".png)");

        // Sets the new value if X or O
        newvalue = (value == "O") ? "X" : "O";
        newvaluedescription = (newvalue == "O") ? "It's O's turn": "It's X's turn";
        $("#tictactoePointer").attr("value", newvalue);
        $("#tictactoePointer").text(newvaluedescription);

        // Sets the element to set
        $(this).attr("value", "set");

        // Check if someone has won
        orderrow = $(this).parent().attr("name");
        ordercolumn = $(this).attr("name");
        // If value is X then true, if O then false
        ordervalue = (value == "X") ? true : false;
        TicTacToe[orderrow][ordercolumn] = value;
        CheckTicTacToe(value);
    })
})

// function to check if someone has won
function CheckTicTacToe(turn)
{
    // Check Rows
    for(i = 0; i < 3; i++){
        if(TicTacToe[i][0] === TicTacToe[i][1] && TicTacToe[i][0] === TicTacToe[i][2]){
            alert(turn + " won");
            ResetTicTacToe();
            return;
        }
    }
    // Check Columns
    for(i = 0; i < 3; i++){
        if(TicTacToe[0][i] === TicTacToe[1][i] && TicTacToe[0][i] === TicTacToe[2][i]){
            alert(turn + " won");
            ResetTicTacToe();
            return;
        }
    }
    // Check Diagonal
    if(TicTacToe[0][0] === TicTacToe[1][1] && TicTacToe[0][0] === TicTacToe[2][2]){
        alert(turn + " won");
        ResetTicTacToe();
        return;
    }
    if(TicTacToe[0][2] === TicTacToe[1][1] && TicTacToe[0][2] === TicTacToe[2][0]){
        alert(turn + " won");
        ResetTicTacToe();
        return;
    }
}

// function to reset
function ResetTicTacToe(){
    // Reset Pointer
    $("#tictactoePointer").attr("value", "X");
    $("#tictactoePointer").text("It's X's turn");

    // Reset All Cells
    $(".tictactoebox").css("background-image", "url('')");
    $(".tictactoebox").attr("value", "unset" );
    TicTacToe = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"]
    ];
}