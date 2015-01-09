var messages = {
    "ro": {
        "finalRes": "Numarul ales este ",
        "question": "Este mai mare decat "
    },
    "en": {
        "finalRes": "Your number is: ",
        "question": "Is it greather than "
    }
};

var i = 0, j = 0, mij;
var limMax, limMin;
var questionsNr = 0;
var questionId = 0;
var language = "";

$(document).ready(function() {
    language = $("#language").text();

    $("body").hide().fadeIn(1000);

    $(".btn-url").on("click", function() {
        var btn = $(this);

        $(".page-active").animate({"margin-top" : "1000px"}, function() {
            $(".page-active").fadeOut(1000);
            window.location = btn.attr("data-url");
        });
    });

    $(".page").animate({"margin-top":"10px"});

    $(".button-next").on("click", function() {
        goToNextPage($(this));
    });

    $("#set-limits-btn").on("click", function() {
        limMin = i = parseInt($("#lim-min").val());
        limMax = j = parseInt($("#lim-max").val());
        questionsNr = Math.floor(Math.log(j - i) / Math.log(2)) + 1;
        $("#questions-nr").text(questionsNr);
    });

    $("#yes").on("click", function() {
        i = mij + 1;
        j = j;
        think();
    });

    $("#no").on("click", function() {
        i  = i;
        j = mij;
        think();
    });

    $("#start").on("click", function() {
        think();
    });
});

function think() {
    if(i == j + 1 || i == j) {
        $("#questionCounter").text("");

        $("#progress").css("width", "100%");
        $("#progress").text("100%");

        $("#result").text(messages[language].finalRes + i);

        $("#yes").fadeOut();
        $("#no").fadeOut();

        $("#reset").fadeIn();
        return;
    }
    mij = Math.floor((i + j) / 2);

    var width = (100 * (j - i)) / (limMax - limMin);
    var left = (100 * i) / (limMax - limMin) - (limMin * 100) / (limMax - limMin);
    var prg = 100 * questionId / questionsNr;

    questionId++;

    $("#questionCounter").text(questionId + ".");

    $("#progress").css("width", prg + "%");
    $("#progress").text(Math.floor(prg) + " %");

    $("#interval").animate({"margin-left": left + "%", "width" : width + "%"});
    $("#result").text(messages[language].question + mij + "?");
}

function goToNextPage(evt) {
    var parent = evt.closest(".page");

    parent.fadeOut(function() {
        parent.removeClass("page-active");
    });
    parent.next().fadeIn(function() {
        parent.next().addClass("page-active");
    });
}
