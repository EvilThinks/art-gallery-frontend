const fs = require("fs");
const path = require("path");
const main = () => {
  const files = fs
    .readdirSync("../muzze")
    .filter((fileName) => fileName.match(/.*\.html/));
  const sampleFile = fs.readFileSync("home.html");
  files.forEach((fileName) => {
    const file = fs.readFileSync(fileName);
    const data = compareFileData(sampleFile.toString(), file.toString());
    //fs.writeFileSync(path.join(path.toNamespacedPath('./output/'),fileName), data);
    fs.readFileSync(path.join(path.toNamespacedPath('./output/'),fileName))
  });
  // const data = compareFileData(
  //   sampleFile.toString(),
  //   fs.readFileSync("donate.html").toString()
  // );
};

main();

function compareFileData(sample, candidate) {
  sample = sample.split("");
  candidate = candidate.split("");
  const unique = [];
  for (let i = 0; i < sample.length; i++) {
    if(sample[i]!==candidate[i]){
      unique.push(candidate[i])
    }
  }
  return unique.join("");
}
