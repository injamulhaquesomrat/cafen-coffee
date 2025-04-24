import { dinnerItems, featuredItems, lunchItems } from "../../utils/featuredItems";
import MenuList from "../shared/MenuList";
import MenuHero from "./MenuHero";

const MenuContainer = () => {
  return (
    <div className="py-[60px] md:py-20 lg:py-[100px] space-y-10 md:space-y-[100px] lg:space-y-[140px]">
      {/* start:: breakfast items */}
      <div>
        <MenuHero
          menuTitle={"Breakfast"}
          menuBg={
            "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c97d172690586591c4c707_menu-image-01.avif"
          }
        />
        <MenuList menuItems={featuredItems} />
      </div>
      {/* end:: breakfast items */}

      {/* start:: lunch items */}
      <div>
        <MenuHero
          menuTitle={"Lunch"}
          menuBg={
            "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c97d18e2dee3d3cead81ab_menu-image-02.avif"
          }
        />
        <MenuList menuItems={lunchItems} />
      </div>
      {/* end:: lunch items */}

      {/* start:: dinner items */}
      <div>
        <MenuHero
          menuTitle={"Dinner"}
          menuBg={
            "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c97d17f25ef16633e62657_menu-image-03.avif"
          }
        />
        <MenuList menuItems={dinnerItems} />
      </div>
      {/* end:: dinner items */}
    </div>
  );
};

export default MenuContainer;
