// ─── CATEGORY IMAGE POOLS (4-5 Unsplash photos per category) ────────────────
// Picked deterministically per dish name so the same dish always shows
// the same photo and never flickers between renders.

function hashName(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0
  }
  return Math.abs(h)
}

function pickFromPool(pool, dishName) {
  return pool[hashName(dishName) % pool.length]
}

const CATEGORY_IMAGE_POOLS = {
  appetizers: [
    'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=700&q=80',
    'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=700&q=80',
    'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&q=80',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=80',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&q=80',
  ],
  soups: [
    'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&q=80',
    'https://images.unsplash.com/photo-1560684352-8497838a2229?w=700&q=80',
    'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=700&q=80',
    'https://images.unsplash.com/photo-1588566565463-180a5b4d4a9c?w=700&q=80',
  ],
  flatbread: [
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80',
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&q=80',
    'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=700&q=80',
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=700&q=80',
  ],
  mains: [
    'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=700&q=80',
    'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700&q=80',
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=80',
    'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=700&q=80',
    'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=700&q=80',
  ],
  desserts: [
    'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=700&q=80',
    'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&q=80',
    'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700&q=80',
    'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=700&q=80',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=700&q=80',
  ],
  cocktails: [
    'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=700&q=80',
    'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=700&q=80',
    'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=700&q=80',
    'https://images.unsplash.com/photo-1560508179-b2c9a3555772?w=700&q=80',
    'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=700&q=80',
  ],
  bar: [
    'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=700&q=80',
    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=700&q=80',
    'https://images.unsplash.com/photo-1547825407-2d060104b7f8?w=700&q=80',
    'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=700&q=80',
    'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=700&q=80',
  ],
}

// Keep a backward-compat single-value map for any direct imports (none currently)
const CATEGORY_IMAGES = Object.fromEntries(
  Object.entries(CATEGORY_IMAGE_POOLS).map(([k, pool]) => [k, pool[0]])
)



// Section-level overrides (matched by section title keyword)
const SECTION_IMAGES = {
  'bruschetta':  'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=700&q=80',
  'hummus':      'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=700&q=80',
  'salad':       'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=80',
  'soup':        'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&q=80',
  'toastie':     'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=700&q=80',
  'sandwich':    'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=700&q=80',
  'flatbread':   'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80',
  'pizza':       'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80',
  'pasta':       'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=700&q=80',
  'risotto':     'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=700&q=80',
  'mocktail':    'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=700&q=80',
  'mixology':    'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=700&q=80',
  'barman':      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=700&q=80',
  'classic coc': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=700&q=80',
  'beer cocktai':'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=700&q=80',
  'single malt': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=700&q=80',
  'blended scot':'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=700&q=80',
  'japanese':    'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=700&q=80',
  'vodka':       'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=700&q=80',
  'gin':         'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=700&q=80',
  'tequila':     'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=700&q=80',
  'cognac':      'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=700&q=80',
  'wine':        'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=700&q=80',
  'champagne':   'https://images.unsplash.com/photo-1547825407-2d060104b7f8?w=700&q=80',
  'sparkling':   'https://images.unsplash.com/photo-1547825407-2d060104b7f8?w=700&q=80',
  'beer':        'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=700&q=80',
  'non-alcoholi':'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=700&q=80',
  'sweet':       'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=700&q=80',
  'vegetarian m':'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=80',
  'non-vegetari':'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=700&q=80',
}

// Dish-specific images (keyword → url)
const DISH_IMAGES = {
  'lamb hummus':               'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=700&q=80',
  'sticky toffee pudding':     'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=700&q=80',
  'charred citrus chicken':    'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700&q=80',
  'whole roasted baby chicken':'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=700&q=80',
  'pear':                      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=80',
  'garlic prawn spaghetti':    'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=700&q=80',
  'siesta sipper':             'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=700&q=80',
  'restaurant cheese filo':       'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&q=80',
  'sesame falafel':            'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=700&q=80',
  'mushroom risotto':          'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=700&q=80',
  'broccoli risotto':          'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=700&q=80',
  'caesar':                    'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=700&q=80',
  'avocado toast':             'https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=700&q=80',
  'margherita':                'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&q=80',
  'jaggery pannacotta':        'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700&q=80',
  'warm chocolate tart':       'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&q=80',
  'french apple tart':         'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=700&q=80',
  'shepherd':                  'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=80',
  'glenfiddich':               'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=700&q=80',
  'hennessy':                  'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=700&q=80',
  'dom p':                     'https://images.unsplash.com/photo-1547825407-2d060104b7f8?w=700&q=80',
  'negroni':                   'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=700&q=80',
  'kingfisher':                'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=700&q=80',
}

/**
 * Returns the best matching image URL for a given dish name, section title, and tab key.
 */
export function getDishImage(dishName, sectionTitle, tabKey) {
  const nameLower = dishName.toLowerCase()
  // 1. Dish-level match
  for (const [k, url] of Object.entries(DISH_IMAGES)) {
    if (nameLower.includes(k)) return url
  }
  // 2. Section-level match
  const secLower = sectionTitle.toLowerCase()
  for (const [k, url] of Object.entries(SECTION_IMAGES)) {
    if (secLower.includes(k)) return url
  }
  // 3. Tab-level pool fallback — deterministic pick so same dish = same photo
  const pool = CATEGORY_IMAGE_POOLS[tabKey] || CATEGORY_IMAGE_POOLS.appetizers
  return pickFromPool(pool, dishName)
}

/**
 * Returns badge label and inline style string for a given item.
 */
export function getDishBadge(veg, tabKey) {
  if (veg) return { label: 'Vegetarian', style: { background: 'rgba(76,175,80,0.9)', color: '#fff' } }
  if (tabKey === 'cocktails') return { label: 'Cocktail', style: { background: 'rgba(201,147,58,0.9)', color: '#1C1208' } }
  if (tabKey === 'bar') return { label: 'Bar', style: { background: 'rgba(139,106,62,0.9)', color: '#fff' } }
  return { label: 'Non-Veg', style: { background: 'rgba(183,28,28,0.9)', color: '#fff' } }
}
