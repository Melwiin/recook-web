import StarRating from "./StarRating";


export default {
    title: 'Star Rating',
    component: StarRating,
    argTypes: {
        value: {control: {type: 'range', min: 0, max: 5, step: 0.2}}
    },
}

export const Primary = (args) => <StarRating {...args}/>

