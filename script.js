$(document).ready(function () {
    var playerCount = 0;
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var player = "";
    $("#buttons").hide();
    $("#resetButton").hide();
    $("#choose").html("Select X or O to Play!");


    function reset() {
        $("#resetButton").show();
        $(".selectButton").show();
        $(".buttonFont").html("");
        $(".button").removeAttr("disabled");
        $("#winner").html("");
        $("#selectX").css("background-color", "");
        $("#selectO").css("background-color", "");
        $(".button").css("background-color", "");
        $("#choose").html("Select X or O to Play!");
        player = "";
        playerCount = 0;
        winner = false;
    };

    function endCountdown() {
        $("#resetButton").hide();
        $("#textCount").html("Resetting in 3 seconds");
        var endTime = 3;
        var endInterval = setInterval(startCount, 1000)

        function startCount() {
            endTime--;
            if (endTime > 1) {
                $("#textCount").html("Resetting in " + endTime + " seconds");
            } else if (endTime === 1) {
                $("#textCount").html("Resetting in " + endTime + " second");
            } else {
                clearInterval(endInterval);
                $("#textCount").html("");
                reset();
            }
        };
    };

    function win() {
        var winner = false;
        if ($("#buttonText0").html() === "X" && $("#buttonText1").html() === "X" && $("#buttonText2").html() === "X") {
            $("#0, #1, #2").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player X Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if ($("#buttonText3").html() === "X" && $("#buttonText4").html() === "X" && $("#buttonText5").html() === "X") {
            $("#3, #4, #5").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player X Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if ($("#buttonText6").html() === "X" && $("#buttonText7").html() === "X" && $("#buttonText8").html() === "X") {
            $("#6, #7, #8").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player X Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if ($("#buttonText0").html() === "X" && $("#buttonText3").html() === "X" && $("#buttonText6").html() === "X") {
            $("#0, #3, #6").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player X Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if ($("#buttonText1").html() === "X" && $("#buttonText4").html() === "X" && $("#buttonText7").html() === "X") {
            $("#1, #4, #7").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player X Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if ($("#buttonText2").html() === "X" && $("#buttonText5").html() === "X" && $("#buttonText8").html() === "X") {
            $("#2, #5, #8").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player X Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if ($("#buttonText0").html() === "X" && $("#buttonText4").html() === "X" && $("#buttonText8").html() === "X") {
            $("#0, #4, #8").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player X Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if ($("#buttonText2").html() === "X" && $("#buttonText4").html() === "X" && $("#buttonText6").html() === "X") {
            $("#2, #4, #6").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player X Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if ($("#buttonText0").html() === "O" && $("#buttonText1").html() === "O" && $("#buttonText2").html() === "O") {
            $("#0, #1, #2").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player O Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if ($("#buttonText3").html() === "O" && $("#buttonText4").html() === "O" && $("#buttonText5").html() === "O") {
            $("#3, #4, #5").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player O Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if ($("#buttonText6").html() === "O" && $("#buttonText7").html() === "O" && $("#buttonText8").html() === "O") {
            $("#6, #7, #8").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player O Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if ($("#buttonText0").html() === "O" && $("#buttonText3").html() === "O" && $("#buttonText6").html() === "O") {
            $("#0, #3, #6").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player O Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if ($("#buttonText1").html() === "O" && $("#buttonText4").html() === "O" && $("#buttonText7").html() === "O") {
            $("#1, #4, #7").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player O Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if ($("#buttonText2").html() === "O" && $("#buttonText5").html() === "O" && $("#buttonText8").html() === "O") {
            $("#2, #5, #8").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player O Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if ($("#buttonText0").html() === "O" && $("#buttonText4").html() === "O" && $("#buttonText8").html() === "O") {
            $("#0, #4, #8").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player O Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if ($("#buttonText2").html() === "O" && $("#buttonText4").html() === "O" && $("#buttonText6").html() === "O") {
            $("#2, #4, #6").css("background-color", "rgba(255,204,0,0.8)");
            $("#winner").html("Player O Wins!");
            $(".button").attr("disabled", "disabled");
            winner = true;
            endCountdown();
            return false;
        } else if (playerCount === 5 && winner === false) {
            $("#winner").html("Draw!");
            $(".button").attr("disabled", "disabled");
            endCountdown();
        } else {
            return true;
        }
    };

    function computersPlay() {
        var computersSelectedSpot = Math.floor(Math.random() * 9);
        if ($("#buttonText" + computersSelectedSpot).html() === "" && player === "X") {
            $("#buttonText" + computersSelectedSpot).html("O");
            win();
        } else if ($("#buttonText" + computersSelectedSpot).html() === "" && player === "O") {
            $("#buttonText" + computersSelectedSpot).html("X");
            win();
        } else if ($("#buttonText" + computersSelectedSpot).html() === "X" || $("#buttonText" + computersSelectedSpot).html() === "O") {
            computersPlay();
        }
    };

    $(".button").click(function () {
        for (var i = 0; i < nums.length; i++) {
            if (this.id == nums[i] && $("#buttonText" + this.id).html() === "") {
                $("#buttonText" + this.id).html(player);
                playerCount++;
                win()
                if (win()) {
                    computersPlay();
                }
            }
        };
    });

    $(".selectButton").click(function (reset) {
        if (this.id === "selectX") {
            player = "X";
            $(".selectButton").hide();
            $("#buttons").show();
            $("#resetButton").show();
            $("#selectX").css("background-color", "rgba(255,204,0,0.8)");
            $("#selectO").css("background-color", "");
        } else if (this.id === "selectO") {
            player = "O";
            $(".selectButton").hide();
            $("#buttons").show();
            $("#resetButton").show();
            $("#selectO").css("background-color", "rgba(255,204,0,0.8)");
            $("#selectX").css("background-color", "");
        }
        if (player !== "") {
            $("#choose").html("");
        }
    });

    $("#resetButton").click(function () {
        reset();
    });
});
