// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { timeAgoCalc } from "../src/utilities/utilities"

test('if timeAgoCalc calc time 4 hours', () => {
    
    expect(timeAgoCalc(1691365876)).toBe("14 hours ago") 

  });

  test('if timeAgoCalc calc time 1 day', () => {
    
    expect(timeAgoCalc(1691327425)).toBe("1 day ago") 

  });

  test('if timeAgoCalc calc time 4 days', () => {
    
    expect(timeAgoCalc(1691068225)).toBe("4 days ago")

  });