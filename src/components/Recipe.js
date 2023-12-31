import Styles from './Recipe.module.css'

const Recipe = (props) =>{

    return <div className={Styles.recipe}>
        <h1>{props.recipeList.recipe.label}</h1>
        <ol>
            {(props.recipeList.recipe.ingredients).map(list=> <li>{list.text}</li>)}
        </ol>
        <img src={props.recipeList.recipe.image} className={Styles.image}/>
        <h3>{props.recipeList.recipe.calories}k/cal</h3>
    </div>
}

export default Recipe