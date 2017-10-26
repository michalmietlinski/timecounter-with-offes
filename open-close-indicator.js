var openhours = {
  //Hour offset of place
  offset: -2,
  //starting from Sunday
  0: {
    open: 1,
    close: 16
  },
  1: {
    open: 1,
    close: 16
  },
  2: {
    open: 1,
    close: 16
  },
  3: {
    open: 1,
    close: 16
  },
  4: {
    open: 1,
    close: 16
  },
  5: {
    open: 1,
    close: 16
  },
  6: {
    open: 1,
    close: 16
  },
  exception: {
    //Month
    9: {
      //Day
      25: {
        open: 0,
        close: 22
      }
    }
  }
}


//Result div
var result = document.getElementById("open");

function checkresult() {
  var d = new Date(),
    of = d.getTimezoneOffset();
  d = d.setTime(d.getTime() + (of * 60 * 1000));
  d = new Date(d);
  var em = openhours.exception[d.getMonth()],
      //exceptions
      e=openhours.exception[d.getMonth()][d.getDate()],
      n=openhours[d.getDay()],
      //hours
      h=d.getHours(),
      o=openhours.offset,
      cl="closed",
      op="open";

  if (em && e) {
    if ((e.open + o) <= h && h < (e.close + o)) {
      return op
    } else {
      return cl
    }
  };
  if ((n.open + o) <= h && h < (n.close + o)) {
    return op
  } else {
    return cl
  }


}
result.innerHTML = checkresult()