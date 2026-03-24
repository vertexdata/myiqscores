export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export const questions: Question[] = [
  // Pattern Recognition (1-6)
  { id: 1, category: "Pattern Recognition", question: "What comes next in the sequence: 2, 6, 18, 54, ___?", options: ["108", "162", "148", "216"], correctIndex: 1 },
  { id: 2, category: "Pattern Recognition", question: "What comes next: 1, 1, 2, 3, 5, 8, ___?", options: ["11", "12", "13", "15"], correctIndex: 2 },
  { id: 3, category: "Pattern Recognition", question: "What comes next: 3, 6, 11, 18, 27, ___?", options: ["36", "38", "40", "35"], correctIndex: 1 },
  { id: 4, category: "Pattern Recognition", question: "What comes next: 100, 98, 94, 86, 70, ___?", options: ["54", "48", "38", "42"], correctIndex: 2 },
  { id: 5, category: "Pattern Recognition", question: "What comes next: 1, 4, 9, 16, 25, ___?", options: ["30", "36", "34", "49"], correctIndex: 1 },
  { id: 6, category: "Pattern Recognition", question: "What comes next: 2, 3, 5, 7, 11, 13, ___?", options: ["15", "17", "19", "16"], correctIndex: 1 },
  // Logical Reasoning (7-12)
  { id: 7, category: "Logical Reasoning", question: "All roses are flowers. Some flowers fade quickly. Which must be true?", options: ["All roses fade quickly", "Some roses fade quickly", "Some flowers are roses", "No roses fade quickly"], correctIndex: 2 },
  { id: 8, category: "Logical Reasoning", question: "If all Zogs are Bips, and all Bips are Crats, then:", options: ["All Crats are Zogs", "All Zogs are Crats", "Some Bips are not Zogs", "No Crats are Zogs"], correctIndex: 1 },
  { id: 9, category: "Logical Reasoning", question: "Tom is taller than Sam. Sam is taller than Rick. Jim is taller than Tom. Who is shortest?", options: ["Tom", "Sam", "Rick", "Jim"], correctIndex: 2 },
  { id: 10, category: "Logical Reasoning", question: "If it rains, the ground gets wet. The ground is not wet. Therefore:", options: ["It rained", "It didn't rain", "The ground is dry", "Both B and C"], correctIndex: 3 },
  { id: 11, category: "Logical Reasoning", question: "A is the father of B. B is the sister of C. D is the mother of C. What is A to D?", options: ["Husband", "Brother", "Father", "Son"], correctIndex: 0 },
  { id: 12, category: "Logical Reasoning", question: "In a race, you overtake the person in 2nd place. What position are you now in?", options: ["1st", "2nd", "3rd", "It depends"], correctIndex: 1 },
  // Verbal / Linguistic (13-18)
  { id: 13, category: "Verbal", question: "Which word is the odd one out: Cat, Dog, Rabbit, Eagle, Hamster?", options: ["Cat", "Rabbit", "Eagle", "Hamster"], correctIndex: 2 },
  { id: 14, category: "Verbal", question: "TEACHER is to STUDENT as DOCTOR is to:", options: ["Hospital", "Medicine", "Patient", "Nurse"], correctIndex: 2 },
  { id: 15, category: "Verbal", question: 'Which word means the OPPOSITE of "benevolent"?', options: ["Kind", "Malevolent", "Generous", "Passive"], correctIndex: 1 },
  { id: 16, category: "Verbal", question: "Complete the analogy: Book is to Reading as Fork is to:", options: ["Kitchen", "Eating", "Drawing", "Spoon"], correctIndex: 1 },
  { id: 17, category: "Verbal", question: "Which word does NOT belong: Whisper, Shout, Mumble, Listen, Speak?", options: ["Whisper", "Shout", "Listen", "Speak"], correctIndex: 2 },
  { id: 18, category: "Verbal", question: "If CLOUD is coded as DMPVE, then RAIN is coded as:", options: ["SBJO", "SBJM", "QZHO", "SCJO"], correctIndex: 0 },
  // Spatial Reasoning (19-24)
  { id: 19, category: "Spatial", question: "How many sides does a dodecahedron have?", options: ["10", "12", "14", "20"], correctIndex: 1 },
  { id: 20, category: "Spatial", question: "If you fold a square piece of paper in half twice, then cut a small circle in the center, how many holes appear when unfolded?", options: ["1", "2", "4", "3"], correctIndex: 2 },
  { id: 21, category: "Spatial", question: "A clock shows 3:15. What is the angle between the hour and minute hands?", options: ["0°", "7.5°", "15°", "90°"], correctIndex: 1 },
  { id: 22, category: "Spatial", question: "Which 3D shape has 6 faces, 12 edges, and 8 vertices?", options: ["Sphere", "Cube", "Pyramid", "Cylinder"], correctIndex: 1 },
  { id: 23, category: "Spatial", question: 'If you rotate the letter "N" 180 degrees, it looks like:', options: ["Z", "N", "И", "U"], correctIndex: 1 },
  { id: 24, category: "Spatial", question: "How many squares are on a standard 8×8 chessboard? (Not just the 64 small ones — ALL squares of every size.)", options: ["64", "200", "204", "256"], correctIndex: 2 },
  // Numerical / Mathematical (25-30)
  { id: 25, category: "Numerical", question: "What is 15% of 240?", options: ["32", "36", "38", "34"], correctIndex: 1 },
  { id: 26, category: "Numerical", question: "If 3x + 7 = 22, what is x?", options: ["3", "5", "7", "4"], correctIndex: 1 },
  { id: 27, category: "Numerical", question: "A train travels 120 km in 1.5 hours. What is its speed in km/h?", options: ["60", "70", "80", "90"], correctIndex: 2 },
  { id: 28, category: "Numerical", question: "What is the next prime number after 29?", options: ["30", "31", "33", "37"], correctIndex: 1 },
  { id: 29, category: "Numerical", question: "A shirt costs $40 after a 20% discount. What was the original price?", options: ["$48", "$50", "$52", "$46"], correctIndex: 1 },
  { id: 30, category: "Numerical", question: "If the area of a circle is 154 cm², approximately what is the radius? (Use π ≈ 22/7)", options: ["7 cm", "14 cm", "10.5 cm", "21 cm"], correctIndex: 0 },
];

export const categories = ["Pattern Recognition", "Logical Reasoning", "Verbal", "Spatial", "Numerical"] as const;

export function getCategoryScores(answers: (number | null)[]) {
  const catRanges: Record<string, [number, number]> = {
    "Pattern Recognition": [0, 5],
    "Logical Reasoning": [6, 11],
    "Verbal": [12, 17],
    "Spatial": [18, 23],
    "Numerical": [24, 29],
  };
  const scores: Record<string, { correct: number; total: number }> = {};
  for (const [cat, [start, end]] of Object.entries(catRanges)) {
    let correct = 0;
    for (let i = start; i <= end; i++) {
      if (answers[i] === questions[i].correctIndex) correct++;
    }
    scores[cat] = { correct, total: 6 };
  }
  return scores;
}

export function calculateIQ(correctAnswers: number): number {
  return Math.round(70 + (correctAnswers / 30) * 60);
}

export function getIQLabel(iq: number): string {
  if (iq < 85) return "Below Average";
  if (iq < 100) return "Average";
  if (iq < 110) return "Above Average";
  if (iq < 120) return "High Intelligence";
  return "Superior Intelligence";
}

export function getPercentile(iq: number): number {
  // Approximate percentile from normal distribution (mean=100, sd=15)
  const z = (iq - 100) / 15;
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989422804 * Math.exp(-z * z / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return Math.round((z > 0 ? (1 - p) : p) * 100);
}
