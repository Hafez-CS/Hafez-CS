window .requestAnimFrame = function () {
  return(
    windown.requestAnimationFrame ||
    windown.webitRequestAnimationFrame ||
    windown.mozRequestAnimationFrame ||
    windown.oRequestAnimationFrame ||
    windown.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback);
    }    
  );  
};
