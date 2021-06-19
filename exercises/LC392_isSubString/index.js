function isSubString(s, t) {
  let matchedIndex = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[matchedIndex]) {
      matchedIndex++;
    }
  }
  return matchedIndex >= s.length;
}
console.log("substring", isSubString("abc", "ahbgdc"));
