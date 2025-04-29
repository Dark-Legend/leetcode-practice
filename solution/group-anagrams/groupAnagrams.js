const groupAnagrams = (str) => {
  const freqStr = new Map();

  for (let i = 0; i < str?.length; i++) {
    const strCount = Array(26).fill(0);

    for (let ch of str[i]) {
      strCount[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const strKey = strCount?.join(".");

    if (!freqStr.has(strKey)) {
      freqStr.set(strKey, []);
    }

    freqStr.get(strKey)?.push(str[i]);
  }
  return Array.from(freqStr.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
