import { RoutePaths } from "../../../shared/routes/routes";
import { SidebarLinks } from "../types/SidebarLinks";

export const useSidebarLinks = (): { links: SidebarLinks[] } => {
  const links = [
    { label: "Home", href: RoutePaths.app.dashboard.path },
    { label: "My properties", href: RoutePaths.app.myProperties.path },
    { label: "Rented houses", href: RoutePaths.app.rentedHouses.path },
    { label: "Messages", href: RoutePaths.app.messages.path },
    { label: "Profile", href: RoutePaths.app.profile.path },
  ];
  return { links };
};
