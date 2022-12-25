import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'Dragon' ])

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return

        setCategories( [ newCategory,...categories ] )
        // setCategories( cat => [...cat, 'HOLA'] )
    }    

  return (
<>

        <div>GifExpertApp</div>


        <AddCategory 
            // setCategories = { setCategories } 
            onNewCategory = { (value) => onAddCategory(value) }
        />
        

            { categories.map( (category) => (

                    <GifGrid 
                        key={category} 
                        category={category}
                    />

                )
            
            )}
         
            


</>
)
}
