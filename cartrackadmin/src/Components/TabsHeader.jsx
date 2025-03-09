export const GetTabs = (counts, label, tabTypes = ['activos', 'pendientes', 'cancelados', 'suspendidos']) => {
  return tabTypes.map(type => ({
    label: type.charAt(0).toUpperCase() + type.slice(1),
    shortLabel: type.charAt(0).toUpperCase() + type.slice(1, 3),
    count: counts[type] || 0
  }));
};
