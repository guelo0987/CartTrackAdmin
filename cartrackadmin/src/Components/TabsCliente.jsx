export const getClientTabs = (counts) => [
  { label: 'Activos', count: counts.activos },
  { label: 'Pendientes', count: counts.pendientes },
  { label: 'Cancelados', count: counts.cancelados },
  { label: 'Suspendidos', count: counts.suspendidos }
];
