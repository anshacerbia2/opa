// dropdown user
$(document).on("click", ".user-dropdown-wrapper", function (e) {
  e.stopPropagation();

  var _list = $(this).siblings(".user-dropdown-menu");
  $(".submenu-wrapper").slideUp(100);
  $(this).toggleClass("active");
  _list.slideToggle(100);
});

// menu list
$(document).on("click", ".menu-list.has-sub", function (e) {
  e.stopPropagation();

  var _sub = $(this).find(".submenu-wrapper");
  $(".user-dropdown-menu").slideUp(100);
  $(".menu-list.has-sub").not(this).removeClass("selected");
  $(this).toggleClass("selected");
  $(".submenu-wrapper").not(_sub).slideUp(100);
  _sub.slideToggle(200);
});

// outside dropdown click
$(document).click(function (e) {
  if (!$(e.target).hasClass("user-dropdown-wrapper")) {
    $(".user-dropdown-menu").slideUp(100);
    $(".user-dropdown-wrapper").removeClass("active");
  }
  if (!$(e.target).hasClass("menu-list")) {
    $(".submenu-wrapper").slideUp(100);
  }
});

// file upload js
$(document).on("click", ".js-burger", function (e) {
  var _parent = $(this).closest(".filter-content");
  var _content = _parent.siblings(".main-content");

  _parent.toggleClass("opened");
  _content.toggleClass("opened");
  $(this).toggleClass("opened");
});

// chart
function splineChart() {
  var chart = new CanvasJS.Chart("splineChart", {
    animationEnabled: true,
    animationDuration: 1000,
    axisY: {
      gridColor: "#ebebeb",
      labelFontSize: 14,
      labelFontColor: "#231F20",
    },
    axisX: {
      valueFormatString: "MMM",
      gridColor: "#ebebeb",
      gridThickness: 1,
      labelFontSize: 14,
      labelFontColor: "#231F20",
    },
    toolTip: {
      borderColor: "#ebebeb",
      cornerRadius: "5",
    },
    data: [
      {
        type: "spline",
        toolTipContent:
          "<div class='graph-tooltip-wrapper'>" +
          "<div class='clearfix graph-tooltip-header'>" +
          "<div class='pull-left'>" +
          "{x}" +
          "</div>" +
          "</div>" +
          "<hr>" +
          "<div class='clearfix graph-tooltip-row'>" +
          "<div class='pull-left'>" +
          "Total Sales" +
          "</div>" +
          "<div class='pull-right'>" +
          "<div class='fz14'>{y}</div>" +
          "</div>" +
          "</div>" +
          "</div>",
        markerColor: "#6D6C94",
        dataPoints: [
          { x: new Date(2022, 0), y: 10 },
          { x: new Date(2022, 1), y: 5 },
          { x: new Date(2022, 2), y: 1 },
          { x: new Date(2022, 3), y: 2 },
          { x: new Date(2022, 4), y: 7 },
          { x: new Date(2022, 5), y: 3 },
          { x: new Date(2022, 6), y: 8 },
          { x: new Date(2022, 7), y: 8 },
          { x: new Date(2022, 8), y: 4 },
          { x: new Date(2022, 9), y: 10 },
          { x: new Date(2022, 10), y: 7 },
          { x: new Date(2022, 11), y: 6 },
        ],
      },
    ],
  });
  chart.render();
}

window.onload = function () {
  if ($("#splineChart").length > 0) {
    splineChart();
  }
};

// toggle menu

// reset filter
$(document).on("click", ".reset-filter", function (e) {
  var _parent = $(this).closest(".filter-wrapper");
  _parent.find("input[type=text], textarea").val("");
  _parent.find("input[type=checkbox]").prop("checked", false);
  _parent.find("select").prop("selectedIndex", 0);
});

$(document).on("click", ".reset-filter-popup", function (e) {
  var _parent = $(this).closest(".middle");
  _parent.find("input[type=text], textarea").val("");
  _parent.find("input[type=checkbox]").prop("checked", false);
  _parent.find("select").prop("selectedIndex", 0);
});

// toggle status
$(document).on("click", ".js-toggle-status", function (e) {
  if ($(this).hasClass("status-success")) {
    $(this).removeClass("status-success").addClass("status-fail");
    $(this).text("Deactivated");
  } else {
    $(this).removeClass("status-fail").addClass("status-success");
    $(this).text("Activated");
  }
});

// menu animation
$(".menu-wrapper li, .setting-menu").mouseenter(function () {
  var paths = $(this).find(".path-animate");
  console.log(path, ">>>>>>>");
  [].forEach.call(paths, function (path) {
    var length = path.getTotalLength();
    path.style.transition = path.style.WebkitTransition = "none";
    path.style.strokeDasharray = length + " " + length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition =
      "stroke-dashoffset 3s";
    path.style.strokeDashoffset = "0";
  });
});

// rate function
$(".graph-rate-wrapper").each(function () {
  var _success = parseInt($(this).find(".success").text());
  var _total = parseInt($(this).find(".total").text());
  var _fail = _total - _success;
  var _width1 = parseFloat((_success / _total) * 100).toFixed(1);
  var _width2 = parseFloat((_fail / _total) * 100).toFixed(1);

  var _rate1 = $(this).find(".rate1");
  var _rate2 = $(this).find(".rate2");
  var _info1 = $(this).find(".info1");
  var _info2 = $(this).find(".info2");

  _rate1.css("width", _width1 + "%");
  _rate2.css("width", _width2 + "%");

  _info1.text(_width1 + "%");
  _info2.text(_width2 + "%");
});

// add ticket
$(document).on("click", ".js-add-ticket", function (e) {
  var _addition = $(this)
    .closest(".form-create-addition")
    .find(".addition-list");
  var _last = _addition.last();

  if (_addition.length >= 1) {
    $(
      '<div class="form-group addition-list">' +
        '<label>Ticket <span class="ticket-no">' +
        "</span></label>" +
        '<div class="inline-flex delete-addition">' +
        '<i class="fa fa-trash"></i>' +
        "</div>" +
        '<input type="text" name="" class="form-control">' +
        "</div>"
    ).insertAfter(_last);
  }
  var _last2 = $(this)
    .closest(".form-create-addition")
    .find(".addition-list")
    .last();
  var _index = _last2.index() + 1;
  _last2.find(".ticket-no").text(_index);
});

// delete ticket
$(document).on("click", ".delete-addition", function (e) {
  var _parent = $(this).closest(".addition-list");
  _parent.remove();
  $(".addition-list").each(function () {
    var _index = $(this).index() + 1;
    $(this).find(".ticket-no").text(_index);
  });
});

// popup js

$(document).on("click", ".js-popup", function () {
  var _popup = $(this).attr("data-popup");
  var _verify = $(this).closest(".issued-box").attr("data-verify");

  $(".overlay-wrapper").fadeIn().addClass("open");
  $(".popup-wrapper").removeClass("popup-current");
  $("#" + _popup).addClass("popup-current");
});

$(document).on("click", ".js-close-popup", function (e) {
  e.preventDefault();
  e.stopPropagation();

  $(".overlay-wrapper").removeClass("open").fadeOut();
});

// js toggle flight detail
$(".js-toggle-details").on("click", function () {
  var _this = $(this);
  var _see = _this.find(".see-detail-text");
  var _down = _this.find(".down-arrow");

  $(".flight-list").not(_this).removeClass("is-active");
  $(".flight-list").not(_this).find(".details-wrapper").hide();
  $(".see-detail-text").not(_see).text("See Flight Details");
  $(".down-arrow").not(_down).removeClass("active");

  if (!_this.hasClass("is-active")) {
    _this.find(".details-wrapper").fadeIn();
    _this.addClass("is-active");
    _see.text("Close Flight Details");
    _down.addClass("active");
  } else {
    _this.find(".details-wrapper").hide();
    _this.removeClass("is-active");
    _see.text("See Flight Details");
    _down.removeClass("active");
  }
});

// js payment tab
$(document).on("click", ".js-payment-tab", function (e) {
  _this = $(this);
  _target = _this.attr("data-target");
  if (!_this.hasClass("is-active")) {
    $(".new-tab-list").removeClass("is-active");
    _this.addClass("is-active");
    $(".new-tab-content").hide();
    $(".new-tab-content").removeClass("payment-active");
    $(_target).fadeIn();
    $(_target).addClass("payment-active");
  }
});

// calendar datepicker

$(function () {
  var defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate());
  var defaultDate2 = new Date();
  defaultDate2.setDate(defaultDate2.getDate() + 1);

  if ($(".js-datepicker").length > 0) {
    $(".js-datepicker.datepicker-from").datepicker({
      numberOfMonths: 1,
      dateFormat: "d M yy",
      maxDate: defaultDate,
      changeMonth: true,
      changeYear: true,
      beforeShow: function (input, inst) {
        $("#ui-datepicker-div").addClass("custom-datepicker-wrapper");
        var _top = $(this).offset().top;
        var _left = $(this).offset().left;

        if ($(this).hasClass("in-popup")) {
          setTimeout(function () {
            inst.dpDiv.css({
              top: _top - 305,
              left: _left,
            });
          }, 0);
        } else {
          setTimeout(function () {
            inst.dpDiv.css({
              top: _top - 305,
              left: _left - 120,
            });
          }, 0);
        }
      },
      onSelect: function (date) {
        var _parent = $(this).closest(".filter-wrapper");
        var _dateTo = _parent.find(".datepicker-to");
        _dateTo.datepicker("destroy");
        _dateTo.val(date);
        var minDate = new Date(date);
        minDate.setDate(minDate.getDate() + 1);
        _dateTo
          .datepicker({
            minDate: minDate,
            maxDate: defaultDate,
            numberOfMonths: 1,
            dateFormat: "d M yy",
            changeMonth: true,
            changeYear: true,
            onSelect: function (date) {},
          })
          .datepicker("setDate", minDate);
      },
    });
    $(".js-datepicker.datepicker-to").datepicker({
      numberOfMonths: 1,
      minDate: defaultDate2,
      dateFormat: "d M yy",
      changeMonth: true,
      changeYear: true,
      beforeShow: function (input, inst) {
        $("#ui-datepicker-div").addClass("custom-datepicker-wrapper");
        var _top = $(this).offset().top;
        var _left = $(this).offset().left;

        if ($(this).hasClass("in-popup")) {
          setTimeout(function () {
            inst.dpDiv.css({
              top: _top - 305,
              left: _left,
            });
          }, 0);
        } else {
          setTimeout(function () {
            inst.dpDiv.css({
              top: _top - 305,
              left: _left - 120,
            });
          }, 0);
        }
      },
      onSelect: function (date) {},
    });
    $(".js-datepicker.datepicker-single").datepicker({
      numberOfMonths: 1,
      maxDate: defaultDate,
      dateFormat: "d M yy",
      changeMonth: true,
      changeYear: true,
      beforeShow: function (input, inst) {
        $("#ui-datepicker-div").addClass("custom-datepicker-wrapper");
        var _top = $(this).offset().top;

        setTimeout(function () {
          inst.dpDiv.css({
            top: _top - 305,
          });
        }, 0);
      },
      onSelect: function (date) {},
    });
  }
});

// function number only
(function ($) {
  $.fn.inputFilter = function (callback, errMsg) {
    return this.on(
      "input keydown keyup mousedown mouseup select contextmenu drop focusout",
      function (e) {
        if (callback(this.value)) {
          // Accepted value
          if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
            $(this).removeClass("input-error");
            this.setCustomValidity("");
          }
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          // Rejected value - restore the previous one
          $(this).addClass("input-error");
          this.setCustomValidity(errMsg);
          this.reportValidity();
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          // Rejected value - nothing to restore
          this.value = "";
        }
      }
    );
  };
})(jQuery);

// input number only
$(".number-only").inputFilter(function (value) {
  return /^\d*$/.test(value); // Allow digits only, using a RegExp
}, "Only digits allowed");

// file upload js
$(document).on("click", ".js-upload-document", function (e) {
  var _parent = $(this).closest(".file-input-wrapper");
  var _form = _parent.find(".hidden-document");

  _form.trigger("click");
});

// js change hidden input
$(document).on("change", ".js-hidden-document", function (e) {
  var _parent = $(this).closest(".file-upload-wrapper");
  var _tbody = _parent.find(".table-file-upload");
  var _tr = _tbody.find("tr");

  var _fileName = $(this)
    .val()
    .replace(/C:\\fakepath\\/i, "");

  if (_tr.length == 0) {
    _tbody.append(
      $(
        "<tr>" +
          "<td>" +
          _fileName +
          "</td>" +
          "<td>" +
          '<button class="table-delete-btn js-delete-tr" title="Remove">' +
          '<i class="fa fa-trash"></i>' +
          "</button>" +
          "</td>" +
          "</tr>"
      )
    );
  } else {
    var _last = _tr.last();
    $(
      "<tr>" +
        "<td>" +
        _fileName +
        "</td>" +
        "<td>" +
        '<button class="table-delete-btn js-delete-tr" title="Remove">' +
        '<i class="fa fa-trash"></i>' +
        "</button>" +
        "</td>" +
        "</tr>"
    ).insertAfter(_last);
  }
});

// delete tr

$(document).on("click", ".js-delete-tr", function (e) {
  var _parent = $(this).closest("tr");

  _parent.remove();
});
