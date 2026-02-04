const computePhaseCompletion = (phaseProgress) => {
  if (!phaseProgress.length) return 0;
  const completed = phaseProgress.filter((phase) => phase.status === 'COMPLETED').length;
  return Math.round((completed / phaseProgress.length) * 100);
};

const computeWeekCompletion = (weekProgress) => {
  if (!weekProgress.length) return 0;
  const completed = weekProgress.filter((week) => week.status === 'COMPLETED').length;
  return Math.round((completed / weekProgress.length) * 100);
};

const computeRoadmapCompletion = (phaseCompletion, weekCompletion) => {
  return Math.round((phaseCompletion + weekCompletion) / 2);
};

const isPhaseLocked = ({ phaseOrder, phaseProgress, projectProgress }) => {
  const previousPhases = phaseProgress.filter((phase) => phase.order < phaseOrder);
  const lockedByPhase = previousPhases.some((phase) => phase.status !== 'COMPLETED');
  const lockedByProject = projectProgress.some(
    (project) => project.phaseOrder < phaseOrder && project.status !== 'COMPLETED'
  );
  return lockedByPhase || lockedByProject;
};

module.exports = {
  computePhaseCompletion,
  computeWeekCompletion,
  computeRoadmapCompletion,
  isPhaseLocked
};
