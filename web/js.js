  // Standard Normal variate using Box-Muller transform.
  function randn_bm() {
      var u = 0,
          v = 0;
      while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
      while (v === 0) v = Math.random();
      return (Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)) / 5 + 0.5;
  }



  function generateRandom() {
      console.log("JS FILE");




      //Nose
      var randomValue = randn_bm();
      console.log(randomValue);
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][16] = morphingBalance * -1;
          faceMorphingWeights["face"][15] = 0;
      } else {
          faceMorphingWeights["face"][15] = morphingBalance;
          faceMorphingWeights["face"][16] = 0;
      }

      var randomValue = randn_bm();

      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][12] = morphingBalance * -1;
          faceMorphingWeights["face"][11] = 0;
      } else {
          faceMorphingWeights["face"][11] = morphingBalance;
          faceMorphingWeights["face"][12] = 0;
      }

      var randomValue = randn_bm();

      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][14] = morphingBalance * -1;
          faceMorphingWeights["face"][13] = 0;
      } else {
          faceMorphingWeights["face"][13] = morphingBalance;
          faceMorphingWeights["face"][14] = 0;
      }

      var randomValue = randn_bm();

      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][17] = morphingBalance * -1;
          faceMorphingWeights["face"][18] = 0;
      } else {
          faceMorphingWeights["face"][18] = morphingBalance;
          faceMorphingWeights["face"][17] = 0;
      }

      //gender
      //  var randomValue = randn_bm();
      //faceMorphingWeights["plane"][1] = randomValue;
      //faceMorphingWeights["lashes"][16] = randomValue;
      //faceMorphingWeights["face"][2] = randomValue;
      //faceMorphingWeights["eyes"][10] = randomValue;
      //faceMorphingWeights["shirt"][2] = randomValue;

      //faceMaps["eyes"][1]["opacity"] = 1 - randomValue;
      //  computeMorphing("all");



      //gender

      //  setDataCookie("noseShape", randomValue);
      //increaseCountOf("noseShape", "Clk");

      //nose 1615 1211 1413 1718



      computeMorphing("face");



      submitSingle();
  }
