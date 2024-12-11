import { Roles } from "../../../shared/resources/data/Roles";
import { mapEnum } from "../../../shared/resources/utils/mapEnum";

export const checkExistsRole = () => {
  const role = localStorage.getItem("role");
  const roles = mapEnum(Roles);
  return roles.includes(role);
};
