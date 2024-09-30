const { merge, isErrorResult } = require('openapi-merge');
const fs = require('fs');
const yaml = require('js-yaml');

function loadJsonFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
}

function parseYmlStr(ymlStr) {
  // parse string to object
  return yaml.load(ymlStr);
}

function parseOpenApiList(list) {
  const openApiList = list.map((item) => {
    return parseYmlStr(item.yml);
  });

  return openApiList;
}

function main() {
  const list = loadJsonFile('./api/v2/api.json');
  const openApiList = parseOpenApiList(list[0].data);

  const openApiOptions = openApiList.map((item) => {
    return {
      oas: item,
    }
  });
  
  const mergeResult = merge(openApiOptions);

  if (isErrorResult(mergeResult)) {
    // Oops, something went wrong
    console.error(`${mergeResult.message} (${mergeResult.type})`);
  } else {
    console.log(`Merge successful!`);
  }

  // Save the merged OpenAPI document to openapi.yml
  fs.writeFileSync('./openapi.yml', yaml.dump(mergeResult.output));
}

main();