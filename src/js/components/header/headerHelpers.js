function handleNavItems(navItems) {
  return navItems.map(el => ({
    ...el,
    customClass: window.location.pathname.indexOf(el.activeLocation) !== -1 ? 'active' : '',
  }));
}

export default function prepareHeader(header) {
  return {
    ...header,
    navItems: handleNavItems(header.navItems),
  };
}
