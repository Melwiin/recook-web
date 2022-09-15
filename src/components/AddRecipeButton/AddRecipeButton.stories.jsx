import AddRecipeButton from "./AddRecipeButton";

export default {
    title: "AddRecipeButton",
    component: AddRecipeButton,
    argTypes: {
        disabled: {control: "radio", options: [true, false]}
    }
};

export const Primary = (args) => <AddRecipeButton {...args}/>