import { NavLink, useParams } from "react-router-dom";
import { mainCategoryMenuLinks } from "../../constants/mainCategoryMenuLinks";

console.log(mainCategoryMenuLinks);

export function MainCategoryMenu() {
  const { category } = useParams();
  console.log(category);
  return (
    <ul className="flex w-1/3">
      {mainCategoryMenuLinks.map(({ name, category }) => (
        <li key={name}>
          <NavLink className="p-3 text-lg uppercase" to={`/category/${category}`}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
