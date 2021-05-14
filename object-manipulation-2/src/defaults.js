/* exported defaults */
function defaults(target, source) {

  // for (var sourceKey in source){
  //   var isSourceKeyInTarget;

  //   for (var targetKey in target){
  //     if (sourceKey === targetKey){
  //       isSourceKeyInTarget = true;
  //     } else {
  //       isSourceKeyInTarget = false
  //     }
  //   }

  //   if (isSourceKeyInTarget == false){
  //     target[sourceKey] = source[sourceKey];
  //   }
  // }

  for (var sourceKey in source) {

    if (target[sourceKey] === undefined) {
      target[sourceKey] = source[sourceKey];
    }

  }
}
