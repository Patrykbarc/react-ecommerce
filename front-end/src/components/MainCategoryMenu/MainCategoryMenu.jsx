import { NavLink } from "react-router-dom";
import { mainCategoryMenuLinks } from "../../constants/mainCategoryMenuLinks";

export function MainCategoryMenu() {
  return (
    <ul className="flex w-1/3 gap-4">
      {mainCategoryMenuLinks.map(({ name, to }) => (
        <li key={name}>
          <NavLink className="text-lg uppercase" to={to}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
