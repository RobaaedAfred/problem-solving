function commonSkills(skills1: string[], skills2: string[]): string[] {
  const set1 = new Set(skills1.map(skill => skill.toLowerCase()));
  const common = new Set<string>();

  for (const skill of skills2) {
    const lowerSkill = skill.toLowerCase();

    if (set1.has(lowerSkill)) {
      common.add(lowerSkill);
    }
  }

  return [...common].sort();
}