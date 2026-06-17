// ─── COMPLETE COTTAGE MENU DATA ───────────────────────────────────────────────
// Extracted 1:1 from index.html

export const MENU = {
  appetizers: [
    {
      section: 'Bruschetta Bar',
      items: [
        { name: 'Veg Topping', desc: 'Caramelized Onion & Feta / Mushroom & Artichoke', price: '₹385', veg: true },
        { name: 'Non-Veg Topping', desc: 'Pesto Chicken / Chicken & Artichoke', price: '₹425' },
      ],
    },
    {
      section: 'Hummus & Pita Plates',
      items: [
        { name: 'Sesame Falafel', desc: 'Served with hummus & pita', price: '₹585', veg: true },
        { name: 'Charcoal Roasted Mushroom with Porcini Hummus', desc: 'Clay oven roasted mushroom with porcini hummus', price: '₹645', veg: true },
        { name: 'Lamb Hummus', desc: 'Hummus, pulled lamb served with pita bread', price: '₹885' },
      ],
    },
    {
      section: 'Appetizers',
      items: [
        { name: 'Cottage Cheese Filo Parcels', desc: 'Spicy cottage cheese, broccoli & sundried tomato in filo pastry', price: '₹645', veg: true },
        { name: 'Potato Soufflé', desc: 'Oven baked, served with basil pesto sauce', price: '₹685', veg: true },
        { name: 'Harissa Spiced Cottage Cheese', desc: 'Clay oven roasted cottage cheese, creamy tomato sauce', price: '₹645', veg: true },
        { name: 'Empanadas Veg', desc: 'Flaky pastry stuffed with exotic vegetables & cheese', price: '₹585', veg: true },
        { name: 'Stuffed Jalapeño & Cheese Ovoid', desc: 'Cheese & jalapeño balls with curry hummus', price: '₹625', veg: true },
        { name: 'Smoked Chicken', desc: 'Greek chicken from clay oven, tzatziki & salad', price: '₹825', isNew: true },
        { name: 'Jalapeño Chicken', desc: 'Creamy spicy clay oven chicken, jalapeño sauce', price: '₹845' },
        { name: 'Charred Citrus Chicken', desc: 'Kaffir lime marinated clay oven chicken with labneh', price: '₹845' },
        { name: 'Prawn Aglio Olio', desc: 'Prawns in olive oil, garlic, parsley & chili with broccoli pate', price: '₹985', isNew: true },
        { name: 'Lime Parsley Fish', desc: 'Served with warm tartar sauce & garlic tomato dip', price: '₹945' },
      ],
    },
  ],

  soups: [
    {
      section: 'Soups',
      items: [
        { name: 'Barley & Vegetable', desc: 'Seasonal vegetables & tomato barley broth', price: '₹345', veg: true },
        { name: 'Fungus Soup', desc: 'Mushroom puree finished with fresh cream (Veg / Chicken)', price: '₹345 / ₹385', isNew: true },
        { name: 'Coriander Broth', desc: 'Coriander broth with lemon (Veg / Chicken)', price: '₹345 / ₹385', isNew: true },
        { name: 'Chilled Watermelon & Red Pepper', desc: 'Fresh watermelon juice with roasted red pepper and mint', price: '₹365', veg: true },
      ],
    },
    {
      section: 'Salads',
      items: [
        { name: 'Classic Caesar / Chicken', desc: 'Iceberg, capers, sundried tomato, parmesan, crouton, Caesar dressing', price: '₹525 / ₹625' },
        { name: 'House Salad', desc: 'Lettuce, broccoli, olive, cherry tomato, walnut, feta mousse, raspberry dressing', price: '₹625', veg: true },
        { name: 'Citrus & Avocado', desc: 'Romaine, orange, grapefruit, almond, rocket, passion fruit vinaigrette', price: '₹645', veg: true },
        { name: 'Watermelon & Feta', desc: 'Watermelon, feta, rocket, almond flakes, sweet chili dressing', price: '₹645', veg: true, isNew: true },
        { name: 'Pear & Beetroot', desc: 'Red wine poached pear, beetroot, French beans, feta crumble, walnut, rocket', price: '₹685', veg: true },
        { name: 'Double Quinoa & Mango', desc: 'Mix quinoa, cucumber, mango, micro greens, basil vinaigrette', price: '₹685', veg: true, isNew: true },
      ],
    },
  ],

  flatbread: [
    {
      section: 'Toasties & Sandwiches',
      items: [
        { name: 'Bombay Toastie', desc: 'Potato cheddar cheese mix', price: '₹565', veg: true },
        { name: 'Cheese & Jalapeño Toast', desc: 'Ciabatta, mozzarella & jalapeño', price: '₹565', veg: true, isNew: true },
        { name: 'Avocado Toast', desc: 'Ciabatta, mashed avocado, lemon, onion, coriander & jalapeño', price: '₹625', veg: true },
        { name: 'Veggie Burger', desc: 'Green vegetable patty, house sauce', price: '₹545', veg: true },
        { name: 'Grilled Chicken Burger', desc: 'Minced chicken patty, mustard mayonnaise', price: '₹625' },
        { name: 'Cottage Cheese Pepper Sandwich', desc: 'Clay oven cottage cheese, bell peppers & chimichurri', price: '₹625', veg: true, isNew: true },
        { name: 'Grilled Chicken Sandwich', desc: 'Grilled chicken breast, pesto sauce', price: '₹625' },
        { name: 'BBQ Chicken Sandwich', desc: 'Chicken breast, BBQ sauce', price: '₹625' },
      ],
    },
    {
      section: 'Flatbread Pizza',
      items: [
        { name: 'Margherita', desc: 'Tomato sauce, cheese & basil', price: '₹625', veg: true },
        { name: 'Roasted Veg', desc: 'Zucchini, broccoli, onion, bell peppers', price: '₹685', veg: true },
        { name: 'Mexican', desc: 'Bell pepper, corn, onion & red paprika', price: '₹685', veg: true, isNew: true },
        { name: 'The Greek', desc: 'Olives, bell pepper, artichoke, sundried tomato, feta mousse', price: '₹745', veg: true },
        { name: 'Mushroom, Jalapeño & Onion', desc: '', price: '₹745', veg: true },
        { name: 'Cottage Cheese Peri Peri', desc: 'Bell pepper, cottage cheese, red paprika & onions', price: '₹785', veg: true, isNew: true },
        { name: 'Charmoule Chicken & Jalapeño', desc: 'Marinated chicken & jalapeño', price: '₹825' },
        { name: 'Smoked Chicken', desc: 'Smoked chicken & mushroom', price: '₹825' },
        { name: 'Basil Chicken & Rocket', desc: 'Pesto chicken & rocket', price: '₹825' },
        { name: 'Mint Pulled Lamb', desc: 'Pulled lamb, green chili & mint', price: '₹845' },
        { name: 'Pepperoni', desc: 'Spanish pork pepperoni & jalapeño', price: '₹885' },
      ],
    },
    {
      section: 'Pasta & Risotto',
      items: [
        { name: 'Spaghetti Aglio Olio', desc: 'Olive oil, garlic, chili flakes, parsley & parmesan', price: '₹725', isNew: true },
        { name: 'Mac & Cheese Gratin', desc: 'Baked macaroni, garlic bread', price: '₹685', veg: true },
        { name: 'Penne Chicken Mushroom', desc: 'Chicken in creamy mushroom sauce', price: '₹785' },
        { name: 'Penne Chicken Peri Peri', desc: 'Creamy peri peri sauce with chicken', price: '₹785' },
        { name: 'Penne Chicken Pesto', desc: 'Creamy basil pesto & chicken', price: '₹785' },
        { name: 'Garlic Prawn Spaghetti', desc: 'Garlic, chili, parsley, olive oil & prawns', price: '₹885', isNew: true },
        { name: 'Spaghetti Bolognese', desc: 'Tomato sauce & minced lamb', price: '₹845', isNew: true },
        { name: 'Spaghetti Chicken Pepperoni', desc: 'Pepperoni & chicken in tomato sauce', price: '₹845', isNew: true },
        { name: 'Spinach & Mushroom Lasagna', desc: 'Baked layered pasta, spinach & mushroom', price: '₹745', veg: true },
        { name: 'Chicken & Broccoli Lasagna', desc: 'Baked pasta, chicken & broccoli, gratinated mozzarella', price: '₹845' },
        { name: 'Mushroom Risotto', desc: 'Arborio rice with button mushroom', price: '₹745', veg: true },
        { name: 'Broccoli Risotto', desc: 'Arborio rice with broccoli puree', price: '₹745', veg: true },
        { name: 'Chicken Pesto Risotto', desc: 'Arborio rice with chicken & pesto', price: '₹845' },
      ],
    },
  ],

  mains: [
    {
      section: 'Vegetarian Mains',
      items: [
        { name: 'Cottage Cheese Pin Wheel', desc: 'Cottage cheese rolls with pesto, almond tomato cream gravy', price: '₹645', veg: true },
        { name: 'Mushroom Pepper Fry', desc: '', price: '₹645', veg: true },
        { name: 'Mushroom Stroganoff', desc: 'Mushrooms in stock & sour cream, served with rice', price: '₹645', veg: true },
        { name: 'Pesto Grilled Vegetables', desc: 'Exotic vegetables with couscous & curry sauce', price: '₹685', veg: true },
        { name: 'Chermoule Cottage Cheese', desc: 'Chermoule spiced cottage cheese, mashed potato, roasted vegetables & curry thyme sauce', price: '₹685', veg: true, isNew: true },
        { name: 'Pesto Broccoli Mushroom', desc: 'Broccoli & mushroom in creamy pesto, couscous & tzatziki', price: '₹685', veg: true, isNew: true },
        { name: 'Exotic Vegetable Pot Pie', desc: 'Clay oven vegetables in tomato cream sauce, couscous', price: '₹625', veg: true },
      ],
    },
    {
      section: 'Non-Vegetarian Mains',
      items: [
        { name: 'Mangalorean Chicken', desc: 'Spicy coconut sauce, Indian bread', price: '₹825' },
        { name: 'Chermoule Chicken', desc: 'Chermoule marinated, mashed potato, roasted vegetables & curry thyme sauce', price: '₹825' },
        { name: 'Whole Roasted Baby Chicken', desc: 'Green herbs & spices, pita, tzatziki & fries', price: '₹925' },
        { name: 'Chicken Espetada & Mushroom Pot Pie', desc: 'Served with couscous', price: '₹845' },
        { name: 'Mutton Kasha', desc: 'Mustard oil & spices slow-cooked mutton, Indian bread', price: '₹945' },
        { name: "Shepherd's Pie", desc: 'Mince lamb, mashed potato top, garlic bread', price: '₹945' },
        { name: 'Grilled Sole', desc: 'Crushed potatoes, carrots, broccoli & fennel lemon sauce', price: '₹965' },
      ],
    },
  ],

  desserts: [
    {
      section: 'Sweets & Indulgences',
      items: [
        { name: 'Jaggery Pannacotta', desc: 'Italian cooked cream with jaggery & honeycomb', price: '₹585', veg: true },
        { name: 'Blondie Meets Brownie', desc: 'Warm brownie & blondie with coffee & ice cream', price: '₹625', veg: true },
        { name: 'Cookie Butter Cheesecake', desc: 'Cookie butter folded with mascarpone', price: '₹625', veg: true, isNew: true },
        { name: 'Lemon Ricotta Cheesecake', desc: 'Topped with raspberry compote & lemon curd', price: '₹625' },
        { name: 'Sticky Toffee Pudding ★ Signature', desc: 'Served with prunes & vanilla ice cream', price: '₹645', veg: true },
        { name: 'Warm Chocolate Tart', desc: 'Baked chocolate tart with hazelnut ganache', price: '₹585', veg: true },
        { name: 'French Apple Tart', desc: 'Puff pastry with apple & vanilla ice cream', price: '₹625', veg: true },
      ],
    },
  ],

  cocktails: [
    {
      section: 'Summer Mocktails — ₹465 each',
      items: [
        { name: 'Hibiscus Citrus Spritz', desc: 'Hibiscus tea, orange chunks, lime, peach & sprite', price: '₹465', veg: true },
        { name: 'Blueberry Elderflower Lemonade', desc: 'Fresh blueberry syrup, elderflower, mint & soda', price: '₹465', veg: true },
        { name: 'Spicy Pineapple Jalapeño Fizz', desc: 'Fresh pineapple, jalapeño puree, mint, lime & sprite', price: '₹465', veg: true },
        { name: 'Lychee & Kaffir Lime', desc: 'Lychee juice, lime, kaffir lime syrup & cranberry', price: '₹465', veg: true },
        { name: 'Watermelon Basil Bramble', desc: 'Watermelon chunks, black salt & basil', price: '₹465', veg: true },
        { name: 'Mango Hibiscus Lemonade', desc: 'Mango puree, mint, lime, soda & hibiscus tea', price: '₹465', veg: true },
        { name: 'Pineapple & Cucumber Smash', desc: 'Pineapple juice, cucumber, basil, ginger & ginger ale', price: '₹465', veg: true },
        { name: 'Cool Guava Politician', desc: 'Guava with Indian spices, black salt & grenadine', price: '₹465', veg: true },
        { name: 'Passion Hearts', desc: 'Orange, pineapple, lemon passion fruit & strawberry', price: '₹465', veg: true },
        { name: 'Spicy Mango', desc: 'Mango, strawberry crush, rock salt & spicy mix', price: '₹465', veg: true },
      ],
    },
    {
      section: 'Art of Mixology',
      items: [
        { name: 'Siesta Sipper', desc: 'Don Julio Tequila, kaffir lime, lemongrass syrup & fresh lemon', price: '₹925' },
        { name: 'Mystic Forest', desc: 'Tequila, fresh cucumber, pineapple, agave & lime', price: '₹885' },
        { name: 'Speakeasy Sour', desc: 'JW Black Label, jasmine tea, fresh plum syrup & soda', price: '₹925' },
        { name: 'Superstitious', desc: 'Jameson, peach, lime, orange & ginger ale', price: '₹925' },
        { name: 'Honey Chamomile', desc: 'Vodka, honey, chamomile tea, elderflower, blueberry & berries', price: '₹825' },
        { name: 'Grapefruit & Kaffir Lime G&T', desc: 'Gin, grapefruit, kaffir lime & tonic', price: '₹925' },
        { name: 'Green Devil', desc: 'Tanqueray Gin, fresh cream & mint', price: '₹885' },
        { name: 'Velvet Dream', desc: 'Tanqueray Gin, blue pea, triple sec, lime & orange bitter', price: '₹885' },
        { name: 'Clarified Piña Colada', desc: 'Bacardi white, coconut cream, milk & pineapple', price: '₹925' },
        { name: 'Eye of the Tiger', desc: 'Bacardi white, coconut, cranberry, orange & dark rum float', price: '₹885' },
        { name: "Dragoon's Blood", desc: 'White rum, Aperol, pineapple & Demerara syrup', price: '₹885' },
      ],
    },
    {
      section: 'Barman Specials',
      items: [
        { name: 'Spritz Veneziano', desc: 'Sparkling wine, Aperol, soda & orange', price: '₹985' },
        { name: 'Redheaded Slut', desc: 'Jägermeister, peach, vodka & cranberry', price: '₹925' },
        { name: 'Cambridge Mule', desc: 'Cambridge Gin, mint, ginger syrup & sour mix', price: '₹925' },
        { name: "Hendrick's Cucumber Basil Smash", desc: "Hendrick's, lime, basil, cucumber & tonic", price: '₹925' },
        { name: 'Toffee Martini', desc: 'Thunder Toffee Vodka, espresso & fresh cream', price: '₹925' },
        { name: 'Sly Thai', desc: 'Grey Goose, triple sec, lemongrass, kaffir lime & lime', price: '₹925' },
        { name: 'Pineapple & Cardamom Martini', desc: 'Belvedere, Jäger, lime, pineapple & green cardamom', price: '₹925' },
      ],
    },
    {
      section: 'Classic Cocktails',
      items: [
        { name: 'Negroni', desc: '', price: '₹885' },
        { name: 'Cosmopolitan', desc: '', price: '₹825' },
        { name: 'Margarita', desc: '', price: '₹825' },
        { name: 'Tequila Sunrise', desc: '', price: '₹825' },
        { name: 'Old Fashioned', desc: '', price: '₹825' },
        { name: 'Bloody Mary', desc: '', price: '₹825' },
        { name: 'Sex on the Beach', desc: '', price: '₹825' },
        { name: 'Picante', desc: '', price: '₹885' },
        { name: 'Classic LIIT', desc: '', price: '₹985' },
        { name: 'Atomic LIIT', desc: '', price: '₹985' },
      ],
    },
    {
      section: 'Beer Cocktails',
      items: [
        { name: 'Beer Invader', desc: '', price: '₹985' },
        { name: 'Beer Mojito', desc: '', price: '₹925' },
        { name: 'Mexican Fighter', desc: '', price: '₹925' },
        { name: 'Red Velvet', desc: '', price: '₹925' },
        { name: 'Sea Port', desc: '', price: '₹925' },
      ],
    },
  ],

  bar: [
    {
      section: 'Single Malt Scotch',
      items: [
        { name: 'Glenfiddich 21 Yo', desc: '', price: '₹1,845' },
        { name: 'Glenlivet 18 Yo', desc: '', price: '₹985' },
        { name: 'Glenfiddich 18 Yo', desc: '', price: '₹985' },
        { name: 'Glenlivet 15 Yo', desc: '', price: '₹765' },
        { name: 'Laphroaig', desc: '', price: '₹685' },
        { name: 'Glenfiddich 12 Yo', desc: '', price: '₹585' },
        { name: 'Glenlivet 12 Yo', desc: '', price: '₹585' },
        { name: 'Aberlour 12 Yo', desc: '', price: '₹545' },
        { name: 'Talisker 10 Yo', desc: '', price: '₹645' },
        { name: 'Glenmorangie 10 Yo', desc: '', price: '₹625' },
      ],
    },
    {
      section: 'Blended Scotch',
      items: [
        { name: 'JW Blue Label', desc: '', price: '₹1,845' },
        { name: 'Chivas 18 Yo', desc: '', price: '₹825' },
        { name: 'JW Gold Reserve', desc: '', price: '₹685' },
        { name: 'JW Black Label', desc: '', price: '₹585' },
        { name: 'Chivas 12 Yo', desc: '', price: '₹585' },
        { name: 'Monkey Shoulder', desc: '', price: '₹585' },
        { name: "Ballantine's 12 Yo", desc: '', price: '₹525' },
        { name: "Ballantine's", desc: '', price: '₹445' },
      ],
    },
    {
      section: 'Indian Single Malt & Japanese Whisky',
      items: [
        { name: 'Rampur Double Cask', desc: '', price: '₹685' },
        { name: 'Indri Single Malt', desc: '', price: '₹585' },
        { name: 'Hibiki Suntory', desc: '', price: '₹985' },
        { name: 'Toki Suntory', desc: '', price: '₹545' },
      ],
    },
    {
      section: 'Other Whiskey',
      items: [
        { name: "Jack Daniel's Honey", desc: '', price: '₹585' },
        { name: "Jack Daniel's", desc: '', price: '₹525' },
        { name: 'Jameson Black Barrel', desc: '', price: '₹525' },
      ],
    },
    {
      section: 'Vodka (30ml)',
      items: [
        { name: 'Grey Goose', desc: '', price: '₹585' },
        { name: 'Belvedere', desc: '', price: '₹585' },
        { name: 'Cîroc', desc: '', price: '₹585' },
        { name: 'Ketel One', desc: '', price: '₹525' },
        { name: 'Absolut', desc: '', price: '₹485' },
        { name: 'Thunder Toffee Vodka', desc: '', price: '₹485' },
      ],
    },
    {
      section: 'Gin (30ml)',
      items: [
        { name: 'Cambridge Truffle Gin', desc: '', price: '₹865' },
        { name: 'Cambridge Dry Gin', desc: '', price: '₹665' },
        { name: "Hendrick's", desc: '', price: '₹665' },
        { name: 'English Pink Gin', desc: '', price: '₹585' },
        { name: 'Tanqueray', desc: '', price: '₹525' },
        { name: 'Bombay Sapphire', desc: '', price: '₹545' },
      ],
    },
    {
      section: 'Tequila & Rum',
      items: [
        { name: 'Don Julio', desc: '', price: '₹885' },
        { name: 'El Cristiano Silver', desc: '', price: '₹885' },
        { name: 'Jose Cuervo Silver', desc: '', price: '₹525' },
        { name: 'Camikara 3 Yo', desc: '', price: '₹485' },
        { name: 'Bacardi White', desc: '', price: '₹425' },
        { name: 'Bacardi Black', desc: '', price: '₹485' },
        { name: 'Old Monk', desc: '', price: '₹425' },
      ],
    },
    {
      section: 'Cognac',
      items: [
        { name: 'Hennessy VSOP', desc: '', price: '₹925' },
        { name: 'Hennessy VS', desc: '', price: '₹725' },
        { name: 'Martel VS', desc: '', price: '₹565' },
        { name: 'Morpheus', desc: '', price: '₹425' },
      ],
    },
    {
      section: 'Wines — Red',
      items: [
        { name: 'Camas Malbec (French)', desc: '', price: '₹5,885' },
        { name: 'Cadet d\'Oc Merlot (French)', desc: 'Bottle / Glass', price: '₹4,885 / ₹925' },
        { name: "Jacob's Creek Shiraz Cabernet (Australian)", desc: 'Bottle / Glass', price: '₹3,885 / ₹925' },
        { name: 'Senorita Merlot (Chile)', desc: 'Bottle / Glass', price: '₹3,885 / ₹925' },
        { name: 'Cosecha Merlot (Chile)', desc: 'Bottle / Glass', price: '₹4,285 / ₹925' },
      ],
    },
    {
      section: 'Wines — White',
      items: [
        { name: "Cadet d'Oc Chardonnay (French)", desc: 'Bottle / Glass', price: '₹4,885 / ₹925' },
        { name: "Jacob's Creek Chardonnay (Australian)", desc: 'Bottle / Glass', price: '₹3,885 / ₹925' },
        { name: 'Valdivieso Sauvignon Blanc (Chile)', desc: 'Bottle / Glass', price: '₹3,885 / ₹925' },
      ],
    },
    {
      section: 'Champagne & Sparkling',
      items: [
        { name: 'Dom Pérignon', desc: '', price: '₹43,000' },
        { name: 'Moët & Chandon', desc: '', price: '₹15,885' },
        { name: 'GH Mumm', desc: '', price: '₹11,885' },
        { name: 'Just Roberto Prosecco', desc: 'Bottle / Glass', price: '₹4,885 / ₹985' },
        { name: 'Chandon Brut', desc: '', price: '₹4,585' },
      ],
    },
    {
      section: 'Beer',
      items: [
        { name: 'Kingfisher Lager (Draught)', desc: '', price: '₹425' },
        { name: 'Hoegaarden', desc: '', price: '₹485' },
        { name: 'Corona', desc: '', price: '₹485' },
        { name: 'KF Ultra', desc: '', price: '₹445' },
        { name: 'Heineken', desc: '', price: '₹425' },
        { name: 'Budweiser', desc: '', price: '₹425' },
        { name: 'Breezers (Jamaican / Cranberry)', desc: '', price: '₹385' },
      ],
    },
    {
      section: 'Non-Alcoholic Beverages',
      items: [
        { name: 'Summer Mocktails', desc: 'See Cocktails tab for all 10 options', price: '₹465', veg: true },
        { name: 'Exotic Fresh Juices', desc: 'Apple Carrot & Beetroot / Apple & Orange / Watermelon / Orange', price: '₹445', veg: true },
        { name: 'Kombucha', desc: 'Strawberry / Mulberry / Gooseberry', price: '₹465', veg: true },
        { name: 'Smoothies', desc: 'Mango / Blueberry Banana / Peanut Butter', price: '₹465', veg: true },
        { name: 'Milk Shakes', desc: 'Biscoff / Chocolate Peanut Butter / Oreo / Ferrero Rocher', price: '₹425', veg: true },
        { name: 'Iced Teas', desc: 'Lemon / Peach / Strawberry & Basil / Passion Fruit', price: '₹345', veg: true },
        { name: 'Perrier Sparkling', desc: '', price: '₹485', veg: true },
        { name: 'Mineral Water', desc: '', price: '₹185', veg: true },
        { name: 'Energy Drink', desc: '', price: '₹385' },
      ],
    },
  ],
}
