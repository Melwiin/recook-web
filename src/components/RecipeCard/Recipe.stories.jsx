import RecipeCard from "./RecipeCard"


export default {
    title: 'Recipe Card',
    component: RecipeCard,
    argTypes: {
        recipeDescription: {control: 'text'},
        recipeTitle: {control: 'text'},
        imageUri: {control: 'text'},
        stars: {control: {type: 'range', min: 0, max: 5, step: 0.2}}
    },
}

export const Primary = (args) => <RecipeCard {...args}/>
