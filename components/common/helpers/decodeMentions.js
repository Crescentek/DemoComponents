export function decodeUserName(text) {
   return text?.replace(/[[\]]/g, "")
}

export function removeAtTheRate(text) {
   console.log(/[^@]*$/.exec(text)[0], "/[^@]*$/.exec(text)[0]");
   return /[^@]*$/.exec(text)[0]
}