import type { Grade, SRSCard } from "../types";

// Simplified SM-2 spaced repetition. Grade: 0=Again, 1=Hard, 2=Good, 3=Easy.
export function createCard(): SRSCard {
  return {
    repetition: 0,
    interval: 0,
    easeFactor: 2.5,
    dueDate: new Date().toISOString(),
    seen: 0,
    correct: 0,
  };
}

const GRADE_TO_QUALITY: Record<Grade, number> = {
  0: 2,
  1: 3,
  2: 4,
  3: 5,
};

export function reviewCard(card: SRSCard, grade: Grade): SRSCard {
  const quality = GRADE_TO_QUALITY[grade];
  const seen = card.seen + 1;
  const correct = card.correct + (grade >= 2 ? 1 : 0);

  if (grade === 0) {
    return {
      ...card,
      repetition: 0,
      interval: 0,
      dueDate: addMinutes(new Date(), 10).toISOString(),
      lastGrade: grade,
      seen,
      correct,
    };
  }

  let interval: number;
  const repetition = card.repetition + 1;
  if (repetition === 1) interval = 1;
  else if (repetition === 2) interval = 3;
  else interval = Math.round(card.interval * card.easeFactor);

  let easeFactor =
    card.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  easeFactor = Math.max(1.3, easeFactor);

  return {
    repetition,
    interval,
    easeFactor,
    dueDate: addDays(new Date(), interval).toISOString(),
    lastGrade: grade,
    seen,
    correct,
  };
}

export function isDue(card: SRSCard): boolean {
  return new Date(card.dueDate).getTime() <= Date.now();
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function addMinutes(date: Date, minutes: number): Date {
  const d = new Date(date);
  d.setMinutes(d.getMinutes() + minutes);
  return d;
}

// A single correct ("Хорошо"/"Легко") review already yields 60% (see below),
// so a lower bar here is what makes one honest pass through a topic show up
// as progress instead of requiring several spaced-out review sessions.
export const MASTERY_THRESHOLD = 50;

export function masteryPercent(card: SRSCard | undefined): number {
  if (!card) return 0;
  if (card.seen === 0) return 0;
  const ratio = card.correct / card.seen;
  const repBonus = Math.min(card.repetition, 5) / 5;
  return Math.round((ratio * 0.5 + repBonus * 0.5) * 100);
}
