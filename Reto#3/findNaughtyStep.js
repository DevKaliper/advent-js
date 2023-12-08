function findNaughtyStep(original, modified) {

    if (original === modified) {
      return '';
    }
  

    const longer = original.length > modified.length ? original : modified;
    const shorter = original.length > modified.length ? modified : original;

    for (let i = 0; i < longer.length; i++) {
      if (longer[i] !== shorter[i]) {
 
        return longer[i] 
      }
    }
  

  }