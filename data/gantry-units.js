// data/gantry-units.js
const INVENTORY_GANTRIES = [
  {
    id: "308302", model: "Lift Systems 36T", unitWt: 600, retractedH: 1848, baseW: 711, baseL: 1319,
    stages: [
      { num: 0, label: "Retracted", H: 1848, cap2pt: 18000 },
      { num: 1, label: "Stage 1",   H: 2865, cap2pt: 18000 },
      { num: 2, label: "Stage 2",   H: 3880, cap2pt: 16500 },
      { num: 3, label: "Stage 3",   H: 4890, cap2pt: 13500 }
    ]
  },
  {
    id: "308303 / 308488", model: "Lift Systems 70T", unitWt: 1500, retractedH: 2945, baseW: 1190, baseL: 1675,
    stages: [
      { num: 0, label: "Retracted", H: 2945, cap2pt: 35000 },
      { num: 1, label: "Stage 1",   H: 3945, cap2pt: 35000 },
      { num: 2, label: "Stage 2",   H: 6874, cap2pt: 15450 }
    ]
  },
  {
    id: "GREINER_180", model: "Greiner 180T", unitWt: 1650, retractedH: 2390, baseW: 915, baseL: 1300,
    stages: [
      { num: 0, label: "Retracted", H: 2390, cap2pt: 45000 },
      { num: 1, label: "Stage 1",   H: 4071, cap2pt: 45000 },
      { num: 2, label: "Stage 2",   H: 5695, cap2pt: 30000 },
      { num: 3, label: "Stage 3",   H: 7290, cap2pt: 17500 }
    ]
  },
  {
    id: "308301+", model: "Lift Systems 360T", unitWt: 2500, retractedH: 3029, baseW: 1196, baseL: 1715,
    stages: [
      { num: 0, label: "Retracted", H: 3029, cap2pt: 182000 },
      { num: 1, label: "Stage 1",   H: 4828, cap2pt: 182000 },
      { num: 2, label: "Stage 2",   H: 6604, cap2pt: 137000 },
      { num: 3, label: "Stage 3",   H: 8383, cap2pt: 80000 }
    ]
  },
  {
    id: "308404", model: "Greiner 620T", unitWt: 6260, retractedH: 3340, baseW: 1560, baseL: 2090, default: true,
    stages: [
      { num: 0, label: "Retracted", H: 3340, cap2pt: 310000 },
      { num: 1, label: "Stage 1",   H: 5857, cap2pt: 310000 },
      { num: 2, label: "Stage 2",   H: 8383, cap2pt: 260000 },
      { num: 3, label: "Stage 3",   H: 10877, cap2pt: 150000 }
    ]
  },
  {
    id: "308505/506", model: "Lift Systems 620T II", unitWt: 7750, retractedH: 3375, baseW: 1560, baseL: 2200,
    stages: [
      { num: 0, label: "Retracted", H: 3375, cap2pt: null },
      { num: 1, label: "Stage 1",   H: 5725, cap2pt: null },
      { num: 2, label: "Stage 2",   H: 8160, cap2pt: null },
      { num: 3, label: "Stage 3",   H: 10625, cap2pt: null }
    ]
  },
  {
    id: "308423/425", model: "Greiner 620XL T", unitWt: 8530, retractedH: 3850, baseW: 1560, baseL: 2220,
    stages: [
      { num: 0, label: "Retracted", H: 3850, cap2pt: null },
      { num: 1, label: "Stage 1",   H: 6629, cap2pt: null },
      { num: 2, label: "Stage 2",   H: 9457, cap2pt: null },
      { num: 3, label: "Stage 3",   H: 12345, cap2pt: null }
    ]
  },
  {
    id: "308426", model: "Lift Systems 720T", unitWt: 3300, retractedH: 3016, baseW: 1194, baseL: 1867,
    stages: [
      { num: 0, label: "Retracted", H: 3016, cap2pt: 360000 },
      { num: 1, label: "Stage 1",   H: 4854, cap2pt: 360000 },
      { num: 2, label: "Stage 2",   H: 6624, cap2pt: 270000 },
      { num: 3, label: "Stage 3",   H: 8380, cap2pt: 180000 }
    ]
  },
  {
    id: "308422/424", model: "Greiner 1000T", unitWt: 7600, retractedH: 3372, baseW: 1440, baseL: 2150,
    stages: [
      { num: 0, label: "Retracted", H: 3372, cap2pt: 500000 },
      { num: 1, label: "Stage 1",   H: 5650, cap2pt: 500000 },
      { num: 2, label: "Stage 2",   H: 7980, cap2pt: 450000 },
      { num: 3, label: "Stage 3",   H: 10417, cap2pt: 270000 }
    ]
  },
  {
    id: "CUSTOM_GANTRY", model: "Custom Gantry Unit", unitWt: 5000, retractedH: 3000, baseW: 1200, baseL: 1800,
    stages: [
      { num: 0, label: "Retracted", H: 3000, cap2pt: 200000 },
      { num: 1, label: "Stage 1",   H: 5000, cap2pt: 200000 },
      { num: 2, label: "Stage 2",   H: 7500, cap2pt: 150000 },
      { num: 3, label: "Stage 3",   H: 10000, cap2pt: 100000 }
    ]
  }
];