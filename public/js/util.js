function isShow(val) {
  val.className = val.className.replace("hidden", "block");
}

function isNone(val) {
  val.className = val.className.replace("block", "hidden");
}