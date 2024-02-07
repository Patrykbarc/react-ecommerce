import { ProductCategoryMenu } from "../ProductCategoryMenu/ProductCategoryMenu";
import { MainCategoryMenu } from "../MainCategoryMenu/MainCategoryMenu";
import { TopBarOptions } from "../TopBarOptions/TopBarOptions";

export function TopBar() {
  return (
    <div className="w-screen">
      <div className="container mx-auto flex items-center justify-between py-5">
        <MainCategoryMenu />
        <h2 className="text-3xl font-bold uppercase">topsklep ®</h2>
        <TopBarOptions />
      </div>
      <ProductCategoryMenu />
    </div>
  );
}
