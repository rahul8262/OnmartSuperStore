const { Router } = require('express');

const itemRoutes = Router();

itemRoutes.get('/', (req, res) => {
  setTimeout(
    () => res.json([
      {
        itemId: 'OfficeSupplies',
        imageId: 'OfficeSupplies',
        title: 'Office Supplies',
        price: 100,
        salePrice: 100,
        description: 'Office appliances, referred to as office equipment, encompass a range of tools, machinery, and resources essential for office operations. ',
      },
      {
        itemId: 'Clothing',
        imageId: 'Clothing',
        title: 'Clothing',
        price: 200,
        salePrice: 200,
        description: 'Discover a diverse range of garments crafted from quality fabrics, designed to be worn on the body.',
      },
      {
        itemId: 'Electronics',
        imageId: 'Electronics',
        title: 'Electronics',
        price: 600,
        salePrice: 600,
        description: 'Step into the future with our cutting-edge selection of electronic devices. From sleek laptops to powerful tablets, each product promises to revolutionize your digital experience.',
      },
      {
        itemId: 'Grocery',
        imageId: 'Grocery',
        title: 'Grocery',
        price: 100,
        salePrice: 100,
        description: 'Indulge in a delightful array of grocery essentials, from fresh produce to pantry staples, alongside household necessities like cleaning products and paper goods. ',
      },
      {
        itemId: 'Appliances',
        imageId: 'Appliances',
        title: 'Home Appliances',
        price: 900,
        salePrice: 900,
        description: 'Transform your home with our exceptional range of home appliances. From cooking to cleaning and food preservation, our appliances are meticulously crafted to streamline your household chores and enhance your daily life.',
      },
      {
        itemId: 'Furniture',
        imageId: 'Furniture',
        title: 'Furniture',
        price: 800,
        salePrice: 800,
        description: 'Elevate your living or working space with our exquisite selection of furniture. Each piece is carefully designed to bring comfort and functionality to your home, office, or room, creating an environment that perfectly suits your lifestyle and enhances your daily experience.',
      },
    ]),
    // Adds a fake server side delay
    500,
  );
});

module.exports = itemRoutes;
