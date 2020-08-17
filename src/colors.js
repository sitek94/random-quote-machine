import tinycolor from 'tinycolor2';

function createColorObject(color) {
  return {
    main: color,
    // Darken primary color using TinyColor
    dark: tinycolor(color).darken(4).toString()
  };
}

export default [
  // Sunflower yellow
  { ...createColorObject("#FFC312") }, 
  // Orange
  { ...createColorObject("#EE5A24") },
  // Mint green
  { ...createColorObject("#2ed573") },
  // Grass green
  { ...createColorObject("#009432") },
  // Blue martina
  { ...createColorObject("#12CBC4") },
  // Blue marine
  { ...createColorObject("#0652DD") },
  // Turqish aqua
  { ...createColorObject("#006266") },
  // Lightpurple circumorbital
  { ...createColorObject("#5758BB") },
  // Berry
  { ...createColorObject("#ED4C67") },
  // Magenta
  { ...createColorObject("#6F1E51") },
  // Dark gray
  { ...createColorObject("#2d3436") },
  // Red pigment
  { ...createColorObject("#EA2027") },
];


