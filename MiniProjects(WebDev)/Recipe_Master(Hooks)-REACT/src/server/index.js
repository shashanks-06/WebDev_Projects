import { Server, Model } from "miragejs";

export default () => {
  return new Server({
    models: {
      recipe: Model.extend()
    },
    seeds(server) {
      server.db.loadData({
        recipes: [
          {
            id: "01",
            title: "Strawberry Cheesecake",
            description:
              "This strawberry cheesecake is the summer dessert dreams are made of.",
            keywords: [
              { id: "k01", label: "cakes" },
              { id: "k02", label: "dessert" }
            ],
            instructions:
              "1. Brush the inside of a 20cm/8in springform tin with the sunflower oil, and line the base with a disc of baking parchment.\n\n2. Put the digestive biscuits into a sealable freezer bag. Push all the air out and seal the bag. Crush the biscuits with a rolling pin, until they are reduced to sand-like crumbs.\n\n3. Melt the butter in a large saucepan. Stir in the biscuit crumbs and cinnamon. Press the crumbs into the bottom of the tin. Chill in the refrigerator for 30 minutes.\n\n4. Chop 150g/5oz of the strawberries in half from top to bottom and arrange around the edge of the prepared tin, cut side-up. Chop the remaining berries into small pieces.\n\n5. Melt the chocolate in a heatproof bowl, either over a pan of simmering water, making sure the bowl doesn’t touch the water, or in a microwave.\n\n6. Beat together the cream cheese, vanilla, lemon zest and honey in a mixing bowl. Stir in the chopped strawberries.\n\n7. In another bowl, whisk the double cream until it holds a floppy peak.\n\n8. Fold the melted chocolate into the cream cheese mixture, followed by the double cream. Add more honey if needed.\n\n9.Spoon the filling into the tin, being careful not to move the strawberries on the edge. Spread level with a palette knife or the back of a spoon, cover with cling film and chill overnight, until firm.\n\n10.Carefully remove the cheesecake from the tin and put on a serving plate. Slice or quarter extra strawberries to arrange on top.",
            ingredients: [
              {
                id: "ig01",
                label: "2 tsp sunflower oil"
              },
              {
                id: "ig02",
                label: "200g digestive biscuits"
              },
              {
                id: "ig03",
                label: "100g unsalted butter"
              },
              {
                id: "ig04",
                label: "1.5 tsp ground cinnamon"
              },
              {
                id: "ig05",
                label: "100g white chocolate, roughly chopped"
              },
              {
                id: "ig06",
                label: "400g strawberries, trimmed"
              },
              {
                id: "ig07",
                label: "300g full fat cream cheese"
              },
              {
                id: "ig08",
                label: "1 tsp vanilla extract"
              },
              {
                id: "ig09",
                label: "1 tbsp maple syrup"
              },
              {
                id: "ig10",
                label: "200ml double cream"
              }
            ],
            dishType: "Vegetarian",
            recipeImg:
              "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/no-bake_strawberry_30276_16x9.jpg"
          },
          {
            id: "02",
            title: "Chicken Parmigiana",
            description:
              "Chicken parmagiana is the easy Italian-American chicken bake that's perfect for midweek cooking. ",
            keywords: [
              { id: "k01", label: "italian" },
              { id: "k02", label: "chicken" }
            ],
            instructions:
              "1. Heat 1 tablespoon of the oil in a saucepan over a medium heat and fry the garlic until soft. Add the tomatoes and gently simmer for 30 minutes.\n\n2. Preheat the oven to 220C/200C Fan/Gas 7. Lay the chicken breasts in between two sheets of baking paper and bash with a meat tenderiser or rolling pin, until flattened slightly.\n\n3.Season the breadcrumbs with salt in a shallow bowl or plate. Put the egg in another shallow bowl. Coat the chicken in the egg and then in the breadcrumbs.\n\n4. Heat the remaining oil and the butter in a frying pan over a medium–high heat. Add the chicken and cook for 5 minutes, or until crisp, turning halfway through.\n\n5.Put half of the tomato sauce in a shallow ovenproof dish. Lay the chicken on top, scatter with the chilli flakes and cover with the remaining sauce. Top with the mozzarella and cover with a lid or foil. Bake for 10 minutes.\n\n6.Uncover the chicken and bake for a further 8–10 minutes, depending on the thickness of the breast, until cooked through. Top with the basil and serve.",
            ingredients: [
              {
                id: "ig01",
                label: "2 tbsp olive oil"
              },
              {
                id: "ig02",
                label: "2 garlic cloves, crushed"
              },
              {
                id: "ig03",
                label: "400g tin chopped tomatoes"
              },
              {
                id: "ig04",
                label: "4 chicken breasts"
              },
              {
                id: "ig05",
                label: "500g panko breadcrumbs"
              },
              {
                id: "ig06",
                label: "1 free-range egg, beaten"
              },
              {
                id: "ig07",
                label: "25g butter"
              },
              {
                id: "ig08",
                label: "pinch dried chilli flakes"
              },
              {
                id: "ig09",
                label: "100g mozzarella cheese"
              },
              {
                id: "ig10",
                label: "salt"
              }
            ],
            dishType: "Poultry",
            recipeImg:
              "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/chicken_parmigiana_40336_16x9.jpg"
          }
        ]
      });
    },
    routes() {
      this.namespace = "api";
      this.get("/recipes", (schema, request) => schema.db.recipes);
      this.get("/recipe.id/:id", (schema, request) => {
        let id = request.params.id;
        return schema.recipes.find(id);
      });
      this.get("/recipe.title", (schema, request) => schema.recipes.all());
      this.get("/recipe.title/:title", (schema, request) => {
        let title = request.params.title;
        return schema.recipes.where(recipe =>
          recipe.title.toLowerCase().includes(title.toLowerCase())
        );
      });
      this.post("/recipes", (schema, request) => {
        return schema.recipes.create(JSON.parse(request.requestBody));
      });
    }
  });
};
