export interface Product {
  id: number;
  category_id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  link: string;
}

export const products: Product[] = [
  {
    id: 0,
    name: 'Sour milk drink Tan Rudnensky 0,5l',
    category_id: 0,
    price: 310,
    description: 'Modern life requires each of us more and more energy for everyday efforts at work, at school, at home, and even on vacation. TAN - has unique therapeutic and prophylactic properties. - useful for the intestines, - liver - actively reduces weight - normalizes appetite - increases sexual activity - treats cardiovascular diseases - relieves hangover.',
    rating: 2,
    link: 'http://foodmood.kz/ru/astana/catalog/item/23467-kislomolochnyi_napitok_tan_rudnenskii_1_5l',
    image: 'assets/images/tan_rudnenskii_0_5__ru.jpg',
  },
  {
    id: 1,
    name: 'Sour cream Motherland',
    category_id: 0,
    price: 699,
    description: 'The most delicious Rodina sour cream, processed using modern technology from the highest quality milk, in which all the useful substances and vitamins necessary for your health are stored, which are a rich source of energy.',
    rating: 3,
    link: 'http://foodmood.kz/ru/astana/catalog/item/180690-smetana_rodina_15_400gr',
    image: 'assets/images/smetana_rodina.jpg', 
  },
  {
    id: 2,
    name: 'Milk Rodina 3.2% formula 1l.',
    category_id: 0,
    price: 299,
    description: 'Natural pasteurized milk "Rodina", processed using modern technology from the highest quality milk, which stores all the nutrients and vitamins necessary for your health, which are a rich source of energy. The companys quality management system is certified for compliance with the standard of the ISO 9001-2000 series.',
    rating: 4,
    link: 'http://foodmood.kz/ru/astana/catalog/item/180636-moloko_rodina_3_2_f_p_1l_',
    image: 'assets/images/moloko_rodinajpg.jpg',
  },
  {
    id: 3,
    name: 'Weight butter',
    category_id: 0,
    price: 3800,
    description: 'Classic butter made in accordance with GOST in Russia. Butter is widely used to prepare a variety of dishes, significantly improving their nutritional value and taste. This oil is made from fresh, high-quality cream, has a delicate taste and contains multi-vitamins (A, B, E) and useful substances. Butter is very healthy.',
    rating: 5,
    link: 'http://foodmood.kz/ru/astana/catalog/item/23477-slivochnoe_maslo_vesovoe',
    image: 'assets/images/butter.jpg', 
  },
  {
    id: 4,
    name: 'Kurt',
    category_id: 0,
    price: 573.34,
    description: 'This dairy product called Kurt is known in the territory of Central Asia since ancient times. Kurt is a cross between cottage cheese and cheese, and they get it by squeezing out the salty curd mass, then the suzma is given the final shape in the form of balls or pyramids.',
    rating: 5,
    link: 'http://foodmood.kz/ru/astana/catalog/item/23544-kurt',
    image: 'assets/images/kurt2.jpg', 
  },
  {
    id: 5,
    name: 'Curd Zenchenko 5% 200 g.',
    category_id: 0,
    price: 785,
    description: 'This dairy product called Kurt is known in the territory of Central Asia since ancient times. Kurt is a cross between cottage cheese and cheese, and they get it by squeezing out the salty curd mass, then the suzma is given the final shape in the form of balls or pyramids.',
    rating: 5,
    link: 'http://foodmood.kz/ru/astana/catalog/item/180690-smetana_rodina_15_400gr',
    image: 'assets/images/tvorog_zinchenko2.jpg',
  },

  //Овощи, фрукты
  {
    id: 6,
    name: 'White cabbage',
    category_id: 1,
    price: 32,
    description: 'White cabbage helps to eliminate toxins and excess fluid from the body due to the content of vitamins C1, B1, B2, PP, carotene, minerals, potassium. Fresh cabbage juice is used to treat stomach ulcers and gastritis. Cabbage is recommended for patients with diabetes and those suffering from overweight due to the low content of carbohydrates.',
    rating: 4.23,
    link: 'http://foodmood.kz/ru/astana/catalog/item/22369-kapusta_belokochannaya',
    image: 'assets/images/kapusta.jpg',
  },
  {
    id: 7,
    name: 'Bananas',
    category_id: 1,
    price: 52,
    description: 'Medium sized bananas covered with a thin yellow peel. They have a sweet, fragrant flesh. It is recommended to use as an independent delicacy or to use for the preparation of desserts and, interestingly, meat dishes',
    rating: 4.78,
    link: 'http://foodmood.kz/ru/astana/catalog/item/22488-banany',
    image: 'assets/images/banan.jpg',
  },
  {
    id: 8,
    name: 'Garnet',
    category_id: 1,
    price: 6.99,
    description: 'Small bright red fruits with a thin peel and juicy burgundy grains. It is recommended to use as an independent delicacy, and also to use for cooking sauces, salads and even for pickling meat. Pomegranate is rich in vitamins and antioxidants; This fruit is especially useful for people suffering from anemia and high blood pressure.',
    rating: 2.78,
    link: 'http://foodmood.kz/ru/astana/catalog/item/22489-granat',
    image: 'assets/images/granat.jpg',
  },
  {
    id: 9,
    name: 'Raw Cucumbers',
    category_id: 1,
    price: 785,
    description: 'Cucumbers are rich in complex organic substances, which play an important role in the metabolism. These substances promote the absorption of other foods and improve digestion. They stimulate the appetite. Everyone knows that if you add a little grated or finely chopped fresh cucumber to the okroshka, then this dish immediately acquires a refreshing taste.',
    rating: 2.78,
    link: 'http://foodmood.kz/ru/astana/catalog/item/22393-ogurcy_rava',
    image: 'assets/images/ogures.jpg',
  },
  {
    id: 10,
    name: 'Avocado',
    category_id: 1,
    price: 6.99,
    description: 'Pear-shaped fruits covered with hard green skin. Inside there is a soft buttery flesh with a nutty aroma and a delicate taste reminiscent of a walnut. Avocados are eaten mainly in raw form. Interestingly, the avocado is also called the "alligator pear" - apparently, for the similarities with the crocodile and pear at the same time.',
    rating: 2.78,
    link: 'http://foodmood.kz/ru/astana/catalog/item/22471-avokado',
    image: 'assets/images/avacado.jpg',
  },



  //Крупы, приправы 
  {
    id: 11,
    name: 'Sugar sand weight',
    category_id: 2,
    price: 9.99,
    description: 'In cooking, sugar serves as a seasoning for many cold, first, second and sweet dishes and flour products. It is added to borscht, okroshka, bot vignette, sweet fruit and berry soups; carrot casserole, stuffed vegetables (peppers, zucchini, etc.); cereals (millet, rice, semolina), casseroles, puddings, dishes from cottage cheese, flour and pasta; sauces milk, egg sweet, mushroom sweet and sour; vegetable marinade with tomato and without tomato, vinaigrette sauce, sour cream horseradish sauce, mustard dressing; salads, stewed fruits, jelly, creams, mousses, jellies and confectionery. Sugar is introduced into these dishes in the process of making them, without prior heat treatment.',
    rating: 4.78,
    link: 'http://foodmood.kz/ru/astana/catalog/item/22846-sahar_pesok_ves',
    image: 'assets/images/cahor.jpg',
  },
 
  {
    id: 12,
    name: 'Jayma "Tsesna" 300gr',
    category_id: 2,
    price: 8.26,
    description: 'For the production of this product used equipment that allows you to roll out the dough, as with manual rolling.',
    rating: 3.52,
    link: 'http://foodmood.kz/ru/astana/catalog/item/22936-zhaima_quot_cesna_quot_300gr',
    image:'assets/images/zh.png',
  },
  {
    id: 13,
    name: 'Flour "Tsesna" 1kg premium',
    category_id: 2,
    price: 359,
    description: 'The main purpose of flour is for baking bread. In addition, it is used for baking pancakes, pies, in the manufacture of ravioli, bakery, confectionery (cakes, muffins, cookies, waffles, gingerbread cookies) and pasta, animal feed. Also, flour is used for breading, for example, fish or meatballs.',
    rating: 3.52,
    link: 'http://foodmood.kz/ru/astana/catalog/item/22881-muka_quot_cesna_quot_1kg_v_s',
    image: 'assets/images/muka.jpg',
  },
  {
    id: 14,
    name: 'Rice Cesna long-grain 800g',
    category_id: 2,
    price: 12.32,
    description: 'Rice familiar to us has a high content of carbohydrates, which provides half the human needs for calories, and also has a low protein content. In rice, proteins of only plant origin and amino acids in proteins are more balanced. The digestibility of the body of rice is very high, and therefore protein is used in many diets. It absorbs toxins like a sponge and removes them from the body.',
    rating: 3.52,
    link: 'http://foodmood.kz/ru/astana/catalog/item/48706-ris_cesna_dlinozernyi_800gr',
    image: 'assets/images/rice.jpg',
  },
  {
    id: 15,
    name: 'Buckwheat "Tsesna" buckwheat 800gr',
    category_id: 2,
    price: 120,
    description: 'Buckwheat is a tasty, healthy and nutritious product. Buckwheat is considered one of the best dietary products. Buckwheat has no affinity for wheat and is not even a grain (although it seems to be used). This is a triangular seed from a rhubarb family.',
    rating: 3.52,
    link: 'http://foodmood.kz/ru/astana/catalog/item/48076-krupa_quot_cesna_quot_grechnevaya_800gr',
    image: 'assets/images/grech1.jpg',
  },
  //drinks

  {
    id: 16,
    name: 'TASSAY without gas 0.5l',
    category_id: 3,
    price: 102.32,
    description: 'Tassay is a unique natural drinking water with a balanced content of mineral salts, which play an important role in the life of the body. Tassai water has a wonderful refreshing taste, is ideal for cooking and baby food, it dissolves baby mixes well. Approved by the Kazakh Academy of Nutrition for Young Children.',
    rating: 2.52,
    link: 'http://foodmood.kz/ru/astana/catalog/item/24133-tassay_bez_gaza_0_5l',
    image:'assets/images/tassay.jpg',
  },
  {
    id: 17,
    name: 'TASSAY 5л',
    category_id: 3,
    price: 200,
    description: 'Natural drinking water is water produced from natural sources (from wells, springs, rivers, lakes, glaciers), which requires only minimal treatment, and is not obtained from a centralized drinking water supply system, packaged in a tank. Bottled drinking water is intended for everyday use, for quenching thirst and cooking. Home food baskets',
    rating: 2.52,
    link: 'http://foodmood.kz/ru/astana/catalog/item/24136-tassay_5l',
    image: 'assets/images/tass.jpg',
  },
  {
    id: 18,
    name: 'Borjomi 0.5 (glass)',
    category_id: 3,
    price: 400,
    description: 'Mineral water Borjomi, which, thanks to the unique complex of minerals of volcanic origin, which is part of Borjomi, this natural mineral water acts as a "shower from the inside" and perfectly cleanses the body. In addition, it enhances immunity and is effective in the prevention and treatment of diseases of the digestive system and metabolism. Borjomi water is also recommended for use in bronchial diseases by inhalation. According to experts in food hygiene, due to the current adverse environmental conditions and unbalanced nutrition, a person is “acidic on the outside and acidic on the inside”, that is, the acid-base balance (pH) of his body is shifted to the acidic side. Regular use of Borjomi allows you to normalize the pH level, as well as create optimal conditions for metabolic processes in the body. Borjomi also improves bowel function and helps to eliminate toxins Country of origin: Georgia',
    rating: 2.52,
    link: 'http://foodmood.kz/ru/astana/catalog/item/24154-borzhomi_0_5_steklo_',
    image:'assets/images/borj.jpg',
  },
  {
    id: 19,
    name: 'Mineral water "nabeglavi" s / b 500ml',
    category_id: 3,
    price: 350,
    description: 'Nabeghlavi Water No. 1 in Georgia is famous for its benefits. This is a natural, natural, carbonated, ecologically pure water from real sources. It is saturated with minerals and trace elements, which have a beneficial effect on the body.',
    rating: 2.52,
    link: 'http://foodmood.kz/ru/astana/catalog/item/145477-voda_quot_nabeglavi_quot_mineralnaya_s_b_500ml_',
    image:'assets/images/water.jpg',
  },
  {
    id: 20,
    name: 'Perrier, natural, canteen, sparkling mineral water o, 33 l.',
    category_id: 3,
    price: 150,
    description: 'Perrier (Perrier) - an elite trademark No. 1 among sparkling mineral waters. One of the most famous brands in the world. Perriers special unique taste is due to the strength of the gas bubbles, as well as the very low sodium content. The uniqueness of Perrier water is that it is naturally mineralized and naturally carbonated. The source of sparkling water Perrier is located in southwest France, in a village called Vergese near the town of Nimes, once - one of the magnificent cities of the Roman Empire',
    rating: 2.52,
    link: 'http://foodmood.kz/ru/astana/catalog/item/164927-perrier_prirodnaya_stolovaya_gazirovannaya_mineralnaya_voda_o_33_l_',
    image:'assets/images/cwater.jpg',
  },
  

];








