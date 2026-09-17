function findHighScoringStudents(marks: Record<string, number>): string[] {
  return Object.entries(marks)
    .filter(([name, score]) => score >= 60)
    .map(([name, score]) => name);
}


/**
 * function findHighScoringStudents(marks:Record<string, number>):string[]{
 * return Object.entries(marks).filter(([name, score])=> score >=60).map(([name,score])=>name);}
 */