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


      //nose catilage
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][51] = morphingBalance * -1;
          faceMorphingWeights["face"][52] = 0;
      } else {
          faceMorphingWeights["face"][52] = morphingBalance;
          faceMorphingWeights["face"][51] = 0;
      }


      //gender
      var randomValue = randn_bm();
      faceMorphingWeights["face"][1] = randomValue;
      faceMorphingWeights["shirt"][1] = randomValue;
      faceMorphingWeights["lashes"][21] = randomValue;
      faceMaps["face"][4]["opacity"] = randomValue;
      faceMaps["lashes"][0]["opacity"] = 1 - randomValue;
      faceMaps["lashes"][1]["opacity"] = randomValue;

      //porous 50-100
      var randomValue = randn_bm();
      faceMaps["face"][3]["opacity"] = (randomValue / 2) + 1;

      //eyes
      generateEyes();

      //forehead height
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][3] = morphingBalance * -1;
          faceMorphingWeights["face"][4] = 0;
      } else {
          faceMorphingWeights["face"][4] = morphingBalance;
          faceMorphingWeights["face"][3] = 0;
      }
      //cheecksbone
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][19] = morphingBalance * -1;
          faceMorphingWeights["face"][20] = 0;
      } else {
          faceMorphingWeights["face"][20] = morphingBalance;
          faceMorphingWeights["face"][19] = 0;
      }

      //jaw shape
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][31] = morphingBalance * -1;
          faceMorphingWeights["face"][32] = 0;
      } else {
          faceMorphingWeights["face"][32] = morphingBalance;
          faceMorphingWeights["face"][31] = 0;
      }


      //jaw chin
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][27] = morphingBalance * -1;
          faceMorphingWeights["face"][28] = 0;
      } else {
          faceMorphingWeights["face"][28] = morphingBalance;
          faceMorphingWeights["face"][27] = 0;
      }

      //jaw lenght
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][30] = morphingBalance * -1;
          faceMorphingWeights["face"][29] = 0;
      } else {
          faceMorphingWeights["face"][29] = morphingBalance;
          faceMorphingWeights["face"][30] = 0;
      }
      //throat size
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][33] = morphingBalance * -1;
          faceMorphingWeights["face"][34] = 0;
      } else {
          faceMorphingWeights["face"][34] = morphingBalance;
          faceMorphingWeights["face"][33] = 0;
      }


      //ear size
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      console.log(morphingBalance);
      if (morphingBalance < 0 && morphingBalance >= -0.5) {
          faceMorphingWeights["face"][35] = morphingBalance * -1;
          faceMorphingWeights["face"][36] = 0;
      } else {
          faceMorphingWeights["face"][36] = morphingBalance;
          faceMorphingWeights["face"][35] = 0;
      }

      //mouth volume
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][23] = morphingBalance * -1;
          faceMorphingWeights["face"][24] = 0;
      } else {
          faceMorphingWeights["face"][24] = morphingBalance;
          faceMorphingWeights["face"][23] = 0;
      }

      //lip ratio
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][22] = morphingBalance * -1;
          faceMorphingWeights["face"][21] = 0;
      } else {
          faceMorphingWeights["face"][21] = morphingBalance;
          faceMorphingWeights["face"][22] = 0;
      }

      //mouth overlap
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][61] = morphingBalance * -1;
          faceMorphingWeights["face"][62] = 0;
      } else {
          faceMorphingWeights["face"][62] = morphingBalance;
          faceMorphingWeights["face"][61] = 0;
      }

      //moth wide
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][60] = morphingBalance * -1;
          faceMorphingWeights["face"][59] = 0;
      } else {
          faceMorphingWeights["face"][59] = morphingBalance;
          faceMorphingWeights["face"][60] = 0;
      }

      //mouth height
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][26] = morphingBalance * -1;
          faceMorphingWeights["face"][25] = 0;
      } else {
          faceMorphingWeights["face"][25] = morphingBalance;
          faceMorphingWeights["face"][26] = 0;
      }

      //mouth depth
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][53] = morphingBalance * -1;
          faceMorphingWeights["face"][54] = 0;
      } else {
          faceMorphingWeights["face"][54] = morphingBalance;
          faceMorphingWeights["face"][53] = 0;
      }


      //hair color

      var blendingBalance = Math.random();

      if (blendingBalance <= 0.25) {
          faceMaps["face"][5]["opacity"] = 1;
          faceMaps["face"][6]["opacity"] = (blendingBalance - 0.00) * 4;
          faceMaps["face"][7]["opacity"] = 0;
          faceMaps["face"][8]["opacity"] = 0;
          faceMaps["face"][9]["opacity"] = 0;
      } else if (blendingBalance > 0.25 && blendingBalance <= 0.50) {
          faceMaps["face"][5]["opacity"] = (blendingBalance - 0.00) * 4;
          faceMaps["face"][6]["opacity"] = (blendingBalance - 0.00) * 4;
          faceMaps["face"][7]["opacity"] = (blendingBalance - 0.25) * 4;
          faceMaps["face"][8]["opacity"] = 0;
          faceMaps["face"][9]["opacity"] = 0;
      } else if (blendingBalance > 0.50 && blendingBalance <= 0.75) {
          faceMaps["face"][5]["opacity"] = (blendingBalance - 0.00) * 4;
          faceMaps["face"][6]["opacity"] = (blendingBalance - 0.00) * 4;
          faceMaps["face"][7]["opacity"] = (blendingBalance - 0.25) * 4;
          faceMaps["face"][8]["opacity"] = (blendingBalance - 0.50) * 4;
          faceMaps["face"][9]["opacity"] = 0;
      } else {
          faceMaps["face"][5]["opacity"] = (blendingBalance - 0.00) * 4;
          faceMaps["face"][6]["opacity"] = (blendingBalance - 0.00) * 4;
          faceMaps["face"][7]["opacity"] = (blendingBalance - 0.25) * 4;
          faceMaps["face"][8]["opacity"] = (blendingBalance - 0.50) * 4;
          faceMaps["face"][9]["opacity"] = (blendingBalance - 0.75) * 4;
      }

      for (var i = 0; i < 5; i++) {
          if (faceMaps["face"][5 + i]["opacity"] >= 1) faceMaps["face"][5 + i]["opacity"] = -faceMaps["face"][5 + i]["opacity"] + 2;
          if (faceMaps["face"][5 + i]["opacity"] < 0) faceMaps["face"][5 + i]["opacity"] = 0;
      }

      computeMorphing("all");
      computeBlending("all");
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

      //eye opening
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      console.log(morphingBalance);
      if (morphingBalance < 0 && morphingBalance >= -0.5) {
          faceMorphingWeights["face"][55] = faceMorphingWeights["lashes"][17] = 0;
          faceMorphingWeights["face"][56] = faceMorphingWeights["lashes"][18] = morphingBalance * -1;
      } else {
          faceMorphingWeights["face"][56] = faceMorphingWeights["lashes"][18] = 0;
          faceMorphingWeights["face"][55] = faceMorphingWeights["lashes"][17] = morphingBalance;
      }

      //eye size 20-60
      var randomValue = randn_bm();
      randomValue = randomValue * 0.4;
      randomValue = randomValue + 0.2;
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      console.log(morphingBalance);
      if (morphingBalance < 0 && morphingBalance >= -0.4) {
          faceMorphingWeights["face"][43] = faceMorphingWeights["lashes"][7] = faceMorphingWeights["eyes"][2] = faceMorphingWeights["eyes"][2] = morphingBalance * -1;
          faceMorphingWeights["face"][44] = faceMorphingWeights["lashes"][6] = faceMorphingWeights["eyes"][3] = faceMorphingWeights["eyes"][3] = 0;
      } else {
          faceMorphingWeights["face"][44] = faceMorphingWeights["lashes"][6] = faceMorphingWeights["eyes"][3] = faceMorphingWeights["eyes"][3] = morphingBalance;
          faceMorphingWeights["face"][43] = faceMorphingWeights["lashes"][7] = faceMorphingWeights["eyes"][2] = faceMorphingWeights["eyes"][2] = 0;
      }

      //eye hight
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      console.log("Morphing Balance", morphingBalance);
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][37] = faceMorphingWeights["lashes"][9] = faceMorphingWeights["eyes"][4] = faceMorphingWeights["eyes"][4] = 0;
          faceMorphingWeights["face"][38] = faceMorphingWeights["lashes"][8] = faceMorphingWeights["eyes"][5] = faceMorphingWeights["eyes"][5] = morphingBalance * -1;
      } else if (morphingBalance > 0 && morphingBalance <= 0.6) {
          faceMorphingWeights["face"][38] = faceMorphingWeights["lashes"][8] = faceMorphingWeights["eyes"][5] = faceMorphingWeights["eyes"][5] = 0;
          faceMorphingWeights["face"][37] = faceMorphingWeights["lashes"][9] = faceMorphingWeights["eyes"][4] = faceMorphingWeights["eyes"][4] = morphingBalance;
      }
      //eye distance
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      console.log("Morphing Balance", morphingBalance);
      if (morphingBalance < 0 && morphingBalance >= -0.5) {
          faceMorphingWeights["face"][46] = faceMorphingWeights["lashes"][10] = faceMorphingWeights["eyes"][7] = faceMorphingWeights["eyes"][7] = morphingBalance * -1;
          faceMorphingWeights["face"][45] = faceMorphingWeights["lashes"][11] = faceMorphingWeights["eyes"][6] = faceMorphingWeights["eyes"][6] = 0;
      } else if (morphingBalance > 0 && morphingBalance <= 0.6) {
          faceMorphingWeights["face"][45] = faceMorphingWeights["lashes"][11] = faceMorphingWeights["eyes"][6] = faceMorphingWeights["eyes"][6] = morphingBalance;
          faceMorphingWeights["face"][46] = faceMorphingWeights["lashes"][10] = faceMorphingWeights["eyes"][7] = faceMorphingWeights["eyes"][7] = 0;
      }


      //eye depth
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      console.log(morphingBalance);
      if (morphingBalance < 0) {
          faceMorphingWeights["face"][41] = faceMorphingWeights["lashes"][4] = faceMorphingWeights["eyes"][9] = faceMorphingWeights["eyes"][9] = morphingBalance * -1;
          faceMorphingWeights["face"][42] = faceMorphingWeights["lashes"][5] = faceMorphingWeights["eyes"][8] = faceMorphingWeights["eyes"][8] = 0;
      } else {
          faceMorphingWeights["face"][42] = faceMorphingWeights["lashes"][5] = faceMorphingWeights["eyes"][8] = faceMorphingWeights["eyes"][8] = morphingBalance;
          faceMorphingWeights["face"][41] = faceMorphingWeights["lashes"][4] = faceMorphingWeights["eyes"][9] = faceMorphingWeights["eyes"][9] = 0;
      }

      //eye rotation
      var randomValue = randn_bm();
      var morphingBalance = (1 - ((randomValue) + 0.5)) * 2;
      console.log(morphingBalance);
      if (morphingBalance < 0 && morphingBalance >= -0.55) {
          faceMorphingWeights["face"][57] = faceMorphingWeights["lashes"][19] = morphingBalance * -1;
          faceMorphingWeights["face"][58] = faceMorphingWeights["lashes"][20] = 0;
      } else if (morphingBalance > 0 && morphingBalance <= 0.75) {
          faceMorphingWeights["face"][58] = faceMorphingWeights["lashes"][20] = morphingBalance;
          faceMorphingWeights["face"][57] = faceMorphingWeights["lashes"][19] = 0;
      }

      //eye brow shape
      var randomValue = randn_bm();
      var morphingBalance = randomValue;

      if (morphingBalance <= 0.25) {
          faceMorphingWeights["face"][6] = -(morphingBalance - 0.25) * 4;
          faceMorphingWeights["face"][10] = (morphingBalance) * 4;
          faceMorphingWeights["face"][9] = 0;
          faceMorphingWeights["face"][5] = 0;
      } else if (morphingBalance > 0.25 && morphingBalance <= 0.50) {
          faceMorphingWeights["face"][6] = 0;
          faceMorphingWeights["face"][10] = -(morphingBalance - 0.50) * 4;
          faceMorphingWeights["face"][9] = 0;
          faceMorphingWeights["face"][5] = 0;
      } else if (morphingBalance > 0.50 && morphingBalance <= 0.75) {
          faceMorphingWeights["face"][6] = 0;
          faceMorphingWeights["face"][10] = 0;
          faceMorphingWeights["face"][9] = (morphingBalance - 0.50) * 4;
          faceMorphingWeights["face"][5] = 0;
      } else {
          faceMorphingWeights["face"][6] = 0;
          faceMorphingWeights["face"][10] = 0;
          faceMorphingWeights["face"][9] = -(morphingBalance - 1.00) * 4;
          faceMorphingWeights["face"][5] = (morphingBalance - 0.75) * 4;
      }
  }

  function dataURLtoBlob(dataurl) {
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
      while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {
          type: mime
      });
  }
