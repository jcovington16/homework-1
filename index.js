import fetch from 'node-fetch';
// Recommend using node-fetch for those familiar with JS fetch

const COLORS = 'https://nt-cdn.s3.amazonaws.com/colors.json';

/**
 * @param name filter for color name
 * @param hex filter for color hex code
 * @param compName filter for complementary color name
 * @param compHex filter for complementary color hex code
 * @returns Promise
 */
const fetchColors = async ({ name, hex, compName, compHex }) => {
  try {
    const response = await fetch(COLORS);

    if (!response.ok) {
      throw new Error('Something went wrong with the network response.');
    }

    const colors = await response.json();

    // We want to filter everything if those respective params exist.
    let filteredColors = colors;

    // Filter by name
    if (name) {
      filteredColors = filteredColors.filter(color =>
        color.name.toLowerCase().includes(name.toLowerCase())
      );
      console.log('Filtered by name:', filteredColors);  // Debugging
    }

    // Filter by hex code
    if (hex) {
      filteredColors = filteredColors.filter(color => color.hex.toLowerCase() === hex.toLowerCase());
      console.log('Filtered by hex:', filteredColors);  // Debugging
    }

    // Filter by comp color name
    if (compName) {
      filteredColors = filteredColors.filter(color => 
        color.comp && color.comp.some(c => c.name.toLowerCase().includes(compName.toLowerCase()))
      );
      console.log('Filtered by complementary name:', filteredColors);  // Debugging
    }

    // Filter by comp color hex code
    if (compHex) {
      filteredColors = filteredColors.filter(color => 
        color.comp && color.comp.some(c => c.hex.toLowerCase() === compHex.toLowerCase())
      );
      console.log('Filtered by complementary hex:', filteredColors);  // Debugging
    }

    // Debugging: Check the filtered results
    console.log('Final filtered colors:', filteredColors);

    return filteredColors;

  } catch (error) {
    console.error('Failed to fetch the requested colors: ', error);
    throw error;
  }
};

// Leave this here
export default fetchColors;
