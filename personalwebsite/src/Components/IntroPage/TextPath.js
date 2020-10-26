import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RippleCircle from "./RippleCircle";
const pathStyles = makeStyles((theme) => ({
  pathAnimations: {
    clipPath: "circle(0%)",
    animation: "strokeOffset 1.5s ease-out forwards"
  },

  "@global": {
    "@keyframes strokeOffset": {
      to: {
        strokeDashoffset: 0,
        clipPath: "circle(100%)"
      }
    }
  }
}));
export default () => {
  const classes = pathStyles();
  return (
    <svg height="60px" width="250px" className={classes.pathAnimations}>
      <path stroke="black" d="M 50 50 H 16"></path>
      <g id="layer1">
        <g
          aria-label="Harris Zheng"
          transform="scale(0.88237928,1.1332995)"
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "15.88377857px",
            lineHeight: "1.25",
            fontFamily: "sans-serif",
            letterSpacing: "0px",
            wordSpacing: "0px",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: "0.39709446"
          }}
          id="text4528"
        >
          <path
            stroke="black"
            className={classes.pathAnimations}
            d="M 27.824712,35.540319 V 25.705058 H 16.960179 v 9.835261 q 0,1.105514 0.152485,1.410483 0.07624,0.152485 0.495575,0.34309 0.457454,0.152485 1.63921,0.266849 1.181756,0.114363 2.782845,0.114363 v 0.419333 H 7.0867967 v -0.419333 q 1.6392102,0 2.8209668,-0.114363 1.2198775,-0.114364 1.6392105,-0.266849 0.457454,-0.190605 0.571817,-0.419332 0.152485,-0.266849 0.152485,-1.334241 V 16.022282 q 0,-1.105514 -0.152485,-1.372362 -0.07624,-0.152485 -0.533696,-0.30497 Q 11.165762,14.192466 9.8696415,14.039981 8.6116434,13.887496 7.0867967,13.887496 V 13.506285 H 22.068416 v 0.381211 q -3.2403,0 -4.460177,0.457454 -0.381212,0.152485 -0.457454,0.30497 -0.190606,0.34309 -0.190606,1.372362 v 9.034716 h 10.864533 v -9.034716 q 0,-1.067393 -0.190606,-1.372362 -0.07624,-0.152485 -0.495575,-0.30497 -0.419333,-0.152484 -1.715453,-0.304969 -1.296119,-0.152485 -2.744724,-0.152485 v -0.381211 h 14.981619 v 0.381211 q -1.715453,0 -2.820967,0.114364 -1.105514,0.114363 -1.715452,0.34309 l -0.343091,0.152485 q -0.266848,0.266848 -0.266848,1.524847 v 19.518037 q 0,1.105514 0.152485,1.410483 0.07624,0.152485 0.457454,0.304969 1.105514,0.419333 4.536419,0.419333 v 0.419333 H 22.716475 v -0.419333 q 3.354663,0 4.460177,-0.419333 0.419333,-0.152484 0.495575,-0.304969 0.152485,-0.266848 0.152485,-1.410483 z"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "38.12116623px",
              fontFamily: '"Modern No. 20"',
              InkscapeFontSpecification: '"Modern No. 20, Normal"',
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontFeatureSettings: "normal",
              textAlign: "start",
              writingMode: "lr-tb",
              textAnchor: "start",
              strokeWidth: "0.39709446"
            }}
            id="path4569"
            //  inkscape:connector-curvature="0"
          />
          <path
            stroke="black"
            className={classes.pathAnimations}
            d="m 48.795062,34.134572 v -5.070115 q -0.457454,0.609938 -1.372362,0.762423 -0.876787,0.114363 -1.715453,0.228727 -1.105513,0.266848 -1.753573,1.219877 -0.762424,1.143635 -0.762424,3.202178 0,2.211028 0.419333,3.011572 0.457454,0.762424 1.410483,0.762424 1.448605,0 2.59224,-1.181757 1.181756,-1.219877 1.181756,-2.935329 z m 0.114363,-6.86181 v -2.211028 q 0,-1.524847 -0.495575,-2.058543 -0.495575,-0.533696 -2.134785,-0.533696 -1.334241,0 -2.325391,0.495575 -0.991151,0.495575 -1.29612,1.334241 0.152485,-0.03812 0.381212,-0.03812 0.724302,0 1.181756,0.571817 0.457454,0.571818 0.457454,1.29612 0,0.838665 -0.571818,1.372362 -0.571817,0.533696 -1.33424,0.533696 -0.495576,0 -0.876787,-0.266848 -1.105514,-0.724302 -1.105514,-1.829816 0,-0.533696 0.228727,-1.219877 0.533696,-1.486726 2.668482,-2.172907 1.524846,-0.495575 3.087814,-0.495575 2.820966,0 4.269571,1.067393 1.296119,0.953029 1.296119,2.401633 v 8.424778 q 0,2.28727 0.114364,2.820966 0.266848,1.29612 1.372362,1.29612 0.99115,0 1.334241,-1.029272 0.34309,-1.029271 0.34309,-2.973451 0,-0.533696 -0.03812,-1.067392 0,-0.533697 0,-1.105514 v -0.343091 h 0.419333 v 1.677332 q 0,0.800544 0.03812,1.524846 0,2.211028 -0.533696,2.973451 -0.686181,0.953029 -2.782845,0.953029 -1.639211,0 -2.439755,-0.571817 -0.953029,-0.686181 -1.257999,-2.325391 -0.800544,1.867937 -2.401633,2.515997 -0.953029,0.381211 -2.554118,0.381211 -1.601089,0 -2.782845,-0.762423 -1.639211,-1.029271 -1.639211,-3.125936 0,-2.058543 1.601089,-3.469026 1.601089,-1.372362 3.888359,-1.562967 2.28727,-0.190606 3.087815,-0.609939 0.800544,-0.419333 0.800544,-1.867937 z"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "38.12116623px",
              fontFamily: '"Modern No. 20"',
              InkscapeFontSpecification: '"Modern No. 20, Normal"',
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontFeatureSettings: "normal",
              textAlign: "start",
              writingMode: "lr-tb",
              textAnchor: "start",
              strokeWidth: "0.39709446"
            }}
            id="path4571"
          />
          <path
            stroke="black"
            className={classes.pathAnimations}
            d="m 60.379726,24.642401 q 0,-0.762423 -0.152485,-0.953029 -0.266848,-0.381212 -0.495575,-0.457454 -0.686181,-0.190606 -3.125936,-0.190606 v -0.381211 l 7.357385,-0.571818 v 4.803267 q 0.152485,-1.562968 1.067393,-2.93533 1.257999,-1.906058 3.164057,-1.906058 0.724302,0 1.562968,0.495575 0.838665,0.457454 1.105514,1.181756 0.304969,0.724302 0.304969,1.29612 0,1.524847 -1.257999,2.096664 -0.304969,0.152485 -0.800544,0.152485 -0.762423,0 -1.29612,-0.533697 -0.533696,-0.533696 -0.533696,-1.601089 0,-0.686181 0.495575,-1.372362 0.533696,-0.686181 1.219877,-0.533696 -0.228727,-0.762423 -1.372362,-0.762423 -1.105513,0 -2.211027,1.601089 -1.448605,2.058543 -1.448605,5.298842 v 7.090537 q 0,0.762423 0.114364,0.99115 0.07624,0.114364 0.34309,0.228727 0.800545,0.266848 3.316542,0.266848 V 38.3279 H 56.60573 v -0.381212 q 1.105514,0 1.982301,-0.07624 0.914908,-0.07624 1.562968,-0.304969 0.228727,-0.190606 0.228727,-1.105514 z"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "38.12116623px",
              fontFamily: '"Modern No. 20"',
              InkscapeFontSpecification: '"Modern No. 20, Normal"',
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontFeatureSettings: "normal",
              textAlign: "start",
              writingMode: "lr-tb",
              textAnchor: "start",
              strokeWidth: "0.39709446"
            }}
            id="path4573"
          />
          <path
            stroke="black"
            className={classes.pathAnimations}
            d="m 75.345264,24.642401 q 0,-0.762423 -0.152485,-0.953029 -0.266848,-0.381212 -0.495575,-0.457454 -0.686181,-0.190606 -3.125936,-0.190606 v -0.381211 l 7.357385,-0.571818 v 4.803267 q 0.152485,-1.562968 1.067393,-2.93533 1.257999,-1.906058 3.164057,-1.906058 0.724302,0 1.562968,0.495575 0.838665,0.457454 1.105514,1.181756 0.304969,0.724302 0.304969,1.29612 0,1.524847 -1.257999,2.096664 -0.304969,0.152485 -0.800544,0.152485 -0.762423,0 -1.29612,-0.533697 -0.533696,-0.533696 -0.533696,-1.601089 0,-0.686181 0.495575,-1.372362 0.533696,-0.686181 1.219877,-0.533696 -0.228727,-0.762423 -1.372362,-0.762423 -1.105513,0 -2.211027,1.601089 -1.448605,2.058543 -1.448605,5.298842 v 7.090537 q 0,0.762423 0.114364,0.99115 0.07624,0.114364 0.34309,0.228727 0.800545,0.266848 3.316542,0.266848 V 38.3279 H 71.571268 v -0.381212 q 1.105514,0 1.982301,-0.07624 0.914908,-0.07624 1.562968,-0.304969 0.228727,-0.190606 0.228727,-1.105514 z"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "38.12116623px",
              fontFamily: '"Modern No. 20"',
              InkscapeFontSpecification: '"Modern No. 20, Normal"',
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontFeatureSettings: "normal",
              textAlign: "start",
              writingMode: "lr-tb",
              textAnchor: "start",
              strokeWidth: "0.39709446"
            }}
            id="path4575"
          />
          <path
            stroke="black"
            className={classes.pathAnimations}
            d="m 93.894191,22.088283 v 14.37168 q 0,0.762423 0.114364,0.99115 0.07624,0.114364 0.34309,0.228727 0.800545,0.266848 3.316542,0.266848 V 38.3279 H 86.536806 v -0.381212 q 1.105514,0 1.982301,-0.07624 0.914908,-0.07624 1.562968,-0.304969 0.228727,-0.190606 0.228727,-1.105514 V 24.642401 q 0,-0.724302 -0.152485,-0.914908 -0.266848,-0.381211 -0.495575,-0.457454 -0.686181,-0.190606 -3.125936,-0.190606 V 22.698222 Z M 91.87377,13.434778 q 0.914908,0 1.524846,0.609939 0.609939,0.609939 0.609939,1.524847 0,0.914908 -0.609939,1.524846 -0.609938,0.609939 -1.524846,0.609939 -0.914908,0 -1.524847,-0.609939 -0.609939,-0.609938 -0.609939,-1.524846 0,-0.914908 0.609939,-1.524847 0.609939,-0.609939 1.524847,-0.609939 z"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "38.12116623px",
              fontFamily: '"Modern No. 20"',
              InkscapeFontSpecification: '"Modern No. 20, Normal"',
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontFeatureSettings: "normal",
              textAlign: "start",
              writingMode: "lr-tb",
              textAnchor: "start",
              strokeWidth: "0.39709446"
            }}
            id="path4577"
          />
          <path
            stroke="black"
            className={classes.pathAnimations}
            d="m 107.97281,23.231918 q 1.48673,-1.105514 1.56297,-1.181756 v 5.718175 l -0.34309,-0.07624 q -0.53369,-2.28727 -1.90606,-3.735875 -1.48672,-1.562968 -3.27842,-1.562968 -1.37236,0 -2.24915,0.533697 -1.18175,0.724302 -1.18175,2.401633 0,1.372362 1.29612,2.134786 0.91491,0.533696 3.65963,1.181756 2.74472,0.64806 3.85024,1.524846 1.56297,1.219878 1.56297,3.888359 0,2.477876 -1.67734,3.659632 -1.33424,0.953029 -3.35466,0.953029 -1.67733,0 -2.40163,-0.228727 -1.06739,-0.34309 -2.32539,-1.63921 -1.52485,1.791695 -1.601092,1.867937 v -6.747446 h 0.266848 q 0.648064,2.363512 1.067394,3.27842 0.57182,1.257999 1.21988,1.867937 0.87678,0.838666 1.63921,1.067393 0.80054,0.190606 2.36351,0.190606 1.18175,0 1.94418,-0.609939 0.91491,-0.724302 0.91491,-2.058543 0,-1.715452 -1.21988,-2.554118 -0.95303,-0.64806 -3.39279,-1.143635 -2.40163,-0.495575 -3.73587,-1.601089 -1.601089,-1.334241 -1.601089,-3.545268 0,-1.982301 1.334239,-3.354663 1.37236,-1.410483 3.31654,-1.410483 1.48673,0 2.59224,0.495575 1.44861,0.64806 1.67733,0.686181 z"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "38.12116623px",
              fontFamily: '"Modern No. 20"',
              InkscapeFontSpecification: '"Modern No. 20, Normal"',
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontFeatureSettings: "normal",
              textAlign: "start",
              writingMode: "lr-tb",
              textAnchor: "start",
              strokeWidth: "0.39709446"
            }}
            id="path4579"
          />
          <path
            stroke="black"
            className={classes.pathAnimations}
            d="m 142.38491,38.3279 h -21.30974 l 13.53302,-20.776036 q 1.82981,-2.820966 1.82981,-3.087814 0,-0.343091 -1.258,-0.343091 -5.37508,0 -6.93805,0.95303 -2.78284,1.715452 -3.50714,8.19605 h -0.5337 v -9.530291 h 18.33628 l -13.53301,20.776035 q -1.82982,2.782845 -1.82982,3.011572 0,0.30497 1.18176,0.30497 5.2226,0 6.82368,-0.30497 3.01158,-0.571817 4.46018,-2.744724 1.63921,-2.439754 2.21103,-7.967323 h 0.5337 z"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "38.12116623px",
              fontFamily: '"Modern No. 20"',
              InkscapeFontSpecification: '"Modern No. 20, Normal"',
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontFeatureSettings: "normal",
              textAlign: "start",
              writingMode: "lr-tb",
              textAnchor: "start",
              strokeWidth: "0.39709446"
            }}
            id="path4581"
          />
          <path
            stroke="black"
            className={classes.pathAnimations}
            d="m 150.10802,28.83573 v 7.624233 q 0,0.762423 0.11436,0.99115 0.0763,0.114364 0.34309,0.228727 0.30497,0.114364 1.02928,0.190606 0.76242,0.07624 1.33424,0.07624 V 38.3279 h -10.17835 v -0.381212 q 1.10551,0 1.9823,-0.07624 0.9149,-0.07624 1.56296,-0.304969 0.22873,-0.190606 0.22873,-1.105514 v -19.93737 q 0,-0.495575 -0.0381,-0.838666 0,-0.34309 -0.15248,-0.533696 -0.26685,-0.381212 -0.49558,-0.457454 -0.68618,-0.190606 -3.04969,-0.190606 v -0.381212 l 7.31926,-0.648059 v 13.456771 q 0.22873,-1.524846 1.10551,-2.93533 1.10552,-1.753573 2.63036,-1.906058 0.30497,0 0.64806,-0.03812 0.38122,-0.03812 0.5337,-0.03812 2.66848,0 4.00272,1.448604 1.0674,1.181756 1.0674,2.897209 v 10.102109 q 0,0.762423 0.11436,0.99115 0.0762,0.114364 0.38121,0.228727 0.30497,0.114364 1.10552,0.190606 0.80054,0.07624 1.60108,0.07624 V 38.3279 h -9.83526 v -0.381212 q 0.60994,0 1.41049,-0.07624 0.80054,-0.07624 1.41048,-0.304969 0.22873,-0.190606 0.22873,-1.105514 V 26.167248 q 0,-1.63921 -0.34309,-2.439755 -0.5337,-1.257998 -2.02043,-1.257998 -1.60108,0 -2.74472,2.096664 -0.95303,1.753574 -1.29612,4.269571 z"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "38.12116623px",
              fontFamily: '"Modern No. 20"',
              InkscapeFontSpecification: '"Modern No. 20, Normal"',
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontFeatureSettings: "normal",
              textAlign: "start",
              writingMode: "lr-tb",
              textAnchor: "start",
              strokeWidth: "0.39709446"
            }}
            id="path4583"
          />
          <path
            stroke="black"
            className={classes.pathAnimations}
            d="m 168.08751,30.47494 q 0,4.078964 0.95303,5.90878 0.99115,1.829816 2.97345,1.829816 2.09666,0 3.69775,-1.410483 1.94418,-1.715452 1.94418,-4.650782 h 0.34309 q 0,2.859087 -1.82981,4.688903 -1.82982,1.829816 -4.87951,1.829816 -2.55412,0 -4.65079,-1.944179 -2.47787,-2.28727 -2.47787,-5.985023 0,-4.002723 2.43975,-6.51872 2.13479,-2.172906 4.80327,-2.172906 2.47788,0 4.11709,1.448604 2.40163,2.134786 2.40163,6.976174 z m 6.63308,-0.495575 q 0,-3.659632 -0.68618,-5.565691 -0.64806,-1.944179 -2.13478,-1.944179 -2.09667,0 -2.97346,1.829816 -0.83866,1.829816 -0.83866,5.680054 z"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "38.12116623px",
              fontFamily: '"Modern No. 20"',
              InkscapeFontSpecification: '"Modern No. 20, Normal"',
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontFeatureSettings: "normal",
              textAlign: "start",
              writingMode: "lr-tb",
              textAnchor: "start",
              strokeWidth: "0.39709446"
            }}
            id="path4585"
          />
          <path
            stroke="black"
            className={classes.pathAnimations}
            d="m 186.09738,28.988214 v 7.471749 q 0,0.762423 0.11436,0.99115 0.0762,0.114364 0.34309,0.228727 0.30497,0.114364 1.02927,0.190606 0.76243,0.07624 1.33425,0.07624 V 38.3279 h -9.75902 v -0.381212 q 0.83866,0 1.63921,-0.07624 0.83866,-0.07624 1.48672,-0.304969 0.22873,-0.190606 0.22873,-1.105514 V 24.909249 q 0,-0.34309 -0.0381,-0.686181 0,-0.34309 -0.15249,-0.533696 l -0.22872,-0.381212 q -0.38122,-0.266848 -2.89721,-0.266848 v -0.381211 l 6.89993,-0.64806 v 4.91763 q 0.22873,-1.63921 0.99115,-2.897208 1.06739,-1.753574 2.24915,-1.867938 1.18175,-0.152484 1.52484,-0.152484 2.40164,0 3.81212,1.448604 1.18176,1.219877 1.18176,2.897209 v 10.102109 q 0,0.762423 0.11436,0.99115 0.0762,0.114364 0.38121,0.228727 0.30497,0.114364 1.10552,0.190606 0.80054,0.07624 1.52484,0.07624 V 38.3279 h -9.75902 v -0.381212 q 0.60994,0 1.41049,-0.07624 0.80054,-0.07624 1.41048,-0.304969 0.22873,-0.190606 0.22873,-1.105514 v -9.644655 q 0,-1.829816 -0.30497,-2.782845 -0.49558,-1.562968 -1.82982,-1.562968 -1.75357,0 -2.85908,2.172906 -0.83867,1.63921 -1.18176,4.345813 z"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "38.12116623px",
              fontFamily: '"Modern No. 20"',
              InkscapeFontSpecification: '"Modern No. 20, Normal"',
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontFeatureSettings: "normal",
              textAlign: "start",
              writingMode: "lr-tb",
              textAnchor: "start",
              strokeWidth: "0.39709446"
            }}
            id="path4587"
          />
          <path
            stroke="black"
            className={classes.pathAnimations}
            d="m 203.33231,31.847302 q -1.21987,-0.609939 -1.90605,-1.601089 -0.68618,-0.991151 -0.68618,-2.439755 0,-2.439755 2.21102,-4.155207 2.02043,-1.562968 4.46018,-1.562968 0.7243,0 1.52485,0.190606 0.80054,0.190606 1.48672,0.495575 v -0.914908 q 0,-1.791695 0.60994,-2.325391 0.64806,-0.571818 1.94418,-0.571818 0.57182,0 0.99115,0.381212 0.41933,0.381212 0.41933,0.99115 0,1.334241 -1.258,1.334241 -1.29611,0 -1.29611,-1.219877 0,-0.228727 0.0762,-0.419333 0.0762,-0.190606 0.1906,-0.381212 -0.76242,0.114364 -1.02927,0.686181 -0.22873,0.533697 -0.22873,1.486726 0.0381,0.800544 0.0381,1.181756 1.48672,0.724302 2.32539,1.906058 0.87678,1.181757 0.87678,2.744724 0,2.325392 -2.21102,3.812117 -1.9823,1.334241 -4.46018,1.334241 -1.75357,0 -3.31654,-0.609939 -1.33424,0 -2.17291,0.419333 -1.10551,0.571817 -1.10551,1.867937 0,0.571818 0.95303,0.876787 0.91491,0.34309 3.58339,0.34309 h 2.21102 q 3.39279,0 5.14636,0.914908 2.21103,1.143635 2.21103,3.812117 0,2.820966 -2.02042,4.345813 -1.9823,1.524847 -5.2226,1.524847 -3.85024,0 -6.13751,-1.29612 -2.28727,-1.257998 -2.28727,-2.897209 0,-1.067392 1.258,-1.791694 0.87679,-0.495576 2.74472,-1.029272 -1.67733,-0.609939 -2.47787,-1.29612 -1.10552,-0.953029 -1.10552,-2.477875 0,-1.601089 0.95303,-2.630361 0.95303,-1.029271 2.7066,-1.029271 z m 7.35739,-4.383934 q 0,-2.401634 -0.64806,-3.58339 -0.76242,-1.410483 -2.63036,-1.410483 -1.71545,0 -2.516,1.334241 -0.76242,1.33424 -0.76242,3.659632 0,2.668481 0.64806,3.812116 0.68618,1.143635 2.63036,1.143635 1.75357,0 2.516,-1.181756 0.76242,-1.219877 0.76242,-3.773995 z m -2.78285,18.488765 q 2.59224,0 4.00273,-1.067392 1.4486,-1.067393 1.4486,-2.59224 0,-1.829816 -1.18175,-2.477876 -1.14364,-0.648059 -4.26958,-0.648059 -3.58338,0 -4.91763,0.800544 -1.14363,0.686181 -1.14363,2.363512 0,1.601089 0.91491,2.401634 1.41048,1.219877 5.14635,1.219877 z"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "38.12116623px",
              fontFamily: '"Modern No. 20"',
              InkscapeFontSpecification: '"Modern No. 20, Normal"',
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontFeatureSettings: "normal",
              textAlign: "start",
              writingMode: "lr-tb",
              textAnchor: "start",
              strokeWidth: "0.39709446"
            }}
            id="path4589"
          />
        </g>
      </g>
    </svg>
  );
};