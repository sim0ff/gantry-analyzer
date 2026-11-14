// data/beams.js
// Includes EN 1993-1-1 / EN 13001-3-1 structural section properties:
// Wply [cm^3], Iz [cm^4], It [cm^4], Iw [10^9 mm^6 = 10^3 cm^6], fy [MPa]
const INVENTORY_BEAMS = [
  { id: "601001/002", profile: "HEB 300", L: 2290, W: 300, H: 300, weight: 255, cap: 58400, Wply: 1869, Iz: 8563, It: 185, Iw: 1688, fy: 355 },
  { id: "601003/004", profile: "HEB 300", L: 3700, W: 300, H: 300, weight: 415, cap: 58400, Wply: 1869, Iz: 8563, It: 185, Iw: 1688, fy: 355 },
  { id: "601005/006", profile: "HEM 220", L: 4003, W: 226, H: 240, weight: 440, cap: 60000, Wply: 1604, Iz: 5133, It: 478, Iw: 527, fy: 355 },
  { id: "601009-012", profile: "HEB 160", L: 4500, W: 160, H: 160, weight: 180, cap: 10000, Wply: 354, Iz: 889, It: 31.2, Iw: 47.9, fy: 355 },
  { id: "601013/014", profile: "HEB 300", L: 4707, W: 300, H: 316, weight: 525, cap: 58400, Wply: 1869, Iz: 8563, It: 185, Iw: 1688, fy: 355 },
  { id: "601015/016", profile: "HEM 220", L: 6006, W: 226, H: 240, weight: 690, cap: 60000, Wply: 1604, Iz: 5133, It: 478, Iw: 527, fy: 355 },
  { id: "601017",     profile: "HEB 300", L: 6000, W: 300, H: 300, weight: 675, cap: 58400, Wply: 1869, Iz: 8563, It: 185, Iw: 1688, fy: 355 },
  { id: "601018/019", profile: "HEB 400", L: 6006, W: 300, H: 400, weight: 880, cap: 80000, Wply: 3232, Iz: 10820, It: 355, Iw: 4017, fy: 355 },
  { id: "601020/021", profile: "HEM 400", L: 6000, W: 307, H: 432, weight: 2210, cap: 200000, Wply: 5571, Iz: 15480, It: 1629, Iw: 6177, fy: 355 },
  { id: "601022/023", profile: "2x INP 400", L: 6095, W: 313, H: 400, weight: 1095, cap: 200000, Wply: 3400, Iz: 25000, It: 340, Iw: 9000, fy: 355 },
  { id: "601024/025", profile: "HEM 450", L: 6830, W: 307, H: 478, weight: 2654, cap: 220000, Wply: 6451, Iz: 15990, It: 1711, Iw: 8130, fy: 355 },
  { id: "601026-028", profile: "HEB 200", L: 7000, W: 200, H: 200, weight: 415, cap: 19000, Wply: 643, Iz: 2003, It: 59.3, Iw: 171, fy: 355 },
  { id: "601029/030", profile: "HEM 600", L: 8000, W: 305, H: 620, weight: 3411, cap: 230000, Wply: 9185, Iz: 17100, It: 1854, Iw: 15640, fy: 355, default: true },
  { id: "601031/032", profile: "HEB 600", L: 8520, W: 300, H: 600, weight: 1900, cap: 200000, Wply: 6425, Iz: 13530, It: 685, Iw: 10910, fy: 355 },
  { id: "601033-036", profile: "HEM 400", L: 9000, W: 307, H: 432, weight: 3105, cap: 190000, Wply: 5571, Iz: 15480, It: 1629, Iw: 6177, fy: 355 },
  { id: "601037/038", profile: "HEB 600", L: 10000, W: 300, H: 600, weight: 3182, cap: 180000, Wply: 6425, Iz: 13530, It: 685, Iw: 10910, fy: 355 },
  { id: "601039/040", profile: "HEM 1000", L: 12240, W: 302, H: 1008, weight: 6595, cap: 290000, Wply: 15890, Iz: 18890, It: 2059, Iw: 43990, fy: 355 },
  { id: "601041",     profile: "HEM 300", L: 12500, W: 310, H: 340, weight: 3050, cap: 55000, Wply: 4078, Iz: 15220, It: 1408, Iw: 3279, fy: 355 },
  { id: "601042/043", profile: "HEB 500", L: 12642, W: 300, H: 500, weight: 2350, cap: 115000, Wply: 4815, Iz: 12620, It: 538, Iw: 7018, fy: 355 },
  { id: "601044/045", profile: "W 310 H 800", L: 13000, W: 310, H: 800, weight: 5339, cap: 230000, Wply: 11500, Iz: 18500, It: 1600, Iw: 26000, fy: 355 },
  { id: "601046/047", profile: "HEB 650", L: 13000, W: 300, H: 650, weight: 2920, cap: 220000, Wply: 7320, Iz: 14100, It: 763, Iw: 13370, fy: 355 },
  { id: "601048/049", profile: "HEB 600", L: 13410, W: 300, H: 600, weight: 6140, cap: 200000, Wply: 6425, Iz: 13530, It: 685, Iw: 10910, fy: 355 },
  { id: "309406",     profile: "Equalizer Beam", L: 7340, W: 480, H: 900, weight: 4000, cap: 105000, Wply: 10500, Iz: 42000, It: 3200, Iw: 45000, fy: 355, closed: true },
  { id: "308496",     profile: "Press Lifting Frame", L: 3820, W: 2400, H: 384, weight: 1520, cap: 55000, Wply: 3200, Iz: 180000, It: 2500, Iw: 5000, fy: 355, closed: true },
  { id: "CUSTOM",     profile: "Custom Manual Beam", L: 8000, W: 300, H: 600, weight: 3000, cap: 200000, Wply: 6425, Iz: 13530, It: 685, Iw: 10910, fy: 355, isCustom: true }
];
