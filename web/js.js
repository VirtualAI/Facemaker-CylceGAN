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
      var randomValue = randn_bm();
      faceMorphingWeights["plane"][1] = randomValue;
      faceMorphingWeights["lashes"][16] = randomValue;
      faceMorphingWeights["face"][2] = randomValue;
      faceMorphingWeights["eyes"][10] = randomValue;
      faceMorphingWeights["shirt"][2] = randomValue;

      faceMaps["eyes"][1]["opacity"] = 1 - randomValue;
      //  computeMorphing("all");



      //porous 50-100
      var randomValue = randn_bm();
      faceMaps["face"][3]["opacity"] = (randomValue / 2) + 1;

      //eyes
      generateEyes();

      computeMorphing("face");
      computeBlending("eyes");
      computeMorphing("lashes");
      computeMorphing("all");


      submitSingle();
  }

  function generateEyes() {

      //Color
      var blendingBalance = Math.random();
      var segmentos = 6;
      if (blendingBalance <= (1 / segmentos)) {
          faceMaps["eyes"][2]["opacity"] = 1;
          faceMaps["eyes"][3]["opacity"] = (blendingBalance - 0.00) * segmentos;
          faceMaps["eyes"][4]["opacity"] = 0;
          faceMaps["eyes"][5]["opacity"] = 0;
          faceMaps["eyes"][6]["opacity"] = 0;
          faceMaps["eyes"][7]["opacity"] = 0;
          faceMaps["eyes"][8]["opacity"] = 0;
      } else if (blendingBalance > (1 / segmentos) && blendingBalance <= (2 / segmentos)) {
          faceMaps["eyes"][2]["opacity"] = 1;
          faceMaps["eyes"][3]["opacity"] = (-(blendingBalance - 1 / segmentos) * segmentos) + 1;
          faceMaps["eyes"][4]["opacity"] = ((blendingBalance - 1 / segmentos) * segmentos);
          faceMaps["eyes"][5]["opacity"] = 0;
          faceMaps["eyes"][6]["opacity"] = 0;
          faceMaps["eyes"][7]["opacity"] = 0;
          faceMaps["eyes"][8]["opacity"] = 0;

      } else if (blendingBalance > (2 / segmentos) && blendingBalance <= (3 / segmentos)) {
          faceMaps["eyes"][2]["opacity"] = 1;
          faceMaps["eyes"][3]["opacity"] = 0;
          faceMaps["eyes"][4]["opacity"] = (-(blendingBalance - 2 / segmentos) * segmentos) + 1;
          faceMaps["eyes"][5]["opacity"] = ((blendingBalance - 2 / segmentos) * segmentos);
          faceMaps["eyes"][6]["opacity"] = 0;
          faceMaps["eyes"][7]["opacity"] = 0;
          faceMaps["eyes"][8]["opacity"] = 0;

      } else if (blendingBalance > (3 / segmentos) && blendingBalance <= (4 / segmentos)) {
          faceMaps["eyes"][2]["opacity"] = 1;
          faceMaps["eyes"][3]["opacity"] = 0;
          faceMaps["eyes"][4]["opacity"] = 0;
          faceMaps["eyes"][5]["opacity"] = 1 - ((blendingBalance - 3 / segmentos) * segmentos);
          faceMaps["eyes"][6]["opacity"] = ((blendingBalance - 3 / segmentos) * segmentos);
          faceMaps["eyes"][7]["opacity"] = 0;
          faceMaps["eyes"][8]["opacity"] = 0;

      } else if (blendingBalance > (4 / segmentos) && blendingBalance <= (5 / segmentos)) {
          faceMaps["eyes"][2]["opacity"] = 1;
          faceMaps["eyes"][3]["opacity"] = 0;
          faceMaps["eyes"][4]["opacity"] = 0;
          faceMaps["eyes"][5]["opacity"] = 0;
          faceMaps["eyes"][6]["opacity"] = 1 - ((blendingBalance - 4 / segmentos) * segmentos);
          faceMaps["eyes"][7]["opacity"] = ((blendingBalance - 4 / segmentos) * segmentos);
          faceMaps["eyes"][8]["opacity"] = 0;
      } else {
          faceMaps["eyes"][2]["opacity"] = 1;
          faceMaps["eyes"][3]["opacity"] = 0;
          faceMaps["eyes"][4]["opacity"] = 0;
          faceMaps["eyes"][5]["opacity"] = 0;
          faceMaps["eyes"][6]["opacity"] = 0;
          faceMaps["eyes"][7]["opacity"] = 1 - ((blendingBalance - 5 / segmentos) * segmentos);
          faceMaps["eyes"][8]["opacity"] = ((blendingBalance - 5 / segmentos) * segmentos);
      }

      //if(faceMaps["eyes"][2]["opacity"] < 0) { faceMaps["eyes"][2]["opacity"] = 0;}else if(faceMaps["eyes"][2]["opacity"] > 1){faceMaps["eyes"][2]["opacity"] = 1;}
      if (faceMaps["eyes"][3]["opacity"] < 0) {
          faceMaps["eyes"][3]["opacity"] = 0;
      } else if (faceMaps["eyes"][3]["opacity"] > 1) {
          faceMaps["eyes"][3]["opacity"] = 1;
      }
      if (faceMaps["eyes"][4]["opacity"] < 0) {
          faceMaps["eyes"][4]["opacity"] = 0;
      } else if (faceMaps["eyes"][4]["opacity"] > 1) {
          faceMaps["eyes"][4]["opacity"] = 1;
      }
      if (faceMaps["eyes"][5]["opacity"] < 0) {
          faceMaps["eyes"][5]["opacity"] = 0;
      } else if (faceMaps["eyes"][5]["opacity"] > 1) {
          faceMaps["eyes"][5]["opacity"] = 1;
      }
      if (faceMaps["eyes"][6]["opacity"] < 0) {
          faceMaps["eyes"][6]["opacity"] = 0;
      } else if (faceMaps["eyes"][6]["opacity"] > 1) {
          faceMaps["eyes"][6]["opacity"] = 1;
      }
      if (faceMaps["eyes"][7]["opacity"] < 0) {
          faceMaps["eyes"][7]["opacity"] = 0;
      } else if (faceMaps["eyes"][7]["opacity"] > 1) {
          faceMaps["eyes"][7]["opacity"] = 1;
      }
      if (faceMaps["eyes"][8]["opacity"] < 0) {
          faceMaps["eyes"][8]["opacity"] = 0;
      } else if (faceMaps["eyes"][8]["opacity"] > 1) {
          faceMaps["eyes"][8]["opacity"] = 1;
      }


      //eye shape 20-80
      var morphingBalance = (randn_bm() * 0.6) + 0.2;
      //var segments = 6;
      var segments = 4;
      sliderInUse = true;
      /*if (morphingBalance <= 0.16) { // droopy
          faceMorphingWeights["face"][48] = faceMorphingWeights["lashes"][12] = (-(morphingBalance - 0.00) * segments) + 1;
          faceMorphingWeights["face"][47] = faceMorphingWeights["lashes"][13] = (morphingBalance - 0.00) * segments;
          faceMorphingWeights["face"][49] = faceMorphingWeights["lashes"][14] = 0;
          faceMorphingWeights["face"][40] = faceMorphingWeights["lashes"][2] = 0;
          faceMorphingWeights["face"][50] = faceMorphingWeights["lashes"][15] = 0;
          faceMorphingWeights["face"][39] = faceMorphingWeights["lashes"][3] = 0;

      } */

      if (morphingBalance > 0.16 && morphingBalance <= 0.32) {
          faceMorphingWeights["face"][48] = faceMorphingWeights["lashes"][12] = 0;
          faceMorphingWeights["face"][47] = faceMorphingWeights["lashes"][13] = (-(morphingBalance - 1 / segments) * segments) + 1;
          faceMorphingWeights["face"][49] = faceMorphingWeights["lashes"][14] = ((morphingBalance - 1 / segments) * segments);
          faceMorphingWeights["face"][40] = faceMorphingWeights["lashes"][2] = 0;
          faceMorphingWeights["face"][50] = faceMorphingWeights["lashes"][15] = 0;
          faceMorphingWeights["face"][39] = faceMorphingWeights["lashes"][3] = 0;

      } else if (morphingBalance > 0.32 && morphingBalance <= 0.50) {
          faceMorphingWeights["face"][48] = faceMorphingWeights["lashes"][12] = 0;
          faceMorphingWeights["face"][47] = faceMorphingWeights["lashes"][13] = 0;
          faceMorphingWeights["face"][49] = faceMorphingWeights["lashes"][14] = (-(morphingBalance - 2 / segments) * segments) + 1;
          faceMorphingWeights["face"][40] = faceMorphingWeights["lashes"][2] = 0;
          faceMorphingWeights["face"][50] = faceMorphingWeights["lashes"][15] = 0;
          faceMorphingWeights["face"][39] = faceMorphingWeights["lashes"][3] = 0;

      } else if (morphingBalance > 0.50 && morphingBalance <= 0.66) {
          faceMorphingWeights["face"][48] = faceMorphingWeights["lashes"][12] = 0;
          faceMorphingWeights["face"][47] = faceMorphingWeights["lashes"][13] = 0;
          faceMorphingWeights["face"][49] = faceMorphingWeights["lashes"][14] = 0;
          faceMorphingWeights["face"][40] = faceMorphingWeights["lashes"][2] = ((morphingBalance - 3 / segments) * segments);
          faceMorphingWeights["face"][50] = faceMorphingWeights["lashes"][15] = 0;
          faceMorphingWeights["face"][39] = faceMorphingWeights["lashes"][3] = 0;

      } else if (morphingBalance > 0.66 && morphingBalance <= 0.83) {
          faceMorphingWeights["face"][48] = faceMorphingWeights["lashes"][12] = 0;
          faceMorphingWeights["face"][47] = faceMorphingWeights["lashes"][13] = 0;
          faceMorphingWeights["face"][49] = faceMorphingWeights["lashes"][14] = 0;
          faceMorphingWeights["face"][40] = faceMorphingWeights["lashes"][2] = 1 - ((morphingBalance - 4 / segments) * segments);
          faceMorphingWeights["face"][50] = faceMorphingWeights["lashes"][15] = ((morphingBalance - 4 / segments) * segments);
          faceMorphingWeights["face"][39] = faceMorphingWeights["lashes"][3] = 0;
      }

      /*else {
          faceMorphingWeights["face"][48] = faceMorphingWeights["lashes"][12] = 0;
          faceMorphingWeights["face"][47] = faceMorphingWeights["lashes"][13] = 0;
          faceMorphingWeights["face"][49] = faceMorphingWeights["lashes"][14] = 0;
          faceMorphingWeights["face"][40] = faceMorphingWeights["lashes"][2] = 0;
          faceMorphingWeights["face"][50] = faceMorphingWeights["lashes"][15] = 1 - ((morphingBalance - 5 / segments) * segments);
          faceMorphingWeights["face"][39] = faceMorphingWeights["lashes"][3] = ((morphingBalance - 5 / segments) * segments);
      }*/



  }
