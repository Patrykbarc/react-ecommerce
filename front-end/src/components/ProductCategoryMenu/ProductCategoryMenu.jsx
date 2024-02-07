import { Link } from "react-router-dom";
import { productCategoryMenuLinks } from "../../constants/categoryMenuLinks";

export function ProductCategoryMenu() {
  return (
    <div className="bg-green-800 py-4">
      <ul className="container mx-auto flex gap-3">
        {productCategoryMenuLinks.map(({ name, to }) => (
          <li key={name}>
            <Link className="p-3 text-lg capitalize text-white" to={to}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
