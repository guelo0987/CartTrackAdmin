export const GetTabs = (counts, label, tabTypes = ['activos', 'pendientes', 'cancelados', 'suspendidos', 'Denegadas']) => {
  return tabTypes.map(type => ({
    label: type.charAt(0).toUpperCase() + type.slice(1),
    count: counts[type] || 0
  }));
};
