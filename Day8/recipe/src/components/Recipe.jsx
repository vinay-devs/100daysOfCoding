import React,{useEffect, useState} from "react"
import "../index.css"

function Recipe(){
    const [items,setItems]=useState([])
    const [query,setQuery]=useState("")

    const fetchRecipe =async()=>{
        const data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then((response)=>response.json())
        setItems(data.meals)
    }
    useEffect(()=>{
        fetchRecipe()
    },[])
    console.log(items);
    
    
    
    return(
        <div>
        <div className="searchBar">
            <input type="text" name="searchBar" onChange={(e) => setQuery(e.target.value)}
					value={query} placeholder="Search for meal"></input>
        </div>
        <div className="grid_items">
        {items.map((recipe) => (
						<div className="item" key={recipe.idMeal}>
							<div className="image">
								<img src={recipe.strMealThumb} />
							</div>
							<div className="info">
								<h5>{recipe.strCategory}</h5>
								<h3>{recipe.strMeal}</h3>
								<span>{recipe.strTags}</span>
							</div>
							<div className="modal" id={recipe.idMeal} >
								<div className="content-modal">
									<p>{recipe.strInstructions}</p>
								</div>
							</div>
						</div>
					))
        }
        </div>
        </div>
    )
}
export default Recipe