const MenuList = ({ menuItems }) => {
  return (
    <>
      <ul className="grid grid-cols-2 justify-between gap-y-6 gap-x-16">
        {menuItems.map((item, index) => (
          <li
            className="border-b border-cf-coffee/10 pb-5 col-span-2 lg:col-span-1"
            key={index}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5 w-full">
              <div className="relative">
                {item.new && (
                  <span className="text-cf-coffee leading-relaxed absolute left-1/2 -top-2 px-4 py-.5 border border-cf-coffee rounded-full bg-cf-yellow -translate-x-1/2">
                    New
                  </span>
                )}
                <img
                  className="aspect-square h-24 w-24 rounded-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-5 flex-1 justify-between items-start text-cf-coffee">
                <div className="space-y-1">
                  <h6 className="text-[22px] sm:text-2xl leading-[1.18] font-sober">
                    {item.name}
                  </h6>
                  <p>{item.description}</p>
                </div>
                <div>{item.price}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuList;
