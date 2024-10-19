// src/quiz/promise-neg.ts
export const logRowsWithNegative = async (array: number[][]): Promise<void> => {
    try {
      // Map each row to a Promise that checks for negative numbers
      const checkRowsPromises = array.map((row) => 
        new Promise<void>((resolve) => {
          if (row.some((num) => num < 0)) {
            console.log("Row with negative number:", row);
          }
          resolve();
        })
      );
  
      // Wait for all row checks to resolve
      await Promise.all(checkRowsPromises);
    } catch (error) {
      console.error("Error in logRowsWithNegative:", error);
    }
  };
  
  // Example usage
  const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9],
  ];
  
  logRowsWithNegative(array);
  