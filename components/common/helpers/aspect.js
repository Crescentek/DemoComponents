const aspectFill = (aspectSize, minimumSize) => {

    
  // let minimumWidth = Math.min(width, splashWidth);
  // let minimumHeight = Math.min(height, splashHeight);
  let mW = minimumSize.width / aspectSize.width;
  let mH = minimumSize.height / aspectSize.height;

  let finalHeight = minimumSize.height;
  let finalWidth = minimumSize.width;
  if( mH > mW ) {
    finalWidth = minimumSize.height / aspectSize.height * aspectSize.width;
  }
  else if( mW > mH ) {
    finalHeight = minimumSize.width / aspectSize.width * aspectSize.height;
  }

  return {
    finalWidth,
    finalHeight,
  };

}

export { aspectFill };