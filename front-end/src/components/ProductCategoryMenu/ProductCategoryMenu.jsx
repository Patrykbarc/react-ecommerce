import { NavLink } from "react-router-dom";
import { productCategoryMenuLinks } from "../../constants/categoryMenuLinks";

export function ProductCategoryMenu() {
  return (
    <div className="bg-green-800 py-4">
      <ul className="container mx-auto flex gap-4">
        {productCategoryMenuLinks.map(({ name, to }) => (
          <li key={name}>
            <NavLink className="text-lg capitalize text-white" to={to}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
