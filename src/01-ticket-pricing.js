/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // check if age is a number and not a negative number
  if(typeof age !== "number" || age < 0) return -1;

  // First bug => using Number instead of 'number'
  // Second bug => using number instead of 'number'

  // console.log(typeof age !== Number);
  
  let price = 0;
  // check if its weekend and add 3 to the price if true
  if(isWeekend) price = price + 3;

  // add the agewise price to the price variable
  if(age <= 12 ) {
    price += 8
  } else if(age <= 17) {
    price += 12
  }else if(age <= 59) {
    price += 15
  }else price += 10

  return price;

}
