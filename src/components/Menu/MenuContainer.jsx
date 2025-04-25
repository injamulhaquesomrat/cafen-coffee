import {
  dinnerItems,
  featuredItems,
  lunchItems,
} from "../../utils/featuredItems";
import MenuList from "../shared/MenuList";
import MenuHero from "./MenuHero";

const MenuContainer = () => {
  return (
    <div className="py-[60px] md:py-20 lg:py-[100px] space-y-10 md:space-y-[100px] lg:space-y-[140px]">
      {/* start:: breakfast items */}
      <div>
        <MenuHero
          menuTitle={"Breakfast"}
          menuBg={"/assets/images/featured/breabreakfast-hero.avif"}
        />
        <MenuList menuItems={featuredItems} />
      </div>
      {/* end:: breakfast items */}

      {/* start:: lunch items */}
      <div>
        <MenuHero
          menuTitle={"Lunch"}
          menuBg={"/assets/images/featured/lunch-hero.avif"}
        />
        <MenuList menuItems={lunchItems} />
      </div>
      {/* end:: lunch items */}

      {/* start:: dinner items */}
      <div>
        <MenuHero
          menuTitle={"Dinner"}
          menuBg={"/assets/images/featured/dinner-hero.avif"}
        />
        <MenuList menuItems={dinnerItems} />
      </div>
      {/* end:: dinner items */}
    </div>
  );
};

export default MenuContainer;
