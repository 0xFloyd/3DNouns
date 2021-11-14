const fs = require('fs');
const jsonData = require('./src/data.json');
const readDirectory = __dirname + '/public/headModels';
const writeDirectory = __dirname + '/src/HeadFilesGenerated';

// store starter component as a string to be written to each day's file
const starterComponent = fs
  .readFileSync('./HeadStarterComponent.js')
  .toString();

// for each folder in the everyday directory, create a "starter" file and write a react "starter component" to that file
jsonData.tempHeads.forEach((headData) => {
  // file name to be created
  let filePath = `${headData.componentName}.js`;

  // rename every component to the date of the folder its in
  let replaceComponentName = starterComponent.replace(
    /HeadComponent/g,
    headData.componentName
  );

  let replaceFileName = replaceComponentName.replace(
    /filePlaceholderName.glb/g,
    headData.filePath
  );
  let replaceHeadName = replaceFileName.replace(
    /HeadVariableName/g,
    `${headData.name}`
  );

  // write starter component to file
  fs.writeFileSync(
    `${writeDirectory}/${filePath}`,
    replaceHeadName,
    function (err) {
      if (err) return console.log(err);
    }
  );
});
// fs.readdir(readDirectory, (err, files) => {
//   files.forEach((file) => {
//     // file name to be created
//     let filePath = `${readDirectory}/${file}/Day${file}.js`;

//     // rename every component to the date of the folder its in
//     let nameComponentFromDate = starterComponent.replace(
//       /EverydayStarterCanvas/g,
//       `Day${file.replace(/-/g, '')}`
//     );

//     // write starter component to file
//     fs.writeFile(writeDirectory, nameComponentFromDate, function (err) {
//       if (err) return console.log(err);
//     });
//   });
// });
