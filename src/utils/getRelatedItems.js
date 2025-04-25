const getRelatedItems = (activeItem, allItems) => {
  return allItems.filter((item) => item?.id !== activeItem?.id);
};

export default getRelatedItems;
