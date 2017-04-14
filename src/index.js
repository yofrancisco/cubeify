#!/usr/bin/env node

const program = require('commander');

function generateCube(text, options) {
  let spacer;
  let cubeText = "";

  const textToCube = text.trim().toUpperCase();\
  const textToCubeSpace = textToCube.split("").join("\u0020");
  const linebreak = "\n";

  if (options.dashed) {
    spacer = "-";
  } else {
    spacer = "\u0020";
  }

  cubeText += spacer.repeat(Math.floor(textToCube.length / 2) * 2);
  cubeText += textToCubeSpace;
  cubeText += linebreak;

  for (i = 0; i < Math.floor(textToCube.length / 2 - 1); i++) {
    cubeText += spacer.repeat(Math.floor((textToCube.length / 2) - i - 1) * 2);
    cubeText += "/";
    cubeText += spacer.repeat(i * 2 + 1);
    cubeText += textToCube.charAt(i + 1);
    cubeText += spacer.repeat((textToCube.length - i - 3) * 2 + 1);
    cubeText += "/";
    cubeText += spacer.repeat(i * 2 + 1);
    cubeText += textToCube.charAt(textToCube.length - (i + 2));
    cubeText += linebreak;
  }

  cubeText += textToCubeSpace;
  cubeText += spacer.repeat(Math.floor(textToCube.length / 2 - 1) * 2 + 1);
  cubeText += textToCube.charAt(textToCube.length / 2 - 1);
  cubeText += linebreak;

  for (i = 0; i < Math.floor(textToCube.length / 2 - 2); i++) {
    cubeText += textToCube.charAt(i + 1);
    cubeText += spacer.repeat(Math.floor(textToCube.length / 2 - 1) * 2 + 1);
    cubeText += textToCube.charAt(i + (textToCube.length / 2) + 1);
    cubeText += spacer.repeat((Math.floor((textToCube.length - 1) / 2 - 1)) * 2 + 1);
    cubeText += textToCube.charAt((textToCube.length) - i - 2);
    cubeText += spacer.repeat((Math.floor(textToCube.length / 2) - 1) * 2 + 1);
    cubeText += textToCube.charAt((textToCube.length / 2) - i - 2);
    cubeText += linebreak;
  }

  cubeText += textToCube.charAt(textToCube.length / 2 - 1);
  cubeText += spacer.repeat(Math.floor(textToCube.length / 2 - 1) * 2 + 1);
  cubeText += textToCubeSpace.split("").reverse().join("");
  cubeText += linebreak;

  for (i = 0; i < Math.floor(textToCube.length / 2 - 1); i++) {
    cubeText += textToCube.charAt(textToCube.length / 2 + i);
    cubeText += spacer.repeat(Math.floor((textToCube.length / 2) - i - 2) * 2 + 1);
    cubeText += "/";
    cubeText += spacer.repeat((i + Math.floor((textToCube.length - 1) / 2)) * 2 + 1);
    cubeText += textToCube.charAt(textToCube.length - (i + 2));
    cubeText += spacer.repeat(Math.floor((textToCube.length / 2) - i - 2) * 2 + 1);
    cubeText += "/";
    cubeText += linebreak;
  }

  cubeText += textToCubeSpace.split("").reverse().join("");

  console.log(cubeText);
}

program
  .version('0.0.1')
  .arguments('<text>')
  .option('-d, --dashed', 'use dashes instead of spaces')
  .action((text, options) => {
    generateCube(text, options);
  })
  .parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
