const MenuHero = ({menuTitle, menuBg}) => {
  return (
    <div className="relative w-full max-h-[232px] overflow-hidden aspect-[16/10] rounded-[10px]">
      <div className="absolute inset-0 bg-cf-coffee opacity-40"></div>
        <img
          className="w-full h-[400px] object-cover aspect-video"
          src={menuBg}
          alt="breakfast hero image"
        />
      <h3 className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-[54px] lg:text-6xl text-nunito text-cf-yellow leading">
        {menuTitle}
      </h3>
    </div>
  );
};

export default MenuHero;
