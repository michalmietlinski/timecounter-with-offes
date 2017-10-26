var startat = {
  //Hour offset of your time zone
  offset: -2,
  //Date
  yr: 2017,
  //Month counting from 0 as january
  m: 9,
  //Day
  d:26,
  //Hour
  h:18,
  //Minute
  mi:17
  
}



var launchprogram = function () {
  var s=startat,
    d = new Date(),
    of = d.getTimezoneOffset(),
    n=new Date(s.yr,s.m,s.d,s.h+s.offset,s.mi);

    d = d.setTime(d.getTime() + (of * 60 * 1000));
    d = new Date(d);
   
  if (n <= d) {
    //Add your function here
  } else {
    setTimeout(function(){
      launchprogram();
    },1000)
  }


}
launchprogram();